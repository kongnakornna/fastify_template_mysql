import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { _publicfunction } from '../../utils/helpers/function.helper';  
const fnc = new _publicfunction()
/*********Rounter**********/
export default async function userrounter(app: FastifyInstance) {
  app.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
        let randomint = fnc.getRandomint(6);
        console.log('randomint', randomint); 
        await reply.code(200).send({
                      modules: "User"
                      ,message: "ok"
                      ,random: randomint
        }); 
        return // exit
  })
  app.post('/', async (req: FastifyRequest, reply: FastifyReply) => {
        let randomint = fnc.getRandomint(6); 
        await reply.code(200).send({
                      modules: "User"
                      ,message: "ok"
                      ,random: randomint
          }); 
        return // exit
  })
}