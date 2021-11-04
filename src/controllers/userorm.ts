import * as crypto from 'crypto'
import * as knex from 'knex'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import bodyormSchema from '../schemas/bodyuserorm'
/*************typeorm****************/
import { getManager, getRepository } from 'typeorm'
// import { UserModel } from '../interfaces/user'
import { User } from '../entity/User'
import { Admin } from '../entity/Admin'
import { Ad_administrator } from '../entity/Ad_administrator'
/*
  const getAllUser = async (): Promise<User[]> => {
    return await getManager().find(User)
  }

  const getAllUser = async (): Promise<User[]> => {
    return await getManager().find(User)
  }

  const getUser = async (userId: string): Promise<User | undefined> => {
    return await getRepository(User).findOne(userId)
  }

  const createUser = async (user: UserModel): Promise<User> => {
    return await getRepository(User).save(user)
  }

  const updateUser = async (userId: string, user: UserModel): Promise<User> => {
    const existingUser = await getRepository(User).findOne(userId)
    const userToUpdate = { ...existingUser, ...user }
    return await getRepository(User).save(userToUpdate)
  }

  const deleteUser = async (userId: string): Promise<User | undefined> => {
    const userToDelete = await getRepository(User).findOne(userId)
    if (userToDelete) {
      return await getRepository(User).remove(userToDelete)
    }
  }

*/
/*************typeorm****************/
/**************************************************/    
export default async function userorm(fastify: FastifyInstance) { 
 /**************************************************/ 
 //    
    
 fastify.get('/administrator', /*ป้องกัน การใช้งาน โดย Token */{
   // preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try { 
      /*************typeorm****************/
      const rs: any = await getManager().find(Ad_administrator)  // ตรง 
      /*******var**************/
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
      reply.send(rs)
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, error: error })
    }
  }) 
  /**************************************************/  
 fastify.get('/admin', /*ป้องกัน การใช้งาน โดย Token */{
   // preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try { 
      /*************typeorm****************/
      const rs: any = await getManager().find(Admin)  // ตรง 
      /*******var**************/
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
      reply.send(rs)
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, error: error })
    }
  }) 
  /**************************************************/  
  fastify.get('/', /*ป้องกัน การใช้งาน โดย Token */{
   // preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try { 
      /*************typeorm****************/
      const rs: any = await getManager().find(User)  // ตรง 
      /*******var**************/
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
      reply.send(rs)
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, error: error })
    }
  }) 
  /**************************************************/    
  fastify.post('/', /*ป้องกัน การใช้งาน โดย Token */{
    // preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
   },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
     try { 
       /*************typeorm****************/
       const rs: any = await getManager().find(User)  // ตรง 
       /*******var**************/
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
       reply.send(rs)
     } catch (error) {
       console.log(error)
       reply.code(500).send({ status: false, error: error })
     }
  }) 
  /**************************************************/    
  fastify.post('/testtypeorm', {
       schema: bodyormSchema // validate schemas
      }, async (request: FastifyRequest, reply: FastifyReply) => {
      const body: any = request.body
      var uid = body.uid 
      var status_active: any= 0 // 1=active 0=notactive
      try {
        if (body === "") {
              reply.header('version', 1)
              reply.header('x-cache-status', 0) // 1=yes ,0=no
              reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
              reply.header('Expires', '-1')
              reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
              reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
              reply.header('message', 'Information Correct')
              reply.header('statusCode', 500)
              reply.header('code', 500)
              reply.header('status', false) 
              reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'body is null',message_th: 'ไม่พบข้อมูล body' })
              console.log(request.body)
              return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
          }
        if (uid === "") {
              reply.header('version', 1)
              reply.header('x-cache-status', 0) // 1=yes ,0=no
              reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
              reply.header('Expires', '-1')
              reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
              reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
              reply.header('message', 'Information Correct')
              reply.header('statusCode', 500)
              reply.header('code', 500)
              reply.header('status', false) 
              reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'uid is null',message_th: 'ไม่พบข้อมูล uid' })
              console.log(request.body)
              return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
          }
      /*************typeorm****************/ 
      const rs: any = await getRepository(User).findOne(uid)  
      /*******var**************/
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
      if (rs == null) {
        reply.header('version', 1)
        reply.header('x-cache-status', 0) // 1=yes ,0=no
        reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
        reply.header('Expires', '-1')
        reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
        reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
        reply.header('message', 'Information Correct')
        reply.header('statusCode', 500)
        reply.header('code', 500)
        reply.header('status', false) 
        reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'data is null on database',message_th: 'ไม่พบข้อมูล user ในฐานข้อมูล' })
        console.log(request.body)
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
      reply.send(rs)
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false, error: error })
    }
  }) 
  /**************************************************/     
}