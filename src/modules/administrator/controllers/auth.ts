import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
/************* validate schemas*******************/
import bodySchema from '../../../modules/administrator/schemas/body'
import bodysingupSchema from '../../../modules/administrator/schemas/bodysingup'
import bodysinginSchema from '../../../modules/administrator/schemas/bodysingin'
import bodyresetpassSchema from '../../../modules/administrator/schemas/bodyresetpass'
import changepasswordSchema from '../../../modules/administrator/schemas/changepasswordSchema'
import paramsSchema from '../../../modules/administrator/schemas/params'
import queryStringSchema from '../../../modules/administrator/schemas/query_string'
import headerSchema from '../../../modules/administrator/schemas/header'
/************* validate schemas*******************/
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
import * as fs from 'fs'
/************* nodemailer*******************/
import * as nodemailer from 'nodemailer'
import * as ejs from 'ejs'
/************* nodemailer*******************/
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
function passwordValidator(inputtxt: any){ 
    var paswd :any=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(inputtxt.match(paswd)){  
           console.log('validate password  Correct, try another...:'+inputtxt);
        return true;
    }else{  
            console.log('validate password Wrong...:'+inputtxt);
        return false;
    }
}  
// use  lang: getlanguage(1),  
function getlanguage(id: any) {
        const language: any =AuthModels.tr_language_all_id(db1,id)
      //var rs: any = {}
       let result: any = {}
        for (const [key, value] of Object.entries(language)) {
            const keys: any = key
            const rs: any = value
            const code: any = rs.code
            const lang_id: any = rs.language_id
            const name: any = rs.name
            const language_data: any = { code: code, language_id: lang_id, name: name }
            result=language_data 
            }
     return result
}
fastify.post('/singup', {
    schema: bodysingupSchema // validate schemas
    }, async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const passwordvd = body.password
    const email = body.email
    const role_id : any= body.role_id
    const network_id = body.network_id
    const fullname = body.fullname
    try {
        if (username === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
        /* Password Validator */
        const passwordrt: any = passwordValidator(password)
        if (passwordrt == false) {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Password not secure')
            reply.header('statusCode', 500)
            reply.header('status', false)
            reply.header('Password', false) 
            reply.code(500).send({
                title: {
                    status: false,
                    statusCode: 500,
                    cache: 'no cache'
                },
                message: 'Password not secure ,Please set a new password, English only, with uppercase, lowercase, numbers and special characters.,mix together',
                message_th: ' รหัสผ่าน ไม่ปลอดภัย กรุณาตั้งรหัสผ่านใหม่ เป็นภาษาอังกฤษเท่านั้น ตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก ตัวเลข และอักขระพิเศษ ผสมกัน'
            })
            console.log(' passwordrt :'+passwordrt)
            return
        }
        const encPassword = crypto.createHash('md5').update(password).digest('hex')
        if (email === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
      data.passwordvd = passwordvd
      data.email = email
      data.date = date
      data.role_id = role_id
         //data.status = 0
         data.status = 1
      data.network_id = network_id
      data.fullname = fullname
      await AuthModels.create(db1, data)
     // reply.code(200).send({ message: 'Insert data', status: true })
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
            datas1.fullname = fullname
            datas1.email = email
            const datas1_profile: any = {}
            datas1_profile.user_id =user_idx
            const validation_profile: any = await AuthModels.validation_profile_user_id(db1,user_idx,lang_id)
            if (validation_profile.length > 0) {
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'POST')
                        reply.header('statusCode', 500)
                        reply.header('status', false)  
                        reply.code(500).send({
                            title: { status: false, statusCode : 500,cache: 'no cache' },
                            message: 'This username is duplicate data profile in the database system ',
                            message_th: 'username นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล profile'
                        }) 
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            } else {
                const create_profile: any = await AuthModels.create_profile(db1, datas1)
                console.log(keys, create_profile);
            } 
             const validation_address: any = await AuthModels.validation_address_user_id(db1,user_idx,lang_id)
            if (validation_address.length > 0) {
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'POST')
                        reply.header('statusCode', 500)
                        reply.header('status', false)  
                        reply.code(500).send({
                            title: { status: false, statusCode : 500,cache: 'no cache' },
                            message: 'This username is duplicate data address in the database system ',
                            message_th: 'username นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล address'
                        }) 
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            } else {
                const create_address: any = await AuthModels.create_address(db1, datas1)
                console.log(keys, create_address);
            } 
            console.log(keys, language_data);
        }
         /*******************/
        // reply.code(200).send({ array: data_array })
        // return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        const rs: any = await AuthModels.login(db1, username, encPassword)
        if (rs.length > 0) {
        const user: any = rs[0]
          console.log(user)
           /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
             /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
                var day = 1
                var TIMEEXPIRE =env.TIMEEXPIRE
                var time_expire_set :any = env.TIMEEXPIRE
                var time_expire_set1 = 300
                var time_setting :any = env.TIMEEXPIRE
                var TIMEEXPIRE_TOKEN :any = env.TIMEEXPIRE_TOKEN
                var today = new Date() 
                var issued_at=Date.now()
                const token = fastify.jwt.sign({
                    user_id: user.id,
                    role_id: user.role_id,
                    username: user.username,
                    email: user.email,
                    // firstName: user.first_name,lastName: user.last_name,
                    at: { 
                        issued_at: issued_at,
                        timeconfig: TIMEEXPIRE,
                        TIMEEXPIRE_TOKEN: env.TIMEEXPIRE_TOKEN,
                        state: getRandomString(32),  
                    },                  
            }, {expiresIn: env.TIMEEXPIRE_TOKEN }) 
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
         const decoded: any= fastify.jwt.verify(token)
        // asycnhronously
        fastify.jwt.verify(token, (err:any, decoded:any) => {
        if (err) fastify.log.error(err)
        fastify.log.info(`Token verified. Foo is ${decoded.foo}`)
        })
        const user_idx = user.id
        const full_name = user.username
        const datars = {
                uid:  user_idx,
                username: user.username, 
                email: user.email, 
                role_id: user.role_id,
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
            reply.code(200).send({
              title: { status: true, statusCode : 200,},
              message: 'welcome ' + full_name+  ' Sign in system successfully',
              message_th: 'ยินดีต้อนรับ คุณ ' + full_name+ ' เข้าสู่ระบบสำเร็จ',
             // data: datars, encoded: token,
              enc_user_idx: enc_user_idx,
              token
          })
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      } else {
            reply.code(401).send({
                title: { status: false, statusCode: 401, },
                message: 'Unauthorized ,Please check your email inbox  and activate user  in link ',
                message_th: 'โปรดตรวจสอบ กล่องจดหมาย ในอีเมลของท่าน และเปิด ใช้การฝช้งาน ระบบ ก่อนเข้าใช้งานระบบ'
            })
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
fastify.post('/singin', {
    schema: bodysinginSchema // validate schemas
    }, async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const state: any =getRandomString(32)
    try {
        if (username == '') {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            const userids: any = user.id
            const userid = fastify.jwt.sign({userids})
            console.log(user)
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
                var day = 1
                var TIMEEXPIRE =env.TIMEEXPIRE
                var time_expire_set :any = env.TIMEEXPIRE
                var time_expire_set1 = 300
                var time_setting :any = env.TIMEEXPIRE
                var TIMEEXPIRE_TOKEN :any = env.TIMEEXPIRE_TOKEN
                var today = new Date()
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
                var dateTime = date + ' ' + time
                var issued_at=Date.now()
                const token = fastify.jwt.sign({
                    user_id: user.id,
                    role_id: user.role_id,
                    username: user.username,
                    email: user.email,
                    // firstName: user.first_name,lastName: user.last_name,
                    at: {
                        startdate: dateTime, 
                        issued_at: issued_at,
                        timeconfig: TIMEEXPIRE,
                        TIMEEXPIRE_TOKEN: env.TIMEEXPIRE_TOKEN,
                        state: getRandomString(32),  
                    },                  
            }, {expiresIn: env.TIMEEXPIRE_TOKEN }) 
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            const decoded: any = fastify.jwt.verify(token)
            //  fastify.setLocal('token', token)
            // asycnhronously
            fastify.jwt.verify(token, (err :any, decoded : any) => {
            if (err) fastify.log.error(err)
            fastify.log.info(`Token verified. Foo is ${decoded.foo}`)
            })
            const user_idx = user.id
            const datars = {
                    uid:  user_idx,
                    username: user.username, 
                    email: user.email,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    role_id: user.role_id,
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
            await reply.code(200).send({ 
                title:{ status: true, statusCode : 200,},
                message: 'welcome ' + full_name + ' Sign in system successfully',
                message_th: 'ยินดีต้อนรับ คุณ ' + full_name + ' เข้าสู่ระบบสำเร็จ',
                expire :time_setting,
                token,
                decoded: decoded,
                // data: datars, encoded: token,
            })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }else{
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
fastify.post('/resetpass', {
    schema: bodyresetpassSchema // validate schemas
    }, async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const datareset = body.reset_valule 
    try {
        if (datareset === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            var TIMEEXPIRE_TOKEN_resetPassword1 =env.TIMEEXPIRE_TOKEN_resetPassword1
            var time_expire_set:any= env.TIMEEXPIRE
            var time_expire_set1 = 300
            var time_setting :any= env.TIMEEXPIRE_TOKEN_resetPassword1
            var today = new Date()
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            var dateTime = date + ' ' + time
            var issued_at=Date.now()
            var timestamp = Date.now()
            var expiration_time=issued_at+time_setting 
            const token = fastify.jwt.sign({
                user_id: user.id,role_id: user.role_id,
                username: user.username,email: user.email,
                // firstName: user.first_name,lastName: user.last_name,
                at: {
                       startdate: dateTime, 
                       issued_at: issued_at,
                       time_expired: expiration_time,
                       time_setting: time_setting,
                       day_expired: day, 
                       timeconfig: TIMEEXPIRE_TOKEN_resetPassword1,
                       state: getRandomString(32),  
                    },   
           }, {expiresIn: env.TIMEEXPIRE_TOKEN_resetPassword }) 
          /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            /***************Send email***************/
                const decoded: any= fastify.jwt.verify(token)
                console.log('query result :' + rs)
                /***************Send email***************/
                const email_host: any =  env.email_host
                const email_port: any = env.email_port
                const email_host_user: any = env.email_host_user
                const email_host_password: any = env.email_host_password
                try {
                    const transporter = nodemailer.createTransport({
                        host: email_host,
                        port: email_port,
                        auth: {
                                user: email_host_user,
                                pass: email_host_password,
                            }
                        });
                const templateFile = path.join(__dirname, '../../../../views/mail-template.ejs')
               // const html: any = ejs.render(fs.readFileSync(templateFile, 'utf8'), {  title: 'Data Reset Password',url: 'https://www.my.com?token='+token, token: token,})
                const html: any = ejs.render(fs.readFileSync(templateFile, 'utf8'), { token: token,})
                const sendMail = await transporter.sendMail({
                    from: '"App service" <admin@appservice.com>',
                    to: user.email,
                    subject: "Reset Password",
                    text: 'Reset by token',
                    html: html
                })

                    //reply.send({ info: sendMail, url: nodemailer.getTestMessageUrl(sendMail) }) 
                    // asycnhronously
                    reply.header('version', 1)
                    reply.header('x-cache-status', 0) // 1=yes ,0=no
                    reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                    reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                    reply.header('message', 'Information Correct')
                    reply.header('statusCode', 200)
                    reply.header('status', true) 
                    reply.header('expire', time_setting) 
                    await reply.code(200).send({ 
                        title:{ status: true, statusCode : 200,},
                        message: 'Reset password username ' + user.username + ' email ' + user.email,
                        message_th: 'ข้อมูลลืมรหัสผ่าน ' + user.username + ' email ' + user.email,
                        data: token,
                        expire: time_setting,
                        input: { reset_valule: datareset },
                        info: sendMail,
                        url: nodemailer.getTestMessageUrl(sendMail),
                        //token: token,
                    })
                    
                } catch (error) {
                    //reply.code(500).send({ status: false, message: error })
                    reply.header('version', 1)
                    reply.header('x-cache-status', 0) // 1=yes ,0=no
                    reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                    reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                    reply.header('message', 'Information Correct')
                    reply.header('statusCode', 401)
                    reply.header('status', false) 
                    reply.code(500).send({  title:{ status: false, statusCode : 500,}, 
                                            message: 'Can not send email',
                                            message_th: 'ไม่สามารถส่ง email ได้',
                                            message_error: error,
                                            token: token
                    })
                    
                }
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        /***************Send email***************/
      } else {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
fastify.post('/changepassword',{
                        schema: changepasswordSchema // validate schemas
                    }, async (request: FastifyRequest, reply: FastifyReply) => {
                const body: any = request.body
                const token = body.token 
                    try {
                         if (token == '') {
                                reply.header('version', 1)
                                reply.header('x-cache-status', 0) // 1=yes ,0=no
                                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                                reply.header('message', 'Information Correct')
                                reply.header('statusCode', 500)
                                reply.header('status', false) 
                                reply.code(500).send({
                                    title: {
                                        status: false,
                                        statusCode: 500,
                                    },
                                    message: 'token is null',
                                    message_th: 'ไม่พบข้อมูล token'
                                })
                                console.log(request.body)
                                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                        }
                        
                        const decoded: any = fastify.jwt.verify(token)
                                reply.header('version', 1)
                                reply.header('x-cache-status', 0) // 1=yes ,0=no
                                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                                reply.header('message', 'Information Correct')
                                reply.header('statusCode', 500)
                                reply.header('status', false) 
                                reply.code(200).send({
                                    title: {
                                        status: false,
                                        statusCode: 200,
                                    },
                                    message: 'verify token',
                                    message_th: 'พบข้อมูล verify token',
                                    data: decoded,
                                    token:token,
                                })
                                console.log(request.body)
                                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                        /*****************************************************/   
                    } catch (error) {
                        console.log(error)
                        reply.code(500).send({
                            title: {
                                status: false,
                                statusCode: 500,
                                cache: 'no cache'
                            },
                            message: error
                        })
                        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                    }
    })
fastify.post('/changepasswordsave', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate],
    schema: { headers: headerSchema },
    attachValidation: true
    // ป้องกัน การใช้งาน โดย Token
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({
                title: { status: false, statusCode : 500, },
                message: 'old password is null', message_th: 'ไม่พบข้อมูล old password'
            })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
    if (newpassword === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            data_array.passwordvd = newpassword
            await AuthModels.where_user_update_password(db1, username, data_array)
          
        } else {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
                user_id: user.id,role_id: user.role_id,
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
          const user_idx = user.id
          const datars = {
                uid:  user_idx,
                username: user.username, 
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
                role_id: user.role_id,
          }
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            await reply.code(200).send({ 
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: {status: false, statusCode : 500,},message: error })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
})
/**************************************************/  
fastify.post('/changepasswordsave2', /*ป้องกัน การใช้งาน โดย Token */{
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            data_array.passwordvd = newpassword
            await AuthModels.where_user_update_password(db1, username, data_array)
          
        } else {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
                user_id: user.id,role_id: user.role_id,
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
          const user_idx = user.id
          const datars = {
                uid:  user_idx,
                username: user.username, 
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name,
                role_id: user.role_id,
          }
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            await reply.code(200).send({ 
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
        const role_id = decoded['role_id']
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
            reply.code(500).send({   // แสดงข้อมูล api
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            await reply.code(200).send({  // แสดงข้อมูล api
                        title: {
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: {
                            error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,
                           // msg_time: msg_time, 
                            user_id: user_id, role_id: role_id, username: username,
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
        const profile: any = await AuthModels.where_ad_administrator_profile_id(db1, user_id)
        const role_id = decoded['role_id']
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({  // แสดงข้อมูล api
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            await reply.code(200).send({  // แสดงข้อมูล api
                        title: {
                        status: status,statusCode : code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
                        },  
                        data: {
                            error: null, timeconfig: timeconfig,time: timestamp_cul,living_time:time_settings,expired_status: expired_status,
                           // msg_time: msg_time, 
                            user_id: user_id, role_id: role_id, username: username,
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            const sd_users_profile: any = await AuthModels.where_ad_administrator_profile_id(db1, user_id)
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
                            data: null, sd_users_profile: null
                        })
            }else {
                const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ'
                const msg_time_th = 'โทเค็นยังไม่หมดอายุ'
                const msg_time_en = 'Token Not Expired '
                const expired_status = 1
                const status = true
                const code = 200
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
                            sd_users_profile: sd_users_profile,state:state, 
                        })
            }
            /* โยนค่ากับไป ผ่าน reslove */
            //resolve(sd_users_profile);
            console.log('at jwt :'+at) 
            /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    } catch (error) {
        /* กรณี error โยนค่ากับไป reject*/
        // reject("error");

        console.log(error)
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
fastify.post('/verify', {
                    schema: {
                    headers: headerSchema
                    }, attachValidation: true
                }, async (request: FastifyRequest, reply: FastifyReply) => {
                    if (request.validationError) {
                        console.log(request.validationError)
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                        reply.header('message', 'Information Correct')
                        reply.header('statusCode', 400)
                        reply.header('status', false) 
                        reply.code(400).send({
                                            status: false,
                                            error: 'ข้อมูลไม่ถูกต้อง ไม่พบข้อมูล state',
                                            code: 1005,
                                            message: 'Invalid data, state data not found.',
                                            message_th: 'ข้อมูลไม่ถูกต้อง ไม่พบข้อมูล state'
                                        })
                        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                    }else{
                        const headers: any = request.headers
                        var str: any =  headers.authorization
                        var token: any = str.replace("Bearer ", "") //  token form header 
                        const verify_token: any = fastify.jwt.verify(token)
                        const decoded: any = verify_token
                        const at: any = decoded['at']  
                        const state1: any = at['state']
                        let user_id: any = decoded['user_id']
                        let role_id: any = decoded['role_id']
                        let username: any = decoded['username']
                        let email: any = decoded['usernamemaile'] 
                        console.log(headers)
                        const state = headers['state']
                        if (state1 === state) {
                                const rsold: any = await AuthModels.verifyview(db1, user_id)
                                if (rsold.length > 0) {
                                    const data_array: any = {} 
                                    data_array.status = 1 
                                    await AuthModels.verify(db1, user_id, data_array)
                                       /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
                                        var day = 1
                                        var TIMEEXPIRE =env.TIMEEXPIRE
                                        var time_expire_set :any = env.TIMEEXPIRE
                                        var time_expire_set1 = 300
                                        var time_setting :any = env.TIMEEXPIRE
                                        var TIMEEXPIRE_TOKEN :any = env.TIMEEXPIRE_TOKEN
                                        var today = new Date()
                                        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
                                        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
                                        var dateTime = date + ' ' + time
                                        var issued_at=Date.now() 
                                        const user: any = rsold[0]
                                        const userids: any = user.id
                                        const userid = fastify.jwt.sign({userids})
                                        const token_id: any = fastify.jwt.sign({
                                            user_id: user.id,
                                            role_id: user.role_id,
                                            username: user.username,
                                            email: user.email,
                                            // firstName: user.first_name,lastName: user.last_name,
                                            at: {
                                                startdate: dateTime, 
                                                issued_at: issued_at,
                                                timeconfig: TIMEEXPIRE,
                                                TIMEEXPIRE_TOKEN: env.TIMEEXPIRE_TOKEN,
                                                state: getRandomString(32),  
                                            },                  
                                        }, { expiresIn: env.TIMEEXPIRE_TOKEN })
                                        reply.header('version', 1)
                                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                                        reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                                        reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                                        reply.header('message', 'Information Correct')
                                        reply.header('statusCode', 200)
                                        reply.header('status', true) 
                                        reply.code(200).send({
                                                status: true,
                                                code: 1005,
                                                error:null,
                                                user_id:user_id,
                                                message: 'verify personal information complete',
                                                message_th: 'ข้อมูลถูกต้อง ทำการ เปิดใช้งาน user สำเรํจ',
                                                meg: 'welcome ' + username + ' Sign in system successfully',
                                                meg_th: 'ยินดีต้อนรับ คุณ ' + username + ' เข้าสู่ระบบสำเร็จ',
                                                token:token_id,
                                            })
                                        return
                                } else {
                                        reply.header('version', 1)
                                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                                        reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                                        reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                                        reply.header('message', 'Information Correct')
                                        reply.header('statusCode', 400)
                                        reply.header('status', false) 
                                        reply.code(400).send({
                                                            status: false,
                                                            error: 'ข้อมูลไม่ถูกต้อง ไม่พบข้อมูล user',
                                                            code: 1005,
                                                            message: 'Invalid data, user data not found.',
                                                            message_th: 'ข้อมูลไม่ถูกต้อง ไม่พบข้อมูล user'
                                                        })
                                        return 

                                }

                        } else {
                                reply.header('version', 1)
                                reply.header('x-cache-status', 0) // 1=yes ,0=no
                                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                                reply.header('message', 'Information Correct')
                                reply.header('statusCode', 500)
                                reply.header('status', true) 
                                reply.code(500).send({
                                        status: true,
                                        code: 500,
                                        error:null,
                                        user_id:null,
                                        message: 'Invalid state information',
                                        message_th: 'ข้อมูล state ไม่ถูกต้อง'
                                })
                            return  
                            
                        } 
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            await reply.code(200).send({ // แสดงข้อมูล api
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
fastify.get('/info', {
                    schema: {
                    headers: headerSchema
                    }, attachValidation: true
                }, async (request: FastifyRequest, reply: FastifyReply) => {
                    if (request.validationError) {
                        console.log(request.validationError)
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                        reply.header('message', 'Information Correct')
                        reply.header('statusCode', 400)
                        reply.header('status', false) 
                        reply.code(400).send({
                                            status: false,
                                            error: 'ข้อมูลไม่ถูกต้อง ไม่พบข้อมูล state',
                                            code: 1005,
                                            message: 'Invalid data, state data not found.',
                                            message_th: 'ข้อมูลไม่ถูกต้อง ไม่พบข้อมูล state'
                                        })
                        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                    }else{
                        const headers: any = request.headers
                        var str: any =  headers.authorization
                        var token: any = str.replace("Bearer ", "") //  token form header 
                        const verify_token: any = fastify.jwt.verify(token)
                        const decoded: any = verify_token
                        const at: any = decoded['at']  
                        const state1: any = at['state']  
                        console.log(headers)
                        const state = headers['state']
                        if (state1 === state) {
                                reply.header('version', 1)
                                reply.header('x-cache-status', 0) // 1=yes ,0=no
                                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                                reply.header('message', 'Information Correct')
                                reply.header('statusCode', 200)
                                reply.header('status', true) 
                                reply.code(200).send({
                                        status: true,
                                        code: 1005,
                                        error:null,
                                        message: 'Data state',
                                        message_th: 'ข้อมูลถูกต้อง'
                                    })
                            
                        } else {
                                reply.header('version', 1)
                                reply.header('x-cache-status', 0) // 1=yes ,0=no
                                reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                                reply.header('message', 'Information Correct')
                                reply.header('statusCode', 500)
                                reply.header('status', true) 
                                reply.code(500).send({
                                        status: true,
                                        code: 500,
                                        error:null,
                                        message: 'Invalid state information',
                                        message_th: 'ข้อมูล state ไม่ถูกต้อง'
                                    })
                        }
                       
                        return  
                    }

                })
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            await reply.code(200).send({ // แสดงข้อมูล api
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
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
            reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            await reply.code(200).send({ // แสดงข้อมูล api
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