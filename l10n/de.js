OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Dieses Nutzerkonto ist deaktiviert. Bitte kontaktiere deinen Administrator.",
    "Saved" : "Gespeichert",
    "Provider" : "Anbieter",
    "Unknown error, please check the log file for more details." : "Unbekannter Fehler, bitte prüfe die Log-Datei für weitere Informationen.",
    "Direct log in" : "Direkte Anmeldung",
    "SSO & SAML log in" : "SSO & SAML-Anmeldung",
    "This page should not be visted directly." : "Diese Seite sollte nicht direkt aufgerufen werden",
    "Provider " : "Anbieter",
    "X.509 certificate of the Service Provider" : "X.509-Zertifikat des Service-Providers",
    "Private key of the Service Provider" : "Privater Schlüssel des Diensteanbieters",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Zeigt an, dass die nameID des <samlp:logoutRequest> von diesem Diensteanbieter verschlüsselt versandt werden.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Zeigt an, ob die von diesem Diensteanbieter gesendeten <samlp:AuthnRequest> - Nachrichten signiert werden. [Die Metadaten des Diensteanbieters zeigen diese Infos an]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Zeigt an, ob die von diesem Diensteanbieter gesendeten <samlp:logoutRequest> - Nachrichten signiert werden.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Zeigt an, ob die von diesem Diensteanbieter gesendeten  <samlp:logoutResponse> - Nachrichten signiert werden.",
    "Whether the metadata should be signed." : "Ob die Metadaten signiert werden sollen.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Zeigt an, dass die von diesem Diensteanbieter empfangenen <samlp:Response>, <samlp:LogoutRequest> und <samlp:LogoutResponse> Elemente signiert sein müssen.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Zeigt an, dass die <saml:Assertion> Elemente die von diesem Diensteanbieter empfangen wurden verschlüsselt sein müssen. [Metadaten des Diensteanbieters enthalten diese Informationen]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Zeigt an, dass die <saml:Assertion> Elemente die von diesem Diensteanbieter empfangen wurden verschlüsselt sein müssen.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Zeigt an, dass das NameID-Element der SAML-Antwort dieses Diensteanbieters vorhanden sein muss.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Zeigt an, dass die NameID die von diesem Diensteanbieter empfangen wird verschlüsselt sein muss.",
    "Indicates if the SP will validate all received XML." : "Zeigt an, ob der Diensteanbieter alles empfangene XML überprüft. ",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS kodiert SAML-URL-Daten in Kleinbuchstaben und das Toolkit nutzt als Standard Großbuchstaben. Diese Option für ADFS-Kompatibilität bei Signatur-Überprüfung aktivieren.",
    "Attribute to map the UID to." : "Attribut dem die UID zugeordnet werden soll.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Anmeldung nur erlauben, wenn ein Konto auf einem anderen Backend vorhanden ist (z.B. LDAP)",
    "Attribute to map the displayname to." : "Attribut dem der Anzeigename zugeordnet werden soll.",
    "Attribute to map the email address to." : "Attribut dem die E-Mail-Adresse zugeordnet werden soll.",
    "Attribute to map the quota to." : "Attribut dem das Speicherkontingent zugeordnet werden soll.",
    "Attribute to map the users groups to." : "Attribut dem die Gruppen des Benutzers zugeordnet werden sollen.",
    "Attribute to map the users home to." : "Attribut dem das zu Hause des Benutzers zugeordnet werden soll.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "SAML-Autorisierung für die %s Desktop-Clients nutzen (erfordert eine Neu-Autorisierung der Nutzer)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Optional den Namen des Identitätsanbieters anzeigen (Standard: \"SSO & SAML-Anmeldung\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Die Verwendung von mehreren Benutzerverwaltungen erlauben (z.B. LDAP)",
    "SSO & SAML authentication" : "SSO & SAML-Autorisierung",
    "Authenticate using single sign-on" : "Einloggen mit Single-Sign-On",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Die SSO & SAML-App ermöglicht es, Deine bereits bestehende Single-Sign-On-Lösung einfach in Nextcloud zu integrieren. Ausserdem kann der Nextcloud LDAP-Nutzer-Anbieter verwandt werden, um es den Nutzern (z.B. beim eilen) besonders einfach zu machen.\nBislang werden folgende Anbieter unterstützt und sind getestet:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Anmeldung über Umgebungsvariable**\n\t* Kerberos (mod_auth_kerb)\n\t* Alle anderen Anbieter, die die Umgebungsvariable verwenden\n\nObwohl theoretisch jeder andere Anmeldungs-Anbieter der einen der Standards implementiert hat verwendet werden kann, weisen wir darauf hin, dass diese anderen Anbieter nicht in unserer Test-Matrix berücksichtigt werden.",
    "Open documentation" : "Dokumentation öffnen",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Es muss ein Benutzer mit Administrator-Rechten vorhanden sein, der sich mittels SSO anmelden kann. Eine Anmeldung mit Deinem normalen Zugang %s ist dann nicht mehr möglich, außer Du hast \"%s\" aktiviert oder Du gehst Direkt zur URL %s .",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you go directly to the URL %s." : "Es muss ein Benutzer mit Administrator-Rechten vorhanden sein, der sich mittels SSO anmelden kann. Eine Anmeldung mit ihrem normalen Zugang %s ist dann nicht mehr möglich, es sei denn, Sie gehen direkt zur URL %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Bitte auswählen ob die Autorisierung mittels in Nextcloud integriertem SAML oder gegen eine Umgebungsvariable erfolgen soll.",
    "Use built-in SAML authentication" : "Integrierte SAML-Autorisierung benutzen",
    "Use environment variable" : "Umgebungsvariable benutzen",
    "Global settings" : "Globale Einstellungen",
    "Remove identity provider" : "Autorisierungsdienst entfernen",
    "Add identity provider" : "Autorisierungsdienst hinzufügen",
    "General" : "Allgemein",
    "Service Provider Data" : "Diensteanbieter-Daten",
    "If your Service Provider should use certificates you can optionally specify them here." : "Sollte Dein Diensteanbieter Zertifikate benutzen dann hast Du hier die Möglichkeit diese anzugeben.",
    "Show Service Provider settings…" : "Zeige die Diensteanbieter-Einstellungen…",
    "Identity Provider Data" : "Daten des Autorisierungsdienstes",
    "Configure your IdP settings here." : "Autorisierungsdienst-Einstellungen hier konfigurieren.",
    "Identifier of the IdP entity (must be a URI)" : "Identifikationsmerkmal des Autorisierungsdienstes (muss URI sein)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL-Ziel des Autorisierungsdienstes an den der Dienstanbieter die Anmeldungsanfrage senden soll",
    "Show optional Identity Provider settings…" : "Zeige optionale Autorisierungsdienst-Einstellungen",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL-Adresse des Autorisierungsdienstes an den der Diensteanbieter die SLO-Anfrage senden soll",
    "Public X.509 certificate of the IdP" : "Öffentliches X.509-Zertifikat des Autorisierungsdienstes",
    "Attribute mapping" : "Attribute zuordnen",
    "If you want to optionally map attributes to the user you can configure these here." : "Wenn du optional Attribute dem Nutzer zuordnen möchtest, kannst du dies hier einstellen.",
    "Show attribute mapping settings…" : "Einstellungen der Attribute-Zuordnung anzeigen… ",
    "Security settings" : "Sicherheitseinstellungen",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Um die Sicherheit zu erhöhen empfehlen wir die nachfolgenden Einstellungen, soweit diese von Deiner Installation unterstützt werden.",
    "Show security settings…" : "Zeige Sicherheitseinstellungen… ",
    "Signatures and encryption offered" : "Signaturen und Verschlüsselung werden angeboten",
    "Signatures and encryption required" : "Signaturen und Verschlüsselung erforderlich",
    "Download metadata XML" : "Lade Metadaten-XML herunter",
    "Reset settings" : "Einstellungen zurücksetzen",
    "Metadata invalid" : "Metadaten ungültig",
    "Metadata valid" : "Metadaten gültig",
    "Error" : "Fehler",
    "Account not provisioned." : "Konto nicht bereitgestellt.",
    "Your account is not provisioned, access to this service is thus not possible." : "Dein Konto wird nicht bereitgestellt. Der Zugriff ist daher nicht möglich.",
    "Choose a authentication provider" : "Einen Authentifizierungsanbieter auswählen",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\"" : "Es muss ein Benutzer mit Administrator-Rechten vorhanden sein, der sich mittels SSO anmelden kann. Eine Anmeldung mit Deinem normalen Konto %s ist dann nicht mehr möglich, außer Du hast \"%s\" aktiviert."
},
"nplurals=2; plural=(n != 1);");
