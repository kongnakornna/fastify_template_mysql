import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
import { AdministratorModel } from '../../../modules/administrator/models/administrator_model'
import * as path from 'path'
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
// TypeScript
import * as EmailValidator from 'email-validator';
// function name administrator
export default async function administrator(fastify: FastifyInstance) {
  const AdminModel:any = new AdministratorModel()
  const db1: knex = fastify.db1
/**************************************************/    
fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    try {
        if (username=='') {
            reply.code(500).send({ status: false,code: 500,message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } if (password=='') {
            reply.code(500).send({ status: false,code: 500,message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
      const encPassword = crypto.createHash('md5').update(password).digest('hex')
      const rs: any = await AdminModel.login(db1, username, encPassword)
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
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      } else {
        reply.code(401).send({ status: false,code: 401, message: 'Login failed!',message_th: 'ไม่พบข้อมูล username หรือ password ในระบบ'  })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      }
    } catch (error) {
      console.log(error)
      reply.code(500).send({ status: false,code: 500,message: error })
      return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
    }
  })
/*****************************************************/    
}