import app from './app'
import * as path from 'path'
/************../config.conf**************/
// const envPath = path.join(__dirname, '../config.conf') 
/* ./config.conf */
const envPath = path.join(__dirname, '../config.conf') 
const env = process.env 
const opts = {}
const address: any = env.address || '127.0.0.1'
const port_main :any =  env.PORT  || 8002
/***********redis**************/
'use strict'
var redis = require('redis').createClient({ host:  env.redis_host || 'localhost',port: env.redis_port || 6379 })
app.register(require('fastify-redis'), {
    host:  env.redis_host || 'localhost',
    port: env.redis_port || 6379,
    namespace: 'hello'
  })
  .register(require('fastify-redis'), {
    client: redis,
    namespace: 'world'
  })
/***********redis**************/

var start = async () => {
  try {
    await app.listen(port_main, address)
      console.log(' app register :'+app.register)
      console.log('Server listening on ' + address + ':' + port_main)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}
start()



/***********Command run***************/
/*
# instrall
 Run `npm i` 
# Dev Source Code project
Run ` npx nodemon`
# Build Source Code on production
Run `npx gulp `

pm2 start dist\server.js --name "ap1"
pm2 list   
pm2 start 0 
pm2 stop 0      
pm2 monit        
*/

/* 
Comment
file
├─.env.conf
├─.dockerignore
├─.gitignore
├─.gitlab-ci
├─config.conf
├─Dockerfile
├─gulpfile
├─nodemon
├─ormconfig
├─package
├─package-lock
├─tsconfig
├─README
├─Node

directory
├─node_modules
├─public (your file directory )
├─typings (typings from Typescript)
├─upload (your file directory )
├─views ( template from ejs ot html )
├─assets ( css image template file)
src
├─app.ts
├─router.ts
├─server.ts
├─plugins (from the Fastify ecosystem)
├─controllers
├─models
├─decorators
├─schemas
│ ├── hooks
│ ├── middlewares
│ ├── modules
│ ├─your modules1 service A
│ | ├── controllers (your main function)
│ | ├── models (your custom database function)
│ | ├── entity
│ | ├── hooks
│ | ├── libraries
│ | └── utils
│ ├─your modules2 service B
│ | ├── controllers (your main function)
│ | ├── models (your custom database function)
│ | ├── entity
│ | ├── hooks
│ | ├── libraries
│ | └── utils
│ ├─your modules3 service C
│ | ├── controllers (your main function)
│ | ├── models (your custom database function)
│ | ├── entity
│ | ├── hooks
│ | ├── libraries
│ | └── utils
│ └── system
│ ├── core (from the Fastify ecosystem)
│ ├── database (your custom code)
│ ├── decorators (your custom code)
│ ├── entity (your custom code)
│ ├── helpers (your custom code)
│ ├── language (your custom code)
│ ├── libraries (from the Fastify ecosystem)
│ ├── middleware (from the Fastify ecosystem or your custom)
│ ├── migration (your custom plugins)
│ ├── plugins (your custom plugins)
│ ├── subscribers (your custom code)
│ └── vendor (your custom code)

https://blog.hao.dev/database-migration-knex-vs-typeorm-vs-sequelize
https://github.com/fastify/fastify-caching
https://www.fastify.io/ecosystem/
https://github.com/fastify/fastify-oauth2
https://github.com/lelylan/simple-oauth2

https://github.com/inthepocket/fastify-typeorm-plugin
fastify-typeorm-plugin	Fastify plugin to work with TypeORM.
https://github.com/i18next/i18next-http-middleware#fastify-usage
https://github.com/charlesread/fastify-jwt-webapp
https://github.com/Ethan-Arrowood/fastify-jwt-authz

https://github.com/fastify/fastify-caching
https://www.npmjs.com/package/fastify-ioredis
https://github.com/Techie-Qabila/fastify-ioredis
https://www.skypack.dev/view/@mgcrea/fastify-session-redis-store

*/