# Corredor

You can extend your `docker-compose.yaml` from [simple](simple.md), [advanced](advanced.md) or custom
 with Min.io service:

```yaml
  minio:
    env_file: [ .env ]
    image: minio/minio
    networks: [ internal ]
    restart: on-failure
    volumes: [ "minio-data:/data" ]
    command: server /data 
    ports: [ "9000:9000" ]
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3

volumes: { minio-data: {} }
```

For more examples, please see:
https://raw.githubusercontent.com/minio/minio/master/docs/orchestration/docker-compose/docker-compose.yaml


```dotenv
# Storage to minio backend is activated when MINIO_ENDPOINT is set
MINIO_ENDPOINT=minio:9000

# Access & secret key
MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE
MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
``` 

Visit https://raw.githubusercontent.com/cortezaproject/corteza-server/master/.env.example for 
more details and configuration options.
