## `auth.external.enabled` 
Is OAuth2 enabled or disabled

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_EXTERNAL_ENABLED`
 - Default: `true`


## `auth.external.redirect-url` 
OAuth2 flow redirection URL.

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_EXTERNAL_REDIRECT_URL`
 - Default: `""`
 - Auto-discovery: searches env-variables (`DOMAIN`, `LETSENCRYPT_HOST`, `VIRTUAL_HOST`, `HOSTNAME`, `HOST`)
   and uses additional info (monolith, api-base-url) to calcualte the value


## `auth.external.session-store-secret` 
### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_EXTERNAL_SESSION_STORE_SECRET`
 - Default: `<random 64 char string>`
 - Auto-discovery: generated if missing.


## `auth.external.session-store-secure` 
Is session cookie "secure" flag used (if yes, cookie can only be access over HTTPS).

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_EXTERNAL_SESSION_STORE_SECURE`
 - Default: `false`
 - Auto-discovery: If HTTPS is used for external auth redirection url, value is set to true.


## `auth.frontend.url.base`
Where the frontend SPA is located. Serves as base for generating other `auth.frontend.url...` variables.

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_FRONTEND_URL_BASE`
 - Default: `""`

## `auth.frontend.url.password-reset`
Where the frontend SPA is located, password reset form.

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_FRONTEND_URL_PASSWORD_RESET`
 - Default: `""`
 - Auto-discovery: `auth.frontend.url.base` is used as base URL



## `auth.frontend.url.email-confirmation`
Where the frontend SPA is located, password email confirmation page.

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_FRONTEND_URL_EMAIL_CONFIRMATION`
 - Default: `""`
 - Auto-discovery: `auth.frontend.url.base` is used as base URL



## `auth.frontend.url.redirect`
Where the frontend SPA is located. User will be redirected here on successful external authentication.

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_FRONTEND_URL_REDIRECT`
 - Default: `""`
 - Auto-discovery: `auth.frontend.url.base` is used as base URL



## `auth.mail.from-address`
Email address used for sending auth emails (password reset, email confirmation)

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_EMAIL_FROM_ADDRESS`
 - Default: `"to-be-configured@example.tld"`


## `auth.mail.from-name`
Name used for sending auth emails (password reset, email confirmation)

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_EMAIL_FROM_NAME`
 - Default: `"Corteza Team (to-be-configured)"`



## `auth.internal.signup`
Is internal auth enabled. Enable this to allow users to use all (enabled)
internal features (sign-up, login....)

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_INTERNAL_ENABLED`
 - Default: `true`


## `auth.internal.signup.enabled`
Is internal sign-up enabled. Enable this to allow users to register if you do 
not have external authentication providers.

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_INTERNAL_SIGNUP_ENABLED`
 - Default: `true`


## `auth.internal.signup-email-confirmation-required`
Is email confirmation required for internal sign-ups?

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_INTERNAL_SIGNUP_EMAIL_CONFIRMATION_REQUIRED`
 - Default: `false`
 - Auto-discovery: enabled if server has email capabilities (`SMTP_HOST` variable is set)


## `auth.internal.password-reset.enabled`
Is password reset enabled for internal account?

### Provision: 
 - Variable: `PROVISION_SETTINGS_AUTH_INTERNAL_PASSWORD_RESET_ENABLED`
 - Default: `false`
 - Auto-discovery: enabled if server has email capabilities (`SMTP_HOST` variable is set)
