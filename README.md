## fastify framework : Vesion 1.0.0

Use Nodejs with fastify framework and knexjs framework mysql database
-Nodejs
-Typescript
-Mysql database
-Mongodb as mongoose
-Redis cache
-jwt && oauth2-server token Barer Header security allow access
-es5 ,es6

## Structure Code

## Nodejs Template fastify framework

## file

|-.env.conf
|-.dockerignore
|-.gitignore
|-.gitlab-ci
|-config.conf
|-Dockerfile
|-gulpfile
|-nodemon
|-ormconfig
|-package
|-package-lock
|-tsconfig
|-README
|-Node

## directory

|-node_modules
|-public (your file directory )
|-typings (typings from Typescript)
|-upload (your file directory )
|-views ( template from ejs ot html )
|-assets ( css image template file)
src
└── plugins (from the Fastify ecosystem)
└── controllers
└── models
└── decorators
└── schemas
└── hooks  
│ └── middlewares
└── modules
│ └── your modules1 service A
│ | └── controllers (your main function)
│ | └── models (your custom database function)
│ | └── entity
│ | └── hooks
│ | └── libraries
│ | └── utils
│ └── your modules2 service B
│ | └── controllers (your main function)
│ | └── models (your custom database function)
│ | └── entity
│ | └── hooks
│ | └── libraries
│ | └── utils
│ └── your modules3 service C
│ | └── controllers (your main function)
│ | └── models (your custom database function)
│ | └── entity
│ | └── hooks
│ | └── libraries
│ | └── utils
│
└── system
│ └── core (from the Fastify ecosystem)
│ └── database (your custom code)
│ └── decorators (your custom code)
│ └── entity (your custom code)
│ └── helpers (your custom code)
│ └── language (your custom code)
│ └── libraries (from the Fastify ecosystem)
│ └── middleware (from the Fastify ecosystem or your custom)
│ └── migration (your custom plugins)
│ └── plugins (your custom plugins)
│ └── subscribers (your custom code)
│ └── vendor (your custom code)

## Structure Code

## fastify_template_mysql

- typescript
- typeorm
- knex.js
- jwt token
- json schema validation
- build swagger documentation from routes
- integration tests

This project created by Node JS version 14.17.0. Used Fastify framework+ Express framework for connect to server Coding by Typescript and Testing by Jest

Run on port 8001 this port is fix by bible team and infrastructor team so you should not change it

## Base URL

This project have 3 step running such as
│ └──[localhost](localhost:8001),
│ └──[localhost](127.0.0.1:8001),
│ └──[dev](http://0.0.0.0:8001/appapi/),
│ └──[production](https://xxx.com)

About dev which is private url you must connect Pulse Secure before running

## Database

Database as MySQL version 5.6.20 and Mongodb

## Storage

On directory `public` and now is not available because this storage need server team allow to access

## Install Template Project

Run `npm i` for a local your pc

## Development server

Run `npx nodemon` for a dev server. Navigate `localhost:8001`. The app will automatically reload if you change any of the source files.

## Testing

Run `npm install fastify && npm install tap pino-pretty --save-dev`
│ └─for a test available my code should run this commnad for sure before deploy on dev or production service

## Run Dev Source Code project

Run ` npx nodemon`

## Build Source Code on production

Run `npx gulp `

## Run app on pm2

Run `pm2 start dist\sever.js --name "yous name app" ` up to your

## Deploy on Dev or production

Step Deploy you should change version in base url as GET. This project is CI/CD and Jenkins.
So you can deploy on Dev via push code to gid branch name `dev` and build in Jenkins

## Deploy on Production

Before Deploy you should change version in base url as GET. This project is CI/CD and Jenkins. So you can deploy on Production via push code to gid branch name `main` and build in Jenkins

## Developed By

## Contact me

Mr kongnakorn jantakun  
Email kongnakornjantakun@gmail.com
Mobile No. +66955088091
โดย คงนคร จันทะคุณ

## pm2 service

https://pm2.keymetrics.io

npm install pm2 -S
npm i pm2 install pm2-server-monit -S

# คำสั่งสำหรับแสดง process ทั้งหมดใน server PM2

pm2 list

# คำสั่งสำหรับแสดงรายละเอียด process

pm2 show <id|name|all>

# คำสั่ง restart process

pm2 restart <id|name|all>

# คำสั่ง stop process

pm2 stop <id|name|all>

# คำสั่งดูรายละเอียดของเครื่อง server และ process ที่ทำงาน

pm2 start dist\server.js --name "appservicev1"

pm2 dash

#

run typescript

#

ren dev

#

npx nodemon

#

build package

#

nmp run build

#

Complice Type to js

#

npx gulp

## 127.0.0.1 : 8001

## Tools app dev

https://insomnia.rest/download
https://www.jenkins.io/
https://www.docker.com/

## List document

https://www.fastify.io/
https://knexjs.org/
https://nextjs.org/docs/advanced-features/custom-document
https://typeorm.io/#/
https://expressjs.com/en/starter/installing.html
https://reactjs.org/
https://angular.io/
https://nodejs.org/en/docs/
https://reactnative.dev/docs/getting-started
https://www.typescriptlang.org/docs/
https://dev.mysql.com/doc/
https://docs.mongodb.com/manual/
https://www.npmjs.com/package/jsonwebtoken

https://www.bezkoder.com/react-node-express-mysql/

https://futureskill.co/
https://www.udemy.com/

https://github.com/fastify/fastify-oauth2
npm i --save fastify-oauth2 -S // ต่อ google or facebook

https://github.com/ToonvanStrijp/fastify-oauth-server
npm install fastify-oauth-server -S // ทำ oauth

https://github.com/fastify/fastify-mongodb

npm i --save fastify-oauth2 -S
https://github.com/fastify/fastify-oauth2

## oauth2

https://www.npmjs.com/package/oauth2-server -https://github.com/14gasher/oauth-example

https://www.npmjs.com/package/oauth2-server-typescript
npm install oauth2-server
npm install oauth2-server -S
https://oauth2-server.readthedocs.io/en/latest/misc/migrating-v2-to-v3.html

## client-oauth2

https://www.npmjs.com/package/client-oauth2
