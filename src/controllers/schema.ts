import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import bodySchema from '../schemas/body'
import paramsSchema from '../schemas/params'
import queryStringSchema from '../schemas/query_string'
import headerSchema from '../schemas/header'
export default async function schema(fastify: FastifyInstance) {
  fastify.post('/register', {
    schema: bodySchema
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "Hello world!" })
  })
  fastify.get('/info/:userId', {
    schema: paramsSchema
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "User info" })
  })
  // ?query=xxx&limit=20&offset=0
  fastify.get('/search', {
    schema: queryStringSchema
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "Search results" })
  })
  fastify.get('/info', {
    schema: {
      headers: headerSchema
    }, attachValidation: true
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    if (request.validationError) {
      console.log(request.validationError)
      reply.code(400).send({ ok: false, error: 'ข้อมูลไม่ถูกต้อง', code: 1005 })
    } else {
      const headers: any = request.headers
      console.log(headers)
      const token = headers['x-fastify-token']
      reply.send({ ok: true, token })
    }
  })
}