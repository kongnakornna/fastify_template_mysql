import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
/***/
export default async function index(fastify: FastifyInstance) {

  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send({
                    title: {
                            message: "Welcome to app Service!",
                            message_th: "app Service ยินดีตอนรับ!",
                            status: true,
                            status_int: 1,
                            code: 200,
                            version: "1.0.0",
                            author: 'kongnakornna@gmail.com',
                        }, 
                    body: { data: null,error: null,   }, 
                },
            )
         })
  //
 /***************/
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const message = 'Welcome to app Service!'
    reply.view('/views/index', { message: message })
  })
  fastify.get('/jwt/signtest', async (request: FastifyRequest, reply: FastifyReply) => {
      const token = fastify.jwt.sign({
        username: 'Kongnakorn',
        password: 'Jantakun',
        // level: 1, 
        // accesszone: 1,
        // email: 'kongnakornna@gmail.com',
    })
    reply.send({ title: {
                    message: "Create token",
                    message_th: "สร้างโทเค็น",
                    status: true,
                    status_int: 1,
                    code: 200, 
                    },  
                token })
  })
  fastify.get('/jwt/private', {
    preValidation: [fastify.authenticate]
  }, async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send({
           title: {
                    message: "Protected area! Do not allow access to the system",message_th: "Protected area ไม่อนุญาตให้เข้าถึงระบบ!",
                    status: true,
                    status_int: 1,
                    code: 403, 
                }, 
            body: { data: null,  }, 
      })
  })

}