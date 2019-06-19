# Advanced deployment

You can use advanced setup when you want to have more control over your services or when you want to use just parts of the platform.

This setup consists of 5 containers (+ 2 for reverse nginx proxy):
 - `server-system`
 - `server-messaging`
 - `server-compose`
 - `webapp`
 - `db`

# Instructions
 1. Copy example [config file](advanced/.env) and [docker-compose](advanced/docker-compose.yml) to your server or local environment
 1. Follow the instructions for [reverse proxy setup](proxy.md)
 1. Follow the [general deployment checklist](checklist.md)
 1. Run Corteza services.
