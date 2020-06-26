#!/bin/sh

# Install and use nodemon to run antora
# to regenerate documentation when files change

npm -g install nodemon

nodemon -e adoc -w /antora -x /usr/local/bin/antora antora-playbook-local.yml
