import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import { CustomerModel } from '../models/customer'

export default async function index(fastify: FastifyInstance) {

  const db: knex = fastify.db2

  const customerModel = new CustomerModel()

  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await customerModel.test(db)
      reply.send(rs)
    } catch (error) {
      reply.code(500).send({ ok: false, error: error.message })
    }
  })

}