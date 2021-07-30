import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as crypto from 'crypto'
import * as path from 'path'
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
import * as knex from 'knex';
 
export class AuthadminModel  {
create(db1: knex, data: any) {
    return db1('ad_administrator')
      .insert(data)
}
create_profile(db1: knex, data: any) {
    //const dataal = db1('tr_language').select('language_id', 'code', 'name') 
    const rs = db1('ad_administrator_profile').insert(data)
    return rs
}
create_address(db1: knex, data: any) { 
    const rs = db1('ad_administrator_address').insert(data)
    return rs
}
lastidread_profile(db1: knex) {
    return db1('ad_administrator_profile')
      .select('id')
      .orderBy('id','desc')
  }
lastidread(db1: knex) {
    return db1('ad_administrator')
      .select('id')
      .orderBy('id','desc')
  }
 updateuid(db1: knex, userId: any, data: any) {
    return db1('ad_administrator')
      .where('id', userId)
      .update(data)
 }
 updateuid_profile(db1: knex, userId: any, data: any) {
    return db1('ad_administrator_profile')
      .where('id', userId)
      .update(data)
  } 
 validation_email(db1: knex, email: any) {
    return db1('ad_administrator')
      .select('email')
      .where('email', email)
    }
 validation_username(db1: knex, username: any) {
    return db1('ad_administrator')
      .select('username')
      .where('username', username)
    }
 validation_network_id(db1: knex, network_id: any) {
    return db1('ad_administrator')
      .select('network_id')
      .where('network_id', network_id)
    }

    where_ad_administrator_profile_id(db1: knex, ad_administrator_profile_id: any) {
        return db1('ad_administrator')
            .select('id', 'email')
            .select('username', 'role_id', 'status', 'network_id')
            .select('date')
        .where('ad_administrator_profile_id', ad_administrator_profile_id)
    }
    where_user_update_password(db1: knex, username: any, data: any) {
        return db1('ad_administrator')
        .where('username', username)
        .update(data)
    }
    where_ad_administrator_profile_id_update(db1: knex, ad_administrator_profile_id: any, data: any) {
        return db1('ad_administrator')
        .where('ad_administrator_profile_id', ad_administrator_profile_id)
        .update(data)
    }
    where_ad_administrator_profile_id_remove(db1: knex, ad_administrator_profile_id: any) {
        return db1('ad_administrator')
        .where('ad_administrator_profile_id', ad_administrator_profile_id)
        .del()
    }
  profile(db1: knex, user_id: any) {
    return db1('ad_administrator')
      .select('id', 'email', 'username', 'role_id', 'status', 'network_id')
      .where('id', user_id)
   }
  ad_administrator_profile(db1: knex, user_id: any) {
    return db1('ad_administrator')
      .select('id', 'email', 'username', 'role_id', 'status', 'network_id')
      .where('id', user_id)
   }
  login(db1: knex, username: any, password: any) {
    const data1: any = {}
    const data = db1('ad_administrator')
      .select('id', 'email', 'username', 'role_id')
      .where('username', username)
      .where('password', password)
      .where('status', 1)
      //.orWhereNotIn('role_id', [1, 2]) 
      //.orWhereNotIn('id', [1]) 
    return data
  }
  resetPassword(db1: knex, datareset: any) {
    return db1('ad_administrator')
      .select('id', 'first_name', 'last_name')
      .select('email', 'username', 'role_id')
      .where('username', datareset)
      .orWhere('email', datareset)
    }
  resetpwd(db1: knex, datareset: any) {
    return db1('ad_administrator')
      .select('id', 'email', 'username', 'role_id')
      .where('username', datareset)
      .orWhere('email', datareset)
  }
  read(db1: knex) {
    return db1('ad_administrator')
      .select('id', 'email')
      .orderBy('id','desc')
      //.limit(3)
      // .offset(5)
      
  }

  search(db1: knex, query: any) {
    const _query = '%' + query + '%'
    return db1('ad_administrator')
      .select('id', 'email')
      .where('username', 'like', _query)
      //.andWhere('status', '1')
      .orWhere('id', 'like', _query)
      .orderBy('user_id')
  }
 
  update(db1: knex, userId: any, data: any) {
    return db1('ad_administrator')
      .where('id', userId)
      .update(data)
  }

  remove(db1: knex, userId: any) {
    return db1('ad_administrator')
      .where('id', userId)
      .del()
  }
tr_language_all(db1: knex) {
    return db1('tr_language').select('*') 
  } 
 /**************************************************/    
 he_header(db1: knex) {
    return db1('he_header').select('*') 
  }   
    
    
}