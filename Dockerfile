FROM asciidoctor/docker-asciidoctor:latest AS builder

WORKDIR /docs

COPY . .

RUN make clean native..html

FROM nginx:1.17-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /docs/dist/html /usr/share/nginx/html

# note to future self:
# when newer versions will be ready just
# COPY --from=corteza-docs:2019.12 /docs/dist /usr/share/nginx/html
