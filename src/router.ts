import { FastifyInstance } from 'fastify'
/*******************import************************/
import schemaRouter from './controllers/schema'
/*******************modules************************/
/*******index************/
import indexRouter from './modules/index/controllers/index'
/*******mail************/
import mailRouter from './modules/mail/controllers/mail'
/*******oauth2************/
import oauth2Router from './modules/oauth2/controllers/oauth2'
/*******user************/
import authRouter from './modules/auth/controllers/auth'
import authv1Router from './modules/auth/controllers/v1/authv1'
import userRouter from './modules/user/controllers/user'
import loginRouter from './modules/login/controllers/login'
/*******file************/
import uploadRouter from './modules/upload/controllers/upload'
/*******************Demo************************/
import demoRouter from './modules/demo/controllers/demo'
/*******************Test************************/
import customerRouter from './modules/customer/controllers/customer' 
/*******************Geo************************/
import geoRouter from './modules/geo/controllers/geo' 
/***********oauth2-server start***************/
/**documentation */
import documentationRouter from './modules/documentation/controllers/documentation' 
/***********administrator***************/
import administratorRouter from './modules/administrator/controllers/administrator' 
import adminauthRouter from './modules/administrator/controllers/auth' 
/****testtypeorm*******/
// import testtypeormRouter from './modules/testtypeorm/controllers/testtypeorm' 
/*******************export************************/
export default async function router(fastify: FastifyInstance) {
// router prefix
/*******************controllers************************/
fastify.register(schemaRouter, { prefix: '/schema' }) // http://localhost:8081/schema
/*******************modules************************/
/*******index************/
fastify.register(indexRouter, { prefix: '/' }) // http://localhost:8081/
/*******mail************/
fastify.register(mailRouter, { prefix: '/mail' })
/*******oauth2************/
fastify.register(oauth2Router, { prefix: '/oauth2' })
/*******user************/
fastify.register(authRouter, { prefix: '/auth' })
fastify.register(authv1Router, { prefix: '/auth/v1' })

fastify.register(userRouter, { prefix: '/user' })
fastify.register(loginRouter, { prefix: '/login' })
/*******file************/
fastify.register(uploadRouter, { prefix: '/upload' })
/*******************Demo************************/
fastify.register(demoRouter, { prefix: '/demo' })
/*******************Test************************/
/*******************Service************************/
fastify.register(customerRouter, { prefix: '/customer' })
/*******************Geo************************/
fastify.register(geoRouter, { prefix: '/geo' })
/***********testtypeormRouter***************/
// fastify.register(testtypeormRouter, { prefix: '/testtypeorm' })
// administratorRouter
fastify.register(administratorRouter, { prefix: '/administrator' })
fastify.register(adminauthRouter, { prefix: '/administrator/auth' })
/*******************modules************************/
/**documentation */
fastify.register(documentationRouter, { prefix: '/documentation' })
/***********oauth2-server start***************/
/***********oauth2-server end***************/
/***********redis start***************/
/***********redis start***************/
}