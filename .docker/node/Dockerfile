FROM node:20.11.1-alpine3.19

RUN apk add --no-cache bash

ENV NODE_ENV=development

WORKDIR /home/node/app

RUN npm i -g @nestjs/cli

USER node

COPY . .