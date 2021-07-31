import { FastifyRequest, FastifyReply } from 'fastify'
/*********************************/
import fp from 'fastify-plugin'
/*********************************/
import * as knex from 'knex'
import * as crypto from 'crypto'
import { UserModel } from '../../modules/auth/models/user_model'
import { AuthadminModel } from '../../modules/administrator/models/authadmin_model'
/*********************************/
import * as path from 'path'
const cookie = require('fastify-cookie');
const envPath = path.join(__dirname, '../../../config.conf')
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {}
const TIMEEXPIRE = env.TIMEEXPIRE
const redis_host = env.redis_host
const redis_port = env.redis_port
/*********************************/
import * as fastify from 'fastify'
const app: fastify.FastifyInstance = fastify.fastify({ logger: { level: 'info'}})
/*********************************/
module.exports = fp(async (fastify: any, opts: any) => {
    /*********************************/
    fastify.register(require('fastify-jwt'), {
        secret: opts.secret
    })
    /*********************************/
    function getRandomString(length: any) {
        //var randomChars: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        var randomChars: any =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#';
        var result: any =  ''
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
    }
    function getRandomchar(length: any) { 
        var randomChars: any =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result: any =  ''
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
    }
    function getRandomint(length: any) { 
        var randomChars: any =  '0123456789';
        var result: any =  ''
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
    }
    function getRandomsrtsmall(length: any) { 
        var randomChars: any =  'abcdefghijklmnopqrstuvwxyz';
        var result: any =  ''
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
    }
    function getRandomsrtbig(length: any) { 
        var randomChars: any =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var result: any =  ''
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
    }
    fastify.decorate('genint', async (request: FastifyRequest, reply: FastifyReply) => {
        const headers: any = request.headers
        const query_get: any = request.query
        const protocol: any = request.protocol
        const ip: any = request.ip
        const code: any = query_get.code
        /*****************************/
        const genint: any = getRandomint(4)
        /*****************************/ 
        /*****************************/
        try {
            const MaxAge = 60
            const set_cookie:any='code='+genint+'; Max-Age='+MaxAge+'; SameSite=None; Secure';
           // reply.header('Set-Cookie', set_cookie)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('state', genint)
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.send({ genint: genint, message: 'ok'})
            console.log('jwt Verify request :' + request)
            return
        } catch (error) {
                reply.header('genint', '')
                reply.header('statusCode', 200)
                reply.header('status', false)
                reply.header('message', error)  
               reply.send({ genint: '', message: error})
               return  
            }
    })
    fastify.decorate('codegen', async (request: FastifyRequest, reply: FastifyReply) => {
        const headers: any = request.headers
        const query_get: any = request.query
        const protocol: any = request.protocol
        const ip: any = request.ip
        const code: any = query_get.code
        /*****************************/
        const codenom1: any = getRandomchar(12) 
        const codenom2: any = getRandomchar(10)
        const codenom3: any = getRandomchar(8)
        const codenom4: any = getRandomchar(6)
        const codenom5: any = getRandomsrtbig(5)
        const codenom6: any = getRandomint(5)
        const codegens: any = codenom1+'-'+codenom2+'-'+codenom3+'-'+codenom4+'-'+codenom5+'-'+codenom6
        try {
            const MaxAge = 60
            const set_cookie:any='code='+codegens+'; Max-Age='+MaxAge+'; SameSite=None; Secure';
           // reply.header('Set-Cookie', set_cookie)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('code', codegens)
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.send({ code: codegens, message: 'ok'})
            console.log('jwt Verify request :' + request)
            return
        } catch (error) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('code', '')
                reply.header('statusCode', 200)
                reply.header('status', false)
                reply.header('message', error)  
               reply.send({ code: '', message: error})
               return  
            }
    })
    fastify.decorate('getstate', async (request: FastifyRequest, reply: FastifyReply) => {
        const headers: any = request.headers
        const query_get: any = request.query
        const protocol: any = request.protocol
        const ip: any = request.ip
        const code: any = query_get.code
        /*****************************/
        const state: any =getRandomString(32)
        try {
            const MaxAge = 60
            const set_cookie:any='state='+state+'; Max-Age='+MaxAge+'; SameSite=None; Secure';
           // reply.header('Set-Cookie', set_cookie)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('state', state)
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.send({ state: state, message: 'ok'})
            console.log('jwt Verify request :' + request)
            return
        } catch (error) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('state', '')
                reply.header('statusCode', 200)
                reply.header('status', false)
                reply.header('message', error)  
               reply.send({ state: '', message: error})
               return  
            }
    })
    // CLIENT_SECRET
    fastify.decorate('clientsecret', async (request: FastifyRequest, reply: FastifyReply) => {
        const headers: any = request.headers
        const query_get: any = request.query
        const protocol: any = request.protocol
        const ip: any = request.ip
        const code: any = query_get.code
        /*****************************/
        const clientsecret: any =getRandomString(64)
        try {
            const MaxAge = 60
            const set_cookie:any='clientsecret='+clientsecret+'; Max-Age='+MaxAge+'; SameSite=None; Secure';
           // reply.header('Set-Cookie', set_cookie)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('clientsecret', clientsecret)
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.send({ clientsecret: clientsecret, message: 'ok'})
            console.log('jwt Verify request :' + request)
            return
        } catch (error) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('clientsecret', '')
                reply.header('statusCode', 200)
                reply.header('status', false)
                reply.header('message', error)  
               reply.send({ clientsecret: '', message: error})
               return  
            }
    })
    fastify.decorate('authen', async (request: FastifyRequest, reply: FastifyReply) => {
        const headers: any = request.headers
        const query_get: any = request.query
        const protocol: any = request.protocol
        const ip: any = request.ip
        try {
            //await request.jwtVerify()
            const jwtVerify: any  = request.jwtVerify()
            await jwtVerify
            reply.header('verify', 'ok')
            console.log('jwt Verify request :'+request)
        } catch (error) {
               reply.header('verify', error)
               reply.send({
                    title: {
                            status: false,
                            statusCode : 500,
                            message: error,
                            message_th: 'ไม่พบข้อมูลโทเค็น หรือ โทเค็นไม่ถูกต้อง', 
                            cache: 'no cache'
                    },
                    data: error 
                })
                return //reply.send(error)
            }
    })
    /*************** decrypt the information ถอดรหัสข้อมูล ******************/
    fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
        const body: any = request.body
        const input: any = body.input
        const params: any = request.params
        const headers: any = request.headers
        var str: any =  request.headers.authorization
        var token = str.replace("Bearer ", "") //  token form header 
        const verify_token: any = fastify.jwt.verify(token)
        const query_get: any = request.query
        const method: any = request.method
        const protocol: any = request.protocol
        const ip: any = request.ip 
        try {
            const jwtVerify: any  = request.jwtVerify() //  decoded token  
            await jwtVerify
             console.log('jwt Verify request :'+request)
            /*********************************/
            const userModel = new UserModel()
            const adminModel = new AuthadminModel()
                const db1: knex = fastify.db1
                    /******************************ตรวจสอบวันหมดอายุ Token check*************************************/ 
                        const decoded: any= verify_token 
                        const iat: any = decoded['iat']
                        const exp: any= decoded['exp']
                        const user_id: any= decoded['user_id']
                        //const uid: any= decoded['id']
                        //const user_profile: any = await userModel.sd_users_profile(db1, user_id)
                        //const admin_profile: any = await adminModel.sd_users_profile(db1, user_id)
                        const role_id: any= decoded['role_id']
                        const username: any= decoded['username']
                        const at: any= decoded['at']
                        const startdate = at['startdate']
                        const issued_at = at['issued_at']
                        const time_setting = at['time_setting'] 
                        var now = Date.now();
                        var time_settings : any = time_setting
                        var timestamp_cul = now - issued_at 
                        var timestamp_culs   : any = timestamp_cul
                        var timestamp_culs2 : any = exp-iat
                        if (timestamp_culs > exp) {
                            const msg_time = 'Token Expired'
                            const msg_time_th = 'โทเค็นหมดอายุ'
                            const msg_time_en = 'Token Expired'
                            const expired_status = 0
                            const status = false
                            const code = 500
                                    reply.send({  // แสดงข้อมูล api
                                        title: {
                                            status: status,
                                            statusCode : code,
                                            message: msg_time_en,
                                            msg_time_th: msg_time_th,
                                            cache: 'no cache',
                                            timestamp_culs: timestamp_culs,
                                            timestamp_culs2: timestamp_culs2,
                                            iat: iat,
                                            exp: exp, 
                                        }, error: null,
                                        data: {
                                            startdate: startdate,
                                            message: msg_time_en,
                                            msg_time_th: msg_time_th,
                                            time_cul: timestamp_culs,
                                            time_settings:time_settings,
                                            protocol: protocol,
                                            ip: ip,
                                            query_get: query_get,
                                        }
                                    })
                                return //reply.sent = true // exit loop  ออกจากลูปการทำงาน 
                        } else {
                            /* กรณีที่ โทเค็นยังไม่หมดอายุ'  */ 
                            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
                            const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
                            const msg_time_en = 'Token Not Expired '
                            const expired_status = 1
                            const status = true  
                            const decoded: any = verify_token
                            const iat: any = decoded['iat'] // start time  encoded token
                            const exp: any= decoded['exp']  // expired time encoded token
                            const code = 200
                            /*
                            reply.header('version', 1)
                            reply.header('x-cache-status', 0) // 1=yes ,0=no
                            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                            reply.header('Access-Control-Allow-Methods', 'POST')
                            reply.header('message', 'Information Correct')
                            reply.header('statusCode', 200)
                            reply.header('status', true)  
                            reply.header('x-bar', 'bar')
                            await reply.code(200).send({
                                timestamp_culs: timestamp_culs,
                                timestamp_culs2: timestamp_culs2,
                                iat: iat,
                                exp: exp,
                                verify_token: decoded
                            })
                            return
                            */
                        } 
            /*********************************/
        } catch (error) {
            console.log('jwt error :'+error) 
            reply.send({
                title: {
                        status: false,
                        statusCode : 500,
                        message: 'token is null or error or Token Expired :',
                        message_th: 'ไม่พบข้อมูล token หรือ token ไม่ถูกต้อง หรือ  โทเค็น หมดอายุ',
                        error: error,
                        cache: 'no cache'
                }, error: error,
                data: {
                         error:error
                  } 
            })
             return //reply.sent = true // exit loop  
        }
    })
    /*********************************/

    fastify.decorate('authenticateuser', async (request: FastifyRequest, reply: FastifyReply) => {
        const body: any = request.body
        const input: any = body.input
        const params: any = request.params
        const headers: any = request.headers
        var str: any =  request.headers.authorization
        var token = str.replace("Bearer ", "") //  token form header 
        const verify_token: any = fastify.jwt.verify(token)
        const query_get: any = request.query
        const method: any = request.method
        const protocol: any = request.protocol
        const ip: any = request.ip 
        try {
            const jwtVerify: any  = request.jwtVerify() //  decoded token  
            await jwtVerify
             console.log('jwt Verify request :'+request)
            /*********************************/
            const userModel = new UserModel()
            const adminModel = new AuthadminModel()
            
                const db1: knex = fastify.db1
                    /******************************ตรวจสอบวันหมดอายุ Token check*************************************/ 
                        const decoded: any= verify_token 
                        const iat: any = decoded['iat']
                        const exp: any= decoded['exp']
                        const user_id: any= decoded['user_id']
                        //const uid: any= decoded['id']
                        //const user_profile: any = await userModel.sd_users_profile(db1, user_id)
                        //const admin_profile: any = await adminModel.sd_users_profile(db1, user_id)
                        const role_id: any= decoded['role_id']
                        const username: any= decoded['username']
                        const at: any= decoded['at']
                        const startdate = at['startdate']
                        const issued_at = at['issued_at']
                        const time_setting = at['time_setting'] 
                        var now = Date.now();
                        var time_settings : any = time_setting
                        var timestamp_cul = now - issued_at 
                        var timestamp_culs   : any = timestamp_cul
                        var timestamp_culs2 : any = exp-iat
                        if (timestamp_culs > exp) {
                            const msg_time = 'Token Expired'
                            const msg_time_th = 'โทเค็นหมดอายุ'
                            const msg_time_en = 'Token Expired'
                            const expired_status = 0
                            const status = false
                            const code = 500
                                    reply.send({  // แสดงข้อมูล api
                                        title: {
                                            status: status,
                                            statusCode : code,
                                            message: msg_time_en,
                                            msg_time_th: msg_time_th,
                                            cache: 'no cache',
                                            timestamp_culs: timestamp_culs,
                                            timestamp_culs2: timestamp_culs2,
                                            iat: iat,
                                            exp: exp, 
                                        }, error: null,
                                        data: {
                                            startdate: startdate,
                                            message: msg_time_en,
                                            msg_time_th: msg_time_th,
                                            time_cul: timestamp_culs,
                                            time_settings:time_settings,
                                            protocol: protocol,
                                            ip: ip,
                                            query_get: query_get,
                                        }
                                    })
                                return //reply.sent = true // exit loop  ออกจากลูปการทำงาน 
                        } else {
                            /* กรณีที่ โทเค็นยังไม่หมดอายุ'  */ 
                            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
                            const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
                            const msg_time_en = 'Token Not Expired '
                            const expired_status = 1
                            const status = true  
                            const decoded: any = verify_token
                            const iat: any = decoded['iat'] // start time  encoded token
                            const exp: any= decoded['exp']  // expired time encoded token
                            const code = 200
                            /*
                            reply.header('version', 1)
                            reply.header('x-cache-status', 0) // 1=yes ,0=no
                            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                            reply.header('Access-Control-Allow-Methods', 'POST')
                            reply.header('message', 'Information Correct')
                            reply.header('statusCode', 200)
                            reply.header('status', true)  
                            reply.header('x-bar', 'bar')
                            await reply.code(200).send({
                                timestamp_culs: timestamp_culs,
                                timestamp_culs2: timestamp_culs2,
                                iat: iat,
                                exp: exp,
                                verify_token: decoded
                            })
                            return
                            */
                        } 
            /*********************************/
        } catch (error) {
            console.log('jwt error :'+error) 
            reply.send({
                title: {
                        status: false,
                        statusCode : 500,
                        message: 'token is null or error or Token Expired :',
                        message_th: 'ไม่พบข้อมูล token หรือ token ไม่ถูกต้อง หรือ  โทเค็น หมดอายุ',
                        cache: 'no cache'
                },
                error: error,
                data: {  error:error } 
            })
             return //reply.sent = true // exit loop  
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
                const sd_users_profile: any = await userModel.sd_users_profile(db1, user_id)
                const role_id = decoded['role_id']
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
                                        status: status,
                                        statusCode: code,
                                        code: msg_time_en,
                                        error: msg_time_en,
                                        message: msg_time_en,
                                        msg_time_th: msg_time_th,
                                        cache: 'no cache'
                                    },
                                data: null,
                                sd_users_profile: null,
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
                                        status: status,
                                        statusCode: code,
                                        message: msg_time_en,
                                        msg_time_th: msg_time_th,
                                        cache: 'no cache'
                                    },
                                data: {
                                    error: null,
                                    timeconfig: timeconfig,
                                    time: timestamp_cul,
                                    living_time: time_settings,
                                    expired_status: expired_status,
                                // msg_time: msg_time, 
                                // user_id: user_id, role_id: role_id, username: username,
                                // startdate: startdate, time_expired: time_expired, time_setting: time_setting, issued_at: issued_at, now: now, time_cul: timestamp_cul,
                                },
                                sd_users_profile: sd_users_profile,
                            })
                }
                console.log('at jwt :'+at) 
                /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
             return //reply.sent = true // exit loop  ออกจากลูปการทำงาน 
            } catch (error) {
            console.log(error)
            reply.code(500).send({ // แสดงข้อมูล api
                                title: {
                                        status: false,
                                        statusCode: 500,
                                        message: 'Results unsuccessful',
                                        message_th: 'แสดง ข้อมูลไม่สำเร็จ',
                                        cache: 'no cache'
                                    },  
                                    error: error,
                                    data: null
            })
             return //reply.sent = true // exit loop  ออกจากลูปการทำงาน 
            }
    /*******************************************/
    })
    /*********************************/
    fastify.decorate('encode', async (request: FastifyRequest, reply: FastifyReply) => {
        const headers: any = request.headers
        const query_get: any = request.query
        const protocol: any = request.protocol
        const ip: any = request.ip
        const body: any = request.body
        const payload: any = request.body
        // const username = body.username
        // const password = body.password
        /*
            const token = fastify.jwt.sign({ payload })
            reply.send({ token })
        */
        try {
            const tokens = fastify.jwt.sign({body})
             reply.send({
                title:{ status: true, statusCode : 200,}, 
                token:tokens,
            })
            return  // reply.sent = true // exit loop  ออกจากลูปการทำงาน
                     
            /*********************************/
        } catch (error) {
            console.log('jwt error :' + error)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.send({
                title: {
                        status: false,
                        statusCode : 500,
                        message: 'input is null or error',
                        message_th: 'ไม่พบข้อมูล input หรือ input ไม่ถูกต้อง',
                        cache: 'no cache'
                },
                data: {error:error} 
            })
             return //reply.sent = true // exit loop  ออกจากลูปการทำงาน 
        }
    })
    fastify.decorate('verify', async (request: FastifyRequest, reply: FastifyReply) => {
        const headers: any = request.headers
        const query_get: any = request.query
        const protocol: any = request.protocol
        const ip: any = request.ip
        const body: any = request.body
        const token = body.token 
        try {
             const decoded: any = fastify.jwt.verify(token)
             //const user_id = decoded['user_id']
             reply.send({
                title:{ status: true, statusCode : 200,}, 
                data:decoded,
            })
            return  // reply.sent = true // exit loop      
            /*********************************/
        } catch (error) {
            console.log('jwt error :' + error)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.send({
                title: {
                        status: false,
                        statusCode : 500,
                        message: 'token is null or error',
                        message_th: 'ไม่พบข้อมูล token หรือ token ไม่ถูกต้อง',
                        cache: 'no cache'
                },
                data: {error:error} 
            })
             return //reply.sent = true // exit loop  ออกจากลูปการทำงาน 
        }
    })
    /*********************************/
})