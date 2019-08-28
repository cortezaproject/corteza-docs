# Corteza Deployment Checklist 

 1. `.env`
    - Set `DOMAIN`
    - Set value for `AUTH_JWT_SECRET`.
      You can use random string generator from the helper link below.
    - Do we want to enable email sending? 
      Are `SMTP_*` values correct?
    - Is there anything missing? 
      Check `.env.example` in 
      [corteza-server](https://github.com/cortezaproject/corteza-server) repository.
      
 1. `docker-compose.yml`
    - If you are not familiar with Docker Compose, its config file, visit:
      - https://docs.docker.com/compose/overview/
    - Change `MYSQL_ROOT_PASSWORD` and `MYSQL_PASSWORD`.
      You can use a random string generator from the helper link below.
    - Check all `VIRTUAL_HOST` and `LETSENCRYPT_HOST` environment variables in your `docker-compose.yml
      See the chapter about [Environmental variables in Docker Compose](https://docs.docker.com/compose/environment-variables/)
      to learn how this works
    - Verify `networks` section. 
      If you are using [Automated Nginx proxy for Docker containers](https://github.com/jwilder/nginx-proxy),
      make sure it is [running](nginx-proxy.md) and using the same network (`proxy` in the provided `docker-compose.yml` 
      file) as you use in the config file.
    - If you want to preserve volume data enable (uncomment) `volumes` section in services 
      and root `volumes` section.

 1. Verify final settings with `docker-compose config`.

# Helpers

 - [Random String Generator](https://www.random.org/strings/?num=20&len=20&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new)
