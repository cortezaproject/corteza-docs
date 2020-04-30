.PHONY:

WORKDIR         ?= /docs

ASCIIDOCTOR     ?= /usr/bin/asciidoctor
ASCIIDOCTOR_PDF ?= /usr/bin/asciidoctor-pdf
DOCKER_IMAGE    ?= asciidoctor/docker-asciidoctor:latest

GEN_HTML5_BOOK  ?= $(ASCIIDOCTOR) -r asciidoctor-diagram --doctype book --backend html5
GEN_PDF_BOOK    ?= $(ASCIIDOCTOR_PDF) -r asciidoctor-diagram
DOCKER_WRAP     ?= docker run -it --rm --workdir $(WORKDIR) --volume `pwd`:$(WORKDIR) $(DOCKER_IMAGE)

MAJOR_CHAPTERS  ?= overview admin user maint coredev extdev index

DOCKER_IMAGE_TAG ?= cortezaproject/corteza-docs:preview

default: html

# Build all doc sections inside a docker container
html:
	@$(DOCKER_WRAP) make native..html

# Build specific doc section inside a docker container
html.%:
	@$(DOCKER_WRAP) make native..html.$*

# Build specific doc section inside a docker container as PDF
pdf.%:
	@$(DOCKER_WRAP) make native..pdf.$*

# Build specific doc section AS PDF
native..pdf.%:
	$(GEN_PDF_BOOK) --destination-dir dist/ src/$*/index.adoc
	mv dist/index.pdf dist/$*.pdf

# Build index doc
native..html.index:
	$(GEN_HTML5_BOOK) --destination-dir dist/html/ src/index.adoc

# Build specific doc section
native..html.%:
	$(GEN_HTML5_BOOK) --destination-dir dist/html/$* src/$*/index.adoc

# Build whole book
native..html: $(MAJOR_CHAPTERS:%=native..html.%)
	@echo "Done."

clean:
	rm -rf dist/*

image:
	docker build --rm --no-cache --tag $(DOCKER_IMAGE_TAG) .

image-push:
	docker push $(DOCKER_IMAGE_TAG)
