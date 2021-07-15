import { FastifyRequest, FastifyReply } from 'fastify'
/*********************************/
import fp from 'fastify-plugin'
/*********************************/
module.exports = fp(async (fastify: any, opts: any) => {
  /*********************************/
  fastify.register(require('fastify-jwt'), {
    secret: opts.secret,
  })
  /*********************************/
  fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify()
      console.log('jwtVerify request :'+reply)
    } catch (error) {
      reply.send({ error,status: false,code: 500,message: 'token is null or error',message_th: 'ไม่พบข้อมูล token หรือ token ไม่ถูกต้อง' })
    }
  })
 /*********************************/
  
 /*********************************/
 
 /*********************************/
})