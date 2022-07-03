import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as path from 'path'
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
const packageJSON = require('../../package.json')
import { _publicfunction } from '../utils/helpers/function.helper';  
const fnc = new _publicfunction()
import { ok,created,Accepted,Forbidden, } from '../utils/helpers/response.helper';  
// response.helper
/*********Rounter**********/
// https://www.fastify.io/docs/latest/Reference/Reply/#getheaderkey
export default async function index(app: FastifyInstance) {
 
  app.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
    let randomint = fnc.getRandomint(6);
    console.log('randomint', randomint);
    reply.header('service_name',packageJSON.name);
    await reply.code(200).send({
                  nameservice: "Micro service" + ` ${packageJSON.name || "#N/A"}`
                  //, port: `${packageJSON.port || "#N/A"}`
                  //, Version: `${packageJSON.version || "#N/A"}`
                  //, description:  ` ${packageJSON.description || "#N/A"}`
                  //, author: ` ${packageJSON.author || "#N/A"}`
                  //, endPoint: ` ${packageJSON.endPoint || "#N/A"}`
                  , message: `Ready to service `
                  , random: randomint
    }); 
    return // exit
  })

  app.post('/', async (req: FastifyRequest, reply: FastifyReply) => {
    let randomint = fnc.getRandomint(6);
    // console.log('randomint', randomint);
    await reply.code(200).send({
            nameservice: "Micro service" + ` ${packageJSON.name || "#N/A"}`
            //, port: `${packageJSON.port || "#N/A"}`
            //, Version: `${packageJSON.version || "#N/A"}`
            //, description:  ` ${packageJSON.description || "#N/A"}`
            //, author: ` ${packageJSON.author || "#N/A"}`
            //, endPoint: ` ${packageJSON.endPoint || "#N/A"}`
            , message: `Ready to service `
            , random: randomint
      }); 
    return // exit
  })
   
  app.get('/jwt/sign', async (req: FastifyRequest, reply: FastifyReply) => {
    const body: any = req.body
    const token = app.jwt.sign({
      firstName: 'Satit',
      lastName: 'Rianpit'
    })
    await reply.send({ token })
    return // exit
  })

  app.get('/jwt/private', {
    preValidation: [app.authenticate]
  }, async (req: FastifyRequest, reply: FastifyReply) => {
    const body: any = req.body
    await reply.send({ message: "Protected area!" })
    return // exit
  })

}
 
