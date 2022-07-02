import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'

import { UserModel } from '../models/user'

export default async function demo(fastify: FastifyInstance) {

  const userModel = new UserModel()
  const db: knex = fastify.db

  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "Hello from DEMO Router" })
  })

  // C = CREATE
  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "Hello from POST method" })
  })

  fastify.post('/params', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password

    reply.send({ username, password })
  })

  // http://localhost:8080/demo/Satit/Rianpit
  fastify.get('/:firstName/:lastName', async (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params

    const firstName = params.firstName
    const lastName = params.lastName

    reply.send({ firstName, lastName })
  })

  // http://localhost:8080/demo?firstName=Satit&lastName=Rianpit
  fastify.get('/query', async (request: FastifyRequest, reply: FastifyReply) => {
    const query: any = request.query

    const firstName = query.firstName
    const lastName = query.lastName

    reply.send({ firstName, lastName })
  })

  // U = UPDATE -> PUT
  fastify.put('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "Hello from PUT method" })
  })

  fastify.put('/:userId/edit', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password

    const params: any = request.params
    const userId: any = params.userId

    reply.send({ username, password, userId })
  })

  // D = DELETE -> DELETE
  fastify.delete('/:userId', async (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    const userId = params.userId

    reply.send({ ok: true, userId })
  })

  // test ejs view
  // http://localhost:8080/demo/view/demo
  fastify.get('/view/demo', async (request: FastifyRequest, reply: FastifyReply) => {

    const message = 'From ejs template'

    reply.view('/views/demo', { message: message })

  })
  fastify.get('/view/layout', async (request: FastifyRequest, reply: FastifyReply) => {

    try {
      const rs: any = await userModel.read(db)
      reply.view('/views/content', { users: rs })
    } catch (error) {
      reply.code(500).send({ ok: false, error: error.message })
    }


  })
}