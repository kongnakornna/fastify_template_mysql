import * as crypto from 'crypto'
import * as knex from 'knex'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import bodyormSchema from '../schemas/bodyuserorm'
/*************typeorm*******************************/    
import { getConnection, getRepository, getCustomRepository, getManager } from "typeorm";
import { User } from '../entity/User.entity'
/*************typeorm*******************************/    
export default async function userorm(fastify: FastifyInstance) { 
 /**************************************************/ 
  fastify.post('/', {},async (request: FastifyRequest, reply: FastifyReply) => {
     try { 
       /*************typeorm*******************************/    
       const respository = getCustomRepository(User);
       const result = await respository.find({ relations: ["id", "firstName", "lastName"] })
       /*************typeorm*******************************/    
       reply.header('version', 1)
       reply.header('x-cache-status', 0) // 1=yes ,0=no
       reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
       reply.header('Expires', '-1')
       reply.header('Pragma', 'no-cache') 
       // no-cache  private  public max-age=31536000 must-revalidate
       reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
       reply.header('message', 'Working')
       reply.header('statusCode', 200)
       reply.header('code', 200)
       reply.header('status', true) 
       /*****************************************************/
       reply.send(result)
     } catch (error) {
       console.log(error)
       reply.code(500).send({ status: false, error: error })
     }
  })  
  /**************************************************/     
}