FROM node:14.2-alpine3.11

WORKDIR /server

RUN apk update

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
