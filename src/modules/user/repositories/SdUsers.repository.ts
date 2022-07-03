import { EntityRepository, Repository ,EntityManager} from "typeorm";
import { SdUsers } from "../entities/SdUsers.entity";
import { SdUsersPdpaAllow } from "../entities/SdUsersPdpaAllow.entity";
import { SdUserRoles } from "../entities/SdUserRoles.entity";
@EntityRepository(SdUsers)
export class SdUsersRepository extends Repository<SdUsers>{
    async getWhereRs(filter: any) {  
            const user_id= filter.user_id;
            const profile_id= filter.profile_id;
            const keyword = filter.keyword; 
            const gender= filter.gender;
            const idcard= filter.idcard; 
            const network_id= filter.network_id;
            const mul_level= filter.level;
            const infomation_agree_status = filter.infomation_agree_status;
            const birthday = filter.birthday;
            const last_sign_in= filter.last_sign_in;
            const online_status= filter.online_status;
            const status= filter.status;            
            const start= filter.start;
            const end= filter.end; 
            const order= filter.order;
            const page= filter.pages;
            const size = filter.sizepsge;
            const isCount = filter.isCount;
            if (isCount == 0) {
                console.log(`rows filter `, filter); 
                console.log(`data keyword `, keyword);
                console.log(`rows isCount `, isCount); 
            } else {
                console.log(`data filter `, filter); 
                console.log(`data keyword `, keyword);
                console.log(`data isCount `, isCount); 
            }
            //console.log(`rows filter `, filter); 
            // return

            const query = this.createQueryBuilder('u');
                    // select
                    if(isCount==1){
                        query.select([
                                 "u.user_id AS user_id",
                                ]);
                        query.leftJoin(
                                "sd_user_roles",
                                "r",
                                "r.user_id = u.user_id"
                        ); 
                        query.leftJoin(
                                "sd_users_pdpa_allow",
                                "p",
                                "p.user_id = u.user_id"
                        ); 
                    } else {
                        //  "u.password AS password",
                        query.distinctOn(["u.user_id AS user_id"]); 
                        query.select([
                                    "u.user_id AS user_id",
                                    "u.profile_id AS profile_id",
                                    "u.first_name AS first_name",
                                    "u.last_name AS last_name",
                                    "u.fullname AS fullname",
                                    "u.nickname AS nickname",
                                    "u.username AS username",
                                    "u.email AS email",
                                    "u.level AS level",
                                    "u.status AS status",
                                    "u.network_id AS network_id",
                                    "u.avatar AS avatar",
                                    "u.idcard AS idcard",
                                    "u.remark AS remark",
                                    "u.infomation_agree_status AS infomation_agree_status",
                                    "u.gender AS gender",
                                    "u.birthday AS birthday",
                                    "u.date AS date",
                                    "u.last_sign_in AS last_sign_in",
                                    "u.online_status AS online_status",
                                    "u.mesage AS mesage",
                                    "u.network_type AS network_type", 
                        ]); 
                        /*
                                query.select([
                                        "u.*",
                                ]);
                        */
                                query.leftJoin(
                                    "sd_user_roles",
                                    "r",
                                    "r.user_id = u.user_id"
                                ); 
                                query.leftJoin(
                                    "sd_users_pdpa_allow",
                                    "p",
                                    "p.user_id = u.user_id"
                                ); 
                    } 
                    query.where('1=1');  
                    if (status!=null) { 
                        query.andWhere("u.status= :status", { status }); 
                    }         
                    if (user_id!=null) { 
                        query.andWhere("u.user_id= :user_id", { user_id }); 
                    } 
                    if (profile_id!=null) { 
                        query.andWhere("co.profile_id= :profile_id", { profile_id }); 
                    } 
                    if (idcard!=null) { 
                        query.andWhere("co.idcard= :idcard", { idcard }); 
                    } 
                    if (network_id!=null) { 
                        query.andWhere("co.network_id= :network_id", { network_id }); 
                    } 
                    if (gender!=null) { 
                        query.andWhere("co.gender= :gender", { gender }); 
                    }  
                    if (keyword!=null) { 
                        query.andWhere("u.first_name like :keyword", { keyword: keyword ? `%${keyword}%` : "%" });
                       // query.orWhere("u.last_name like :keyword", { keyword: keyword ? `%${keyword}%` : "%" });
                       // query.orWhere("u.fullname like :keyword", { keyword: keyword ? `%${keyword}%` : "%" });
                    }  
                    if (start!=null && end!=null) { 
                        query.andWhere("u.last_sign_in BETWEEN '" + start + "' AND '" + end + "'");
                       // query.orWhere("u.date  BETWEEN '" +start+"' AND '" +end+"'");
                    } 
                    if(isCount==1){ 
                        query.groupBy("u.user_id")
                    }else{  
                        query.limit(size);
                        query.offset(size * (page - 1));
                        query.groupBy("u.user_id")
                    }
                    if (order=='desc') {
                        query.orderBy("u.user_id", "DESC") 
                    } else{
                        query.groupBy("u.user_id")
                        query.orderBy("u.user_id", "ASC")  
                    }  
                    query.printSql()
                    query.maxExecutionTime(1000) // milliseconds.
                    console.log(`SdUser.repository  query-> `,query);
                return await query.getRawMany(); 
    }   
    async getWhereChk(filter: any) { 
        const user_id= filter.user_id; 
       // console.log(`data filter `, filter);        
        const query = this.createQueryBuilder('u');
                query.select(["u.user_id AS user_id",]);                 
                query.where('1=1');
                query.andWhere("u.user_id= :user_id", { user_id });  
                //query.groupBy("u.user_id")
                query.orderBy("u.user_id", "ASC") 
                console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async getWhereChkLogin(input: any) { 
            const username= input.username
            const password= input.password
           // console.log(`data getWhereChkLogin input `, input);        
            const query = this.createQueryBuilder('u');
                    query.distinctOn(["u.user_id AS user_id"]);
                    query.select(["u.user_id AS user_id",]);                 
                    query.where('1=1');
                    query.andWhere("u.username= :username", { username }); 
                    query.andWhere("u.password= :password", { password }); 
                    query.andWhere("u.status=1"); 
                    query.groupBy("u.user_id")
                    query.orderBy("u.user_id", "ASC") 
                    query.printSql()
                    query.maxExecutionTime(1000) // milliseconds.
                    console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async ChkLastID(input: any) {  
       // console.log(`data getWhereChkLogin input `, input);        
        const query = this.createQueryBuilder('u');
                query.select(["u.user_id AS user_id",]);     
                query.limit(1);
                query.orderBy("u.user_id", "DESC") 
                console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async ChkLogin(input: any) { 
        const username= input.username
        const password= input.password
       // console.log(`data getWhereChkLogin input `, input);        
        const query = this.createQueryBuilder('u');
                query.select(["u.user_id AS user_id",]);                 
                query.where('1=1');
                query.andWhere("u.username= :username", { username }); 
                query.andWhere("u.password= :password", { password }); 
                query.andWhere("u.status=1"); 
                query.groupBy("u.user_id")
                query.orderBy("u.user_id", "ASC") 
                console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async Chknetwork_id(input: any) { 
        const network_id= input.network_id 
       // console.log(`data getWhereChkLogin input `, input);        
        const query = this.createQueryBuilder('u');
                query.select(["u.user_id AS user_id",]);                 
                query.where('1=1');
                query.andWhere("u.network_id= :network_id", { network_id });   
                query.orderBy("u.user_id", "ASC") 
                console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async Chkusername(input: any) { 
        const username= input.username 
       // console.log(`data getWhereChkLogin input `, input);        
        const query = this.createQueryBuilder('u');
                query.select(["u.user_id AS user_id",]);                 
                query.where('1=1');
                query.andWhere("u.username= :username", { username });   
                query.orderBy("u.user_id", "ASC") 
                console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async ChkEmail(input: any) { 
        const email= input.email 
        console.log(`data ChkEmail input `, input);        
        const query = this.createQueryBuilder('u');
                query.select(["u.user_id AS user_id",]);                 
                query.where('1=1');
                query.andWhere("u.email= :email", { email });   
                query.orderBy("u.user_id", "ASC") 
                console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async getWhereChkLoginStatus(input: any) { 
        const username= input.username
        const password = input.password
        var status: number = 1;
       // console.log(`data input `, input);        
        const query = this.createQueryBuilder('u');
                query.select(["u.user_id AS user_id",]);                 
                query.where('1=1');
                query.andWhere("u.username= :username", { username }); 
                query.andWhere("u.password= :password", { password }); 
                query.andWhere("u.status= :status", { status });
                query.groupBy("u.user_id")
                query.orderBy("u.user_id", "ASC") 
                console.log(`query-> `,query);
        return await query.getRawMany(); 
    }
    async insertData (input: any) {
            const profile_id= input.profile_id;  
            const first_name= input.first_name
            const last_name= input.last_name
            const fullname= input.fullname
            const nickname= input.nickname
            const username= input.username
            const password= input.password
            const email= input.email
            const level= input.level
            const status= input.status
            const network_id= input.network_id
            const avatar= input.avatar
            const idcard= input.idcard
            const remark= input.remark
            const infomation_agree_status= input.infomation_agree_status
            const gender= input.gender
            const birthday= input.birthday
            const date= input.date
            const last_sign_in= input.last_sign_in
            const online_status= input.online_status
            const mesage = input.mesage
            const update_date = input.update_date 
            const network_type = input.network_type
            return await this.createQueryBuilder()
                            .insert()
                            .into("sd_users")
                            .values({
                                        profile_id:profile_id, 
                                        first_name:first_name,
                                        last_name:last_name,
                                        fullname:fullname,
                                        nickname:nickname,
                                        username:username,
                                        password:password,
                                        email:email,
                                        level:level,
                                        status:status,
                                        network_id:network_id,
                                        avatar:avatar,
                                        idcard:idcard,
                                        remark:remark,
                                        infomation_agree_status:infomation_agree_status,
                                        gender:gender,
                                        birthday:birthday,
                                        date:date,
                                        last_sign_in:last_sign_in,
                                        online_status:online_status,
                                        mesage:mesage,
                                        update_date:update_date, 
                                        network_type:network_type,
                                    })
                            .execute();
    }
    updateData(input: any) {
                const user_id= input.user_id;  
                const profile_id= input.profile_id;  
                const first_name= input.first_name
                const last_name= input.last_name
                const fullname= input.fullname
                const nickname= input.nickname
                const username= input.username
                const password= input.password
                const email= input.email
                const level= input.level
                const status= input.status
                const network_id= input.network_id
                const avatar= input.avatar
                const idcard= input.idcard
                const remark= input.remark
                const infomation_agree_status= input.infomation_agree_status
                const gender= input.gender
                const birthday= input.birthday
                const date= input.date
                const last_sign_in= input.last_sign_in
                const online_status= input.online_status
                const mesage = input.mesage
                const update_date = input.update_date
                const values ={ 
                            profile_id:profile_id, 
                            first_name:first_name,
                            last_name:last_name,
                            fullname:fullname,
                            nickname:nickname,
                            username:username,
                            password:password,
                            email:email,
                            level:level,
                            status:status,
                            network_id:network_id,
                            avatar:avatar,
                            idcard:idcard,
                            remark:remark,
                            infomation_agree_status:infomation_agree_status,
                            gender:gender,
                            birthday:birthday,
                            date:date,
                            last_sign_in:last_sign_in,
                            online_status:online_status,
                            mesage:mesage, 
                            update_date:update_date, 
                        }    
                return this.createQueryBuilder("sd_users")
                            .update("sd_users")
                            .set(values)  
                            .andWhere("user_id = :user_id", { user_id})
                            .execute()
    }
    updateprofileid(input: any) {
        const user_id= input.user_id;   
        const profile_id= input.profile_id  
        const values ={  profile_id:profile_id, }    
        return this.createQueryBuilder("sd_users")
                    .update("sd_users")
                    .set(values)  
                    .andWhere("user_id = :user_id", { user_id})
                    .execute()
    }
    updatePassword(input: any) {
                const user_id= input.user_id;   
                const password= input.password 
                const update_date = input.update_date
                const values ={ 
                            password:password, 
                            update_date:update_date, 
                        }    
                return this.createQueryBuilder("sd_users")
                            .update("sd_users")
                            .set(values)  
                            .andWhere("user_id = :user_id", { user_id})
                            .execute()
    }
    updateDatastatus(input: any) {
        const user_id= input.user_id;  
        const profile_id= input.profile_id; 
        const create_date= input.create_date; 
        const update_date= input.update_date;
        const status : number = input.status;    
        const values ={  status: status,update_date: update_date }  
        console.warn(`input `,input);
        console.warn(`values `, values);
        // UPDATE sd_users SET  status = '0' WHERE user_id = 543622 AND profile_id=1 
        return this.createQueryBuilder("sd_users")
                    .update("sd_users")
                    .set(values) 
                    .where("user_id = :user_id", { user_id})  
                    .execute()
    } 
    updateDataLogin(input: any) {
        const user_id= input.user_id;   
        const last_sign_in= input.last_sign_in;
        const status : number = input.status;    
        const values ={  last_sign_in: last_sign_in }  
        console.warn(`input `,input);
        console.warn(`values `, values);
        // UPDATE sd_users SET  status = '0' WHERE user_id = 543622 AND profile_id=1 
        return this.createQueryBuilder("sd_users")
                    .update("sd_users")
                    .set(values) 
                    .where("user_id = :user_id", { user_id})  
                    .execute()
    } 
    deleteData(input: any) {
        const user_id= input.user_id;  
        const profile_id= input.profile_id; 
        return  this.createQueryBuilder("sd_users")
                    .delete()
                    .from("sd_users") 
                    .where("user_id = :user_id", { user_id})  
                    .execute()
    }
} 
 