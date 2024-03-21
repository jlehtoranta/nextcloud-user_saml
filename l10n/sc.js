OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Custu contu utente est disativadu, cuntata s'amministratzione.",
    "Saved" : "Sarvadu",
    "Provider" : "Frunidore",
    "Unknown error, please check the log file for more details." : "Errore disconnotu, controlla s'archìviu de registru pro àteros detàllios.",
    "Direct log in" : "Intrada dereta",
    "SSO & SAML log in" : "Intrada SSO & SAML",
    "This page should not be visited directly." : "Custa pàgina non si diat dèpere visitare deretu",
    "Provider " : "Frunidore",
    "X.509 certificate of the Service Provider" : "Tzertificadu X.509 de su frunidore de su servìtziu",
    "Private key of the Service Provider" : "Crae privada de su frunidore de su servìtziu",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Inditat chi su nùmeneID de su <samlp:logoutRequest> imbiadu dae custu SP at a èssere tzifradu.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Inditat si is <samlp:AuthnRequest> messàgios imbiados dae custu SP sant a èssere firmados. [Metadatos de su SP at a frunire custa informatzione]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Inditat si is <samlp:logoutRequest> messàgios imbiados dae custu SP ant a èssere firmados.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Inditat si is <samlp:logoutResponse> messàgios imbiados dae custu SP ant a èssere firmados.",
    "Whether the metadata should be signed." : "Si is metadatos si diant dèpere firmare.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Inditat sa firma comente a recuisitu pro is elementos <samlp:Response>, <samlp:LogoutRequest> e <samlp:LogoutResponse> retzidos dae custu SP.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Inditat sa firma comente a recuisitu pro is elementos <saml:Assertion> retzidos dae custu SP. [Metadatos de su SP ant a frunire custa informatzione]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Inditat sa tzifradura comente a recuisitu pro is elementos <saml:Assertion> retzidos dae custu SP.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Inditat sa presèntzia comente a recuisitu de s'elementu NùmeneID in sa SAMLResponse retzida dae custu SP.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Inditat sa tzifradura comente a recuisitu pro su nùmeneID retzidu dae custu SP.",
    "Indicates if the SP will validate all received XML." : "Inditat si su SP at a balidare totu s'XML retzidu.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "URL ADFS-Codìficat is datos SAML comente lìteras piticas, mentras chi su sistema impreat, de manera predefinida, is lìteras mannas. Ativa pro cumpatibilidade cun ADFS subra sa verìfica de sa firma.",
    "Algorithm that the toolkit will use on signing process." : "Algoritmu chi su toolkit at a impreare pro su protzessu de firma.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Recùpera is paràmetros de sa rechesta dae $_SERVER. B'at serbidores SAML chi ddu rechedent pro is rechestas SLO.",
    "Attribute to map the UID to." : "Atributu a su chi assotziare s'UID.",
    "Attribute to map the displayname to." : "Atributu a su chi assotziare su nùmene visualizadu.",
    "Attribute to map the email address to." : "Atributu a su chi assotziare s'indiritzu de posta eletrònica.",
    "Attribute to map the quota to." : "Atributu a su chi assotziare sa cuota.",
    "Attribute to map the users home to." : "Atributu pro assotziare is pàginas printzipales de is utentes.",
    "Attribute to map the users groups to." : "Atributu pro assotziare is grupos de utentes.",
    "Email address" : "Indiritzu de posta eletrònica",
    "Encrypted" : "Tzifradu",
    "Entity" : "Entidade",
    "Kerberos" : "Kerberos",
    "Persistent" : "Persistente",
    "Transient" : "Transitòriu",
    "Unspecified" : "No ispetzificadu",
    "Windows domain qualified name" : "Nùmene de su domìniu Windows calificadu",
    "X509 subject name" : "Nùmene ogetu X509",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Imprea autenticatzione SAML pro is clientes de iscrivania de %s (rechedet un'autenticatzione noa de is utentes)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Mustra nùmene a praghere de su frunidore de identidade (predefinidu: \"Atzessu SSO e SAML\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Permiti s'impreu de prus motores utente (es. LDAP)",
    "SSO & SAML authentication" : "Autenticatzione SSO e SAML",
    "Authenticate using single sign-on" : "Autenticatzione cun autenticatzione ùnica",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Impreende s'aplicatzione SSO e SAML de Nextcloud, podes fàghere possìbile s'integratzione de sa soluzione de autenticatzione ùnica chi esistit cun Nextcloud. In prus, podes impreare su frunidore de utentes LDAP de Nextcloud pro mantènnere sa cumbenèntzia pro is utentes. (es. cando si cumpartzit)\nIs frunidores in fatu sunt suportados e averguados pro immoe:\n* ** SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS) \n\n* **Autenticatzione tràmite variàbile de ambiente**\n\t* Kerberos (mod_auth_kerb)\n\t* Cale si siat àteru frunidore chi autentichet impreende una variàbile de ambiente\n\nMancari in teoria cale si siat àteru frunidore de autenticatzione chi implementet unu de custos istandard siat cumpatìvile, sinnalamud chi non sunt parte de sa matritze de is testos internos.",
    "Open documentation" : "Aberi documentatzione",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Sèbera si ti boles autenticare impreende su frunidore SAML integradu in Nextcloud o si ti boles autenticare impreende una variàbile de ambiente.",
    "Use built-in SAML authentication" : "Imprea autenticatzione SAML integrada",
    "Use environment variable" : "Imprea variàbile de ambiente",
    "Global settings" : "Cunfiguratziones globales",
    "Remove identity provider" : "Boga·nche frunidore de identidade",
    "Add identity provider" : "Agiunghe frunidore de identidade",
    "General" : "Generale",
    "Service Provider Data" : "Datos de su frunidore de su servìtziu",
    "If your Service Provider should use certificates you can optionally specify them here." : "Si su frunidore tuo de servìtzios impreat is tzertificados, ddos podes ispetzificare inoghe.",
    "Show Service Provider settings…" : "Mustra sa cunfiguratzione de su frunidore de servìtzios...",
    "Name ID format" : "Formadu nùmene ID",
    "Identity Provider Data" : "Datos de su funidore de identidade",
    "Identifier of the IdP entity (must be a URI)" : "Identificadore de s'entidade IdP (depet èssere un'URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Destinatzione de s'URL de s'IdP in ue su SP at a imbiare su messàgiu de dimanda de autenticatzione ",
    "Show optional Identity Provider settings…" : "Mustra cunfiguratzione optzionale de su frunidore de identidade...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Positzione de s'URL de s'IdP in ue su SP at a imbiare sa dimanda SLO",
    "URL Location of the IDP's SLO Response" : "Positzione de s'URL de sa risposta SLO de s'IDP",
    "Public X.509 certificate of the IdP" : "Tzertificadu X.509 de s'IdP",
    "Attribute mapping" : "Assòtziu de is atributos",
    "If you want to optionally map attributes to the user you can configure these here." : "Si boles assotziare a praghere is atributos a s'utente, ddos podes cunfigurare inoghe. ",
    "Show attribute mapping settings…" : "Mustra sa cunfiguratzione de assòtziu de is atributos...",
    "Security settings" : "Cunfiguratzione de seguridade",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Pro una seguresa majore, cussigiamus de ativare is cunfiguratziones imbenientes, si sunt suportadas dae s'ambiente tuo.",
    "Show security settings…" : "Mustra cunfiguratzione de seguridade...",
    "Signatures and encryption offered" : "Firmas e tzifradura ofertas",
    "Signatures and encryption required" : "Firmas e tzifradura rechertas",
    "Download metadata XML" : "Iscàrriga XML metadatos",
    "Reset settings" : "Riprìstina cunfiguratzione",
    "Metadata invalid" : "Metadatos non bàlidos",
    "Metadata valid" : "Metadatos bàlidos",
    "Error" : "Errore",
    "Account not provisioned." : "Contu non generadu.",
    "Your account is not provisioned, access to this service is thus not possible." : "Su contu tuo no est istadu generadu, s'intrada a custu servìtziu no est possìbile.",
    "Login options:" : "Sèberos pro s'intrada:"
},
"nplurals=2; plural=(n != 1);");
