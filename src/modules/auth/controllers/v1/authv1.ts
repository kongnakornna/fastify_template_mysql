import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
import { UserModel } from '../../models/user_model'
import { Authv1Model } from '../../models/v1/authv1_model'
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
export default async function authv1(fastify: FastifyInstance) {
const userModel = new UserModel()
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
fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    try {
        if (username == '') {
            const set_cookie:any='username='+username+'; SameSite=None; Secure';
           // reply.header('Set-Cookie', set_cookie)
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Max-Age', 600)
            reply.header('Accept-Language', 'en')
            reply.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
            reply.header('Access-Control-Allow-Origin', '*')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({
                title: { status: false, statusCode : 500, },
                message: 'username is null', message_th: 'ไม่พบข้อมูล username'
            })
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
            reply.code(500).send({
                title: { status: false, statusCode : 500, },
                message: 'password is null', message_th: 'ไม่พบข้อมูล password'
            })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const rs: any = await userModel.login(db1, username, encPassword)
      if (rs.length > 0) {
        const user: any = rs[0]
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
                    // firstName: user.firstname,lastName: user.last_name,
                    at: {
                        startdate: dateTime, 
                        issued_at: issued_at,
                        timeconfig: TIMEEXPIRE,
                        TIMEEXPIRE_TOKEN: env.TIMEEXPIRE_TOKEN,
                        state: getRandomString(32),  
                    },                  
            }, {expiresIn: env.TIMEEXPIRE_TOKEN }) 
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
         const decoded: any= fastify.jwt.verify(token)
        // asycnhronously
        fastify.jwt.verify(token, (err:any, decoded:any) => {
        if (err) fastify.log.error(err)
        fastify.log.info(`Token verified. Foo is ${decoded.foo}`)
        })
          const user_idx = user.user_id
          const datars = {
                uid:  user_idx,
                username: user.username, 
                email: user.email,
                firstName: user.firstname,
                lastName: user.last_name,
                level: user.level,
          }
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', '*')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.send({
                title: { status: true, statusCode : 200,cache: 'no cache' },
                message: 'welcome ' + user.firstname + ' ' + user.last_name + ' Sign in system successfully',
                message_th: 'ยินดีต้อนรับ คุณ ' + user.firstname + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
                // data: datars, encoded: token,
                TIMEEXPIRE: env.TIMEEXPIRE,
                token
            })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } else {
            reply.code(401).send({
                title: { status: true, statusCode : 200,cache: 'no cache' },
                message: 'Login failed!', message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ',TIMEEXPIRE: env.TIMEEXPIRE,
            })
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
            reply.code(500).send({
                title: { status: false, statusCode : 500,cache: 'no cache' },
                message: error,TIMEEXPIRE: env.TIMEEXPIRE,
            })
      return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
})
/**************************************************/    
fastify.post('/singup', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const email = body.email
    const firstname = body.firstname
    const last_name = body.lastname
    const level = body.level
    const network_id = body.network_id
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
        } if (password === "") {
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
        } if (firstname === "") {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'firstname is null',message_th: 'ไม่พบข้อมูล firstname' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }if (last_name==="") {
            reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'last_name is null',message_th: 'ไม่พบข้อมูล last_name' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }if (level==="") {  const level=1 }
    const status=1
    const network_id=null
    const date = new Date()
    const emailchk = EmailValidator.validate(email) // true //false
        if (emailchk == false) {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 500)
                reply.header('status', false)  
                reply.code(500).send({
                status: false,
                statusCode : 500,emailchk: emailchk,date: date,
                message: 'This email is Invalid format ',
                message_th: 'รูปแบบ email ไม่ถูกต้อง'
            }) 
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
  
    const rs_email: any = await userModel.validation_email(db1, email)
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
    }const rs_username: any = await userModel.validation_username(db1, username)
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
      data.password = encPassword
      data.firstname = firstname
      data.last_name = last_name
      data.email = email
      data.date = date
      data.level = level
      data.status = status
      data.network_id = network_id
      await userModel.create(db1, data)
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
        
        const lastrs: any = await userModel.lastidread(db1)
           // reply.code(500).send({ da: lastrs }) return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        const luser: any = lastrs[0]
        const user_idx = luser.user_id 
        var md5 = require('md5')
        const enc_user_idx = md5(user_idx)
        const data_array: any = {}
        data_array.sd_users_profile_id = enc_user_idx

       // reply.code(200).send({ array: data_array })
        //return //reply.sent = true // exit loop ออกจากลูปการทำงาน 

        await userModel.updateuid(db1, user_idx, data_array)
        const rs: any = await userModel.login(db1, username, encPassword)
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
                // firstName: user.firstname,lastName: user.last_name,
                at: {
                        startdate: dateTime, 
                        issued_at: issued_at,
                        timeconfig: TIMEEXPIRE,
                        TIMEEXPIRE_TOKEN: env.TIMEEXPIRE_TOKEN,
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
          const datars = {
                uid:  user_idx,
                username: user.username, 
                email: user.email,
                firstName: user.firstname,
                lastName: user.last_name,
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
              message: 'welcome ' + user.firstname + ' ' + user.last_name + ' Sign in system successfully',
              message_th: 'ยินดีต้อนรับ คุณ ' + user.firstname + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
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
fastify.get('/genint',{preValidation: [fastify.genint]}, async (request: FastifyRequest, reply: FastifyReply) => {}) 
fastify.post('/genint',{preValidation: [fastify.genint]}, async (request: FastifyRequest, reply: FastifyReply) => {})   
fastify.get('/getstate',{preValidation: [fastify.getstate]}, async (request: FastifyRequest, reply: FastifyReply) => {}) 
fastify.post('/getstate',{preValidation: [fastify.getstate]}, async (request: FastifyRequest, reply: FastifyReply) => {})   
fastify.get('/clientsecret',{preValidation: [fastify.clientsecret]}, async (request: FastifyRequest, reply: FastifyReply) => {}) 
fastify.post('/clientsecret',{preValidation: [fastify.clientsecret]}, async (request: FastifyRequest, reply: FastifyReply) => {})   
fastify.get('/codegenclientid',{preValidation: [fastify.codegen]}, async (request: FastifyRequest, reply: FastifyReply) => {}) 
fastify.post('/codegenclientid',{preValidation: [fastify.codegen]}, async (request: FastifyRequest, reply: FastifyReply) => {})  
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
      const rs: any = await userModel.login(db1, username, encPassword)
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
                    // firstName: user.firstname,lastName: user.last_name,
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
            const user_idx = user.user_id
            const datars = {
                    uid:  user_idx,
                    username: user.username, 
                    email: user.email,
                    firstName: user.firstname,
                    lastName: user.last_name,
                    level: user.level,
            }
            const uid: any = user_idx
            const username: any = user.username
            const email: any = user.email
            const level: any = user.level
            let tokens: any = token
            /*****************/
            const MaxAge = 84000
            const set_cookie:any='uid='+uid+'; Max-Age='+MaxAge+'; SameSite=None; Secure';
            const set_cookie1:any='username='+username+'; Max-Age='+MaxAge+'; SameSite=None; Secure';
            const set_cookie2:any='email='+email+'; Max-Age='+MaxAge+'; SameSite=None; Secure'; 
            const set_cookie3:any='level='+level+'; Max-Age='+MaxAge+'; SameSite=None; Secure'; 
            const set_cookie4:any='token='+tokens+'; Max-Age='+MaxAge+'; SameSite=None; Secure'; 
          
            reply.header('Set-Cookie', set_cookie)
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
            reply.send({
                title:{ status: true, statusCode : 200,},
                message: 'welcome ' + user.firstname + ' ' + user.last_name + ' Sign in system successfully',
                message_th: 'ยินดีต้อนรับ คุณ ' + user.firstname + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
                // data: datars, encoded: token,
                expire :time_setting,
                token
            })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      } else {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 401)
                reply.header('code', 401)
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
      const rs: any = await userModel.resetPassword(db1, datareset)
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
                // firstName: user.firstname,lastName: user.last_name,
                at: {
                        startdate: dateTime, 
                        issued_at: issued_at,
                        timeconfig: TIMEEXPIRE,
                        TIMEEXPIRE_TOKEN: env.TIMEEXPIRE_TOKEN,
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
                reply.header('code', 401)
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
      const rsold: any = await userModel.login(db1, username, encoldpassword)
        if (rsold.length > 0) {

            const data_array: any = {} 
            data_array.password = encnewpassword
            await userModel.where_user_update_password(db1, username, data_array)
          
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

      const rs: any = await userModel.login(db1, username, encnewpassword)
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
                // firstName: user.firstname,lastName: user.last_name,
                at: {
                       startdate: dateTime, 
                        issued_at: issued_at,
                        timeconfig: TIMEEXPIRE,
                        TIMEEXPIRE_TOKEN: env.TIMEEXPIRE_TOKEN,
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
                firstName: user.firstname,
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
                message: 'Change password done welcome ' + user.firstname + ' ' + user.last_name + ' Sign in system successfully',
                message_th: ' เปลี่ยนรหัสผ่าน สำเร็จ ยินดีต้อนรับ คุณ ' + user.firstname + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
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
        const sd_users_profile: any = await userModel.sd_users_profile(db1, user_id)
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
                        data: null, sd_users_profile: null
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
            await userModel.updateuid(db1, user_id, data_array)
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
                        sd_users_profile: sd_users_profile,
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
        const sd_users_profile: any = await userModel.sd_users_profile(db1, user_id)
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
                        data: null, sd_users_profile: null
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
            await userModel.updateuid(db1, user_id, data_array)
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
                        sd_users_profile: sd_users_profile,
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
// authentication   
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
            const sd_users_profile: any = await userModel.sd_users_profile(db1, user_id)
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
        const sd_users_profile: any = await userModel.sd_users_profile(db1, user_id)
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
                        data: null, sd_users_profile: null
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
                        sd_users_profile: sd_users_profile,
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
fastify.route({
  method: 'GET',
  url: '/testopts',
  schema: {
    querystring: {
      name: { type: 'string' },
      excitement: { type: 'integer' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
    handler: function (request, reply) {
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.header('lang', 'th')
            reply.send({ hello: 'world' })
  }
})
/**************************************************/
fastify.get('/test_handler_schema', {
        handler(req, reply) {
            const body: any = req.body
            const query: any = req.query
            const id = query.id
            const name = query.name
            const image = query.image
            if (id == '') {
                reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('status', false) 
                reply.code(500).send({
                    title: { status: false, statusCode: 500, },
                    message: 'id is null and id must is number only',
                    message_th: 'ไม่พบข้อมูล id type id ต้องเป็นตัวเลขเท่านั้น'
                })
                console.log(query)
                return // ออกจากลูปการทำงาน 
            }   
            
            // reply.header('Access-Control-Allow-Origin', '*')
            // reply.header('Content-Type', 'application/json')
            // reply.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
            // reply.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
            // reply.header('Auth', 'X-Auth-Token')
            reply.header('version', 1)
            reply.header('x-cache-status', 0) // 1=yes ,0=no
            reply.header('cache-control', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 200)
            reply.header('status', true) 
            reply.send({id: id, name: name, image: image })
    },
    schema: {
            response: {
            '2xx': {
                id: { type: 'number' },
                name: { type: 'string' } 
            }
            }
        }
})
/**************************************************/
fastify.post('/authentication', /*ป้องกัน การใช้งาน โดย Token */{
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
        const sd_users_profile: any = await userModel.sd_users_profile(db1, user_id)
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
                        data: null, sd_users_profile: null
                    })
        }else {

            // ใช้สำหรับ ประมวลผลที่ต้องการ ใช้งาน

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
                reply.header('code', 200)
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
                        profile: sd_users_profile,
                        userid: userid,
                        userid_decode: userid_decode,
                        user_id: userids,
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
            reply.header('code', 500)
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
fastify.get('/authentication', /*ป้องกัน การใช้งาน โดย Token */{
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
        const sd_users_profile: any = await userModel.sd_users_profile(db1, user_id)
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
                        data: null, sd_users_profile: null
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
                        sd_users_profile: sd_users_profile,
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
}
/*
└── plugins (from the Fastify ecosystem)
└── your plugins (your custom plugins)
└── decorators
└── hooks
└── modules 
    │
    └──  service A
    │     └── plugins (from the Fastify ecosystem)
    │     └── your plugins (your custom plugins)
    │     └── decorators
    │     └── hooks
    │     └── controllers your services
    │
    └──  service B
          └── plugins (from the Fastify ecosystem)
          └── your plugins (your custom plugins)
          └── decorators
          └── hooks
          └── controllers your services

        var statusCode = error.statusCode
        if (statusCode >= 500) {
        log.error(error)
        } else if (statusCode >= 400) {
        log.info(error)
        } else {
        log.error(error)
        }

const token = fastify.jwt.sign({ foo: 'bar' })
const decoded = fastify.jwt.decode(token)
*/

/*
    Promise คืออะไร
    Promise เป็นออบเจ็คที่ส่งค่ากลับเป็นผลสำเร็จ (Resolve) หรือผลล้มเหลว (Reject) ของการทำงานแบบ Asynchronous มันสามารถช่วยลดความซับซ้อนและทำให้การเขียนโปรแกรมในรูปแบบ Asynchronous ทำได้ง่ายขึ้น และ Promise เป็นรูปแบบใหม่สำหรับการเขียนโปรแกรมที่ทำงานแบบ Asynchronous ในภาษา JavaScript

    ในภาษา JavaScript ฟังก์ชันที่ทำงานแบบ Asynchronous จะต้องการฟังก์ชัน Callback เมื่อการทำง่รเสร็จสิ้น การใช้งาน Promise การใช้งาน Promise สามารถช่วยลดการใช้ฟังก์ชัน Callback เพื่อทำให้มันเรียบง่ายขึ้นได้ และมันสามารถใช้ร่วมกับคำสั่ง Async/Await เพื่อทำให้การทำงานเป็นแบบ Synchronous

    ในการทำงานของ Promise มันสามารถให้ผลลัพธ์การทำงานได้สองรูปแบบนั่นคือ

    การทำงานที่สำเร็จ (Resolve)
    การทำงานที่ล้มเหลว (Reject)
    และเมื่อต้องการทราบผลลัพธ์การทำงานของ Promise เราสามารถตรวจสอบผลลัพธ์จากออบเจ็คของ Promise ได้โดยการใช้ Consumer เมธอดอย่าง then และ catch
        promise_resolve.js
        let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('Hello');
        }, 1000); 
        });

        promise.then(value => {
            console.log(`Resolved: ${value}`);
        });

        console.log('Main program');
        นี่เป็นผลลัพธ์การทำงานของโปรแกรม

        Main program
        Resolved: Hello

        นั่นหมายความว่าเมื่อเราต้องการให้ Promise ทำงานสำเร็จ เราเรียกใช้ฟังก์ชัน resolve พร้อมกับค่าที่ต้องการส่งค่ากลับ ในกรณีนี้คือข้อความ 'Hello' และในตัวอย่างนี้ ยังไม่ได้มีการใช้งานฟังก์ชัน reject ซึ่งเราจะทำมันในภายหลัง

    promise.then(value => {
        console.log(`Resolved: ${value}`);
    });
    เพื่อตรวจสอบการทำงานของ Promise เราเรียกใช้เมธอด then บนออบเจ็คของ Promise และมันจะถูกเรียกใช้งานเมื่อ Promise ทำงานเสร็จสิ้นหรือเมธอด resolve ถูกเรียกใช้งาน เรากำหนดฟังก์ชัน Callback ที่รับหนึ่งพารามิเตอร์ value ที่เป็นค่าส่งกลับของ Promise

    นั่นหมายความว่าเมื่อเวลาผ่านไป 1 วินาที ฟังก์ชัน Callback ที่กำหนดให้กับเมธอด then จะถูกเรียกใช้งานโดยได้รับข้อความ Hello ที่ส่งมาจากการทำงานสำเร็จของ Promise และผลลัพธ์ที่ได้ถูกนำมาแสดงออกทางหน้าจอ

    Promise rejection
    อย่างที่บอกไปแล้วว่า Promise สามารถทำงานสำเร็จหรือล้มเหลวได้ ในกรณีที่สำเร็จ ฟังก์ชัน resolve จะถูกเรียกใช้งานพร้อมกับส่งค่ากลับมา ส่วนในกรณีที่ Promise ทำงานล้มเหลวนั้นสามารถเกิดขึ้นได้สองกรณีดังต่อไปนี้

    เกิดจากเรียกใช้ฟังก์ชัน reject เราสามารถเรียกใช้ฟังก์ชันนี้โดยตรงเพื่อทำให้ Promise ทำงานล้มเหลวได้
    เกิดจากโปรแกรมที่ทำงานผิดพลาดที่เกิดการ throw error ขึ้น ซึ่งนี่เป็นการเกิดข้อผิดพลาดปกติในภาษา JavaScript และเมื่อเกิดใน Promise มันทำให้เกิดจาก Reject
    โดยทั้งสองกรณีคือการทำงานล้มเหลวของ Promise หรือ Promise rejection และเราสามารถใช้เมธอด catchเพื่อรับมือกับการทำงานที่ล้มเหลวของ Promise ได้ ในตัวอย่างนี้ แสดงการทำงานของ Promise ที่สามารถทำงานสำเร็จ (Resolve) และล้มเหลว (Reject)

    rejecting_promise.js
    function evenPromise(number) {
        return new Promise((resolve, reject) => {
            if (number % 2 == 0) {
                resolve(`${number} is an even number`);
            } else {
                reject(new Error(`${number} is not an even number`))
            }
        });
    }

    evenPromise(2).then((value) => {
        console.log(value);
    }).catch(err => {
        console.log(err.toString());
    });

    evenPromise(3).then((value) => {
        console.log(value);
    }).catch(err => {
        console.log(err.toString());
    });

    Promise โดยใช้ async / await ช่วยดังนี้
    อธิบาย code คือ เราจะใช้ await เพื่อบอกว่า function นั้นมีการทำงานแบบ async ให้รอผลลัพธ์ก่อนแล้วค่อยไปทำ function ถัดไป หากเราจะใช้ await เราจำเป็นต้องประกาศ function เราให้เป็น async เสียก่อนนะครับ ในกรณีที่เราไม่ต้องการเขียนแบบ Promise เราก็สามารถ ประกาศ function เราให้อยู่ในรูปแบบ async ได้

 */ 