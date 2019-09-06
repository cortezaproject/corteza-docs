# Configuring Postfix

This quick how-to show what and where to modify in Postfix' configuration files
to enable forwarding emails to Corteza. 

## virtual alias

Change `/etc/postfix/main.cf`:
```
virtual_alias_maps = pcre:/etc/postfix/virtual_alias
```

Add virtual alias to `/etc/postfix/virtual_alias`:
```
# Catch-all for corteza.domain.tld and redirect it to corteza_sink mailbox
/.+@corteza\.domain\.tld$/ corteza_sink
```

Update virtual-alias map/db file and restart postfix 
```shell script
postmap pcre:/etc/postfix/virtual_alias
postfix restart
```

Add entry to `/etc/aliases`. This forwards mail for specific mailbox a curl command.
Curl command then pushes that raw email to sink endpoint on Corteza API. 

See [sink doc](sink.md) for in information how to create a signed URL
```
corteza_sink: "|  https://api.your-corteza-instance.tld/system/sink?content-type=email&expires=&method=POST&origin=postfix&sign=6280d530ae74f1f9c55e4dd362c9ef2094221287'"
```

Update aliases
```shell script
newaliases
```

# Test changes

You can verify if configuration changes have desired effect by sending an email to the configured address or 
with a simple command line:
```shell script
echo "hello corteza"|mail -s 'hello' test@corteza.domain.tld
```
(It's best if you try this from a different machine than the one running postfix)

This should produce a new entry in your mail log (usually `/var/log/mail.log) where you can see information about
received email

Log example:
```
postfix/smtpd[23155]: connect from some-host.tld[xxx.xxx.xxx.xxx]
postfix/smtpd[23155]: 277AF5C1B78: client=some-host.tld[xxx.xxx.xxx.xxx]
postfix/cleanup[23159]: 277AF5C1B78: message-id=<b808218e-ce41-6cbf-cb4f-be2b4cf8f776@crust.tech>
postfix/qmgr[14490]: 277AF5C1B78: from=<sender@some-host.tld>, size=1476, nrcpt=1 (queue active)
postfix/smtpd[23155]: disconnect from some-host.tld[xxx.xxx.xxx.xxx] ehlo=2 starttls=1 mail=1 rcpt=1 data=1 quit=1 commands=7
postfix/local[23160]: 277AF5C1B78: to=<corteza_sink@my-server>, orig_to=<demo@corteza.domain.tld>, relay=local, delay=0.67, delays=0.03/0.01/0/0.62, dsn=2.0.0, status=sent (delivered to command:  curl --data-binary @- 'https://api.your-corteza-instance.tld/system/sink?content-type=email&expires=&method=POST&origin=postfix&sign=6280d530ae74f1f9c55e4dd362c9ef2094221287'')
postfix/qmgr[14490]: 277AF5C1B78: removed
```
