import { FastifyInstance } from 'fastify'

import indexRouter from './controllers/index'
import demoRouter from './controllers/demo'
import testRouter from './controllers/test'
import usersRouter from './controllers/users'
import loginRouter from './controllers/login'
import schemaRouter from './controllers/schema'
import customerRouter from './controllers/customer'
import uploadRouter from './controllers/upload'
import mailRouter from './controllers/mail'

export default async function router(fastify: FastifyInstance) {
  // router prefix
  fastify.register(indexRouter, { prefix: '/' }) // http://localhost:8080/
  fastify.register(demoRouter, { prefix: '/demo' }) // http://localhost:8080/demo
  fastify.register(testRouter, { prefix: '/test' }) // http://localhost:8080/test
  fastify.register(usersRouter, { prefix: '/users' }) // http://localhost:8080/users
  fastify.register(loginRouter, { prefix: '/login' }) // http://localhost:8080/login
  fastify.register(schemaRouter, { prefix: '/schema' }) // http://localhost:8080/schema
  fastify.register(customerRouter, { prefix: '/customers' }) // http://localhost:8080/customers

  fastify.register(uploadRouter, { prefix: '/uploads' })
  fastify.register(mailRouter, { prefix: '/mail' })
}