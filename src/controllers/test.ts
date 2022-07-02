import * as knex from 'knex'

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { TestModel } from '../models/test'
import { UserModel } from '../models/user'

export default async function test(fastify: FastifyInstance) {

  const db: knex = fastify.db
  const testModel = new TestModel()

  const userModel = new UserModel()


  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await testModel.test(db)
      reply.send(rs)
    } catch (error) {
      console.log(error)
      reply.code(500).send({ ok: false, error: error.message })
    }
  })


  fastify.post('/raw', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body: any = request.body
      const userId = body.userId
      const firstName = body.firstName
      const rs: any = await userModel.rawQuery(db, userId, firstName)
      reply.send(rs[0])
    } catch (error) {
      console.log(error)
      reply.code(500).send({ ok: false, error: error.message })
    }
  })



}