FROM antora/antora AS builder

ARG ALGOLIA_API_KEY
ARG ALGOLIA_INDEX_NAME
ARG ALGOLIA_APP_ID

COPY antora-playbook.yml /antora/
COPY antora /antora/antora
COPY lib /antora/lib
COPY package.json /antora/
COPY yarn.lock /antora/
RUN yarn --non-interactive --no-progress --silent --emoji false install
RUN ls /antora/
RUN antora antora-playbook.yml

COPY corteza-js/corteza-api-docs /antora/dist/corteza-api-docs

FROM nginx:1.17-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /antora/dist/ /usr/share/nginx/html

