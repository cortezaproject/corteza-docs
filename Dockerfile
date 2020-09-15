FROM antora/antora AS builder

COPY antora-playbook.yml /antora/
COPY antora /antora/antora
COPY package.json /antora/
COPY yarn.lock /antora/
RUN yarn --non-interactive --no-progress --silent --emoji false install
RUN ls /antora/
RUN antora antora-playbook.yml

FROM nginx:1.17-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /antora/dist/ /usr/share/nginx/html

