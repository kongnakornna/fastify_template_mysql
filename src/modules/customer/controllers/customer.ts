import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import { CustomerModel } from '../../../modules/customer/models/customer'
export default async function index(fastify: FastifyInstance) {

  const db1: knex = fastify.db1

  const customerModel = new CustomerModel()

  fastify.get('/', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await customerModel.test(db1)
      reply.send(rs)
    } catch (error) {
      reply.code(500).send({ status: false, error: error })
    }
  })

}