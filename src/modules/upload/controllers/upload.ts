
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import multer from 'fastify-multer'
const mime = require('mime-types')
import * as fse from 'fs-extra'
import * as fs from 'fs'
import * as knex from 'knex'
import { v4 as uuidv4 } from 'uuid';
// import { FileModel } from '../models/file'
import { FileModel } from '../../../modules/upload/models/file_model'
/**************************/
import * as path from 'path'
const envPath = path.join(__dirname, './config.conf')
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {} 
console.log("UPLOAD_DIR: ", env.UPLOAD_DIR)
const uploadPath :any=  env.UPLOAD_DIR
/**************************/

const fileModel = new FileModel()
export default async function upload(fastify: FastifyInstance) {
  const db1: knex = fastify.db1
 
  const storage = multer.diskStorage({
    destination: (req: any, file: any, cb: any) => {
      cb(null, uploadPath)
    },
    filename: (req: any, file: any, cb: any) => {
      const _ext = path.extname(file.originalname) // .jpg
      const filename = uuidv4() + _ext
      cb(null, filename)
    }
  })

  const upload = multer({
    storage,
    limits: {
      fileSize: 5 * 1024 * 1024 * 10
    },
    fileFilter: (req: any, file: any, cb: any) => {
      console.log(file.mimetype)
      if (file.mimetype !== 'image/jpeg') {
        return cb(new Error('Invalid mimetype!'), false)
      }
      cb(null, true)
    }
  })

  fastify.post('/', {
    preHandler: upload.single('file'),preValidation: [fastify.authenticate] /*ป้องกัน การใช้งาน โดย Token */
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    const file = request.file
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var issued_at = date + ' ' + time;
    const fileInfo: any = {}
    fileInfo.originalname = file.originalname
    fileInfo.mimetype = file.mimetype
    fileInfo.filesize = file.size
    fileInfo.filename = file.filename
    fileInfo.date = issued_at
      const rs: any = await fileModel.save(db1, fileInfo)
      console.log('rs:=> ' + rs)
    const fileId = rs[0]
    const file_name = file.filename
    reply.send({
              status: true, code: 200,
              message: 'upload file ' + file_name + ' successfully',
              message_th: 'upload file ' + file_name + ' สำเร็จ',
              data: fileId
          })
  })

  fastify.post('/array', {
    preHandler: upload.array('file', 10),preValidation: [fastify.authenticate] /*ป้องกัน การใช้งาน โดย Token */
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    const files = request.files
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var issued_at = date + ' ' + time;
    for (const file of files) {
      const fileInfo: any = {}
      fileInfo.originalname = file.originalname
      fileInfo.mimetype = file.mimetype
      fileInfo.filesize = file.size
      fileInfo.filename = file.filename
      fileInfo.date = issued_at
      const file_name = file.filename
      const rs: any = await fileModel.save(db1, fileInfo)
      const fileId = rs[0]
      console.log('upload file ' +fileId)
    }

    reply.send({
              status: true, code: 200,
              message: 'upload   file successfully',
              message_th: 'upload   file  สำเร็จ',
              data: 'upload file สำเร็จ',
          })
  })

  fastify.get('/file/:fileId', async (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    if (params=='') {
            reply.code(500).send({ status: false,code: 500,message: 'params is null',message_th: 'ไม่พบข้อมูล params' })
            console.log(request.body)
            reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
    const fileId = params.fileId
    if (fileId=='') {
            reply.code(500).send({ status: false,code: 500,message: 'file_id is null',message_th: 'ไม่พบข้อมูล file_id' })
            console.log(request.body)
            reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } 

    try {
      const rs: any = await fileModel.getInfo(db1, fileId)
      if (rs.length > 0) {
        const file = rs[0]
        const filename = file.filename
        const mimetype = file.mimetype
        const filePath = path.join(uploadPath, filename)
        if (fs.existsSync(filePath)) {
          const _mimetype = mimetype
          const fileData = fs.readFileSync(filePath)
          reply.type(_mimetype)
          reply.send(fileData)
        } else {
          reply.code(500).send({ status: false, error: filename + ' not found!' })
        }
      } else {
        reply.code(500).send({ status: false,code: 500,message: 'file_id is null in database',message_th: 'ไม่พบข้อมูล file_id ใน database', error: 'File not found (database)' })
            console.log(request.body)
            reply.sent = true // exit loop ออกจากลูปการทำงาน  
      }

    } catch (error) {
      reply.code(500).send({ status: false, error: error })
    }

  })
    
   /****************************************/
  fastify.post('/emptydir', {
        /*ป้องกัน การใช้งาน โดย Token */
        preValidation: [fastify.authenticate] 
        }, async (request: FastifyRequest, reply: FastifyReply) => {
        const body: any = request.body
        const dir = body.dir
        if (dir=='') {
                reply.code(500).send({ status: false,code: 500,message: 'dir is null',message_th: 'ไม่พบข้อมูล dir' })
                console.log(request.body)
                return // reply.sent = true  //exit(); to stop the function execution   ออกจากลูปการทำงาน
            } 
  
     })
/****************************************/
    
    
}