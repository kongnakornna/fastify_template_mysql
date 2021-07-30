import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
import { UserModel } from '../../../modules/auth/models/user_model'
import { AuthModel } from '../../../modules/auth/models/auth_model'
import * as path from 'path'
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
 

import {getConnection} from "typeorm";
const db1_typeorm = getConnection("db1_typeorm");
// you can work with "db1" database now...
const db2_typeorm = getConnection("db2_typeorm");
// you can work with "db2" database now...
const db3_typeorm = getConnection("db3_typeorm");

export default async function testtypeorm(fastify: FastifyInstance) {
  const userModel = new UserModel()
  const db: knex = fastify.db
/**************************************************/     
fastify.get('/test',{preValidation: [fastify.authenticate] },
    async (request: FastifyRequest, reply: FastifyReply) => {
        
            
    })
/**************************************************/    
fastify.post('/verify', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        var str  : any = request.headers.authorization
        var res = str.replace("Bearer ", "");  
        let ids = request.id
        const decoded = fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const profile: any = await userModel.where_sd_users_profile_id(db, user_id)
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
        var time_settings =time_setting
        var timestamp_cul = now - issued_at 
        var timestamp_culs =timestamp_cul
        if (timestamp_culs > time_settings) {
            const msg_time = 'Token Expired : โทเค็นหมดอายุ'
            const msg_time_th = 'โทเค็นหมดอายุ'
            const msg_time_en = 'Token Expired '
            const expired_status = 0
            const status = false
            const code = 500
                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,code: code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: null,
                        profile: null,
                    })
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
            const msg_time_en = 'Token Not Expired '
            const expired_status = 1
            const status = true
            const code = 200
                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,code: code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: {
                            error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,
                           // msg_time: msg_time, 
                           // user_id: user_id, level: level, username: username,
                           // startdate: startdate, time_expired: time_expired, time_setting: time_setting, issued_at: issued_at, now: now, time_cul: timestamp_cul,
                        },
                        profile: profile,
                    })
        }
        console.log('at jwt :'+at) 
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
      reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    } catch (error) {
      console.log(error)
      reply.code(500).send({ // แสดงข้อมูล api
                        title: {
                                    status: false,code: 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                            },  
                                error: error,
                                data: null
      })
      reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      }
        
  })
/**************************************************/    
}