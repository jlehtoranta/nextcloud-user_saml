<?php
/**
 * @copyright Copyright (c) 2017 Lukas Reschke <lukas@statuscode.ch>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\TableNode;
use GuzzleHttp\Cookie\CookieJar;

class FeatureContext implements Context {
	/** @var \GuzzleHttp\Message\Response */
	private $response;
	/** @var \GuzzleHttp\Client */
	private $client;
	/** @var array */
	private $changedSettings = [];

	private const ENV_CONFIG_FILE = __DIR__ . '/../../../../../../config/env.config.php';
	private const MAIN_CONFIG_FILE = __DIR__ . '/../../../../../../config/config.php';
	private CookieJar $cookieJar;

	public function __construct() {
		date_default_timezone_set('Europe/Berlin');
	}

	/** @BeforeScenario */
	public function before() {
		$this->cookieJar = new CookieJar();
		$this->client = new \GuzzleHttp\Client([
			'version' => 2.0,
			'cookies' => $this->cookieJar,
			'verify' => false,
			'allow_redirects' => [
				'referer' => true,
				'track_redirects' => true,
			],
		]);
	}

	/** @AfterScenario */
	public function after() {
		$users = [
			'student1',
		];

		foreach ($users as $user) {
			shell_exec(
				sprintf(
					'%s %s user:delete %s',
					PHP_BINARY,
					__DIR__ . '/../../../../../../occ',
					$user
				)
			);
		}

		$groups = [
			'Astrophysics',
			'SAML_Astrophysics',
			'Students',
			'SAML_Students'
		];

		foreach ($groups as $group) {
			shell_exec(
				sprintf(
					'%s %s group:delete "%s"',
					PHP_BINARY,
					__DIR__ . '/../../../../../../occ',
					$group
				)
			);
		}

		if (file_exists(self::ENV_CONFIG_FILE)) {
			unlink(self::ENV_CONFIG_FILE);
		}

		foreach ($this->changedSettings as $setting) {
			shell_exec(
				sprintf(
					'%s %s config:app:delete user_saml %s',
					PHP_BINARY,
					__DIR__ . '/../../../../../../occ',
					$setting
				)
			);
		}

		shell_exec(
			sprintf(
				'%s %s saml:config:delete 1',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
			)
		);

		$this->changedSettings = [];
	}

	/**
	 * @Given The setting :settingName is set to :value
	 *
	 * @param string $settingName
	 * @param string $value
	 */
	public function theSettingIsSetTo($settingName,
		$value) {
		if (in_array($settingName, [
			'type',
			'general-require_provisioned_account',
			'general-allow_multiple_user_back_ends',
			'general-use_saml_auth_for_desktop',
			'localGroupsCheckForMigration',
		])) {
			$this->changedSettings[] = $settingName;
			shell_exec(
				sprintf(
					'%s %s config:app:set --value="%s" user_saml %s',
					PHP_BINARY,
					__DIR__ . '/../../../../../../occ',
					$value,
					$settingName
				)
			);
			return;
		}

		shell_exec(
			sprintf(
				'%s %s saml:config:set --"%s"="%s" %d',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$settingName,
				$value,
				1
			)
		);
	}

	/**
	 * @When I send a GET request to :url
	 */
	public function iSendAGetRequestTo($url) {
		$this->response = $this->client->request(
			'GET',
			$url,
			[
				'headers' => [
					'Accept' => 'text/html',
				],
				'query' => [
					'idp' => 1
				],
			]
		);
	}

	/**
	 * @Then I should be redirected to :targetUrl
	 *
	 * @param string $targetUrl
	 * @throws InvalidArgumentException
	 */
	public function iShouldBeRedirectedTo($targetUrl) {
		$redirectHeader = $this->response->getHeader('X-Guzzle-Redirect-History');
		$lastUrl = $redirectHeader[count($redirectHeader) - 1];
		$url = parse_url($lastUrl);
		$targetUrl = parse_url($targetUrl);
		$paramsToCheck = [
			'scheme',
			'host',
			'path',
		];

		// Remove everything after a comma in the URL since cookies are passed there
		[$url['path']] = explode(';', $url['path']);

		foreach ($paramsToCheck as $param) {
			if ($targetUrl[$param] !== $url[$param]) {
				throw new InvalidArgumentException(
					sprintf(
						'Expected %s for parameter %s, got %s',
						$targetUrl[$param],
						$param,
						$url[$param]
					)
				);
			}
		}
	}

	/**
	 * @Then I send a POST request to :url with the following data
	 *
	 * @param string $url
	 * @param TableNode $table
	 */
	public function iSendAPostRequestToWithTheFollowingData($url,
		TableNode $table) {
		$postParams = $table->getColumnsHash()[0];
		$this->response = $this->client->request(
			'POST',
			$url,
			[
				'form_params' => $postParams,
			]
		);
	}

	/**
	 * @Then The response should be a SAML redirect page that gets submitted
	 */
	public function theResponseShouldBeASamlRedirectPageThatGetsSubmitted() {
		$responseBody = $this->response->getBody();
		$domDocument = new DOMDocument();
		$domDocument->loadHTML($responseBody);
		$xpath = new DOMXpath($domDocument);
		$postData = [];
		$inputElements = $xpath->query('//input');
		if (is_object($inputElements)) {
			/** @var DOMElement $node */
			foreach ($inputElements as $node) {
				$postData[$node->getAttribute('name')] = $node->getAttribute('value');
			}
		}

		$this->response = $this->client->request(
			'POST',
			'http://localhost:8080/index.php/apps/user_saml/saml/acs',
			[
				'form_params' => $postData,
			]
		);
	}

	/**
	 * @Then The user value :key should be :value
	 *
	 * @param string $key
	 * @param string $value
	 * @throws UnexpectedValueException
	 */
	public function theUserValueShouldBe(string $key, string $value): void {
		$this->response = $this->client->request(
			'GET',
			'http://localhost:8080/ocs/v1.php/cloud/user',
			[
				'headers' => [
					'OCS-APIRequest' => 'true',
				],
				'query' => [
					'format' => 'json',
				]
			]
		);

		$responseArray = (json_decode($this->response->getBody(), true))['ocs'];

		if (!isset($responseArray['data'][$key]) || count((array)$responseArray['data'][$key]) === 0) {
			if (strpos($key, '.') !== false) {
				// support nested arrays, specify the key seperated by "."s, e.g. quota.total
				$keys = explode('.', $key);
				if (isset($responseArray['data'][$keys[0]])) {
					$source = $responseArray['data'];
					foreach ($keys as $subKey) {
						if (isset($source[$subKey])) {
							$source = $source[$subKey];
							if (!is_array($source)) {
								$actualValue = (string)$source;
							}
						} else {
							break;
						}
					}
				}
			}

			$responseArray['data'][$key] = '';
		}

		$actualValue = $actualValue ?? $responseArray['data'][$key];
		if (is_array($actualValue)) {
			// transform array to string, ensuring values are in the same order
			$value = explode(',', $value);
			$value = array_map('trim', $value);
			sort($value);
			$value = implode(',', $value);

			sort($actualValue);
			$actualValue = implode(',', $actualValue);
		}

		if ($actualValue !== $value) {
			throw new UnexpectedValueException(
				sprintf(
					'Expected %s as value but got %s',
					$value,
					$actualValue
				)
			);
		}
	}

	/**
	 * @Given A local user with uid :uid exists
	 * @param string $uid
	 */
	public function aLocalUserWithUidExists($uid) {
		shell_exec(
			sprintf(
				'OC_PASS=password %s %s user:add %s --display-name "Default displayname of '.$uid.'" --password-from-env',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$uid
			)
		);
	}

	/**
	 * @Then The last login timestamp of :uid should not be empty
	 *
	 * @param string $uid
	 * @throws UnexpectedValueException
	 */
	public function theLastLoginTimestampOfShouldNotBeEmpty($uid) {
		$response = shell_exec(
			sprintf(
				'OC_PASS=password %s %s user:lastseen %s',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$uid
			)
		);

		$response = trim($response);
		$expectedStringStart = "$uid`s last login: ";
		if (substr($response, 0, strlen($expectedStringStart)) !== $expectedStringStart) {
			throw new UnexpectedValueException("Expected last login message, found instead '$response'");
		}
	}

	/**
	 * @Given The environment variable :key is set to :value
	 */
	public function theEnvironmentVariableIsSetTo($key, $value) {
		// Attention, this works currently for one value only. It generates an
		// extra config file that injects the value to $_SERVER (as used in
		// `SAMLController::login()`), so that it stays across requests in PHPs
		// built-in server.
		$envConfigPhp = <<<EOF
<?php
\$_SERVER["$key"] = "$value";
EOF;
		file_put_contents(self::ENV_CONFIG_FILE, $envConfigPhp);
	}

	/**
	 * @Given /^the group "([^"]*)" should exists$/
	 */
	public function theGroupShouldExists(string $gid): void {
		$response = shell_exec(
			sprintf(
				'%s %s group:info --output=json "%s"',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$gid
			)
		);

		$responseArray = json_decode($response, true);
		if (!isset($responseArray['groupID']) || $responseArray['groupID'] !== $gid) {
			throw new UnexpectedValueException('Group does not exist');
		}
	}

	/**
	 * @When /^I execute the background job for class "([^"]*)"$/
	 */
	public function iExecuteTheBackgroundJobForClass(string $className) {
		$response = shell_exec(
			sprintf(
				'%s %s background-job:list --output=json --class %s',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$className
			)
		);

		$responseArray = json_decode($response, true);
		if (count($responseArray) === 0) {
			throw new UnexpectedValueException('Background job was not enqueued');
		}

		foreach ($responseArray as $jobDetails) {
			$jobID = (int)$jobDetails['id'];
			$response = shell_exec(
				sprintf(
					'%s %s background-job:execute --force-execute %d',
					PHP_BINARY,
					__DIR__ . '/../../../../../../occ',
					$jobID
				)
			);
		}
	}

	/**
	 * @Then /^the group backend of "([^"]*)" should be "([^"]*)"$/
	 */
	public function theGroupBackendOfShouldBe(string $groupId, string $backendName) {
		$response = shell_exec(
			sprintf(
				'%s %s group:info --output=json "%s"',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$groupId
			)
		);

		$responseArray = json_decode($response, true);
		if (!isset($responseArray['groupID']) || $responseArray['groupID'] !== $groupId) {
			throw new UnexpectedValueException('Group does not exist');
		}
		if (!in_array($backendName, $responseArray['backends'], true)) {
			throw new UnexpectedValueException('Group does not belong to this backend');
		}
	}

	/**
	 * @Given /^Then the group backend of "([^"]*)" must not be "([^"]*)"$/
	 */
	public function thenTheGroupBackendOfMustNotBe(string $groupId, string $backendName) {
		try {
			$this->theGroupBackendOfShouldBe($groupId, $backendName);
			throw new UnexpectedValueException('Group does belong to this backend');
		} catch (UnexpectedValueException $e) {
			if ($e->getMessage() !== 'Group does not belong to this backend') {
				throw $e;
			}
		}
	}

	/**
	 * @Given /^the local group "([^"]*)" is created$/
	 */
	public function theLocalGroupIsCreated(string $groupName) {
		shell_exec(
			sprintf(
				'%s %s group:add "%s"',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$groupName
			)
		);
	}



	/**
	 * @Given /^I send a GET request with requesttoken to "([^"]*)"$/
	 */
	public function iSendAGETRequestWithRequesttokenTo($url) {
		$requestToken = substr(
			preg_replace(
				'/(.*)data-requesttoken="(.*)">(.*)/sm',
				'\2',
				$this->response->getBody()->getContents()
			),
			0,
			89
		);
		$this->response = $this->client->request(
			'GET',
			$url,
			[
				'query' => [
					'requesttoken' => $requestToken
				],
			]
		);
	}

	/**
	 * @Given /^the cookies are cleared$/
	 */
	public function theCookiesAreCleared(): void {
		$this->cookieJar->clear();
	}

	/**
	 * @Given /^the user "([^"]*)" is added to the group "([^"]*)"$/
	 */
	public function theUserIsAddedToTheGroup(string $userId, string $groupId) {
		shell_exec(
			sprintf(
				'%s %s group:adduser "%s" "%s"',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$groupId,
				$userId
			)
		);
	}

	/**
	 * @Given /^I expect no background job for class "([^"]*)"$/
	 */
	public function iExpectNoBackgroundJobForClassOCAUser_SAMLJobsMigrateGroups(string $className) {
		$response = shell_exec(
			sprintf(
				'%s %s background-job:list --output=json --class %s',
				PHP_BINARY,
				__DIR__ . '/../../../../../../occ',
				$className
			)
		);

		$responseArray = json_decode($response, true);
		if (count($responseArray) > 0) {
			throw new UnexpectedValueException('Background job axctuaslly was enqueued!');
		}
	}
}
