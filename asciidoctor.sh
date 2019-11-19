#!/bin/bash

docker run -it --rm \
  -v $(pwd)/src:/documents \
  -v $(pwd)/dist:/dist \
  asciidoctor/docker-asciidoctor $@
