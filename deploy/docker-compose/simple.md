# Simple deployment

Simplest setup with all backend services bundled into one monolith service.

This setup consists of 3 containers (+ 2 for reverse nginx proxy):
 - `server`
 - `webapp`
 - `db`
 
 1. Copy example [config file](simple/.env) and [docker-compose](simple/docker-compose.yml) to your server or local environment
 1. Follow the instructions for [reverse proxy setup](proxy.md)
 1. Follow the [general deployment checklist](checklist.md)
 1. Run Corteza services.
