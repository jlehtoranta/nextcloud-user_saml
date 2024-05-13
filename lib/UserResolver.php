<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\User_SAML;

use OCA\User_SAML\Exceptions\NoUserFoundException;
use OCP\IUser;
use OCP\IUserManager;

class UserResolver {
	/** @var IUserManager */
	private $userManager;

	public function __construct(IUserManager $userManager) {
		$this->userManager = $userManager;
	}

	/**
	 * @throws NoUserFoundException
	 */
	public function findExistingUserId(string $rawUidCandidate, bool $force = false): string {
		if ($force) {
			$this->ensureUser($rawUidCandidate);
		}
		if ($this->userManager->userExists($rawUidCandidate)) {
			return $rawUidCandidate;
		}
		try {
			$sanitized = $this->sanitizeUserIdCandidate($rawUidCandidate);
		} catch (\InvalidArgumentException $e) {
			$sanitized = '';
		}
		if ($this->userManager->userExists($sanitized)) {
			return $sanitized;
		}
		throw new NoUserFoundException('User' . $rawUidCandidate . ' not valid or not found');
	}

	/**
	 * @throws NoUserFoundException
	 */
	public function findExistingUser(string $rawUidCandidate): IUser {
		$uid = $this->findExistingUserId($rawUidCandidate);
		$user = $this->userManager->get($uid);
		if ($user === null) {
			throw new NoUserFoundException('User' . $rawUidCandidate . ' not valid or not found');
		}
		return $user;
	}

	public function userExists(string $uid, bool $force = false): bool {
		try {
			$this->findExistingUserId($uid, $force);
			return true;
		} catch (NoUserFoundException $e) {
			return false;
		}
	}

	protected function ensureUser($search) {
		$this->userManager->search($search);
	}

	/**
	 * @throws \InvalidArgumentException
	 */
	protected function sanitizeUserIdCandidate(string $rawUidCandidate): string {
		//FIXME: adjusted copy of LDAP's Access::sanitizeUsername(), should go to API
		$sanitized = trim($rawUidCandidate);

		// Transliteration to ASCII
		$transliterated = @iconv('UTF-8', 'ASCII//TRANSLIT', $sanitized);
		if ($transliterated !== false) {
			// depending on system config iconv can work or not
			$sanitized = $transliterated;
		}

		// Replacements
		$sanitized = str_replace(' ', '_', $sanitized);

		// Every remaining disallowed characters will be removed
		$sanitized = preg_replace('/[^a-zA-Z0-9_.@-]/u', '', $sanitized);

		if ($sanitized === '') {
			throw new \InvalidArgumentException('provided name template for username does not contain any allowed characters');
		}

		return $sanitized;
	}
}
