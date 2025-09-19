ARG image=node:21-alpine

FROM ${image} AS builder

RUN apk update && apk add --no-cache bash

WORKDIR /app

COPY . .

RUN npm install

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "bash", "/entrypoint.sh" ]
