import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
// import { EntityRepository, Repository, getConnection, getRepository, getCustomRepository, getManager, Any } from "typeorm";
import { getCustomRepository } from "typeorm";
/********repository***********/

// plugins/typeormdb
// ../modules/user/entities/*{.ts,.js}

import { SdUsers } from "../entities/SdUsers.entity";
import { SdUsersPdpaAllow } from "../entities/SdUsersPdpaAllow.entity";
import { SdUserRoles } from "../entities/SdUserRoles.entity";
import { SdUsersRepository } from "../repositories/SdUsers.repository"; 
import { ok, serverError,Forbidden,NotFound } from "../../../utils/helpers/response.helper";
// form class from file
var CryptoJS = require("crypto-js");
import * as Md5 from "md5-typescript";
var md5 = require('md5');
//console.log(md5('message'));
var option_Cache: Number = 1;
const { body, checkSchema, validationResult } = require('express-validator');
import { CacheDataOne } from '../../../utils/cache/redis.cache';
var Cache = new CacheDataOne();
// import { CacheData } from '../../../utils/helpers/cacherediscluster.helper';
// var Cache = new CacheData();
const { promisify } = require('util');
import { Validator } from '../../../utils/helpers/validator.helper';  
const Validators = new Validator()
export default async function userrounter(app: FastifyInstance) {
    

}


export const getSdUserList = async (req: FastifyRequest, res: FastifyReply, next: FastifyInstance) => {
    const headers: any = req.headers  
    const body: any = req.body  
    const query: any = req.query   
    const params: any = req.params  
    let date: any =  Date.now()
    var nowseconds = new Date().getTime()
    var now: any = nowseconds
    const str: any = req.headers.authorization 
    const token: any = str.replace("Bearer ", "")  
    var cacheoption: any = query.cacheoption; 
    if (query.cacheoption == null) {
        var cacheoption: any =body.cacheoption; 
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
        const rs = getCustomRepository(SdUsersRepository); 
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
                /*****************************************/ 
                console.warn(`rows -> TypeORM-> Resultdata=> `,rows); 
                const getCount = rows
                console.log("getCount", getCount) 
                const row: number = rows.length; // count array 
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
                    return rss
                } 
                console.warn(`ResultArray `,setDatarows);           
                const filter: any = {} 
                filter.user_id=user_id;
                filter.keyword=newKeyword;
                filter.profile_id=profile_id;
                filter.gender=gender;
                filter.idcard=idcard;
                filter.network_id = network_id;
                filter.level=level;
                filter.infomation_agree_status = infomation_agree_status;
                filter.birthday = birthday; 
                filter.last_sign_in = last_sign_in;
                filter.online_status = online_status;  
                filter.status = status;   
                filter.order = order;            
                filter.start=start;
                filter.end=end;
                filter.pages=null;
                filter.sizepsge=null;
                filter.isCount=0; 
                console.warn(`filter `,filter);
                const Result = await rs.getWhereRs(filter); 
                console.warn(`ResultArray `, Result);  
                const totalpages: number = Math.round((row / size)) || 1;
                console.log(`total_pages=`,totalpages); 
                console.warn(Result)                
                let tempData = [];
                for (const [key, value] of Object.entries(Result)) {
                        // เอาค่าใน Object มา แปลง เป็น array แล้วนำไปใช้งาน ต่อ
                        const user_id:number= value.user_id || 0;
                        const profile_id:number= value.profile_id || null; 
                        const first_name:string= value.first_name || null; 
                        const last_name:string= value.last_name || null; 
                        const fullname:string= value.fullname || null; 
                        const nickname:string= value.nickname || null; 
                        const username:string= value.username || null; 
                        const email:string= value.email || null; 
                        const level:number= value.level || 0;
                        const status:number= value.status || 0;
                        const network_id:number= value.network_id || 0;
                        const avatar:string= value.avatar || null; 
                        const idcard:number= value.idcard || null; 
                        const remark:string= value.remark || null; 
                        const infomation_agree_status:number= value.infomation_agree_status || 0;
                        const gender:number= value.gender || 0;
                        const birthday:string= value.birthday || null; 
                        const date:string= value.date || null; 
                        const last_sign_in:string= value.last_sign_in || null; 
                        const online_status:number= value.online_status || 0;
                        const mesage:string= value.mesage || null; 
                        const network_type:string= value.network_type || null; 
                        const date_en: string = Validators.toEnDate(date);                 
                        const date_th: string = Validators.toThaiDate(date);   
                        const last_sign_in_en: string = Validators.toEnDate(last_sign_in); 
                        const last_sign_in_th : string = Validators.toThaiDate(last_sign_in);  
                        const data = { 
                                    user_id: user_id,
                                    profile_id: profile_id,
                                    first_name: first_name,
                                    last_name: last_name,
                                    fullname: fullname,
                                    nickname: nickname,
                                    username: username,
                                    email: email,
                                    level: level,
                                    status: status,
                                    network_id: network_id,
                                    avatar: avatar,
                                    idcard: idcard,
                                    remark: remark,
                                    infomation_agree_status: infomation_agree_status,
                                    gender: gender,
                                    birthday: birthday,
                                    date: date,
                                    last_sign_in: last_sign_in,
                                    online_status: online_status,
                                    mesage: mesage,
                                    network_type: network_type, 
                                    date_en: date_en, 
                                    date_th: date_th, 
                                    last_sign_in_en: last_sign_in_en, 
                                    last_sign_in_th: last_sign_in_th, 
                                } 
                        tempData.push(data); 
                }
                const Results: any = tempData; // นำ array มาใส่ใน object เพื่อนำไปแปลงเป็น send 
                // console.log(resultData)
                /*****************************************/  
                var DataRS = { 
                            response: {
                                    result: "true",
                                    remark: "success",
                                    message: 'Success',
                                    message_th: 'สำเร็จ', 
                                    status: 200,
                                    time_ms: null
                                },
                                data: Results,
                                cache_status: redisstatus,
                                cache_type: 'redis',
                                total_page: totalpages,
                                total: row, 
                                page: page,
                                perpage: size,
                            }; 
                return  DataRS
                // next()            
                /*****************************************/    
    } catch (error: any) {
        res.send(serverError(error?.message));
        console.log(error); 
    }
} 

export const RegisterSdUser= async (req: FastifyRequest, res: FastifyReply, next: FastifyInstance) => {
    const headers: any = req.headers  
    const body: any = req.body  
    const query: any = req.query   
    const params: any = req.params  
    let date: any =  Date.now()
    var nowseconds = new Date().getTime()
    var now: any = nowseconds
    const str: any = req.headers.authorization 
    const token: any = str.replace("Bearer ", "")  
    try {
        const userDB = getCustomRepository(SdUsersRepository); 
        const Result: any[] = [];
        // var password: any = null
        // let user_id: any = body.user_id || query.user_id || params.user_id  
        const profile_id: any = body.profile_id || query.profile_id || params.profile_id
        const first_name: any = body.first_name || query.first_name || params.first_name 
        const last_name: any = body.last_name || query.last_name || params.last_name
        const fullname: any = body.fullname || query.fullname || params.fullname
        const nickname: any = body.nickname || query.nickname || params.nickname
        const username: any = body.username || query.username || params.username 
        const password: any = body.password || query.password || params.password
        const email: any = body.email || query.email || params.email
        if(email== null){
                var rss = {
                    response: {
                        result: "true",
                        remark: "unsuccess",
                        message: 'email is null',
                        message_th: 'ไม่พบข้อมูล email', 
                        status: 404,
                        time_ms: null
                    },
                    data: null,
                };   
                return rss
        }
        if (email != null) {
            const filter: any = {} 
            filter.email=email;  
            const chkEmailDb = await userDB.ChkEmail(filter); 
            const Tasktotal: number = chkEmailDb.length; // count array 
            if (Tasktotal == 0) { } else {
                const chkEmail: any = chkEmailDb['0'];
                    var rssEmail = {
                        response: {
                            result: "true",
                            remark: "unsuccess",
                            message: 'This email '+email+' is duplicate email in database',
                            message_th: 'email '+email+' ช้ำกับระบบ มีข้อมูลในระบบแล้ว กรุณาเปลียนใหม่', 
                            status: 403,
                            time_ms: null
                        },
                        filter: filter,
                        data: chkEmail,
                        Tasktotal: Tasktotal,
                    }; 
                return rssEmail
            }
        } 
        const level: any = body.level || query.level || params.level
        const status: any = 0;
        const network_id: any = body.network_id || query.network_id || params.network_id 
        const network_type: any = body.network_type || query.network_type || params.network_type 
        const avatar: any = body.avatar || query.avatar || params.avatar
        const idcard: any = body.idcard || query.idcard || params.idcard
        const remark: any = body.remark || query.remark || params.remark
        const infomation_agree_status: any = 0;
        const gender: any = body.gender || query.gender || params.gender
        const birthday: any = body.birthday || query.birthday || params.birthday
        var Timedate = new Date().getTime()
        var timestamp: any = Timedate
        const date = new Date(timestamp); 
        const datenow = new Date(timestamp); 
        var Timedate = new Date().getTime()
        var timestamp: any = Timedate
        const last_sign_in = new Date(timestamp);
        const online_status: number = 0; 
        const mesage: any = body.mesage || query.mesage || params.mesage 
        if(password== null){
                    var rss = {
                        response: {
                            result: "true",
                            remark: "unsuccess",
                            message: 'password is null',
                            message_th: 'ไม่พบข้อมูล password', 
                            status: 404,
                            time_ms: null
                        },
                        data: null,
                    };  
              return rss 
        } 
        const encPassword =  CryptoJS.MD5(password);
        // const encPassword = CryptoJS.createHash('md5').update(password).digest('hex') 
        const insert: any = {} 
        insert.profile_id = profile_id || 0;
        insert.first_name = first_name || '-';
        insert.last_name = last_name || '-';
        insert.fullname = fullname || '-';
        insert.nickname = nickname || '-';
        insert.username = username || email; 
        insert.password = encPassword || null;
        insert.email = email || null;
        insert.level = level || 0;
        insert.status = status || 0;
        insert.network_id = network_id || 0;
        insert.avatar = avatar || null;
        insert.idcard = idcard || null;
        insert.remark = remark || '-';
        insert.infomation_agree_status = infomation_agree_status || null;
        insert.gender = gender || null;
        insert.birthday = birthday || null; 
        insert.date = date || datenow;
        insert.last_sign_in = last_sign_in || datenow;
        insert.online_status = online_status || 0;
        insert.mesage = mesage || '-';
        insert.network_type = network_type || 0; 
        const insertDB: any = await userDB.insertData(insert); 
      
        const insert_id = insertDB['identifiers']['0'].user_id; 
        /*
        const filter: any = {} 
        filter.id =1;  
        const lastidDB = await userDB.ChkLastID(filter); 
        var last_id: any = lastidDB['0'].user_id; 
        */
       var profile_id2 = md5(insert_id);
       const filterUpdate: any = {} 
       filterUpdate.user_id = insert_id;
       filterUpdate.profile_id =profile_id2; 
       userDB.updateprofileid(filterUpdate); 
        var rssD = {
            response: {
                result: "true",
                remark: "unsuccess",
                message: 'save done',
                message_th: 'บันทึกข้อมูล สำเร็จ', 
                status: 200,
                time_ms: null
            },
            input: insert,
            data: insertDB,
            insert_id: insert_id, 
           // profile_id: profile_id2,
        }; 
        return rssD
     
    } catch (error: any) {
        res.send(serverError(error?.message));
        console.log(error); 
    }
} 

export const UpdateUserInfo= async (req: FastifyRequest, res: FastifyReply, next: FastifyInstance) => {
    const headers: any = req.headers  
    const body: any = req.body  
    const query: any = req.query   
    const params: any = req.params  
    let date: any =  Date.now()
    var nowseconds = new Date().getTime()
    var now: any = nowseconds
    const str: any = req.headers.authorization 
    const token: any = str.replace("Bearer ", "")  
    try {
        const userDB = getCustomRepository(SdUsersRepository); 
        const Result: any[] = [];
        // var password: any = null
        // let user_id: any = body.user_id || query.user_id || params.user_id  
        const profile_id: any = body.profile_id || query.profile_id || params.profile_id
        const first_name: any = body.first_name || query.first_name || params.first_name 
        const last_name: any = body.last_name || query.last_name || params.last_name
        const fullname: any = body.fullname || query.fullname || params.fullname
        const nickname: any = body.nickname || query.nickname || params.nickname
        const username: any = body.username || query.username || params.username 
        const password: any = body.password || query.password || params.password
        const email: any = body.email || query.email || params.email
        if(email== null){
                var rss = {
                    response: {
                        result: "true",
                        remark: "unsuccess",
                        message: 'email is null',
                        message_th: 'ไม่พบข้อมูล email', 
                        status: 404,
                        time_ms: null
                    },
                    data: null,
                };     
            return rss
        }
        if (email != null) {
            const filter: any = {} 
            filter.email=email;  
            const chkEmailDb = await userDB.ChkEmail(filter); 
            const Tasktotal: number = chkEmailDb.length; // count array 
            if (Tasktotal == 0) { } else {
                const chkEmail: any = chkEmailDb['0'];
                    var rssEmail = {
                        response: {
                            result: "true",
                            remark: "unsuccess",
                            message: 'This email '+email+' is duplicate email in database',
                            message_th: 'email '+email+' ช้ำกับระบบ มีข้อมูลในระบบแล้ว กรุณาเปลียนใหม่', 
                            status: 403,
                            time_ms: null
                        },
                        filter: filter,
                        data: chkEmail,
                        Tasktotal: Tasktotal,
                    };  
                    return rssEmail
            }
        } 
       
        const level: any = body.level || query.level || params.level
        const status: any = 0;
        const network_id: any = body.network_id || query.network_id || params.network_id 
        const network_type: any = body.network_type || query.network_type || params.network_type 
        const avatar: any = body.avatar || query.avatar || params.avatar
        const idcard: any = body.idcard || query.idcard || params.idcard
        const remark: any = body.remark || query.remark || params.remark
        const infomation_agree_status: any = 0;
        const gender: any = body.gender || query.gender || params.gender
        const birthday: any = body.birthday || query.birthday || params.birthday
        var Timedate = new Date().getTime()
        var timestamp: any = Timedate
        const date = new Date(timestamp); 
        const datenow = new Date(timestamp); 
        var Timedate = new Date().getTime()
        var timestamp: any = Timedate
        const last_sign_in = new Date(timestamp);
        const online_status: number = 0; 
        const mesage: any = body.mesage || query.mesage || params.mesage 
        if(password== null){
                    var rss = {
                        response: {
                            result: "true",
                            remark: "unsuccess",
                            message: 'password is null',
                            message_th: 'ไม่พบข้อมูล password', 
                            status: 404,
                            time_ms: null
                        },
                        data: null,
                    };   
                    return  rss
        } 
        const encPassword =  CryptoJS.MD5(password);
        //const encPassword = CryptoJS.createHash('md5').update(password).digest('hex') 
        const insert: any = {} 
        insert.profile_id = profile_id || 0;
        insert.first_name = first_name || '-';
        insert.last_name = last_name || '-';
        insert.fullname = fullname || '-';
        insert.nickname = nickname || '-';
        insert.username = username || email; 
        insert.password = encPassword || null;
        insert.email = email || null;
        insert.level = level || 0;
        insert.status = status || 0;
        insert.network_id = network_id || 0;
        insert.avatar = avatar || null;
        insert.idcard = idcard || null;
        insert.remark = remark || '-';
        insert.infomation_agree_status = infomation_agree_status || null;
        insert.gender = gender || null;
        insert.birthday = birthday || null; 
        insert.date = date || datenow;
        insert.last_sign_in = last_sign_in || datenow;
        insert.online_status = online_status || 0;
        insert.mesage = mesage || '-';
        insert.network_type = network_type || 0; 
        const insertDB: any = await userDB.insertData(insert); 
      
        const insert_id = insertDB['identifiers']['0'].user_id; 
        /*
        const filter: any = {} 
        filter.id =1;  
        const lastidDB = await userDB.ChkLastID(filter); 
        var last_id: any = lastidDB['0'].user_id; 
        */
       var profile_id2 = md5(insert_id);
       const filterUpdate: any = {} 
       filterUpdate.user_id = insert_id;
       filterUpdate.profile_id =profile_id2; 
       userDB.updateprofileid(filterUpdate); 
        var rssD = {
            response: {
                result: "true",
                remark: "unsuccess",
                message: 'save done',
                message_th: 'บันทึกข้อมูล สำเร็จ', 
                status: 200,
                time_ms: null
            },
            input: insert,
            data: insertDB,
            insert_id: insert_id, 
           // profile_id: profile_id2,
        }; 
        return  rssD
     
    } catch (error: any) {
        res.send(serverError(error?.message));
        console.log(error); 
    }
}

export const TestTemplate= async (req: FastifyRequest, res: FastifyReply, next: FastifyInstance) => {
    const headers: any = req.headers  
    const body: any = req.body  
    const query: any = req.query   
    const params: any = req.params  
    let date: any =  Date.now()
    var nowseconds = new Date().getTime()
    var now: any = nowseconds
    const str: any = req.headers.authorization 
    const token: any = str.replace("Bearer ", "")  
    var cacheoption: any = query.cacheoption; 
    if (query.cacheoption == null) {
        var cacheoption: any =body.cacheoption; 
    } else {
        var cacheoption: any = 1;  // 1=on ,0=off
    }
    try {  
        const ResultDATA: any[] = [];  
        const status= query.status || params.status || body.status
        const user_id= query.user_id || params.user_id || body.user_id 
                var DataRS = { 
                            response: {
                                    result: "true",
                                    remark: "success",
                                    message: 'Success',
                                    message_th: 'สำเร็จ', 
                                    status: 200,
                                    time_ms: null
                                },
                                data: null
                            }; 
                return  DataRS         
                /*****************************************/    
    } catch (error: any) {
        res.send(serverError(error?.message));
        console.log(error); 
    }
} 
 