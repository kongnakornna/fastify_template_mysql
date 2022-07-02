import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

import * as nodemailer from 'nodemailer'
import * as ejs from 'ejs'
import * as path from 'path'
import * as fs from 'fs'

import { UserModel } from '../models/user'


export default async (fastify: FastifyInstance) => {

  const userModel = new UserModel()
  const db = fastify.db

  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {

    try {

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'tiffany.abshire@ethereal.email',
          pass: 'F8eM7hmur1sYQU4QZV'
        }
      });

      const sendMail = await transporter.sendMail({
        from: '"Satit Rianpit" <tiffany.abshire@ethereal.email>',
        to: '"demo@demo.com',
        subject: "สวัสดี",
        text: "ทดสอบการส่งเมล์",
        html: "สวัสดี <b>สถิตย์ เรียนพิศ</b>"
      })

      reply.send({ info: sendMail, url: nodemailer.getTestMessageUrl(sendMail) })
    } catch (error) {
      reply.code(500).send({ ok: false, message: error.message })
    }

  })

  fastify.get('/attachments', async (request: FastifyRequest, reply: FastifyReply) => {

    try {

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'tiffany.abshire@ethereal.email',
          pass: 'F8eM7hmur1sYQU4QZV'
        }
      });

      const file = path.join(__dirname, '../../public/pdf/demo.pdf')


      const sendMail = await transporter.sendMail({
        from: '"Satit Rianpit" <tiffany.abshire@ethereal.email>',
        to: '"demo@demo.com',
        subject: "ทดสอบส่งไฟล์",
        text: "ส่งไฟล์",
        html: "ส่งไฟล์",
        attachments: [
          { path: file, filename: 'เอกสารความลับ.pdf' },
        ]
      })

      reply.send({ info: sendMail, url: nodemailer.getTestMessageUrl(sendMail) })
    } catch (error) {
      reply.code(500).send({ ok: false, message: error.message })
    }

  })

  fastify.get('/template', async (request: FastifyRequest, reply: FastifyReply) => {

    try {

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'tiffany.abshire@ethereal.email',
          pass: 'F8eM7hmur1sYQU4QZV'
        }
      });


      const rs = await userModel.read(db)

      const templateFile = path.join(__dirname, '../../views/mail-template.ejs')
      const html: any = ejs.render(fs.readFileSync(templateFile, 'utf8'), { users: rs })


      const sendMail = await transporter.sendMail({
        from: '"Satit Rianpit" <tiffany.abshire@ethereal.email>',
        to: '"demo@demo.com',
        subject: "สวัสดี",
        text: "ทดสอบการส่งเมล์",
        html: html
      })

      reply.send({ info: sendMail, url: nodemailer.getTestMessageUrl(sendMail) })
    } catch (error) {
      reply.code(500).send({ ok: false, message: error.message })
    }

  })

}