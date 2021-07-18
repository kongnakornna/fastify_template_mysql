import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
// ../../../modules/demo/models/demo_model
 import { DemoModel } from '../../../modules/demo/models/demo_model'
/*************************************/
export default async function demo(fastify: FastifyInstance) {
/*************************************/
  const DemoModels = new DemoModel()
  const db1: knex = fastify.db1
/*************************************/
  fastify.get('/', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const rs: any = await DemoModels.test(db1)
        reply.send({  // แสดงข้อมูล api
            title: {
                status: true,code: 200, message: 'Results Success',message_th: 'แสดง ข้อมูลสำเร็จ',cache:'no cache'
            }, 
                error: null,
                data: rs
      })
    } catch (error) {
      console.log(error)
      reply.code(500).send({ // แสดงข้อมูล api
                        title: {
                                    status: false,code: 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                            },  
                                error: error,
                                data: null
      })
    }
  })
  fastify.post('/', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */  async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "Hello from POST method" })
  })
/*************************************/
  fastify.post('/params', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */  async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    reply.send({ username, password })
  })
/*************************************/
  // http://localhost:8081/demo/Satit/Rianpit
  fastify.get('/:firstName/:lastName', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    const firstName = params.firstName
    const lastName = params.lastName
    reply.send({ firstName, lastName })
  })
/*************************************/
  // http://localhost:8081/demo?firstName=Satit&lastName=Rianpit
  fastify.get('/query', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    const query: any = request.query
    const firstName = query.firstName
    const lastName = query.lastName
    reply.send({ firstName, lastName })
  })
/*************************************/
  // U = UPDATE -> PUT
  fastify.put('/', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ message: "Hello from PUT method" })
  })
/*************************************/
  fastify.put('/:userId/edit', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const params: any = request.params
    const userId: any = params.userId
    reply.send({ username, password, userId })
  })
/*************************************/
  // D = DELETE -> DELETE
  fastify.delete('/:userId', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    const userId = params.userId
    reply.send({ status: true, userId })
  })
/*************************************/
  // test ejs view
  // http://localhost:8081/demo/view/demo
  fastify.get('/view/demo1', async (request: FastifyRequest, reply: FastifyReply) => {
    const message = 'From ejs template'
    reply.view('/views/demo', { message: message })

  })
   
}
/*************************************/