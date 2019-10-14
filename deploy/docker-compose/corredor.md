# Corredor

You can extend your `docker-compose.yaml` from [simple](simple.md), [advanced](advanced.md) or custom
 with Corteza service:

```yaml
  corredor:
    env_file: [ .env ]
    image: cortezaproject/corteza-server-corredor
    networks: [ internal ]
    restart: on-failure
```

Add this to your `.env` file and set `CORREDOR_API_BASE_URL_*` to match your setup 
```dotenv
CORREDOR_ADDR=corredor:80
CORREDOR_ENABLED=true
CORREDOR_API_BASE_URL_COMPOSE=https://api.your-domain.tld/compose
CORREDOR_API_BASE_URL_MESSAGING=https://api.your-domain.tld/messaging
CORREDOR_API_BASE_URL_SYSTEM=https://api.your-domain.tld/system
``` 


Additional settings for your `.env` file:
```dotenv
CORREDOR_LOG_ENABLED=true
CORREDOR_LOG_LEVEL=trace
CORREDOR_LOG_PRETTY=true
CORREDOR_DEBUG=true
```
