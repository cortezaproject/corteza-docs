# Provisioning 

Corteza allows you to set up provisioning rules for your instance using environmental variables.
You can also store all these settings into `.env` file and place it next to the server binary. 

Auto-provisioning is executed before `serve-api` is run. This can be controlled (prevented) by setting `PROVISION_MIGRATE_DATABASE` and/or `PROVISION_AUTO_SETUP` to false

Database migration can also be done manually through `provision migrate-database`.

## Variables

### `PROVISION_MIGRATE_DATABASE` (boolean, default: true)
Controls if database migration (creation of tables, changes of schema between versions) should be done before API is started.

### `PROVISION_AUTO_SETUP` (boolean, default: true)

Runs various auto-setup procedures:
 - on all systems: (re)set default permission rules 
 - on messaging: default channels are created
 - on system: default applications are created, settings auto-discovery (see [Provision.md](Provision.md) for details)

## `PROVISION_OIDC_PROVIDER` (string, default: '')

Registers all given providers on start.
Provide a list of space delimited provider pairs (`<name> <provider-url>` or 
`<name> <provider-url> <name-2> <provider-url-2>`). 

The provider is auto-discovered only if it does not exist (match by name).

Also, make sure that your redirect URL (`auth.external.redirect-url`) is properly. See [Provision.md](Provision.md) 
and `PROVISION_SETTINGS_AUTH_EXTERNAL_REDIRECT_URL`.

## `PROVISION_SETTINGS_AUTH_EXTERNAL_` (string, default: '')

Recognized keys:

 - `PROVISION_SETTINGS_AUTH_EXTERNAL_GITHUB`
 - `PROVISION_SETTINGS_AUTH_EXTERNAL_FACEBOOK`
 - `PROVISION_SETTINGS_AUTH_EXTERNAL_GPLUS`
 - `PROVISION_SETTINGS_AUTH_EXTERNAL_LINKEDIN`
 - `PROVISION_SETTINGS_AUTH_EXTERNAL_OIDC`

Value format is `<key> <secret>` and for OIDC `<name> <issuer> <key> <secret>`.
