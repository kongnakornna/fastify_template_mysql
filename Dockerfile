FROM node:14-alpine

LABEL maintainer="Satit Rianpit <rianpit@gmail.com>"

WORKDIR /home/api

RUN apk update && \
  apk upgrade && \
  apk add --no-cache \
  alpine-sdk git python \
  build-base libtool autoconf \
  automake gzip g++ \
  make tzdata \
  && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
  && echo "Asia/Bangkok" > /etc/timezone

COPY . .

RUN npm i && npm run build:dist

EXPOSE 8080

CMD ["node", "./dist/server.js"]
