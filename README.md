## Template fastify framework : Vesion 1.0.0

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

# run typescript dev

Run `npx nodemon`

# build package

Run `nmp run build`

# Complice Type to js

Run `npx gulp`

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

Run `npm i --save fastify-oauth2 -S` // ต่อ google or facebook

https://github.com/ToonvanStrijp/fastify-oauth-server

Run `npm install fastify-oauth-server -S ` // ทำ oauth

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

## วิธีการ run node.js บน server ด้วย pm2

## pm2 service

https://pm2.keymetrics.io

Run `npm install pm2 -S`
Run `npm i pm2 install pm2-server-monit -S`

# คำสั่งสำหรับแสดง process ทั้งหมดใน server PM2

Run `pm2 list`

# คำสั่งสำหรับแสดงรายละเอียด process

Run `pm2 show `<id|name|all>

# คำสั่ง restart process

Run `pm2 restart `<id|name|all>

# คำสั่ง stop process

Run `pm2 stop `<id|name|all>

# คำสั่งดูรายละเอียดของเครื่อง server และ process ที่ทำงาน

Run `pm2 start dist\server.js --name "appservicev1"`

Run `pm2 dash`

-ติดตั้ง pm2
Run `npm install pm2 -g`  
-สั่งให้ program ทำงาน
Run `pm2 start index.js ` // index.js คือ ชื่อโปรแกรม
Run `pm2 start index.js -n "Web app service `  
ในกรณีที่ต้องการให้ run ใน mode cluster ให้เติม parameter -i แล้วตามด้วยจำนวน instance ที่ต้องการเช่น
Run `pm2 start index.js -i 2 ` หมายถึง ทำเป็น cluster 2 ตัว
หรือ
Run `pm2 start index.js -i max ` หมายถึงทำเป็น cluster มากที่สุดเท่าที่ cpu รองรับ

กรณีที่เรา start อยู่ใน mode cluster แล้วอยากจะปรับเปลี่ยนจำนวน instance เช่นอยากปรับจาก 2 เป็น 4

Run `pm2 start index -i 2 ` run program ใน mode cluster จำนวน 2 instance
Run `pm2 scale index 4 ` หมายถึงปรับจาก 2 เป็น 4
ในกรณีที่ต้องการหยุดการทำงานของโปรแกรมเราใช้คำสั่งดังนี้
Run `pm2 stop index` หยุดโปรแกรมตามชื่อที่กำหนด
Run `pm2 stop 0` หยุดโปรแกรมตาม id ที่กำหนด
Run `pm2 stop all ` หยุดโปรแกรมทั้งหมด

เนื่องด้วยการหยุดการทำงานของโปรแกรมนั้นเป็นการหยุดชั่วคราว ข้อมูล program เรายังคงค้างอยู่ใน pm2 หากเราต้องการถอนโปรแกรมเราออก ให้ใช้คำสั่งดังนี้

Run `pm2 delete index` ลบโปรแกรมตามชื่อที่กำหนด
Run `pm2 start ` ลบโปรแกรมตาม id ที่กำหนด
Run `pm2 delete all ` ลบโปรแกรมทั้งหมด

ในกรณีที่ต้องการ restart ให้คำสั่ง ดังนี้

Run `pm2 restart index ` restart โปรแกรมตามชื่อที่กำหนด
Run `pm2 restart 0 ` restart โปรแกรมตาม id ที่กำหนด
Run `pm2 restart all `restart โปรแกรมทั้งหมด

ในกรณีที่ต้องการ reload ให้คำสั่ง ดังนี้

Run `pm2 reload index` reload โปรแกรมตามชื่อที่กำหนด
Run ` pm2 reload 0` reload โปรแกรมตาม id ที่กำหนด
Run `pm2 reload all ` reload โปรแกรมทั้งหมด

ในกรณีที่ต้องการดูข้อมูลว่า process นั่นๆ ถูก start จากไหน แล้ว log เก็บไว้ที่ไหน

Run `pm2 info index ` แสดง information ของ program ตามชื่อที่กำหนด
Run `pm2 info 0 ` แสดง information ของ program ตาม id ที่กำหนด

pm2 จะแสดงข้อมูลต่างๆ เช่น status, name, uptime, และอื่นๆ สิ่งที่สำคัญและต้องใช้เสมอในการพัฒนา software ก็คือ log ซึ่งดูได้ที่ out log path, error log path โดยที่ pm2 จะเก็บ log เราไปเรื่อยๆ ในกรณีที่ต้องการ clear log ออกจาก pm2 สามารถทำได้โดยการใช้คำสั่ง ดังนี้

Run `pm2 flush `
ในกรณีที่เราต้องการให้ auto start program เราเมื่อ server เรา start ให้ใช้คำสั่งดังนี้

Run ` pm2 startup` หมายถึงเมื่อมีการ start server ให้ program เรา start ด้วย
Run `pm2 save` หมายถึงให้ pm2 เก็บข้อมูลทั้งหมดเพื่อใช้ตอน start

เมื่อต้องการดูว่าตอนนี้ program เราทำงานเป็นยังไงใช้ ram กับ cpu เป็นอย่างไรบ้างแบบ real time สามารถทำได้โดยใช้คำสั่ง
Run `pm2 monit `
