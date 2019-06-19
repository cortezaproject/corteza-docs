# Advanced deployment

You can use advanced setup when you want to have more control over your services or when you want to use just parts of the platform.

This setup consists of 5 containers (+ 2 for reverse nginx proxy):
 - `server-system`
 - `server-messaging`
 - `server-compose`
 - `webapp`
 - `db`

Copy example [config file](advanced/.env) and [docker-compose](advanced/docker-compose.yml) to your server,
inspect comments, make modifications and start services.

# Deployment checklist
 1. Follow the [reverse proxy checklist](proxy.md)
 1. Follow the [general deployment checklist](checklist.md)
 1. Run Corteza services.
