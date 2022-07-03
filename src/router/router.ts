import { FastifyInstance } from 'fastify'
import indexRouter from '../controllers/index'
import demoRouter from '../controllers/demo'
import testRouter from '../controllers/test'
import usersRouter from '../controllers/users'
import loginRouter from '../controllers/login'
import schemaRouter from '../controllers/schema'
import customerRouter from '../controllers/customer'
import uploadRouter from '../controllers/upload'
import mailRouter from '../controllers/mail'
import userRouter from '../controllers/usercontroller'
export default async function router(fastify: FastifyInstance) {
  // router prefix
  fastify.register(indexRouter, { prefix: '' }) 
  fastify.register(userRouter, { prefix: '/user' })  
  fastify.register(demoRouter, { prefix: '/testruont' })  
  fastify.register(testRouter, { prefix: '/test' })  
  fastify.register(usersRouter, { prefix: '/users' })  
  fastify.register(loginRouter, { prefix: '/login' })  
  fastify.register(schemaRouter, { prefix: '/schema' })  
  fastify.register(customerRouter, { prefix: '/customers' })  
  fastify.register(uploadRouter, { prefix: '/uploads' })
  fastify.register(mailRouter, { prefix: '/mail' })
}