import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
import { UserModel } from '../../../modules/login/models/user_model'
import * as path from 'path'
const envPath = path.join(__dirname, '../../../config.conf')
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {}
const TIMEEXPIRE =env.TIMEEXPIRE
// env.DB1_HOST
export default async function login(fastify: FastifyInstance) {
  const userModel = new UserModel()
  const db1: knex = fastify.db1
fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const body: any = request.body
    const username = body.username
    const password = body.password
    try {
        if (username == '') {
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false) 
            reply.code(500).send({ title: {status: false, statusCode : 500,},message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
            console.log(request.body)
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } if (password == '') {
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
          reply.header('Access-Control-Allow-Methods', 'POST')
          reply.header('message', 'Information Correct')
          reply.header('statusCode', 200)
          reply.header('status', true) 
          reply.header('user_idx', user_idx)
          reply.header('token', token)
          reply.header('time_expire', time_expire_set)
          reply.send({
              title:{ status: true, statusCode : 200,},
              message: 'welcome ' + user.first_name + ' ' + user.last_name + ' Sign in system successfully',
              message_th: 'ยินดีต้อนรับ คุณ ' + user.first_name + ' ' + user.last_name + ' เข้าสู่ระบบสำเร็จ',
             // data: datars, encoded: token,
              TIMEEXPIRE : time_setting,
             // token
          })
          return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
      } else {
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
}