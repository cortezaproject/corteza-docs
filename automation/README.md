# Corteza Automation

## Introduction

With automation scripts and triggers you can handle different kinds of events that happen internally, by user 
action or from external sources. 


## Triggers (and events)

When an event is fired it triggers automation script that receives information about the event and 
parameters needed for automation script.

Scenarios:

 - when record is created, changed or deleted, triggers can be placed before or after this event
 - when user executes manual script for record automation
 - when Corteza's sink API receives data (email, webhook)
 - [planned] on configured interval
 - [planned] on specific date and time
 - [planned] when namespace, module or chart is created
 - [planned] when user logs-in, signs-up, recovers password, confirms-email
 - [planned] when user profile is changed
 - [planned] when message is added to a channel, edited or removed on messaging channel
 - [planned] when user joins, leaves, is added to, removed or is invited to a messaging channel
 - [planned] when user creates, modifies, removes, archives a messaging channel  
 - [planned] when (security) role member is added or removed
 - [planned] when permissions change


## Scripts

Automation scripts are run/executed when triggered (see scenarios above) and have access to all internal resources on 
Corteza and any external resource (HTTP API, URLs, ...).

Corteza comes with set of handy helpers and examples that allow rapid script development. 

You can read more about Compose automation in 
[cortezaproject/corteza-webapp-common](https://github.com/cortezaproject/corteza-webapp-common/tree/master/manual/automation-scripts)
repository 
### Security

Each script can be configured to run with privileges of a specific user, or when triggered directly by user, with 
privileges of that user.

Scenarios:

 - User creates a Client record in Compose. This triggers a script that create a new user. User creation is only allowed
   to administrators and script can be ran with privileges of an administrator
 - Email is received and processed. Script runner is set to a specific admin user
 - [planned] Email is received and trigger is configured to match "From" header value to an existing user
   and set that user as a script runner
    
### Runners

Automation scripts code is executed in an isolated environment outside Corteza core through.

Default script runner is Corredor - an external Node.js server that can execute scripts written in JavaScript.

[planned] Corteza supports multiple runners and multiple script languages.

