# Simple deployment

Simplest setup with all backend services bundled into one monolith service.

This setup consists of 3 containers (+ 2 for reverse nginx proxy):
 - `server`
 - `webapp`
 - `db`
 
Copy example [config file](simple/.env) and [docker-compose](simple/docker-compose.yml) to your server or local environment,
and follow the checklists:

 1. Follow the [reverse proxy checklist](proxy.md)
 1. Follow the [general deployment checklist](checklist.md)
 1. Run Corteza services.
