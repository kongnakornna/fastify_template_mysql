# fastify_template_mysql

# Fastify vs TypeORM: อะไรคือความแตกต่าง?

- Fastify: กรอบเว็บที่รวดเร็วและมีค่าใช้จ่ายต่ำสำหรับ Node.js Fastify เป็นเว็บเฟรมเวิร์กที่เน้นความเร็วและค่าใช้จ่ายต่ำ มันได้รับแรงบันดาลใจจาก Hapi และ Express และเท่าที่เรารู้ มันเป็นหนึ่งในเฟรมเวิร์กเว็บที่เร็วที่สุดในเมือง ใช้ Fastify สามารถเพิ่มปริมาณงานของคุณได้มากถึง 100%; TypeORM: ออมที่สามารถทำงานใน NodeJS และอื่น ๆ รองรับทั้งรูปแบบ Active Record และ Data Mapper ซึ่งแตกต่างจาก JavaScript ORM อื่น ๆ ที่มีอยู่ในปัจจุบัน ซึ่งหมายความว่าคุณสามารถเขียนแอปพลิเคชันคุณภาพสูง ควบคู่กันอย่างหลวม ๆ ปรับขนาดได้ และรักษาได้ด้วยวิธีที่มีประสิทธิผลมากที่สุด

- Fastify และ TypeORM อยู่ในหมวด"Microframeworks (Backend)"ของ Tech stack

- คุณสมบัติบางอย่างที่ Fastify คือ:

- อะซิงโครนัส 100%: คอร์ทั้งหมดถูกนำไปใช้กับโค้ดแบบอะซิงโครนัส ด้วยวิธีนี้จะไม่สูญเปล่าแม้แต่เสี้ยววินาที
มีประสิทธิภาพสูง: เท่าที่เราทราบ Fastify เป็นหนึ่งในเฟรมเวิร์กเว็บที่เร็วที่สุด แต่ ขึ้นอยู่กับความซับซ้อนของโค้ดของเรา
ให้ ตอบสนองกลับ 20000 คำขอ ต่อวินาที  (we can serve up to 20000 request per second.)
ขยายได้: Fastify ขยายได้อย่างเต็มที่โดยใช้  ปลั๊กอิน และเครื่องตกแต่ง
- ในทางกลับกัน TypeORM มีคุณสมบัติหลักดังต่อไปนี้:
# TypeORM มีคุณสมบัติหลัก

- automatically create the database table schemes based on your models
- transparently insert / update / delete to the database your objects
- map your selections from tables to JavaScript objects and map table columns to object properties
- สร้างโครงร่างตารางฐานข้อมูลโดยอัตโนมัติตามโมเดล insert / update / delete ไปยังฐานข้อมูล 
แมปการเลือกของคุณจากตารางไปยังออบเจ็กต์ JavaScript และแมปคอลัมน์ตารางกับคุณสมบัติของออบเจ็กต์
- Fastify และ TypeORM เป็นทั้งเครื่องมือโอเพ่นซอร์ส ดูเหมือนว่ามีการ TypeORM 14.4K GitHub ดาวและ1.85Kส้อมบน GitHub มีการยอมรับมากกว่า 

- Fastify vs TypeORM: What are the differences?

Fastify: Fast and low overhead web framework, for Node.js. Fastify is a web framework highly focused on speed and low overhead. It is inspired from Hapi and Express and as far as we know, it is one of the fastest web frameworks in town. Use Fastify can increase your throughput up to 100%; TypeORM: An ORM that can run in NodeJS and others. It supports both Active Record and Data Mapper patterns, unlike all other JavaScript ORMs currently in existence, which means you can write high quality, loosely coupled, scalable, maintainable applications the most productive way.

Fastify and TypeORM belong to "Microframeworks (Backend)" category of the tech stack.

Some of the features offered by Fastify are:

100% asynchronous: all the core is implemented with asynchronous code, in this way not even a millisecond is wasted.
Highly performant: as far as we know, Fastify is one of the fastest web frameworks in town, depending on the code complexity we can serve up to 20000 request per second.
Extendible: Fastify is fully extensible via its hooks, plugins and decorators.
On the other hand, TypeORM provides the following key features:

automatically create the database table schemes based on your models
transparently insert / update / delete to the database your objects
map your selections from tables to JavaScript objects and map table columns to object properties
Fastify and TypeORM are both open source tools. It seems that TypeORM with 14.4K GitHub stars and 1.85K forks on GitHub has more adoption than Fastify with 11.5K GitHub stars and 708 GitHub forks.

According to the StackShare community, Fastify has a broader approval, being mentioned in 9 company stacks & 25 developers stacks; compared to TypeORM, which is listed in 9 company stacks and 22 developer stacks.

# Pros of Fastify Performance
- Easy to use
- Middleware
- Lightweight
- Open source
- Highly customizable (ปรับแต่งได้)
- Built-in Typescript support 
- Mature (-)
- Schema based (-)
- Decorators ( สถาปัตยากรรมม ดี)
- Developer friendly ( ป็นมิตร กับ นักพัฒนา )
- Plugins
- Low overhead ,Low overload

# Pros of TypeORM Performance
- Typescript
- Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Ser
- Easy setup
- Support MySQL & MariaDB, PostgreSQL, MSSQL, Sqlite
- Works in NodeJS, Browser, Ionic, Cordova and Electron p
- Promise Based
- ข้อเสียของ TypeORM (Cons of TypeORM)
  - Completely abandoned by its creator ( ไม่ยืดหยุ่น )
  - Doesn't really support native javascript (ไม่รองรับจาวาสคริปต์ดั้งเดิม)
  - Cannot use query on any relation (ทำ query relation ยากมาก )

# template for dev backend Vesion 1.0.0 By fastify framework

# Use Nodejs with fastify framework and knexjs framework mysql database

# fastify_appsservice
- https://www.npmjs.com/package/fastify-typeorm
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

- file
- ├─.env.conf
- ├─.dockerignore
- ├─.gitignore
- ├─.gitlab-ci
- ├─config.conf
- ├─Dockerfile
- ├─gulpfile
- ├─nodemon
- ├─ormconfig
- ├─package
- ├─tsconfig
- ├─README
- ├─Node

# Directory

- directory
- ├─node_modules
- ├─public (your file directory )
- ├─typings (typings from Typescript)
- ├─upload (your file directory )
- ├─views (template from ejs ot html )
- ├─assets (css image template file)
- src
- ├─app.ts
- ├─router.ts
- ├─server.ts
- ├─plugins (from the Fastify ecosystem)
- ├─controllers
- ├─models
- ├─decorators
- ├─schemas
- ├─hooks
- │ └─middlewares
- ├─modules
- │ ├─your modules1 service A
- │ | ├──controllers (your main function)
- │ | ├──models (your custom database function)
- │ | ├──entity
- │ | ├──hooks
- │ | ├──libraries
- │ | └──utils
- │ ├─your modules2 service B
- │ | ├──controllers (your main function)
- │ | ├──models (your custom database function)
- │ | ├──entity
- │ | ├──hooks
- │ | ├──libraries
- │ | └──utils
- │ ├─your modules3 service C
- │ | ├──controllers (your main function)
- │ | ├──models (your custom database function)
- │ | ├──entity
- │ | ├──hooks
- │ | ├──libraries
- │ | └──utils
- ├─system
- │ ├──core (from the Fastify ecosystem)
- │ ├──database (your custom code)
- │ ├──decorators (your custom code)
- │ ├──entity (your custom code)
- │ ├──helpers (your custom code)
- │ ├──language (your custom code)
- │ ├──libraries (from the Fastify ecosystem)
- │ ├──middleware (from the Fastify ecosystem or your custom)
- │ ├──migration (your custom plugins)
- │ ├──plugins (your custom plugins)
- │ ├──subscribers (your custom code)
- │ └──vendor (your custom code)

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
`npm install -g nodemon`
Run `npx nodemon` for a dev server. Navigate `localhost:8002`. The app will automatically reload if you change any of the source files.

# Testing

Run `npm install fastify && npm install tap pino-pretty --save-dev`
│ └─for a test available my code should run this commnad for sure before deploy on dev or production service

# Run Dev Source Code project

Run ` npx nodemon`

# Build Source Code on production

Run `npx gulp `

# Run app on pm2

Run `pm2 start dist\sever.js --name "yous name app" ` up to your

# Deploy on Dev or production

Step Deploy you should change version in base url as GET. This project is CI/CD and Jenkins.
So you can deploy on Dev via push code to gid branch name `dev` and build in Jenkins

# Deploy on Production

Before Deploy you should change version in base url as GET. This project is CI/CD and Jenkins. So you can deploy on Production via push code to gid branch name `main` and build in Jenkins

# Developed By

## Kongnakorn Jantakun

# Contact information

- Mr Kongnakorn Jantakun
- Email kongnakornjantakun@gmail.com
- Mobile No. +66955088091
- คงนคร จันทะคุณ (นะ)

# run typescript dev

Run `npx nodemon`

# build package

Run `nmp run build`

# Complice Type to js

Run `npx gulp`

## 127.0.0.1 : 8002

## Test restful api software

- https://insomnia.rest/download
- https://www.postman.com/downloads

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
- https://www.codegrepper.com/code-examples/
- https://www.codegrepper.com/code-examples/javascript
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

# วิธีการ run node.js บน server ด้วย pm2

## pm2 service

- https://pm2.keymetrics.io

Run `npm install pm2 -S`
Run `npm i pm2 install pm2-server-monit -S`

# คำสั่งสำหรับแสดง process ทั้งหมดใน server PM2

Run `pm2 list`

# คำสั่งสำหรับแสดงรายละเอียด process

Run `pm2 show `<id|name|all>

# คำสั่ง restart process

Run `pm2 restart `<id|name|all> // pm2 restart 0

# คำสั่ง stop process

Run `pm2 stop `<id|name|all>

# คำสั่งดูรายละเอียดของเครื่อง server และ process ที่ทำงาน

Run `pm2 start dist\server.js --name "appservicev1"`

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

# รวม Docker command line พื้นฐาน

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

# docker rm

Run `docker rm <CONTAINER_ID> ` ลบ container ที่ระบุ, running อยู่ไม่ได้นะจ๊ะ ไม่งั้นมันจะบ่นเรา ให้ไป stop ซ่ะ หรือ
Run `docker rm -f ` // บังคับลบมันสะเลย

# docker rmi <IMAGE_ID>

Run `docker rmi <IMAGE_ID> ` ลบ docker images, ถ้ามี container ไหนใช้งานอยู่ไม่สามารถลบได้

# docker start <CONTAINER_ID>

Run `docker start <CONTAINER_ID> ` start container ที่stop อยู่นะไม่ใช่การ run images

# docker stop <CONTAINER_ID>

Run `docker stop <CONTAINER_ID> docker stop <CONTAINER_ID> <CONTAINER_ID> <CONTAINER_ID> ` Multiple
หยุดการทำงานของ container ไม่ใช่ remove นะลองพิมพ์ docker ps -a

# docker pause <CONTAINER_ID>

Run `docker pause <CONTAINER_ID>` เหมือนเราแช่แข็ง container ไว้
Run `docker unpause <CONTAINER_ID>` เอาของที่แช่แข็งไว้มาทำไร ต่อ...

# docker exec

Run `docker exec -it <CONTAINER_ID> bash` เข้าไป console container

# docker inspect

Run `docker inspect <CONTAINER_ID>` รายละเอียดของ container มีให้ดูเต็มไปหมด

# docker logs

Run `docker logs` # โชว์ Logs container

# docker commit <CONTAINER_ID> <NEW IMAGE NAME>

Run `docker commit <CONTAINER_ID> <NEW IMAGE NAME>` Ex. docker commit 2x5t aloha

# docker push

Run `docker push <ACCOUNT>/<NAME_IMAGE>` Push imges เราขึ้น Docker registry

# docker tag

Run `docker tag ubuntu ubuntu-x` ไม่กำหนด tag จะเป็น latest นะจ๊ะ
Run `docker tag ubuntu ubuntu-x:2`

# Docker import-export and save-load images

`docker export - saves a container's running or paused instance to a file docker save - saves a non-running container image to a file`

`Export, Import ` ไว้ export container ที่ running or paused อยู่ได้
Run `docker export <CONTAINER ID> > <To PATH> docker import - <FROM PATH>`
docker export — saves a container’s running or paused instance to a file

`-- Save, Load ` ไไว้แชร์ images ให้เพื่อนโดยการไม่ต้อง push ขึ้น Docker registry
Run `docker save <IMAGE NAME> > <To PATH> docker save <IMAGE NAME>:<TAG> > <To PATH> docker load < <FROM PATH>`

# Docker Network

Run `docker network ls docker network create <NETWORK NAME> default bridge docker network create --subnet 10.0.0.1/24 <NETWORK NAME> docker network inspect <NETWORK Name or Conatiner ID> docker network create my-net (create images networks) docker run --network <NETWORK_NAME> <IMAGE NAME> docker run -it --name <CONTAIN_NAME> --net--alias alias2 --network <NETWORK_NAME> <IMAGE NAME> `

# Docker Compose

Run `docker-compose up -d --build ` --build คือ Build ของใน Dockerfile ใหม่
Run `docker-compose up --force-recreate docker-compose ps docker-compose scale web=5 docker-compose stop docker-compose rm`

# Tips and Tricks

Run `docker rmi $(docker images --filter "dangling=true" -q --no-trunc) `
// Remove old and unused Docker images
// เนื่องจาก ผมใช้ docker compose build บ่อยจนเจอ พวกชื่อ images <none> เลยต้องการวิธีลบทีเดียวไปเลย ได้ไม่เสียเวลาลบทีละตัว

Run `docker rm $(docker ps -a -q) ` ลบ Container ทั้งหมดที่ Stop อยู่
Run `docker stop $(docker ps -a -q) ` หยุดการทำงาน Container ทั้งหมด

# ssh default username, password

Run `username: docker password: tcuser`

# how to set proxy in docker toolbox

Run `docker-machine ssh default sudo vi /var/lib/boot2docker/profile export "HTTP_PROXY=PROXY:PORT" export "HTTPS_PROXY=PROXY:PORT"`

# Docker parameter

-คำสั่ง `-d //Run in the background.`
-คำสั่ง `-p `Port mapping, local_port:container_port
-คำสั่ง `-h` Container host name
-คำสั่ง `-e ` Environment
-คำสั่ง `-v` Map volume paths
-คำสั่ง `-i` Keep STDIN open even if not attached
-คำสั่ง `-t` Allocate a pseudo-TTY

kwyword

fastify how to Stop processing handler after reply

-คำสั่ง `npm install middie -S`
-คำสั่ง `npm i fastify-express -S`
-คำสั่ง `npm i fastify-swagger --save`
-คำสั่ง `npm install --save fastify-static --save`

Run `npm run build`

https://github.com/jprichardson/node-fs-extra

npm i ts-node-dev --save-dev

import {createConnections} from "typeorm";
const connections = createConnections([{
name: "db1Connection",
type: "mysql",
host: env.DB1_HOST,
port: Number(env.DB21_PORT),
username: env.DB1_USER,
password: env.DB1_PASSWORD,
database: env.DB1_NAME,
entities: ["src/system/entity/**/*.ts" ],
migrations: ["src/system/migration/**/*.ts"],
subscribers: ["src/system/subscriber/**/*.ts"],
synchronize: true
}, {
name: "db2Connection",
type: "mysql",
host: env.DB2_HOST,
port: Number(env.DB2_PORT),
username: env.DB2_USER,
password: env.DB2_PASSWORD,
database: env.DB2_NAME,
entities: ["src/system/entity/**/*.ts" ],
migrations: ["src/system/migration/**/*.ts"],
subscribers: ["src/system/subscriber/**/*.ts"],
synchronize: true
}]);

import { createConnection } from 'typeorm';
createConnection({
type: "mysql",
host: env.DB3_HOST,
port: Number(env.DB3_PORT),
username: env.DB3_USER,
password: env.DB3_PASSWORD,
database: env.DB3_NAME,
entities: ["src/system/entity/**/*.ts" ],
migrations: ["src/system/migration/**/*.ts"],
subscribers: ["src/system/subscriber/**/*.ts"],
//logging: true,
//synchronize: true
}).then(connection => {console.log("TypeORM is Database Connection : " + env.DB3_NAME + ' :', connection.isConnected)
}).catch(error => console.log("TypeORM error Connection : " + env.DB3_NAME+' error' + error));

https://www.infoq.com/articles/typescript-mysql/

    ob_clean();
    header('Content-Type: application/json; charset=utf-8');
    date_default_timezone_set('Asia/Bangkok');
    header('Access-Control-Allow-Origin: *');

http://127.0.0.1:8002

http://localhost:8002

npx nodemon
npx gulp
pm2 start dist\server.js --name "ap1"
pm2 list  
pm2 stop all
pm2 monit  
pm2 reload all

 
- มี Unit test coverage ในทุกจุดที่สำคัญ
- ใช้ ORM ในการ map database object


/*
└── plugins (from the Fastify ecosystem)
└── your plugins (your custom plugins)
└── decorators
└── hooks
└── modules 
    │
    └──  service A
    │     └── plugins (from the Fastify ecosystem)
    │     └── your plugins (your custom plugins)
    │     └── decorators
    │     └── hooks
    │     └── controllers your services
    │
    └──  service B
          └── plugins (from the Fastify ecosystem)
          └── your plugins (your custom plugins)
          └── decorators
          └── hooks
          └── controllers your services

        var statusCode = error.statusCode
        if (statusCode >= 500) {
        log.error(error)
        } else if (statusCode >= 400) {
        log.info(error)
        } else {
        log.error(error)
        }

const token = fastify.jwt.sign({ foo: 'bar' })
const decoded = fastify.jwt.decode(token)
*/

# new update 
- typeorm
- https://typeorm.io
- https://knexjs.org
- https://www.codegrepper.com/search.php?q=typeorm
- https://www.codegrepper.com/search.php?q=knexjs
- https://www.stackshare.io/stackups/fastify-vs-typeorm

#  Promise คืออะไร
   - Promise เป็นออบเจ็คที่ส่งค่ากลับเป็นผลสำเร็จ (Resolve) หรือผลล้มเหลว (Reject) ของการทำงานแบบ Asynchronous มันสามารถช่วยลดความซับซ้อนและทำให้การเขียนโปรแกรมในรูปแบบ Asynchronous ทำได้ง่ายขึ้น และ Promise เป็นรูปแบบใหม่สำหรับการเขียนโปรแกรมที่ทำงานแบบ Asynchronous ในภาษา JavaScript

    ในภาษา JavaScript ฟังก์ชันที่ทำงานแบบ Asynchronous จะต้องการฟังก์ชัน Callback เมื่อการทำงานเสร็จสิ้น การใช้งาน Promise การใช้งาน Promise สามารถช่วยลดการใช้ฟังก์ชัน Callback เพื่อทำให้มันเรียบง่ายขึ้นได้ และมันสามารถใช้ร่วมกับคำสั่ง Async/Await เพื่อทำให้การทำงานเป็นแบบ Synchronous

    - ในการทำงานของ Promise มันสามารถให้ผลลัพธ์การทำงานได้สองรูปแบบนั่นคือ

    - การทำงานที่สำเร็จ (Resolve)
    - การทำงานที่ล้มเหลว (Reject)
    - และเมื่อต้องการทราบผลลัพธ์การทำงานของ Promise เราสามารถตรวจสอบผลลัพธ์จากออบเจ็คของ Promise ได้โดยการใช้ Consumer เมธอดอย่าง then และ catch
        promise_resolve.js
        let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('Hello');
        }, 1000); 
        });

        promise.then(value => {
            console.log(`Resolved: ${value}`);
        });

        console.log('Main program');
        นี่เป็นผลลัพธ์การทำงานของโปรแกรม

        Main program
        Resolved: Hello

        นั่นหมายความว่าเมื่อเราต้องการให้ Promise ทำงานสำเร็จ เราเรียกใช้ฟังก์ชัน resolve พร้อมกับค่าที่ต้องการส่งค่ากลับ ในกรณีนี้คือข้อความ 'Hello' และในตัวอย่างนี้ ยังไม่ได้มีการใช้งานฟังก์ชัน reject ซึ่งเราจะทำมันในภายหลัง

    promise.then(value => {
        console.log(`Resolved: ${value}`);
    });
    เพื่อตรวจสอบการทำงานของ Promise เราเรียกใช้เมธอด then บนออบเจ็คของ Promise และมันจะถูกเรียกใช้งานเมื่อ Promise ทำงานเสร็จสิ้นหรือเมธอด resolve ถูกเรียกใช้งาน เรากำหนดฟังก์ชัน Callback ที่รับหนึ่งพารามิเตอร์ value ที่เป็นค่าส่งกลับของ Promise

    นั่นหมายความว่าเมื่อเวลาผ่านไป 1 วินาที ฟังก์ชัน Callback ที่กำหนดให้กับเมธอด then จะถูกเรียกใช้งานโดยได้รับข้อความ Hello ที่ส่งมาจากการทำงานสำเร็จของ Promise และผลลัพธ์ที่ได้ถูกนำมาแสดงออกทางหน้าจอ

    Promise rejection
    อย่างที่บอกไปแล้วว่า Promise สามารถทำงานสำเร็จหรือล้มเหลวได้ ในกรณีที่สำเร็จ ฟังก์ชัน resolve จะถูกเรียกใช้งานพร้อมกับส่งค่ากลับมา ส่วนในกรณีที่ Promise ทำงานล้มเหลวนั้นสามารถเกิดขึ้นได้สองกรณีดังต่อไปนี้

    เกิดจากเรียกใช้ฟังก์ชัน reject เราสามารถเรียกใช้ฟังก์ชันนี้โดยตรงเพื่อทำให้ Promise ทำงานล้มเหลวได้
    เกิดจากโปรแกรมที่ทำงานผิดพลาดที่เกิดการ throw error ขึ้น ซึ่งนี่เป็นการเกิดข้อผิดพลาดปกติในภาษา JavaScript และเมื่อเกิดใน Promise มันทำให้เกิดจาก Reject
    โดยทั้งสองกรณีคือการทำงานล้มเหลวของ Promise หรือ Promise rejection และเราสามารถใช้เมธอด catchเพื่อรับมือกับการทำงานที่ล้มเหลวของ Promise ได้ ในตัวอย่างนี้ แสดงการทำงานของ Promise ที่สามารถทำงานสำเร็จ (Resolve) และล้มเหลว (Reject)

    rejecting_promise.js
    function evenPromise(number) {
        return new Promise((resolve, reject) => {
            if (number % 2 == 0) {
                resolve(`${number} is an even number`);
            } else {
                reject(new Error(`${number} is not an even number`))
            }
        });
    }

    evenPromise(2).then((value) => {
        console.log(value);
    }).catch(err => {
        console.log(err.toString());
    });

    evenPromise(3).then((value) => {
        console.log(value);
    }).catch(err => {
        console.log(err.toString());
    });

#  Promise โดยใช้ async / await ช่วยดังนี้
    อธิบาย code คือ เราจะใช้ await เพื่อบอกว่า function นั้นมีการทำงานแบบ async ให้รอผลลัพธ์ก่อนแล้วค่อยไปทำ function ถัดไป หากเราจะใช้ await เราจำเป็นต้องประกาศ function เราให้เป็น async เสียก่อนนะครับ ในกรณีที่เราไม่ต้องการเขียนแบบ Promise เราก็สามารถ ประกาศ function เราให้อยู่ในรูปแบบ async ได้

 


