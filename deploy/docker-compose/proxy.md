# Nginx Proxy (jwilder/nginx-proxy)

In the following instructions we assume you don't have anything similar set up on your current environment.

If you are using an alternative (eg: nativelly running Nginx, H2o proxy, Træfik) and 
can provide instructions and examples, please let us know or make a pull request for the documentation.

You need to copy [docker-compose](nginx-proxy/docker-compose.yml) file to a different folder on your server or local environment and start services. The file is ready to run so you shouldn't have to modify anything in it.

## Why do we need this?

If you are not familiar with `jwilder/nginx-proxy`, see it's [GitHub page](https://github.com/jwilder/nginx-proxy).

Images `jwilder/nginx-proxy` and `jrcs/letsencrypt-nginx-proxy-companion` provide simple and seamless way to 
pick-up new containers as they start and automatically setup reverse proxy (using `VIRTUAL_HOST` env var) 
and even setup your SSL certificate (via LetsEncrypt services, using `LETSENCRYPT_HOST`env var)

### Reason 1: Routing
By default, Corteza does not publish ports of it's containers, they are only exposed (to other containers).
This requires software with HTTP routing capabilities that can use different domains (virtual hosts) and redirect
requests to Docker containers.

### Reason 2: Security
Corteza containers do not serve requests over TLS (HTTPS). This means less complexity and dependencies 
for Corteza and a bit more work for you if you do not have any existing infrastructure.

This is the responsibility of `nginx-letsencrypt` service (via `jrcs/letsencrypt-nginx-proxy-companion` image).
