import * as crypto from 'crypto'
import * as knex from 'knex'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { UserModel } from '../../../modules/user/models/user_model'
/**************************************************/    
export default async function users(fastify: FastifyInstance) {
  const userModel = new UserModel()
  const db1: knex = fastify.db1
  fastify.post('/', {
    preValidation: [fastify.authenticate]
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const firstName = body.firstName
    const lastName = body.lastName
    const email = body.email
    try {
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const data: any = {};
      data.username = username
      data.password = encPassword
      data.first_name = firstName
      data.last_name = lastName
      data.email = email
      await userModel.create(db1, data)
      reply.send({ message: 'Insert data', status: true })
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, message: error })
    }
  })
 /**************************************************/    
  fastify.get('/', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await userModel.read(db1)
      reply.send(rs)
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, error: error })
    }
  })
 /**************************************************/     
  // http://localhost:8081/users/search?q=xxxx
  fastify.get('/search', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const query: any = request.query
      const q = query.q
      const rs: any = await userModel.search(db1, q)
      reply.send(rs)
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, error: error })
    }
  })
 /**************************************************/    
  fastify.put('/:userId/edit', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {

    const body: any = request.body

    const password = body.password
    const firstName = body.firstName
    const lastName = body.lastName

    const params: any = request.params
    const userId = params.userId

    try {
      const data: any = {};
      data.first_name = firstName
      data.last_name = lastName

      if (password) {
        const encPassword = crypto.createHash('md5').update(password).digest('hex')
        data.password = encPassword
      }

      await userModel.update(db1, userId, data)
      reply.send({ status: true })
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, message: error })
    }

  })
 /**************************************************/    
  fastify.delete('/:userId', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const params: any = request.params
      const userId = params.userId

      await userModel.remove(db1, userId)
      reply.send({ status: true })
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, error: error })
    }
  })
  /**************************************************/    
}