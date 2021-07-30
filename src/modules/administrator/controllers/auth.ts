import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
import { AuthadminModel } from '../../../modules/administrator/models/authadmin_model'
import * as path from 'path'
const envPath = path.join(__dirname, '../../../config.conf')
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {}
const TIMEEXPIRE =env.TIMEEXPIRE
// env.DB1_HOST
// TypeScript
import * as EmailValidator from 'email-validator'
// function name authv1
export default async function auth(fastify: FastifyInstance) {
const AuthModels = new AuthadminModel()
const db1: knex = fastify.db1
/**************************************************/  
function getRandomString(length: any) {
        var randomChars: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        var randomChars2: any =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result: any =  ''
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        }
        return result
}  
fastify.post('/singup', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const email = body.email
    const role_id = body.role_id
    const network_id = body.network_id
    const fullname = body.fullname
    try {
        if (username === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
        if (password === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
        const encPassword = crypto.createHash('md5').update(password).digest('hex')
        if (email === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'email is null',message_th: 'ไม่พบข้อมูล email' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }if (role_id==="") {  const role_id=2 }
        const status=1
        const network_id=null
        const date = new Date()
        const emailchk = EmailValidator.validate(email) // true //false
        if (emailchk == false) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                    reply.header('Access-Control-Allow-Methods', 'POST')
                    reply.header('statusCode', 401)
                    reply.header('status', false)  
                    reply.code(401).send({
                    status: false,
                    statusCode : 401,emailchk: emailchk,date: date,
                    message: 'This email is Invalid format ',
                    message_th: 'รูปแบบ email ไม่ถูกต้อง'
                }) 
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
        const rs_email: any = await AuthModels.validation_email(db1, email)
        if (rs_email.length > 0) {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'POST')
            reply.header('statusCode', 500)
            reply.header('status', false)  
            reply.code(500).send({
                title: { status: false, statusCode : 500,cache: 'no cache' },
                message: 'This email is duplicate data in the database system ',
                message_th: 'email นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล'
            })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }const rs_username: any = await AuthModels.validation_username(db1, username)
        if (rs_username.length > 0) {
                    reply.header('version', 1)
                    reply.header('x-cache-status', 0) // 1=yes ,0=no
                    reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                    reply.header('Access-Control-Allow-Methods', 'POST')
                    reply.header('statusCode', 500)
                    reply.header('status', false)  
                    reply.code(500).send({
                        title: { status: false, statusCode : 500,cache: 'no cache' },
                        message: 'This username is duplicate data in the database system ',
                        message_th: 'username นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล'
                    }) 
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }  
        /**************************************************/    
    try {
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const data: any = {}
      data.username = username
      data.fullname= fullname
      data.password = encPassword
      data.email = email
      data.date = date
      data.role_id = role_id
      data.status = 0
      data.network_id = network_id
      data.fullname = fullname
      await AuthModels.create(db1, data)
     // reply.send({ message: 'Insert data', status: true })
       const status_insert = 1
    } catch (error) {
       const status_insert = 0
        console.log(error)
        reply.header('version', 1)
        reply.header('x-cache-status', 0) // 1=yes ,0=no
        reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
        reply.header('Access-Control-Allow-Methods', 'POST')
        reply.header('statusCode', 500)
        reply.header('status', false)  
        reply.header('message', error)  
        reply.code(500).send({
            title: { status: false, statusCode : 500,cache: 'no cache' },
            message: 'singup failed!',
            message_th: ' ไม่สามาราลงทะเบียนได้',
            error: error
        })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
        const lastrs: any = await AuthModels.lastidread(db1)
        // reply.code(500).send({ da: lastrs }) return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        const luser: any = lastrs[0] 
        const user_idx = luser.id 
        var md5 = require('md5')
        const enc_user_idx = md5(user_idx)
        const data_array: any = {}
        data_array.user_id = enc_user_idx
        /*******************/ 
        const language: any = await AuthModels.tr_language_all(db1)
        var array: any = {}
        for (const [key, value] of Object.entries(language)) {
            const keys: any = key
            const rs: any = value
            const code: any = rs.code
            const lang_id: any = rs.language_id
            const name: any = rs.name
            const language_data: any = { code: code, language_id: lang_id, name: name }
            const datas1: any = {}
            datas1.user_id =user_idx
            datas1.first_name = username
            datas1.language_id = lang_id
            const create_profile: any =await AuthModels.create_profile(db1, datas1)
            const create_address: any =await AuthModels.create_address(db1, datas1)
            console.log(keys, language_data);
            console.log(keys, create_profile);
            console.log(keys, create_address);
        }
         /*******************/
        // reply.code(200).send({ array: data_array })
        // return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        const rs: any = await AuthModels.login(db1, username, encPassword)
        if (rs.length > 0) {
        const user: any = rs[0]
          console.log(user)
           /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            const day = 1
            const TIMEEXPIRE =env.TIMEEXPIRE
            const time_expire_set = TIMEEXPIRE
            const time_expire_set1 = 300
            const time_setting :any= env.TIMEEXPIRE
            const today = new Date()
            const dates = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            const dateTime = dates + ' ' + time
            const issued_at=Date.now()
            const timestamp = Date.now()
            const expiration_time = issued_at + time_setting
            const userids= user.user_id
            const userid = fastify.jwt.sign({userids})
            const token = fastify.jwt.sign({
                user_id: user.user_id, userid: userid,level: user.level,
                username: user.username,email: user.email,
                // firstName: user.first_name,lastName: user.last_name,
                at: {
                       startdate: dateTime, 
                       issued_at: issued_at,
                       time_expired: expiration_time,
                       time_setting: time_setting,
                       day_expired: day, 
                       timeconfig: TIMEEXPIRE,
                       state: getRandomString(32),  
                },
                 
          })
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
         const decoded: any= fastify.jwt.verify(token)
        // asycnhronously
        fastify.jwt.verify(token, (err:any, decoded:any) => {
        if (err) fastify.log.error(err)
        fastify.log.info(`Token verified. Foo is ${decoded.foo}`)
        })
        const user_idx = user.user_id
        const full_name = user.username
        const datars = {
                uid:  user_idx,
                username: user.username, 
                email: user.email, 
                level: user.level,
            }
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'POST')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true)
            reply.header('token', token)
            reply.header('timeexpire', time_expire_set)
            reply.header('create', dateTime)
            reply.send({
              title: { status: true, statusCode : 200,},
              message: 'welcome ' + full_name+  ' Sign in system successfully',
              message_th: 'ยินดีต้อนรับ คุณ ' + full_name+ ' เข้าสู่ระบบสำเร็จ',
             // data: datars, encoded: token,
              enc_user_idx: enc_user_idx,
              token
          })
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      } else {
          reply.code(401).send({ title: {status: false, statusCode : 401,}, message: 'Login failed!', message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ' })
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
    } catch (error) {
        console.log(error)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'POST')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.header('message', error) 
            reply.code(500).send({ title: {status: false, statusCode : 500,}, message: error })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
})
/**************************************************/
fastify.post('/singin', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const state: any =getRandomString(32)
    try {
        if (username == '') {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: {status: false, statusCode : 500,},message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } if (password == '') {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: {status: false, statusCode : 500,},message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
    const encPassword = crypto.createHash('md5').update(password).digest('hex')
    const rs: any = await AuthModels.login(db1, username, encPassword)
    if (rs.length > 0) {
            const user: any = rs[0]
            const userids: any = user.user_id
            const userid = fastify.jwt.sign({userids})
            console.log(user)
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
                var day = 1
                var TIMEEXPIRE =env.TIMEEXPIRE
                var time_expire_set :any = env.TIMEEXPIRE
                var time_expire_set1 = 300
                var time_setting :any = env.TIMEEXPIRE
                var today = new Date()
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
                var dateTime = date + ' ' + time
                var issued_at=Date.now()
                var timestamp = Date.now()
                var expiration_time=issued_at+time_setting 
                const token = fastify.jwt.sign({
                    user_id: user.user_id,userid:userid,level: user.level,username: user.username,email: user.email,
                    // firstName: user.first_name,lastName: user.last_name,
                    at: {
                        startdate: dateTime, 
                        issued_at: issued_at,
                        time_expired: expiration_time,
                        time_setting: time_setting,
                        day_expired: day, 
                        timeconfig: TIMEEXPIRE,
                        state: getRandomString(32),  
                    },                  
            })
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            const decoded: any = fastify.jwt.verify(token)
            //  fastify.setLocal('token', token)
            // asycnhronously
            fastify.jwt.verify(token, (err :any, decoded : any) => {
            if (err) fastify.log.error(err)
            fastify.log.info(`Token verified. Foo is ${decoded.foo}`)
            })
            const user_idx = user.user_id
            const datars = {
                    uid:  user_idx,
                    username: user.username, 
                    email: user.email,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    level: user.level,
            }
            const MaxAge = 3600
            const set_cookie:any='uid='+user_idx+'; Max-Age='+MaxAge+'; SameSite=None; Secure';
           // reply.header('Set-Cookie', set_cookie)
            const set_cookie2: any = 'token=' + token + '; Max-Age=' + MaxAge + '; SameSite=None; Secure';
           // reply.header('Set-Cookie', set_cookie2)
            reply.header('Access-Control-Max-Age', 600)
            reply.header('Accept-Language', 'en')
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'POST')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.header('user_idx', user_idx)
            reply.header('token', token)
            reply.header('timeexpire', time_expire_set)
            reply.header('create', dateTime)
            const full_name = user.username
            reply.send({
                title:{ status: true, statusCode : 200,},
                message: 'welcome ' + full_name + ' Sign in system successfully',
                message_th: 'ยินดีต้อนรับ คุณ ' + full_name + ' เข้าสู่ระบบสำเร็จ',
                // data: datars, encoded: token,
                expire :time_setting,
                token
            })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }else{
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 401)
            reply.header('status', false) 
        reply.code(401).send({ status: false,statusCode : 401, message: 'Login failed or user is not active ! ',message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ หรือ ยัง ไม่ได้ active user'  })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
      reply.code(500).send({ title: {status: false, statusCode : 500,},message: error })
      return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
})
/**************************************************/    
fastify.post('/resetpass', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const datareset = body.reset_valule 
    try {
        if (datareset === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: {status: false, statusCode : 500,},message: 'username or email is null',message_th: 'ไม่พบข้อมูล username หรือ email' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }   
      const rs: any = await AuthModels.resetPassword(db1, datareset)
      if (rs.length > 0) {
          const user: any = rs[0]
          /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            var day = 1
            var TIMEEXPIRE =env.TIMEEXPIRE
            var time_expire_set:any= env.TIMEEXPIRE
            var time_expire_set1 = 300
            var time_setting :any= env.TIMEEXPIRE
            var today = new Date()
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            var dateTime = date + ' ' + time
            var issued_at=Date.now()
            var timestamp = Date.now()
            var expiration_time=issued_at+time_setting 
            const token = fastify.jwt.sign({
                user_id: user.user_id,level: user.level,
                username: user.username,email: user.email,
                // firstName: user.first_name,lastName: user.last_name,
                at: {
                       startdate: dateTime, 
                       issued_at: issued_at,
                       time_expired: expiration_time,
                       time_setting: time_setting,
                       day_expired: day, 
                       timeconfig: TIMEEXPIRE,
                       state: getRandomString(32),  
                    },   
          })
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
         const decoded: any= fastify.jwt.verify(token)
        // asycnhronously
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.header('expire', time_setting) 
            reply.send({
                title:{ status: true, statusCode : 200,},
                message: 'Reset password username ' + user.username + ' email ' + user.email,
                message_th: 'ข้อมูลลืมรหัสผ่าน ' + user.username + ' email ' + user.email,
                data: token, expire :time_setting,
                input: { reset_valule: datareset }, //token: token,

            })
          console.log('query result :' + rs)
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      } else {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 401)
            reply.header('status', false) 
            reply.code(401).send({  title:{ status: false, statusCode : 401,}, 
                                    message: 'username or email is do not have in database',
                                    message_th: 'ไม่พบข้อมูล username หรือ email ในระบบฐานข้อมูล',data: null,input: { reset_valule: datareset},  
            })
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
      reply.code(500).send({ title: {status: false, statusCode : 500,},message: error })
    }
})
/**************************************************/
fastify.post('/changepassword', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */  async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const user_id = body.user_id
    const oldpassword = body.oldpassword
    const newpassword = body.newpassword
    if (username === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({
                title: { status: false, statusCode : 500, },
                message: 'username is null', message_th: 'ไม่พบข้อมูล username'
            })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } if (oldpassword === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({
                title: { status: false, statusCode : 500, },
                message: 'old password is null', message_th: 'ไม่พบข้อมูล old password'
            })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } if (newpassword === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({
                title: { status: false, statusCode : 500, },
                message: 'new password is null', message_th: 'ไม่พบข้อมูล new password'
            })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } 
    
    try {
        /******************************ตรวจสอบ code active Token check*************************************/
      const data: any = {}
      data.username = username
      data.user_id = user_id
      data.oldpassword = oldpassword
      data.newpassword = newpassword
      const encoldpassword = crypto.createHash('md5').update(oldpassword).digest('hex')
      const encnewpassword = crypto.createHash('md5').update(newpassword).digest('hex')
      const rsold: any = await AuthModels.login(db1, username, encoldpassword)
        if (rsold.length > 0) {

            const data_array: any = {} 
            data_array.password = encnewpassword
            await AuthModels.where_user_update_password(db1, username, data_array)
          
        } else {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
             reply.code(401).send({ status: false,statusCode : 401, message: 'change password failed! ',message_th: 'เปลี่ยนรหัสผ่านไม่สำเร็จ ไม่พบข้อมูล username หรือ password ในระบบ'  })
             return //reply.sent = true // exit loop ออกจากลูปการทำงาน 

        }

      const rs: any = await AuthModels.login(db1, username, encnewpassword)
      if (rs.length > 0) {
        const user: any = rs[0]
          console.log(user)
           /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            var day = 1
            var TIMEEXPIRE =env.TIMEEXPIRE
            var time_expire_set =  TIMEEXPIRE
            var time_expire_set1 = 300
            var timesetting : any = env.TIMEEXPIRE
            var today = new Date()
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            var dateTime = date + ' ' + time
            var issued_at=Date.now()
            var timestamp = Date.now()
            var expiration_time=issued_at+timesetting 
            const token = fastify.jwt.sign({
                user_id: user.user_id,level: user.level,
                username: user.username,email: user.email,
                // firstName: user.first_name,lastName: user.last_name,
                at: {
                       startdate: dateTime, 
                       issued_at: issued_at,
                       time_expired: expiration_time,
                       time_setting: timesetting,
                       day_expired: day, 
                       timeconfig: TIMEEXPIRE,
                       state: getRandomString(32),  
                    },  
          })
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
         const decoded: any= fastify.jwt.verify(token)
        // asycnhronously
        fastify.jwt.verify(token, (err :any, decoded :any) => {
        if (err) fastify.log.error(err)
        fastify.log.info(`Token verified. Foo is ${decoded.foo}`)
        })
          const user_idx = user.user_id
          const datars = {
                uid:  user_idx,
                username: user.username, 
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
                level: user.level,
          }
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.send({
                title: {status: true, statusCode : 200,cache:'no cache'},
                message: 'Change password done welcome ' + user.first_name + ' ' + user.last_name + ' Sign in system successfully',
                message_th: ' เปลี่ยนรหัสผ่าน สำเร็จ ยินดีต้อนรับ คุณ ' + user.first_name + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
                // data: datars, encoded: token,
                // data: decoded,
                token
            })
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      } else {
        reply.code(401).send({ status: false,statusCode : 401, message: 'Change password and Login failed or user is not active ! ',message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ หรือ ยัง ไม่ได้ active user'  })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
    } catch (error) {
        console.log(error)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: {status: false, statusCode : 500,},message: error })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
})
/**************************************************/   
fastify.post('/activecode', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const code = body.code
    if (code === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: {status: false, statusCode : 500,},message: 'code is null',message_th: 'ไม่พบข้อมูล code' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } 
    try {
        /******************************ตรวจสอบ code active Token check*************************************/
 
        var res = code  
        let ids = request.id
         const decoded: any= fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const profile: any = await AuthModels.profile(db1, user_id)
        const level = decoded['level']
        const username = decoded['username']
        const at = decoded['at']
        const startdate = at['startdate']
        const issued_at = at['issued_at']
        const time_setting:any =  at['time_setting']*100
        const time_expired = at['time_expired']
        const day_expired = at['day_expired']
        const timeconfig = at['timeconfig']
        
        var now = Date.now()
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
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: null, profile: null
                    })
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_en = 'Token Not Expired  active code satatus complate'
            const expired_status = 1
            const status = true
            const code = 200

            const data_array: any = {}
            data_array.status = 1
            await AuthModels.updateuid(db1, user_id, data_array)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: {
                            error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,
                           // msg_time: msg_time, 
                            user_id: user_id, level: level, username: username,
                           // startdate: startdate, time_expired: time_expired, time_setting: time_setting, issued_at: issued_at, now: now, time_cul: timestamp_cul,
                        },
                        profile: profile,
                    })
        }
        console.log('at jwt :'+at) 
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
       return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } catch (error) {
      console.log(error)
      reply.code(500).send({ // แสดงข้อมูล api
                        title: {
                                    title: {status: false, statusCode : 500,}, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                            },  
                                error: error,
                                data: null
      })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
        
})
/**************************************************/
fastify.get('/activecode', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const query: any = request.query
    const code = query.code
    if (code == "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false)
            reply.code(500).send({
                status: false,
                statusCode : 500, message: 'code is null',
                message_th: 'ไม่พบข้อมูล code'
            })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } 
    try {
        /******************************ตรวจสอบ code active Token check*************************************/
        var res = code  
        let ids = request.id
         const decoded: any= fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const profile: any = await AuthModels.ad_administrator_profile(db1, user_id)
        const level = decoded['level']
        const username = decoded['username']
        const at = decoded['at']
        const startdate = at['startdate']
        const issued_at = at['issued_at']
        const time_setting :any = at['time_setting']*100
        const time_expired = at['time_expired']
        const day_expired = at['day_expired']
        const timeconfig = at['timeconfig']
        var now = Date.now()
        var time_settings =time_setting
        var timestamp_cul  : any =  now - issued_at 
        var timestamp_culs  : any = timestamp_cul
        if (timestamp_culs > time_settings) {
            const msg_time = 'Token Expired : โทเค็นหมดอายุ'
            const msg_time_th = 'โทเค็นหมดอายุ'
            const msg_time_en = 'Token Expired '
            const expired_status = 0
            const status = false
            const code = 500
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: null, profile: null
                    })
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_en = 'Token Not Expired  active code satatus complate'
            const expired_status = 1
            const status = true
            const code = 200
            const data_array: any = {}
            data_array.status = 1
            await AuthModels.updateuid(db1, user_id, data_array)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: {
                            error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,
                           // msg_time: msg_time, 
                            user_id: user_id, level: level, username: username,
                           // startdate: startdate, time_expired: time_expired, time_setting: time_setting, issued_at: issued_at, now: now, time_cul: timestamp_cul,
                        },
                        profile: profile,
                    })
        }
        console.log('at jwt :'+at) 
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
       return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } catch (error) {
        console.log(error)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ // แสดงข้อมูล api
                                title: {
                                            status: false,statusCode : 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                                    },  
                                        error: error,
                                        data: null
            })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
        
})
/**************************************************/     
fastify.get('/verify', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            var str  : any =  request.headers.authorization
            var res = str.replace("Bearer ", "")  
            let ids = request.id
            //  const decodedToken = fastify.jwt.decode(token)
            const decoded: any= fastify.jwt.verify(res)
            const userid = decoded['userid']
            const user_id = decoded['user_id']
            const profile: any = await AuthModels.ad_administrator_profile(db1, user_id)
            const level = decoded['level']
            const username = decoded['username']
            const at = decoded['at']
            const startdate = at['startdate']
            const issued_at = at['issued_at']
            const time_setting  : any =  at['time_setting']*100
            const time_expired = at['time_expired']
            const day_expired = at['day_expired']
            const timeconfig = at['timeconfig']
            const state = at['state'] 
            /*************/
            var now = Date.now()
            var time_settings =time_setting
            var timestamp_cul  : any = now - issued_at 
            var timestamp_culs  : any = timestamp_cul
            if (timestamp_culs > time_settings) {
                const msg_time = 'Token Expired : โทเค็นหมดอายุ'
                const msg_time_th = 'โทเค็นหมดอายุ'
                const msg_time_en = 'Token Expired '
                const expired_status = 0
                const status = false
                const code = 500
                reply.header('Access-Control-Allow-Methods', 'GET')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('status', false) 
                        reply.send({  // แสดงข้อมูล api
                            title: {
                            status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                            },  
                            data: null, profile: null
                        })
            }else {
                const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
                const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
                const msg_time_en = 'Token Not Expired '
                const expired_status = 1
                const status = true
                const code = 200
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('user_id', userid)
                reply.header('Access-Control-Allow-Methods', 'GET')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 200)
                reply.header('status', true) 
                        reply.send({  // แสดงข้อมูล api
                            title: {
                            status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                            },  
                            data: {
                                error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,state:state,
                            // msg_time: msg_time, 
                            // user_id: user_id, level: level, username: username,
                            // startdate: startdate, time_expired: time_expired, time_setting: time_setting, issued_at: issued_at, now: now, time_cul: timestamp_cul,
                            },
                            profile: profile,state:state, 
                        })
            }
            /* โยนค่ากับไป ผ่าน reslove */
            //resolve(profile);
            console.log('at jwt :'+at) 
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } catch (error) {
        /* กรณี error โยนค่ากับไป reject*/
        // reject("error");

        console.log(error)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.code(500).send({ // แสดงข้อมูล api
                                title: {
                                            status: false,statusCode : 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                                    },  
                                        error: error,
                                        data: null
            })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
        
})
/**************************************************/
fastify.post('/verify', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        var str  : any =  request.headers.authorization
        var res = str.replace("Bearer ", "")  
        let ids = request.id
        const decoded: any = fastify.jwt.verify(res)
        const userid = decoded['userid']
        const user_id = decoded['user_id']
        const profile: any = await AuthModels.ad_administrator_profile(db1, user_id)
        const level = decoded['level']
        const username = decoded['username']
        const at = decoded['at']
        const startdate = at['startdate']
        const issued_at = at['issued_at']
        const time_setting  : any =  at['time_setting']*100
        const time_expired = at['time_expired']
        const day_expired = at['day_expired']
        const timeconfig = at['timeconfig']
        const state = at['state'] 
        var now = Date.now()
        var time_settings =time_setting
        var timestamp_cul  : any = now - issued_at 
        var timestamp_culs  : any = timestamp_cul
        if (timestamp_culs > time_settings) {
            const msg_time = 'Token Expired : โทเค็นหมดอายุ'
            const msg_time_th = 'โทเค็นหมดอายุ'
            const msg_time_en = 'Token Expired '
            const expired_status = 0
            const status = false
            const code = 500
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: null, profile: null
                    })
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
            const msg_time_en = 'Token Not Expired '
            const expired_status = 1
            const status = true
            // const userid_decode: any = fastify.jwt.verify(userid)
            // const token = fastify.jwt.sign({ foo: 'bar' })
            // const decoded = fastify.jwt.decode(token)
            const userid_decode = fastify.jwt.decode(userid)
            const userids = userid_decode['userids']
            const iat = userid_decode['iat']
            const code = 200
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 200)
                reply.header('status', true)  
                reply.header('x-bar', 'bar')  
                 reply.header('user_id', userids)  
                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: {
                            error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,state:state,
                           // msg_time: msg_time, 
                           // user_id: user_id, level: level, username: username,
                           // startdate: startdate, time_expired: time_expired, time_setting: time_setting, issued_at: issued_at, now: now, time_cul: timestamp_cul,
                        },
                        profile: profile,
                        userid: userid,
                        userid_decode: userid_decode,
                        userids: userids,
                        state:state,
                    })
        }
        console.log('at jwt :'+at) 
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
    return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } catch (error) {
        console.log(error)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ // แสดงข้อมูล api
                                title: {
                                        status: false,statusCode : 500, message: 'Results unsuccessful',message_th: 'แสดง ข้อมูลไม่สำเร็จ',cache:'no cache'
                                    },  
                                        error: error,
                                        data: null
            })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
        
})
/**************************************************/      
fastify.post('/verifyauthen', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */  async (request: FastifyRequest, reply: FastifyReply) => {
    const decoded: any = fastify.jwt.getstate()
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.code(200).send({ // แสดงข้อมูล api
                title: {
                    status: true, statusCode : 200,
                    message: 'Results  test successful',
                    message_th: 'test สำเร็จ',
                    cache: 'no cache'
                    },  
                    data: null
            }) 
  })
/**************************************************/   
/**************************************************/  
fastify.get('/language',async (request: FastifyRequest, reply: FastifyReply) => {
    const language: any = await AuthModels.tr_language_all(db1)
    if (language === null) {
            const msg_time = 'Results unsuccessful: ไม่พบข้อมูล'
            const msg_time_th = 'ไม่พบข้อมูล'
            const msg_time_en = 'Results unsuccessful'
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 204)
            reply.header('status', false) 
             reply.code(204).send({  // แสดงข้อมูล api
                        title: {
                            status: 0,
                            statusCode: 204,
                            message: msg_time_en,
                            msg_time_th: msg_time_th,
                            cache: 'no cache'
                        },  
                        data: null, profile: null
                    })
        return 
    } else {
        var array: any = {}
        for (const [key, value] of Object.entries(language)) {
            const keys: any = key
            const rs: any = value
            const code: any = rs.code
            const lang_id: any = rs.language_id
            const name: any = rs.name
            const language_data: any = { code: code, language_id: lang_id, name: name }
            const datas1: any = {} 
            console.log(keys, language_data); 
        }
         /*******************/
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.code(200).send({ // แสดงข้อมูล api
                                title: {
                    status: false,
                    statusCode: 200,
                                    message: 'Results successful',
                                    message_th: 'แสดง ข้อมูลสำเร็จ',
                                    cache: 'no cache'
                                    },  
                   data: language
            })
        return  
        
    }
})   
/**************************************************/
fastify.get('/header',async (request: FastifyRequest, reply: FastifyReply) => {
    const headerrs: any = await AuthModels.he_header(db1)
    if (headerrs === null) {
            const msg_time = 'Results unsuccessful: ไม่พบข้อมูล'
            const msg_time_th = 'ไม่พบข้อมูล'
            const msg_time_en = 'Results unsuccessful'
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 204)
            reply.header('status', false) 
             reply.code(204).send({  // แสดงข้อมูล api
                        title: {
                            status: 0,
                            statusCode: 204,
                            message: msg_time_en,
                            msg_time_th: msg_time_th,
                            cache: 'no cache'
                        },  
                        data: null, profile: null
                    })
        return 
    } else {
        var array: any = {}
        for (const [key, value] of Object.entries(headerrs)) {
            const keys: any = key
            const rs: any = value
            const code: any = rs.code
            const name: any = rs.name
            const description: any = rs.description
            const language_data: any = { code: code, description: description, name: name }
            const datas1: any = {} 
            console.log(keys, language_data); 
        }
         /*******************/
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.code(200).send({ // แสดงข้อมูล api
                                title: {
                    status: false,
                    statusCode: 200,
                                    message: 'Results successful',
                                    message_th: 'แสดง ข้อมูลสำเร็จ',
                                    cache: 'no cache'
                                    },  
                   data: headerrs
            })
        return  
        
    }
})   
/**************************/    
} 