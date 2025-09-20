FROM node:21-alpine AS builder

RUN apk update && apk add --no-cache bash

WORKDIR /app

COPY . .

RUN npm install

COPY ./entrypoint.sh /entrypoint.sh

RUN npx prisma generate &&\
    npx prisma migrate dev &&\ 
    npm run build

CMD [ "npm" ,"run", "start" ]
