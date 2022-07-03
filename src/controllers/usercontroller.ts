import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { _publicfunction } from '../utils/helpers/function.helper';  
const fnc = new _publicfunction()
import { EntityRepository, Repository, getConnection, getRepository, getCustomRepository, getManager, Any } from "typeorm";
// plugins/typeormdb
// ../modules/user/entities/*{.ts,.js}
import { SdUsers } from "../entities/SdUsers.entity";
import { SdUsersPdpaAllow } from "../entities/SdUsersPdpaAllow.entity";
import { SdUserRoles } from "../entities/SdUserRoles.entity";
import { SdUsersRepository } from "../repositories/SdUsers.repository"; 
// form class from file
var CryptoJS = require("crypto-js");
import * as Md5 from "md5-typescript";
var md5 = require('md5');
//console.log(md5('message'));
var option_Cache: Number = 1;
const { body, checkSchema, validationResult } = require('express-validator');
import { CacheDataOne } from '../utils/cache/redis.cache';
var Cache = new CacheDataOne();
// import { CacheData } from '../utils/helpers/cacherediscluster.helper';
// var Cache = new CacheData();
const { promisify } = require('util');
// import { Validator } from '../utils/helpers/validator.helper';  
// const Validators = new Validator()
/*********Rounter**********/
export default async function userrounter(app: FastifyInstance) {
    app.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
        let randomint = fnc.getRandomint(6);
        console.log('randomint', randomint);
        await reply.code(200).send({
            modules: "User"
            , message: "ok"
            , random: randomint
        });
        return // exit
    })
    app.post('/', async (req: FastifyRequest, reply: FastifyReply) => {
        let randomint = fnc.getRandomint(6);
        await reply.code(200).send({
            modules: "User"
            , message: "ok"
            , random: randomint
        });
        return // exit
        
    })
    app.get('/list', async (req: FastifyRequest, reply: FastifyReply) => {
        /*********************/
        let randomint = fnc.getRandomint(6);
        console.log('randomint', randomint);
        const headers: any = req.headers
        const body: any = req.body
        const query: any = req.query
        const params: any = req.params
        let date: any = Date.now()
        var nowseconds = new Date().getTime()
        var now: any = nowseconds
        const str: any = req.headers.authorization
        const token: any = str.replace("Bearer ", "")
        var cacheoption: any = query.cacheoption;
        if (query.cacheoption == null) {
            var cacheoption: any = body.cacheoption;
        } else {
            var cacheoption: any = 1;  // 1=on ,0=off
        }
        try {
            const ResultDATA: any[] = [];  
            const status= query.status || params.status || body.status
            const user_id= query.user_id || params.user_id || body.user_id
            const profile_id= query.profile_id || params.profile_id || body.profile_id
            const keyword = query.keyword || params.keyword || body.keyword 
            let newKeyword: string | undefined = undefined
            if (keyword && typeof keyword == 'string') {
              newKeyword = decodeURI(keyword)
            }
            const gender= query.gender || params.gender || body.gender
            const idcard= query.idcard || params.idcard || body.idcard 
            const network_id= query.network_id || params.network_id || body.network_id
            const level= query.level || params.level || body.level
            const infomation_agree_status = query.infomation_agree_status || params.infomation_agree_status || body.infomation_agree_status
            const birthday = query.birthday || params.birthday || body.birthday
            const last_sign_in= query.last_sign_in || params.last_sign_in || body.last_sign_in
            const online_status= query.online_status || params.online_status || body.online_status 
            const start: string = query.start || params.start || body.start 
            const end: string = query.end || params.end || body.end  
            const order: string = query.order || params.order || body.order 
            const debug: number = query.debug || params.debug || body.debug 
            const deletekey: number = query.cachedelete || params.cachedelete || body.cachedelete
            const page: number = Number(query.page) || 1;
            const size: number = Number(query.size) || 20;
            const limit = Number(query.limit) || 1000;
            // Connect Type Data Mapping
         
          //  const rs = getCustomRepository(SdUsersRepository); 
            /*
            //console.log("resultcache", null)
            var redisstatus: any = 0; 
                const filter1: any = {} 
                filter1.user_id=user_id;
                filter1.keyword=newKeyword;
                filter1.profile_id=profile_id;
                filter1.gender=gender;
                filter1.idcard=idcard;
                filter1.network_id = network_id;
                filter1.level=level;
                filter1.infomation_agree_status = infomation_agree_status;
                filter1.birthday = birthday; 
                filter1.last_sign_in = last_sign_in;
                filter1.online_status = online_status;  
                filter1.status = status;   
                filter1.order = order;            
                filter1.start=start;
                filter1.end=end;
                filter1.pages=null;
                filter1.sizepsge=null;
                filter1.isCount=1;
                console.warn(`filter1 `,filter1);
                const rows = await rs.getWhereRs(filter1);
                const setDatarows: any = {} 
                console.warn(`rows -> TypeORM-> Resultdata=> `,rows); 
                const getCount = rows
                console.log("getCount", getCount) 
            const row: number = rows.length; 
            if(row == 0 || row == null){
                var rss = {
                            response: {
                                result: "true",
                                remark: "sunuccess",
                                message: 'Data is null',
                                message_th: 'ไม่พบข้อมูล ',
                                status: 404,
                                time_ms: null
                            },
                            filter: filter1,
                            data: rows,
                        };  
                await reply.code(404).send({rss});
                return // exit
            } 
            */
            await reply.code(200).send({
                modules: "User"
                , message: "ok"
                , random: randomint
            });
            return // exit
        } catch (error) {
            console.log(error)
            reply.header('Access-Control-Allow-Methods', 'GET')
            reply.header('message', 'Information Correct')
            reply.header('statusCode', 500)
            reply.header('status', false)
            reply.code(500).send({
                response: {
                    result: "error",
                    message: 'error',
                    status: 500,
                    time_ms: nowseconds
                },
                data: null,
            })
            return  // exit
        }
    })
    /*********************/
}