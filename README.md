# Corteza Technical Documentation

Corteza platform is provided in form of [Docker](https://www.docker.com/) containers:
 - [Corteza Server (backend)](https://github.com/cortezaproject/corteza-server)
 - Corteza Web application (frontend), build from:
   - [Compose](https://github.com/cortezaproject/corteza-webapp-compose)
   - [Messaging](https://github.com/cortezaproject/corteza-webapp-messaging)
   - [Admin](https://github.com/cortezaproject/corteza-webapp-admin)
   - [Unify](https://github.com/cortezaproject/corteza-webapp-unify)
   - [Auth](https://github.com/cortezaproject/corteza-webapp-auth)

Web applications are using HTTP REST and WebSocket protocol 
JSON format to access data on backend server.

Mobile application (hybrid mobile through [Apache Cordova](https://cordova.apache.org/)) 
is still in testing mode.

## How to test, install/deploy

### Simple

Deployment with a minimum set of containers (database + backend + frontend) 

[Instructions](deploy/docker-compose/simple.md) for simple deployment.

### Advanced

Deployment with multiple backend containers (microservice) and a frontend container.

[Instructions](deploy/docker-compose/advanced.md) for advanced deployment.


## Supporting services

 - [Corredor](deploy/docker-compose/corredor.md) 
 
   Backend automation script executor
   
 - [MinIO](deploy/docker-compose/storage.md)
 
   MinIO is a cloud storage server compatible with Amazon S3, released under Apache License v2. As an object store, MinIO can store unstructured data such as photos, videos, log files, backups and container images. The maximum size of an object is 5TB.

### Local (development mode)

You can check out all backend and frontend repositories and follow instructions on how to start
development servers in each one.

Golang and/or JavaScript/Vue.js experience is required.

## Getting Corteza online

(Discouraged for local/dev deployments)

To allow users to access Corteza web applications and services, you need to route web traffic to the containers.

## Setup, configuration and administration details

You can find additional help about how to configure and manage Corteza server in the [cortezaproject/corteza-server](https://github.com/cortezaproject/corteza-server/tree/master/docs) repository.
