# fastify_template_mysql

# Appservice Vesion 1.0.0 By fastify framework

Use Nodejs with fastify framework and knexjs framework mysql database

- Nodejs
- Typescript
- Mysql database
- Mysql database CRUD
- Mongodb as mongoose
- Redis cache
- jwt && oauth2-server token Barer Header security allow access
- es5 ,es6

# Structure Code

## Nodejs Template fastify framework

# file

- |-.env.conf
- |-.dockerignore
- |-.gitignore
- |-.gitlab-ci
- |-config.conf
- |-Dockerfile
- |-gulpfile
- |-nodemon
- |-ormconfig
- |-package
- |-package-lock
- |-tsconfig
- |-README
- |-Node

# Directory

- |-node_modules
- |-public (your file directory )
- |-typings (typings from Typescript)
- |-upload (your file directory )
- |-views ( template from ejs ot html )
- |-assets ( css image template file)
- src
- |-app.ts
- |-router.ts
- |-server.ts
- └── plugins (from the Fastify ecosystem)
- └── controllers
- └── models
- └── decorators
- └── schemas
- └── hooks
- │ └── middlewares
- └── modules
- │ └── your modules1 service A
- │ | └── controllers (your main function)
- │ | └── models (your custom database function)
- │ | └── entity
- │ | └── hooks
- │ | └── libraries
- │ | └── utils
- │ └── your modules2 service B
- │ | └── controllers (your main function)
- │ | └── models (your custom database function)
- │ | └── entity
- │ | └── hooks
- │ | └── libraries
- │ | └── utils
- │ └── your modules3 service C
- │ | └── controllers (your main function)
- │ | └── models (your custom database function)
- │ | └── entity
- │ | └── hooks
- │ | └── libraries
- │ | └── utils
- │
- └── system
- │ └── core (from the Fastify ecosystem)
- │ └── database (your custom code)
- │ └── decorators (your custom code)
- │ └── entity (your custom code)
- │ └── helpers (your custom code)
- │ └── language (your custom code)
- │ └── libraries (from the Fastify ecosystem)
- │ └── middleware (from the Fastify ecosystem or your custom)
- │ └── migration (your custom plugins)
- │ └── plugins (your custom plugins)
- │ └── subscribers (your custom code)
- │ └── vendor (your custom code)

# Structure Code

## fastify_template_mysql

- typescript
- typeorm
- knex.js
- jwt token
- json schema validation
- build swagger documentation from routes
- integration tests

This project created by Node JS version 14.17.0. Used Fastify framework+ Express framework for connect to server Coding by Typescript and Testing by Jest

- Run on port 8002 this port is fix by bible team and infrastructor team so you should not change it

# Base URL

This project have 3 step running such as

- │ └──[localhost](localhost:8002),
- │ └──[localhost](127.0.0.1:8002),
- │ └──[dev](http://0.0.0.0:8002/appapi/),
- │ └──[production](https://xxx.com)

- About dev which is private url you must connect Pulse Secure before running

# Database

- Database as MySQL version 5.6.20 and Mongodb

# Cache use

- Redis
- memcache
- cache file

# Storage

On directory `public` and now is not available because this storage need server team allow to access

# Install Template Project

Run `npm i` for a local your pc

# install redis

Run `npm install redis`

# Development server

Run `npx nodemon` for a dev server. Navigate `localhost:8002`. The app will automatically reload if you change any of the source files.

# Testing

Run `npm install fastify && npm install tap pino-pretty --save-dev`
│ └─for a test available my code should run this commnad for sure before deploy on dev or production service


# run typescript dev

Run `npx nodemon`

# build package Build Source Code on production

Run `npx gulp `

# Run app on pm2

Run `pm2 start dist\sever.js --name "yous name app" ` up to your

# Deploy on Dev or production

Step Deploy you should change version in base url as GET. This project is CI/CD and Jenkins.
So you can deploy on Dev via push code to gid branch name `dev` and build in Jenkins

# Deploy on Production

Before Deploy you should change version in base url as GET. This project is CI/CD and Jenkins. So you can deploy on Production via push code to gid branch name `main` and build in Jenkins


## Test restful api software

- https://insomnia.rest/download
- https://www.postman.com/downloads


# Developed By

## Kongnakorn Jantakun

# Contact information

- Mr Kongnakorn Jantakun
- Email kongnakornjantakun@gmail.com
- Mobile No. +66955088091
- คงนคร จันทะคุณ (นะ)




# Remark 
## Tools app dev or CI/CD

- CI/CD คืออะไร?

- CI/CD เป็นวิธีการที่ช่วยให้เราสามารถสร้าง Application ให้ลูกค้าได้ใช้งานด้วยการเอาระบบอัตโนมัติไปใส่ไว้ในขั้นตอนของการพัฒนา - Application ครับ ซึ่งเป็นแนวคิดที่ช่วยลดปัญหาในการ Merge Code ใหม่ ๆ ของเหล่า Developer และปัญหาระหว่างทีม Development และทีม Operation ก่อนที่ Deploy ไปยัง Production ครับ

- https://github.com
- https://gitlab.com

- https://www.jenkins.io
- https://www.docker.com
- https://kubernetes.io

## Tools Develop

- https://code.visualstudio.com/insiders
- https://www.navicat.com/en

## Project management

- https://trello.com
- https://www.atlassian.com

## Iot Dev

- https://nodered.org

## socket

- https://socket.io/docs/v3/client-installation/index.html

## List document

- https://www.fastify.io
- https://knexjs.org
- https://nextjs.org/docs/advanced-features/custom-document
- crud -> https://developer.okta.com/blog/2019/09/09/build-crud-app-node-mysql
- https://www.infoq.com/articles/typescript-mysql/
- https://typeorm.io/
- https://mongoosejs.com/docs
- https://expressjs.com/en/starter/installing.html
- https://reactjs.org
- https://angular.io
- https://nodejs.org/en/docs
- https://reactnative.dev/docs/getting-started
- https://www.typescriptlang.org/docs
- https://dev.mysql.com/doc
- https://docs.mongodb.com/manual
- https://www.npmjs.com/package/jsonwebtoken
- https://www.bezkoder.com/react-node-express-mysql
- https://futureskill.co
- https://www.udemy.com
- https://github.com/fastify/fastify-oauth2
- https://medium.com/@shijin_nath/typescript-rest-api-with-express-js-mysql-and-typeorm-8331cea78b0c

Run `npm i --save fastify-oauth2 -S` // ต่อ google or facebook

- https://github.com/ToonvanStrijp/fastify-oauth-server

Run `npm install fastify-oauth-server -S ` // ทำ oauth

- https://github.com/fastify/fastify-mongodb

Run `npm i --save fastify-oauth2 -S`

- https://github.com/fastify/fastify-oauth2

# Oauth2

- https://www.npmjs.com/package/oauth2-server
- https://github.com/14gasher/oauth-example
- https://www.npmjs.com/package/oauth2-server-typescript

Run `npm install oauth2-server -S`

- https://oauth2-server.readthedocs.io/en/latest/misc/migrating-v2-to-v3.html

# client-oauth2

- https://www.npmjs.com/package/client-oauth2

 
