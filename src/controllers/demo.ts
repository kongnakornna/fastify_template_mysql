import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'

import { UserModel } from '../models/user'

export default async function demo(fastify: FastifyInstance) {

  const userModel = new UserModel()
  const db: knex = fastify.db

  fastify.get('/', async (req: FastifyRequest, res: FastifyReply) => {
    res.send({ message: "Hello from DEMO Router" })
  })

  // C = CREATE
  fastify.post('/', async (req: FastifyRequest, res: FastifyReply) => {
    res.send({ message: "Hello from POST method" })
  })

  fastify.post('/params', async (req: FastifyRequest, res: FastifyReply) => {
    const body: any = req.body
    const username = body.username
    const password = body.password

    res.send({ username, password })
  })

  // http://localhost:8080/demo/Satit/Rianpit
  fastify.get('/:firstName/:lastName', async (req: FastifyRequest, res: FastifyReply) => {
    const params: any = req.params

    const firstName = params.firstName
    const lastName = params.lastName

    res.send({ firstName, lastName })
  })

  // http://localhost:8080/demo?firstName=Satit&lastName=Rianpit
  fastify.get('/query', async (req: FastifyRequest, res: FastifyReply) => {
    const query: any = req.query

    const firstName = query.firstName
    const lastName = query.lastName

    res.send({ firstName, lastName })
  })

  // U = UPDATE -> PUT
  fastify.put('/', async (req: FastifyRequest, res: FastifyReply) => {
    res.send({ message: "Hello from PUT method" })
  })

  fastify.put('/:userId/edit', async (req: FastifyRequest, res: FastifyReply) => {
    const body: any = req.body
    const username = body.username
    const password = body.password

    const params: any = req.params
    const userId: any = params.userId

    res.send({ username, password, userId })
  })

  // D = DELETE -> DELETE
  fastify.delete('/:userId', async (req: FastifyRequest, res: FastifyReply) => {
    const params: any = req.params
    const userId = params.userId

    res.send({ ok: true, userId })
  })

  // test ejs view
  // http://localhost:8080/demo/view/demo
  fastify.get('/view/demo', async (req: FastifyRequest, res: FastifyReply) => {

    const message = 'From ejs template'

    res.view('/views/demo', { message: message })

  })
  fastify.get('/view/layout', async (req: FastifyRequest, res: FastifyReply) => {

    try {
      const rs: any = await userModel.read(db)
      res.view('/views/content', { users: rs })
    } catch (error) {
      res.code(500).send({ ok: false, error: 'error 500'})
    }


  })
}