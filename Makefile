.PHONY: html pdf

html.%:
	@ rm -rf /dist/html/$*
	./asciidoctor.sh asciidoctor --doctype book --backend html5 --destination-dir /dist/html/$* '$*/index.adoc'

html: html.coredev html.extdev html.maint html.manage html.overview html.releases html.user
