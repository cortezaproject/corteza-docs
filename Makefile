.PHONY:

WORKDIR         ?= /docs

ASCIIDOCTOR     ?= /usr/bin/asciidoctor
ASCIIDOCTOR_PDF ?= /usr/bin/asciidoctor-pdf
DOCKER_IMAGE    ?= asciidoctor/docker-asciidoctor:latest

GEN_HTML5_BOOK  ?= $(ASCIIDOCTOR) --doctype book --backend html5
GEN_PDF_BOOK    ?= $(ASCIIDOCTOR_PDF)
DOCKER_WRAP     ?= docker run -it --rm --workdir $(WORKDIR) --volume `pwd`:$(WORKDIR) $(DOCKER_IMAGE)

MAJOR_CHAPTERS  ?= overview admin user maint coredev extdev index

DOCKER_IMAGE_TAG ?= cortezaproject/corteza-docs:latest

default: html

# Build specific doc section inside a docker container as PDF
pdf.%:
	@$(DOCKER_WRAP) make native..pdf.$*

# Build specific doc section AS PDF
native..pdf.%:
	$(GEN_PDF_BOOK) --destination-dir dist/ src/$*/index.adoc
	mv dist/index.pdf dist/$*.pdf

clean:
	rm -rf dist/*

image:
	docker build --rm --no-cache --squash --tag $(DOCKER_IMAGE_TAG) .

image-push:
	docker push $(DOCKER_IMAGE_TAG)

# Can be used to compile docs from current (HEAD) version
dev:
	docker run -it --rm --volume $(CURDIR):/antora --entrypoint /antora/dev-docker-entryfile.sh antora/antora

# Defines the environment required by DocSearch
dev.search:
	docker run -it -e ALGOLIA_API_KEY -e ALGOLIA_INDEX_NAME -e ALGOLIA_APP_ID --rm --volume $(CURDIR):/antora --entrypoint /antora/dev-docker-entryfile.sh antora/antora
