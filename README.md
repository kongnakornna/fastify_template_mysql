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


Run `pm2 dash`

# ติดตั้ง pm2

Run `npm install pm2 -g`

# สั่งให้ program ทำงาน

Run `pm2 start index.js ` // index.js คือ ชื่อโปรแกรม
Run `pm2 start index.js -n "Web app service `  
ในกรณีที่ต้องการให้ run ใน mode cluster ให้เติม parameter -i แล้วตามด้วยจำนวน instance ที่ต้องการเช่น
Run `pm2 start index.js -i 2 ` หมายถึง ทำเป็น cluster 2 ตัว
หรือ
Run `pm2 start index.js -i max ` หมายถึงทำเป็น cluster มากที่สุดเท่าที่ cpu รองรับ

เมื่อต้องการดูว่าตอนนี้ program เราทำงานเป็นยังไงใช้ ram กับ cpu เป็นอย่างไรบ้างแบบ real time สามารถทำได้โดยใช้คำสั่ง

Run `pm2 monit `

# Docker command line พื้นฐาน

## ถ้าเราจะ Push images ขึ้น Docker Registry จำเป็นต้อง login ก่อน

Run `docker login` ท่านี้เดี๋ยวมันจะถ้า username, password เราทีหลัง
Run `docker login -u saspallow -p password ` หรือสามารถกำหนดได้เลย
Run `docker login -u` หรือเดี๋ยวค่อยใส่ password ก็ได้
Run `docker logout ` อันนี้ก็คือการ Logout นั้นเองมันจะไปลบ Credentials ในเครื่องเรา
สำหรับเราเข้าไปจัดการ Docker hosts ของเรา
Run `docker-machine ssh default` default สามารถเปลี่ยนไปได้ตามชื่อ hosts นั้นๆ
Run `docker-machine start default`
Run `docker-machine restart default`

## docker images

Run `docker images` โชว์ images ในเครื่องเรามี images อะไรบ้าง
Run `docker images --no-trunc ` ชว์ Images ID แบบเต็มๆยาวพรืด
docker search <IMAGE>
Run `docker search appservice` ค้นหา images จาก Docker registry
docker pull <image name>
เลือก Docker image ได้ที่นี่

Run `docker pull appservice` ดึง images ที่เราระบุลงมาไว้ในเครื่อง

## docker run

Run `docker run -d -it --name mysql \ -h mysql \ -e MYSQL_ROOT_PASSWORD=password \ -p 3306:3306 \ -v /your_path/mysql:/var/lib/mysql`

# docker run -p 80:80 -d --name nginx -h nginx nginx

# ตอนเราสั่ง Run สามารถใส่ parameter ได้เยอะแยะเลย

`-d `//เหมือนเรา เวฟข้าวเซเว่น ไว้แล้วเสร็จเดี๋ยวเราค่อยมากินมัน
`-h ` //กำหนดชื่อ Container name ถ้าไม่ระบุมันจะตั้งชื่อ เท่ๆ มาให้เราเอง
`-e ` //กำหนด Environment ของ Container ต้องดูว่าแต่ล่ะ images มีอะไรให้เราเซ็ตบ้าง
`-p` //กำหนด ports ที่จะให้ Client คุยกับ Docker hosts
`-v` //Mount Volume จากใน Container(/var/lib/mysql) บอกว่าให้มาอ่านที่นี้นะ(your_path)

# docker ps

Run `docker ps` โชว์ container ที่กำลังทำงานในเครื่องเรา
Run `docker ps -a -s` ชว์ container ทั้งหมดทั้งที่กำลังทำงาน และ ไม่ได้ทำงานอยู่
Run `docker ps <CONTAINER_ID> ` โชว์ container โดยการระบุ conatiner id หรือ host name
`-s` // โชว์ Size Container

# docker cp

Run ` copy file from host to container docker cp /my_file.txt:/usr/local/`

Run `copy file from container to host docker cp <containerId>:/file/path/within/container /host/path/target`


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

 
