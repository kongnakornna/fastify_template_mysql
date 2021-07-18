import { FastifyRequest, FastifyReply } from 'fastify'
/*********************************/
import fp from 'fastify-plugin'
/*********************************/
import * as knex from 'knex'
import * as crypto from 'crypto'
import { UserModel } from '../../modules/auth/models/user_model'
/*********************************/
module.exports = fp(async (fastify: any, opts: any) => {
    /*********************************/
    fastify.register(require('fastify-jwt'), {
        secret: opts.secret,
      //  trusted: opts.trusted,
      //  private: opts.private,
      //  public: opts.public,
    })
    /*********************************/
    fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const jwtVerify: any  = request.jwtVerify()
            await jwtVerify
             console.log('jwt Verify request :'+request)
            /*********************************/
                const userModel = new UserModel()
                const db1: knex = fastify.db1
                        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
                        var str  : any = request.headers.authorization
                        var res = str.replace("Bearer ", "");  
                        let ids = request.id
                        const decoded: any= fastify.jwt.verify(res)
                        const user_id: any= decoded['user_id']
                        const profile: any = await userModel.profile(db1, user_id)
                        const level: any= decoded['level']
                        const username: any= decoded['username']
                        const at: any= decoded['at']
                        const startdate = at['startdate']
                        const issued_at = at['issued_at']
                        const time_setting = at['time_setting']*100
                        const time_expired = at['time_expired']
                        const day_expired = at['day_expired']
                        const timeconfig = at['timeconfig']
                        var now = Date.now();
                        var time_settings : any = time_setting
                        var timestamp_cul = now - issued_at 
                        var timestamp_culs   : any = timestamp_cul
                        if (timestamp_culs > time_settings) {
                            const msg_time = 'Token Expired'
                            const msg_time_th = 'โทเค็นหมดอายุ'
                            const msg_time_en = 'Token Expired'
                            const expired_status = 0
                            const status = false
                            const code = 500
                                    reply.send({  // แสดงข้อมูล api
                                        title: {
                                            status: status,
                                            code: code,
                                            message: msg_time_en,
                                            msg_time_th: msg_time_th,
                                            cache: 'no cache'
                                        },  
                                        data: {
                                            issued_at: issued_at,
                                            startdate: startdate,
                                            time_setting: time_setting,
                                            day_expired: day_expired,
                                            time_expired: time_expired,
                                            timeconfig: timeconfig,
                                            message: msg_time_en,
                                            msg_time_th: msg_time_th,
                                            status: status,
                                        }
                                    })
                               reply.sent = true //exit loop  ออกจากลูปการทำงาน 
                        } else {
                           /*
                            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
                            const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
                            const msg_time_en = 'Token Not Expired '
                            const expired_status = 1
                            const status = true
                            const code = 200
                                    reply.send({  
                                        title: {
                                        status: status,code: code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                                        },  
                                        data: {
                                            error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,
                                        },
                                        profile: profile,
                                    })
                            */
                        } 

            /*********************************/
        } catch (error) {
            console.log('jwt error :'+error) 
            reply.send({
                title: {
                        status: false,
                        code: 500,
                        message: 'token is null or error',
                        message_th: 'ไม่พบข้อมูล token หรือ token ไม่ถูกต้อง',
                        //error: error,
                        cache: 'no cache'
                       },  
                data: {
                         error:error
                  } 
            })
            reply.sent = true //exit loop  ออกจากลูปการทำงาน 
        }
    })
    /*********************************/
    fastify.decorate('checkexpire', async (request: FastifyRequest, reply: FastifyReply) => {
        const userModel = new UserModel()
        const db1: knex = fastify.db1
        try {
                /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
                var str  : any = request.headers.authorization
                var res = str.replace("Bearer ", "");  
                let ids = request.id
                const decoded: any= fastify.jwt.verify(res)
                const user_id = decoded['user_id']
                const profile: any = await userModel.profile(db1, user_id)
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
                var time_settings : any = time_setting
                var timestamp_cul = now - issued_at 
                var timestamp_culs   : any = timestamp_cul
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
            reply.sent = true //exit loop  ออกจากลูปการทำงาน 
            } catch (error) {
            console.log(error)
            reply.code(500).send({ // แสดงข้อมูล api
                                title: {
                                            status: false,code: 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                                    },  
                                        error: error,
                                        data: null
            })
            reply.sent = true //exit loop  ออกจากลูปการทำงาน 
            }
    /*******************************************/
    })
    /*********************************/
})