import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

import * as nodemailer from 'nodemailer'
import * as ejs from 'ejs'
import * as path from 'path'
import * as fs from 'fs'

import { UserModel } from '../../../modules/user/models/user_model'

export default async (fastify: FastifyInstance) => {

  const userModel = new UserModel()
  const db1 = fastify.db1

  fastify.get('/', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {

    try {

      const transporter = nodemailer.createTransport({
        host: 'smtp.xxx.xx',
        port: 587,
        auth: {
          user: 'xxxxx',
          pass: 'xxxxx'
        }
      });

      const sendMail = await transporter.sendMail({
        from: '"Test Mail" <test.dev@test.email>',
        to: '"kongnakornna@gmail.com',
        subject: "สวัสดี",
        text: "ทดสอบการส่งเมล์",
        html: "สวัสดี <b>สถิตย์ เรียนพิศ</b>"
      })

      reply.send({ info: sendMail, url: nodemailer.getTestMessageUrl(sendMail) })
    } catch (error) {
      reply.code(500).send({ status: false, message: error})
    }

  })

  fastify.get('/attachments', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {

    try {

      const transporter = nodemailer.createTransport({
        host: 'smtp.xxx.email',
        port: 587,
        auth: {
          user: 'xx.xxx@ethereal.email',
          pass: 'xxx'
        }
      });

      const file = path.join(__dirname, '../../public/pdf/demo.pdf')


      const sendMail = await transporter.sendMail({
        from: '"Test Mail" <test.dev@test.email>',
        to: '"kongnakornna@gmail.com',
        subject: "ทดสอบส่งไฟล์",
        text: "ส่งไฟล์",
        html: "ส่งไฟล์",
        attachments: [
          { path: file, filename: 'sedoc.pdf' },
        ]
      })

      reply.send({ info: sendMail, url: nodemailer.getTestMessageUrl(sendMail) })
    } catch (error) {
      reply.code(500).send({ status: false, message: error})
    }

  })

  fastify.get('/template', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
  },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {

    try {

      const transporter = nodemailer.createTransport({
        host: 'smtp.xxx.email',
        port: 587,
        auth: {
          user: 'xx.x@ethereal.email',
          pass: 'xxxx'
        }
      });


      const rs = await userModel.read(db1)

      const templateFile = path.join(__dirname, '../../../../views/mail-template.ejs')
      const html: any = ejs.render(fs.readFileSync(templateFile, 'utf8'), { users: rs })


      const sendMail = await transporter.sendMail({
        from: '"Test Mail" <test.dev@test.email>',
        to: '"kongnakornna@gmail.com',
        subject: "สวัสดี",
        text: "ทดสอบการส่งเมล์",
        html: html
      })

      reply.send({ info: sendMail, url: nodemailer.getTestMessageUrl(sendMail) })
    } catch (error) {
      reply.code(500).send({ status: false, message: error})
    }

  })

}