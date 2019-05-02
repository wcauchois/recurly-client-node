FROM node:11.14-alpine

RUN apk add bash

WORKDIR /app/clients/node
COPY package.json .
RUN npm install

WORKDIR /app
