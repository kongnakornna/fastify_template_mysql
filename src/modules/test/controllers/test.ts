import * as knex from 'knex'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
/***** Model database  query directoty models ***************/
import { TestModel } from '../../../modules/test/models/test_model'
import { UserModel } from '../../../modules/test/models/user'
//import { TestModel } from '../models/test_model'
//import { UserModel } from '../models/user'
/***** Model database  query***************/
export default async function test(fastify: FastifyInstance) {
  const db: knex = fastify.db
  const testModel = new TestModel()
  const userModel = new UserModel()
  /*************************
   get data 
  *************************/
  fastify.get('/', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const rs: any = await testModel.test(db)
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        var str = request.headers.authorization
        var res = str.replace("Bearer ", "");  
        let ids = request.id
        const decoded = fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const level = decoded['level']
        const username = decoded['username']
        const at = decoded['at']
        const startdate = at['startdate']
        const issued_at = at['issued_at']
        const time_setting = at['time_setting']*100
        const time_expired = at['time_expired']
        const day_expired = at['day_expired']
        const timeconfig = at['timeconfig']
        
        var now = Date.now();
        var time_settings =parseInt(time_setting)
        var timestamp_cul = now - issued_at 
        var timestamp_culs =parseInt(timestamp_cul)
       if (timestamp_culs > time_settings) {
            const msg_time = 'Token Expired : โทเค็นหมดอายุ'
            const msg_time_th = 'โทเค็นหมดอายุ'
            const msg_time_en = 'Token Expired '
            const expired_status = 0
            const rsdata = ''
            const status = false
            const code = 500
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
            const msg_time_en = 'Token Not Expired '
            const expired_status = 1
            const rsdata = rs
            const status = true
            const code = 200
        }
        console.log('at jwt :'+at) 
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        reply.send({  // แสดงข้อมูล api
            title: {
               status: status,code: code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
            }, 
                error: null,
                msg_time: msg_time, expired_status: expired_status,data: rsdata,
               // timeconfig:timeconfig,user_id: user_id,level: level, username: username,startdate: startdate,time_expired: time_expired,time_setting:time_setting,issued_at: issued_at, now: now, time_cul:timestamp_cul,
                
        })
    } catch (error) {
      console.log(error)
      reply.code(500).send({ // แสดงข้อมูล api
                        title: {
                                    status: false,code: 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                            },  
                                error: error.message,
                                data: null
      })
      }
        
  })
  /********************/
  
  fastify.get('/verifysingin', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const rs: any = await testModel.test(db)
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        var str = request.headers.authorization
        var res = str.replace("Bearer ", "");  
        let ids = request.id
        const decoded = fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const level = decoded['level']
        const username = decoded['username']
        const at = decoded['at']
        const startdate = at['startdate']
        const issued_at = at['issued_at']
        const time_setting = at['time_setting']*100
        const time_expired = at['time_expired']
        const day_expired = at['day_expired']
        const timeconfig = at['timeconfig']
        
        var now = Date.now();
        var time_settings =parseInt(time_setting)
        var timestamp_cul = now - issued_at 
        var timestamp_culs =parseInt(timestamp_cul)
        if (timestamp_culs > time_settings) {
            const msg_time = 'Token Expired : โทเค็นหมดอายุ'
            const msg_time_th = 'โทเค็นหมดอายุ'
            const msg_time_en = 'Token Expired '
            const expired_status = 0
            const rsdata = ''
            const status = false
            const code = 500
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
            const msg_time_en = 'Token Not Expired '
            const expired_status = 1
            const rsdata = rs
            const status = true
            const code = 200
        }
        console.log('at jwt :'+at) 
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        reply.send({  // แสดงข้อมูล api
            title: {
               status: status,code: code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
            },
                
                error: null,timeconfig:timeconfig,
                msg_time: msg_time, expired_status: expired_status,
                user_id: user_id,level: level, username: username,
                startdate: startdate,time_expired: time_expired,time_setting:time_setting,issued_at: issued_at, now: now, time_cul:timestamp_cul,
               // data: rsdata,
        })
    } catch (error) {
      console.log(error)
      reply.code(500).send({ // แสดงข้อมูล api
                        title: {
                                    status: false,code: 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                            },  
                                error: error.message,
                                data: null
      })
      }
        
  })
    
 /*************************
   post data 
  *************************/
  fastify.post('/raw', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body: any = request.body
      const userId = body.userId
      const firstName = body.firstName
      const rs: any = await userModel.rawQuery(db, userId, firstName)
      reply.send(rs[0])
    } catch (error) {
      console.log(error)
      reply.code(500).send({ ok: false, error: error.message })
    }
  })

}