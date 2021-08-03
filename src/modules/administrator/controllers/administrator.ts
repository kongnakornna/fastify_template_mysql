import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
/**************Models************************************/
// env.DB1_HOST
import * as fs from 'fs'
/************* nodemailer*******************/
import * as nodemailer from 'nodemailer'
import * as ejs from 'ejs'
/************* nodemailer*******************/
import { AdministratorModel } from '../../../modules/administrator/models/administrator_model'
import { AuthadminModel } from '../../../modules/administrator/models/authadmin_model'
import { Appoauth2Model } from '../../../modules/administrator/models/appoauth2_model'
/**************Models************************************/
/************* validate schemas*******************/
import bodySchema from '../../../modules/administrator/schemas/body'
import bodysingupSchema from '../../../modules/administrator/schemas/bodysingup'
import bodysinginSchema from '../../../modules/administrator/schemas/bodysingin'
import bodyresetpassSchema from '../../../modules/administrator/schemas/bodyresetpass'
import changepasswordSchema from '../../../modules/administrator/schemas/changepasswordSchema'
import paramsSchema from '../../../modules/administrator/schemas/params'
import queryStringSchema from '../../../modules/administrator/schemas/query_string'
import headerSchema from '../../../modules/administrator/schemas/header'
import bodyappSchema from '../../../modules/administrator/schemas/bodyapp'
/************* validate schemas*******************/
import * as path from 'path'
const envPath = path.join(__dirname, '../../../config.conf')
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {}
// TypeScript
import * as EmailValidator from 'email-validator';
// function name administrator
export default async function administrator(fastify: FastifyInstance) {
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
    function gen_client_id() { 
            var codenom1: any = getRandomchar(12) 
            var codenom2: any = getRandomchar(10)
            var codenom3: any = getRandomchar(8)
            var codenom4: any = getRandomchar(6)
            var codenom5: any = getRandomsrtbig(5)
            var codenom6: any = getRandomint(5)
            var client_id: any = codenom1+'-'+codenom2+'-'+codenom3+'-'+codenom4+'-'+codenom5+'-'+codenom6
            return client_id
    }
    /*****************************************************/
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
    /**************Database************************************/
    const db1: knex = fastify.db1
    const db2: knex = fastify.db2
    const db3: knex = fastify.db3
    /**************Models************************************/
    var rs: any = ''
    var token_expire_setting = 1
    var token_expire_setting_msg = '0-not setting 1-setting'
    /**************Models************************************/
    const AdminModel: any = new AdministratorModel()
    const AuthModels = new AuthadminModel()
    const oauth2Model = new Appoauth2Model()
    /**************************************************/    
    fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
        /*******var**************/
        
        /*******var**************/
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache')
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Working')
                reply.header('statusCode', 200)
                reply.header('code', 200)
                reply.header('status', true) 
                /*****************************************************/
                reply.code(200).send({title:{
                                            status: true,
                                            statusCode: 200,
                                            cache: 'no cache',
                                            message: 'Working admin',
                                            message_th: 'ทำงาน', 
                                        },
                                    data: {
                                            token_expire_setting: token_expire_setting,
                                            token_expire_setting_msg: token_expire_setting_msg,
                                        }  
                })
                /*****************************************************/
                console.log(request.body)
        return rs
    })
    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
        /*******var**************/
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache')
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Working')
                reply.header('statusCode', 200)
                reply.header('code', 200)
                reply.header('status', true) 
                /*****************************************************/
                reply.code(200).send({title:{
                                            status: true,
                                            statusCode: 200,
                                            cache: 'no cache',
                                            message: 'Working admin',
                                            message_th: 'ทำงาน', 
                                        },
                                    data: {
                                            token_expire_setting: token_expire_setting,
                                            token_expire_setting_msg: token_expire_setting_msg,
                                        }  
                })
                /*****************************************************/
                console.log(request.body)
        return rs
    })
    fastify.post('/test', { schema: bodyappSchema },
         async (request: FastifyRequest, reply: FastifyReply) => {
        /*******var**************/
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache')
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Working')
                reply.header('statusCode', 200)
                reply.header('code', 200)
                reply.header('status', true) 
                /*****************************************************/
                reply.code(200).send({title:{
                                            status: true,
                                            statusCode: 200,
                                            cache: 'no cache',
                                            message: 'Working',
                                            message_th: 'ทำงาน',
                                            function: 'createapp', 
                                        },
                                    data: {
                                            token_expire_setting: token_expire_setting,
                                            token_expire_setting_msg: token_expire_setting_msg,
                                        }  
                })
                /*****************************************************/
                console.log(request.body)
        return rs
    })   
    /*****************************************************/
    fastify.post('/createapp', { schema: bodyappSchema },
        async (request: FastifyRequest, reply: FastifyReply) => {
        const body: any = request.body
        var username = body.username
        var password = body.password
        var passwordvd = password
        var passwordde = body.passwordde
        var email = body.email
        var client_id : any= gen_client_id()
        var client_secect: any= getRandomchar(64)
        var name = body.name
        var device = body.device
        var ipaddress = body.ipaddress
        var status =1
        var count = 1
        const date = new Date()
        var expire_date = date
        var create_date = date
        var detail = body.detail
        var phone_number = body.phone_number
        var role_id = body.role_id
        var status_active: any= 0 // 1=active 0=notactive
        try {
            if (username === "") {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
                console.log(request.body)
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            if (password === "") {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
                console.log(request.body)
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            /* Password Validator */
            const passwordrt: any = passwordValidator(password)
            if (passwordrt == false) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Password not secure')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('Password', false)
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
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
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({
                                title: {
                                    status: false, statusCode: 500,
                                    cache: 'no cache'
                                }, message: 'email is null',
                                message_th: 'ไม่พบข้อมูล email'
                            })
                console.log(request.body)
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            const status=1
            const network_id=null
            const date = new Date()
            const emailchk = EmailValidator.validate(email) // true //false
            if (emailchk == false) {
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'POST')
                        reply.header('statusCode', 401)
                reply.header('code', 401)
                        reply.header('status', false)  
                        reply.header('function', 'createapp')  
                        reply.header('token_expire_setting', token_expire_setting)
                        reply.header('token_expire_setting_msg', token_expire_setting_msg)
                        reply.code(401).send({
                                        status: false,
                                        statusCode : 401,emailchk: emailchk,date: date,
                                        message: 'This email is Invalid format ',
                                        message_th: 'รูปแบบ email ไม่ถูกต้อง'
                                    }) 
                    return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            const rs_email: any = await oauth2Model.validation_email(db2, email)
            if (rs_email.length > 0) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({
                                    title: { status: false, statusCode : 500,cache: 'no cache' },
                                    message: 'This email is duplicate data in the database system ',
                                    message_th: 'email นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล'
                                })
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            const rs_username: any = await oauth2Model.validation_username(db2, username)
            if (rs_username.length > 0) {
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'POST')
                        reply.header('statusCode', 500)
                reply.header('code', 500)
                        reply.header('status', false)  
                        reply.header('function', 'createapp')  
                        reply.header('token_expire_setting', token_expire_setting)
                        reply.header('token_expire_setting_msg', token_expire_setting_msg)
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
                data.passwordde = password
                data.email = email
                data.client_id=client_id
                data.client_secect=client_secect
                data.name = name
                data.device = device
                data.ipaddress = ipaddress
                data.status =1
                data.count = 1 
                data.expire_date = expire_date
                data.create_date = create_date
                data.detail = detail
                data.phone_number = phone_number
                await oauth2Model.create(db2, data)
                const lastrs: any = await oauth2Model.lastidread(db2)
                // reply.code(500).send({ da: lastrs }) return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                const luser: any = lastrs[0] 
                const idx = luser.id
            const datas1: any = {}
                var md5 = require('md5')
                const enc_app_id = md5(idx)
                datas1.app_id = enc_app_id
                await oauth2Model.update_app_id(db2,idx,datas1)
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 200)
                reply.header('code', 200)
                reply.header('status', true)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(200).send({
                            title: { status: false, statusCode : 200,cache: 'no cache' },
                            message: 'crate app successful!',
                            message_th: 'สร้าง app สำเร็จ', 
                        })
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                // reply.code(200).send({ message: 'Insert data', status: true })
                const status_insert = 1
            } catch (error) {
                const status_insert = 0
                console.log(error)
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('message', error)
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({
                                title: { status: false, statusCode : 500,cache: 'no cache' },
                                message: 'crate app  failed!',
                                message_th: ' ไม่สามาราลงทะเบียน app ได้',
                                error: error
                            })
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
        } catch (error) {
            console.log(error)
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false) 
                reply.header('function', 'createapp')  
                reply.header('message', error) 
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({ title: {status: false, statusCode : 500,}, message: error })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } 
    })  
    fastify.post('/add', { schema: bodyappSchema },
        async (request: FastifyRequest, reply: FastifyReply) => {
        const body: any = request.body
        var username = body.username
        var password = body.password
        var passwordvd = password
        var passwordde = body.passwordde
        var email = body.email
        var client_id : any= gen_client_id()
        var client_secect: any= getRandomchar(64)
        var name = body.name
        var device = body.device
        var ipaddress = body.ipaddress
        var status =1
        var count = 1
        const date = new Date()
        var expire_date = date
        var create_date = date
        var detail = body.detail
        var phone_number = body.phone_number
        var role_id = body.role_id
        var status_active: any= 0 // 1=active 0=notactive
        try {
            if (username === "") {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'username is null',message_th: 'ไม่พบข้อมูล username' })
                console.log(request.body)
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            if (password === "") {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: 'password is null',message_th: 'ไม่พบข้อมูล password' })
                console.log(request.body)
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            /* Password Validator */
            const passwordrt: any = passwordValidator(password)
            if (passwordrt == false) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Password not secure')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('Password', false)
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
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
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
                reply.header('message', 'Information Correct')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({
                                title: {
                                    status: false, statusCode: 500,
                                    cache: 'no cache'
                                }, message: 'email is null',
                                message_th: 'ไม่พบข้อมูล email'
                            })
                console.log(request.body)
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            const status=1
            const network_id=null
            const date = new Date()
            const emailchk = EmailValidator.validate(email) // true //false
            if (emailchk == false) {
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'POST')
                        reply.header('statusCode', 401)
                reply.header('code', 401)
                        reply.header('status', false)  
                        reply.header('function', 'createapp')  
                        reply.header('token_expire_setting', token_expire_setting)
                        reply.header('token_expire_setting_msg', token_expire_setting_msg)
                        reply.code(401).send({
                                        status: false,
                                        statusCode : 401,emailchk: emailchk,date: date,
                                        message: 'This email is Invalid format ',
                                        message_th: 'รูปแบบ email ไม่ถูกต้อง'
                                    }) 
                    return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            const rs_email: any = await oauth2Model.validation_email(db2, email)
            if (rs_email.length > 0) {
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({
                                    title: { status: false, statusCode : 500,cache: 'no cache' },
                                    message: 'This email is duplicate data in the database system ',
                                    message_th: 'email นี้เป็นข้อมูลซ้ำในระบบฐานข้อมูล'
                                })
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
            const rs_username: any = await oauth2Model.validation_username(db2, username)
            if (rs_username.length > 0) {
                        reply.header('version', 1)
                        reply.header('x-cache-status', 0) // 1=yes ,0=no
                        reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                        reply.header('Access-Control-Allow-Methods', 'POST')
                        reply.header('statusCode', 500)
                reply.header('code', 500)
                        reply.header('status', false)  
                        reply.header('function', 'createapp')  
                        reply.header('token_expire_setting', token_expire_setting)
                        reply.header('token_expire_setting_msg', token_expire_setting_msg)
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
                data.passwordde = passwordde
                data.email = email
                data.client_id=client_id
                data.client_secect=client_secect
                data.name = name
                data.device = device
                data.ipaddress = ipaddress
                data.status =1
                data.count = 1 
                data.expire_date = expire_date
                data.create_date = create_date
                data.detail = detail
                data.phone_number = phone_number
                await oauth2Model.create(db2, data)
                const lastrs: any = await oauth2Model.lastidread(db2)
                // reply.code(500).send({ da: lastrs }) return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                const luser: any = lastrs[0] 
                const idx = luser.id
               const datas1: any = {}
                var md5 = require('md5')
                const enc_app_id = md5(idx)
                datas1.app_id = enc_app_id
                await oauth2Model.update_app_id(db2,idx,datas1)
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 200)
                reply.header('code', 200)
                reply.header('status', true)
                reply.header('function', 'createapp')  
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(200).send({
                            title: { status: false, statusCode : 200,cache: 'no cache' },
                            message: 'crate app successful!',
                            message_th: 'สร้าง app สำเร็จ', 
                        })
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
                // reply.code(200).send({ message: 'Insert data', status: true })
                const status_insert = 1
            } catch (error) {
                const status_insert = 0
                console.log(error)
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false)
                reply.header('function', 'createapp')  
                reply.header('message', error)
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({
                                title: { status: false, statusCode : 500,cache: 'no cache' },
                                message: 'crate app  failed!',
                                message_th: ' ไม่สามาราลงทะเบียน app ได้',
                                error: error
                            })
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
          } catch (error) {
            console.log(error)
                reply.header('version', 1)
                reply.header('x-cache-status', 0) // 1=yes ,0=no
                reply.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
                reply.header('Expires', '-1')
                reply.header('Pragma', 'no-cache') // no-cache  private  public max-age=31536000 must-revalidate
                reply.header('Access-Control-Allow-Methods', 'POST')
                reply.header('statusCode', 500)
                reply.header('code', 500)
                reply.header('status', false) 
                reply.header('function', 'createapp1')  
                reply.header('message', error) 
                reply.header('token_expire_setting', token_expire_setting)
                reply.header('token_expire_setting_msg', token_expire_setting_msg)
                reply.code(500).send({ title: {status: false, statusCode : 500,}, message: error })
            return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        } 
     })       
    /**************************************************/   
}
/*
  ####################################
        ob_end_clean(); 
		header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS, HEAD");
		header('Access-Control-Allow-Origin: *');
		// header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
		header("Content-type: application/json; charset=utf-8");
*/