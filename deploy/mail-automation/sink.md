# Sink

Email automation in Corteza is done through sink API. This enables you to bring your email
from different sources, like [forwarding to command with postfix](postfix.md)

## Authentication with signed URLs

### Why signed?

Signing the URL (the sign=... parameter and value) is created as a combination of all parameters and Corteza's secret
string. This signature should be kept secret as it is effectively same as password that allows access to Corteza.


### How to sign a sink URL:

Example:
```shell script
docker-compose exec server /bin/corteza-server system sink signature --method POST --origin postfix --content-type email
```

Command will output a line that looks like this:
```
/sink?content-type=email&expires=&method=POST&origin=postfix&sign=6280d530ae74f1f9c55e4dd362c9ef2094221287
```

Parameters:
 - `method` must match the request method
 - `origin` - arbitrary string, can be used to describe 
 - `content-type` - used to set the processor for the data inputed 
 - `expires` - can be used to sign link with expiration date.
 
If you are con

### Test your signed URL

```shell script
echo "
From: <sender@cortezaproject.org>
To: <test@corteza.domain.tld>
Subject: hello
Message-ID: <1234@local.machine.example>

Ola Corteza!
" | curl -i --data-binary @- "https://api.your-corteza-instance.tld/system/sink?content-type=email&expires=&method=POST&origin=postfix&sign=6280d530ae74f1f9c55e4dd362c9ef2094221287'"
```

This command should return `200 OK` response.
