
# Overview
## Product
## Security
## Architecture
## Deployment
## Customization

# Releases
Release history, changelogs

# Core Developer's guide (/core-dev)
## Getting started
Prerequisites, tools, libraries

## Git repositories
Branches, tags, gitflow.

## Versions and release management
Description of release phases and cycles, how versions are structured.

## Main components and services

### Database
#### Overview
#### Setup
#### Structure
#### Style guide
#### Tools
#### Quality
#### Build

### API Server
#### Overview
#### Setup
#### Structure
#### Style guide
#### Tools
#### Quality
#### Build

### Corredor Server 
#### Overview
#### Setup
#### Structure
#### Style guide
#### Tools
#### Quality
#### Build

### Web applications
#### Overview
#### Setup
#### Structure
#### Style guide
#### Tools
#### Quality
#### Build

# Administrator's guide

## Plan

What information should be gathered and what decisions should be made (for example, design/deployment) before the customer can start installing the product?
    
## Install

How does the customer install the product on each of the supported platforms?

### Overview

### Deploy
#### Docker
#### Docker compose

### Auxiliary services and supporting software

#### Database
#### File storage
#### Forwarding proxy
#### Email
##### Sending
##### Receiving
#### Logs
##### ELK
#### Application monitoring, error tracking
##### Sentry
    
## Configure and Verify
        
After the product is installed, what does the customer need to do to 
configure it to work in their environment? How do they test or verify that it is ready to put into production?

### System (administration)
#### Overview
#### Environmental variables
#### Provision
#### Settings
#### Security
#### Users
#### Roles
#### Applications

### Messaging
#### Overview
#### Environmental variables
#### Provision
#### Settings
#### Security
#### Channels

### Compose
#### Overview
#### Environmental variables
#### Provision
#### Settings
#### Channels

### Corredor
#### Overview
#### Environmental variables
 
    
## Customizations and Integrations

Does the customer need to develop any custom applications to connect the 
product to any of their existing infrastructure?
    
### Using API
#### Authentication
#### Reference
#### Clients
##### Javascript
### Scripting
#### Frontend scripting
#### Backend scripting
### Sink API

## Manage
       
Once the product is in production, how does the customer customize and change it on a day-to-day basis?
     
### Command Line Interface
          
    
## Monitor and Tune

Once the product is in production, how does the customer monitor its performance in order to know when changes are needed?

  
## Upgrade and Migrate

How does the customer upgrade to newer versions of the product?
    
## Troubleshoot

How does the customer fix common problems they may encounter?


# User's Guide

## Messaging
## Compose
