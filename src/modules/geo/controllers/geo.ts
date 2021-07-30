import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as knex from 'knex'
import * as crypto from 'crypto'
import { GeoModel } from '../../../modules/geo/models/geo_model'
import * as path from 'path'
const envPath = path.join(__dirname, '../../../config.conf')
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {}
// TypeScript
import * as EmailValidator from 'email-validator';
// function name administrator
export default async function geo(fastify: FastifyInstance) {
    const geo_model:any = new GeoModel()
    const db1: knex = fastify.db1
    /**************************************************/    
    fastify.post('/', { preValidation: [fastify.authenticate] },  async (request: FastifyRequest, reply: FastifyReply) => {
        const body: any = request.body
        const input: any = body.input
        const params: any = request.params
        const headers: any = request.headers
        const query_get: any = request.query
        const method: any = request.method
        const protocol: any = request.protocol
        const ip: any = request.ip
        
                
        try {
            if (input=='') {
                reply.code(500).send({
                    title: { status: false, statusCode : 500,cache: 'no cache' },
                    message: 'input is null', message_th: 'ไม่พบข้อมูล input'
                })
                console.log(request.body)
                return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
            } 
            reply.code(200).send({  
            title: {
                    status: true, statusCode : 200,
                    message: 'Results  test successful',
                    message_th: 'test สำเร็จ',
                    cache: 'no cache'
                    },  
                data: {
                    input: input,
                    params: params,
                    body: body,
                    headers: headers,
                    query_get: query_get,
                    method: method,
                    protocol: protocol,
                    ip: ip,
                }
                       
            })
        /*****************************************************/   
        } catch (error) {
        console.log(error)
        reply.code(500).send({ title: { status: false, statusCode : 500,cache: 'no cache' },message: error })
        return //reply.sent = true // exit loop ออกจากลูปการทำงาน 
        }
    })
    /*****************************************************/
    fastify.get('/test/:fileId',{ preValidation: [fastify.authenticate] }, async (request: FastifyRequest, reply: FastifyReply) => {
        const params: any = request.params
        const headers: any = request.headers
        const query_get: any = request.query
        const method: any = request.method
        const protocol: any = request.protocol
        const ip: any = request.ip 
        /*****************************************************/ 
        if (params=='') {
            reply.code(500).send({
                title: { status: false, statusCode : 500, cache: 'no cache' },
                message: 'params is null', message_th: 'ไม่พบข้อมูล params'
            })
                console.log(request.body)
                reply.sent = true // exit loop ออกจากลูปการทำงาน 
            }
        const id = params.fileId
        if (id=='') {
            reply.code(500).send({
                title: { status: false, statusCode : 500, cache: 'no cache' },
                message: 'id is null', message_th: 'ไม่พบข้อมูล id'
            })
                console.log(request.body)
                reply.sent = true // exit loop ออกจากลูปการทำงาน 
            } 

        try {
                reply.code(200).send({  
                    title: {
                            status: true, statusCode : 200,
                            message: 'Results  test successful',
                            message_th: 'test สำเร็จ',
                            cache: 'no cache'
                    },
                    data: {
                            headers: headers,
                            params: params,
                            method : method,
                            query_get : query_get,
                            protocol:protocol,
                            ip: ip, 
                        }
                })
                /*****************************************************/ 

        } catch (error) {
            reply.code(500).send({  
                    title: {
                            status: false, statusCode : 500,
                            message: 'Results  un successful',
                            message_th: 'ไม่สำเร็จ',
                            cache: 'no cache'
                            },  
                            data: error
                    }) 
        }

    })
    /**************************************************/   
}