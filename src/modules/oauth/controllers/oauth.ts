import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
import { UserModel } from '../../../modules/oauth/models/user_model'
import * as path from 'path'
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
// TypeScript
import * as EmailValidator from 'email-validator';
// function name oauth
export default async function oauth(fastify: FastifyInstance) {
  const userModel = new UserModel()
  const db: knex = fastify.db
/**************************************************/    
fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    try {
        if (username=='') {
            reply.code(500).send({ status: false,code: 500,message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        } if (password=='') {
            reply.code(500).send({ status: false,code: 500,message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        }
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const rs: any = await userModel.login(db, username, encPassword)
      if (rs.length > 0) {
        const user: any = rs[0]
          console.log(user)
           /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            var day = 1;
            var TIMEEXPIRE =process.env.TIMEEXPIRE;
            var time_expire_set = 86000 || process.env.TIMEEXPIRE;
            var time_expire_set1 = 60 * 5;
            var time_setting = time_expire_set;
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            var issued_at=Date.now();
            var timestamp = Date.now();
            var expiration_time=issued_at+time_setting; 
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
                    }
          })
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        const decoded = fastify.jwt.verify(token)
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
                firstName: user.first_name,
                lastName: user.last_name,
                level: user.level,
          }
          reply.send({
              status: true, code: 200,
              message: 'welcome ' + user.first_name + ' ' + user.last_name + ' Sign in system successfully',
              message_th: 'ยินดีต้อนรับ คุณ ' + user.first_name + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
             // data: datars, encoded: token,
             // data: decoded,
              token
          })
          reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      } else {
        reply.code(401).send({ status: false,code: 401, message: 'Login failed!',message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ'  })
        reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false,code: 500,message: error })
      reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }
  })
/**************************************************/    
fastify.post('/singup', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    const email = body.email
    const first_name = body.firstname
    const last_name = body.lastname
    const level = body.level
    const network_id = body.network_id
    try {
        if(username==="") {
            reply.code(500).send({ status: false,code: 500,message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
           //  die()
        }if (password==="") {
            reply.code(500).send({ status: false,code: 500,message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        }
        const encPassword = crypto.createHash('md5').update(password).digest('hex')
        if (email === "") {
            reply.code(500).send({ status: false,code: 500,message: 'email is null',message_th: 'ไม่พบข้อมูล email' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        }if (first_name==="") {
            reply.code(500).send({ status: false,code: 500,message: 'first_name is null',message_th: 'ไม่พบข้อมูล first_name' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        }if (last_name==="") {
            reply.code(500).send({ status: false,code: 500,message: 'last_name is null',message_th: 'ไม่พบข้อมูล last_name' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        }if (level==="") {  const level=1 }
    const status=1
    const network_id=null
    const date = new Date();
    const emailchk = EmailValidator.validate(email); // true //false
    if (emailchk==false) {
               reply.code(500).send({
                status: false,
                code: 500,emailchk: emailchk,date: date,
                message: 'This email is Invalid format ',
                message_th: 'รูปแบบ email ไม่ถูกต้อง'
            }) 
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }
  
    const rs_email: any = await userModel.validation_email(db, email)
    if (rs_email.length > 0) {
        reply.code(500).send({
            status: false,
            code: 500,
            message: 'This email is duplicate data in the database system ',
            message_th: 'email นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล'
        })
        reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }const rs_username: any = await userModel.validation_username(db, username)
    if (rs_username.length > 0) {
        reply.code(500).send({
            status: false,
            code: 500,
            message: 'This username is duplicate data in the database system ',
            message_th: 'username นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล'
        }) 
        reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }  
    /**************************************************/    
    try {
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const data: any = {};
      data.username = username
      data.password = encPassword
      data.first_name = first_name
      data.last_name = last_name
      data.email = email
      data.date = date
      data.level = level
      data.status = status
      data.network_id = network_id
      await userModel.create(db, data)
     // reply.send({ message: 'Insert data', status: true })
       const status_insert = 1
    } catch (error) {
       const status_insert = 0
      console.log(error)
        reply.code(500).send({
            status: false,
            code: 500,
            message: 'singup failed!',
            message_th: ' ไม่สามาราลงทะเบียนได้',
            error: error
        })
        reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }
        
        const lastrs: any = await userModel.lastidread(db)
           // reply.code(500).send({ da: lastrs }) reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        const luser: any = lastrs[0]
        const user_idx = luser.user_id 
        var md5 = require('md5');
        const enc_user_idx = md5(user_idx)
        const data_array: any = {};
        data_array.profile_id = enc_user_idx

       // reply.code(200).send({ array: data_array })
        //reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 

        await userModel.updateuid(db, user_idx, data_array)
        const rs: any = await userModel.login(db, username, encPassword)
        if (rs.length > 0) {
        const user: any = rs[0]
          console.log(user)
           /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            var day = 1;
            var TIMEEXPIRE =process.env.TIMEEXPIRE;
            var time_expire_set = 86000 || process.env.TIMEEXPIRE;
            var time_expire_set1 = 60 * 5;
            var time_setting = time_expire_set;
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ ' ' + time;
            var issued_at=Date.now();
            var timestamp = Date.now();
            var expiration_time=issued_at+time_setting; 
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
                    }
          })
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        const decoded = fastify.jwt.verify(token)
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
                firstName: user.first_name,
                lastName: user.last_name,
                level: user.level,
          }
          reply.send({
              status: true, code: 200,
              message: 'welcome ' + user.first_name + ' ' + user.last_name + ' Sign in system successfully',
              message_th: 'ยินดีต้อนรับ คุณ ' + user.first_name + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
             // data: datars, encoded: token,
              enc_user_idx: enc_user_idx,
              token
          })
          reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      } else {
          reply.code(401).send({ status: false, code: 401, message: 'Login failed!', message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ' })
          reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
        reply.code(500).send({ status: false, code: 500, message: error })
        reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }
  })
/**************************************************/    
fastify.post('/singin', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    try {
        if (username=='') {
            reply.code(500).send({ status: false,code: 500,message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        } if (password=='') {
            reply.code(500).send({ status: false,code: 500,message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        }
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const rs: any = await userModel.login(db, username, encPassword)
      if (rs.length > 0) {
        const user: any = rs[0]
          console.log(user)
           /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            var day = 1;
            var TIMEEXPIRE =process.env.TIMEEXPIRE;
            var time_expire_set = 86000 || process.env.TIMEEXPIRE;
            var time_expire_set1 = 60 * 5;
            var time_setting = time_expire_set;
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            var issued_at=Date.now();
            var timestamp = Date.now();
            var expiration_time=issued_at+time_setting; 
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
                    }
          })
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        const decoded = fastify.jwt.verify(token)
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
                firstName: user.first_name,
                lastName: user.last_name,
                level: user.level,
          }
          reply.send({
              status: true, code: 200,
              message: 'welcome ' + user.first_name + ' ' + user.last_name + ' Sign in system successfully',
              message_th: 'ยินดีต้อนรับ คุณ ' + user.first_name + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
             // data: datars, encoded: token,
             // data: decoded,
              token
          })
          reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      } else {
        reply.code(401).send({ status: false,code: 401, message: 'Login failed or user is not active ! ',message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ หรือ ยัง ไม่ได้ active user'  })
        reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false,code: 500,message: error })
      reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }
  })
/**************************************************/    
fastify.post('/resetpass', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const datareset = body.reset_valule 
    try {
        if (datareset==="") {
            reply.code(500).send({ status: false,code: 500,message: 'username or email is null',message_th: 'ไม่พบข้อมูล username หรือ email' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        }   
      const rs: any = await userModel.resetPassword(db, datareset)
      if (rs.length > 0) {
        const user: any = rs[0] 
          reply.send({
              status: true, code: 200,
              message: 'Reset password username ' + user.username + ' email ' + user.email,
              message_th: 'ข้อมูลลืมรหัสผ่าน ' + user.username + ' email ' + user.email,
              data: rs, input: {reset_valule: datareset },

          })
          console.log('query result :' + rs)
          reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      } else {
        reply.code(401).send({  status: false,
                                code: 401, 
                                message: 'username or email is do not have in database',
                                message_th: 'ไม่พบข้อมูล username หรือ email ในระบบฐานข้อมูล',data: null,input: { reset_valule: datareset},  
        })
          reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false,code: 500,message: error })
    }
  })
    /**************************************************/
fastify.post('/changepassword', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const user_id = body.user_id
    const oldpassword = body.oldpassword
    const newpassword = body.newpassword
    if (username==="") {
            reply.code(500).send({ status: false,code: 500,message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }if (oldpassword==="") {
            reply.code(500).send({ status: false,code: 500,message: 'old password is null',message_th: 'ไม่พบข้อมูล old password' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }if (newpassword==="") {
            reply.code(500).send({ status: false,code: 500,message: 'new password is null',message_th: 'ไม่พบข้อมูล new password' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    } 
    
    try {
        /******************************ตรวจสอบ code active Token check*************************************/
      const data: any = {};
      data.username = username
      data.user_id = user_id
      data.oldpassword = oldpassword
      data.newpassword = newpassword
      const encoldpassword = crypto.createHash('md5').update(oldpassword).digest('hex')
      const encnewpassword = crypto.createHash('md5').update(newpassword).digest('hex')
      const rsold: any = await userModel.login(db, username, encoldpassword)
        if (rsold.length > 0) {

            const data_array: any = {}; 
            data_array.password = encnewpassword
            await userModel.where_user_update_password(db, username, data_array)
          
        } else {
             reply.code(401).send({ status: false,code: 401, message: 'change password failed! ',message_th: 'เปลี่ยนรหัสผ่านไม่สำเร็จ ไม่พบข้อมูล username หรือ password ในระบบ'  })
             reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 

        }

      const rs: any = await userModel.login(db, username, encnewpassword)
      if (rs.length > 0) {
        const user: any = rs[0]
          console.log(user)
           /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
            var day = 1;
            var TIMEEXPIRE =process.env.TIMEEXPIRE;
            var time_expire_set = 86000 || process.env.TIMEEXPIRE;
            var time_expire_set1 = 60 * 5;
            var time_setting = time_expire_set;
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            var issued_at=Date.now();
            var timestamp = Date.now();
            var expiration_time=issued_at+time_setting; 
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
                    }
          })
         /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        const decoded = fastify.jwt.verify(token)
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
                firstName: user.first_name,
                lastName: user.last_name,
                level: user.level,
          }
          reply.send({
              status: true, code: 200,
              message: 'Change password done welcome ' + user.first_name + ' ' + user.last_name + ' Sign in system successfully',
              message_th: ' เปลี่ยนรหัสผ่าน สำเร็จ ยินดีต้อนรับ คุณ ' + user.first_name + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
             // data: datars, encoded: token,
             // data: decoded,
              token
          })
          reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      } else {
        reply.code(401).send({ status: false,code: 401, message: 'Change password and Login failed or user is not active ! ',message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ หรือ ยัง ไม่ได้ active user'  })
        reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false,code: 500,message: error })
      reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
    }
  })
/**************************************************/   
    /**************************************************/
 
fastify.post('/activecode', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const code = body.code
           if (code==="") {
            reply.code(500).send({ status: false,code: 500,message: 'code is null',message_th: 'ไม่พบข้อมูล code' })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        } 
    try {
        /******************************ตรวจสอบ code active Token check*************************************/
 
        var res = code;  
        let ids = request.id
        const decoded = fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const profile: any = await userModel.profile(db, user_id)
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
        var timestamp_culs =now - issued_at 
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
                        data: null, profile: null
                    })
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_en = 'Token Not Expired  active code satatus complate'
            const expired_status = 1
            const status = true
            const code = 200

            const data_array: any = {};
            data_array.status = 1
            await userModel.updateuid(db, user_id, data_array)

                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,code: code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
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

fastify.get('/activecode', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const query: any = request.query
    const code = query.code
    if (code=="") {
        reply.code(500).send({
            status: false,
            code: 500, message: 'code is null',
            message_th: 'ไม่พบข้อมูล code'
        })
            console.log(request.body)
            reply.sent = true // I tried that, didn't work  ออกจากลูปการทำงาน 
        } 
    try {
           
        /******************************ตรวจสอบ code active Token check*************************************/
        var res = code;  
        let ids = request.id
        const decoded = fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const profile: any = await userModel.profile(db, user_id)
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
                        data: null, profile: null
                    })
        }else {
            const msg_time = 'Token Not Expired : โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_th = 'โทเค็นยังไม่หมดอายุ active code satatus complate'
            const msg_time_en = 'Token Not Expired  active code satatus complate'
            const expired_status = 1
            const status = true
            const code = 200

            const data_array: any = {};
            data_array.status = 1
            await userModel.updateuid(db, user_id, data_array)

                    reply.send({  // แสดงข้อมูล api
                        title: {
                        status: status,code: code, message: msg_time_en,msg_time_th: msg_time_th,cache:'no cache'
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
fastify.get('/verify', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        /******************************ตรวจสอบวันหมดอายุ Token check*************************************/
        var str  : any = request.headers.authorization
        var res = str.replace("Bearer ", "");  
        let ids = request.id
        const decoded = fastify.jwt.verify(res)
        const user_id = decoded['user_id']
        const profile: any = await userModel.profile(db, user_id)
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
                        data: null, profile: null
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
        const profile: any = await userModel.profile(db, user_id)
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