import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import * as crypto from 'crypto'
import * as path from 'path'
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
import * as knex from 'knex';
export class Appoauth2Model  {
/****************ad_administrator**********************************/ 
/*****************roles*********************************/
// oauth_appservice
create(db2: knex, data: any) { 
    const rs = db2('oauth_appservice').insert(data)
    return rs
}
lastidread(db2: knex) {
    return db2('oauth_appservice')
      .select('id')
      .orderBy('id','desc')
  }
update_app_id(db2: knex, id: any, data: any) {
    return db2('oauth_appservice')
      .where('id', id)
      .update(data)
  }
validation_client_id(db2: knex, client_id: any) {
    return db2('oauth_appservice')
      .select('client_id')
      .where('client_id', client_id)
      //.where('role_id', role_id)
}
validation_client_secect(db2: knex, client_secect: any) {
    return db2('oauth_appservice')
      .select('client_secect')
      .where('client_secect', client_secect)
      //.where('role_id', role_id)
}
validation_email(db2: knex, email: any) {
    return db2('oauth_appservice')
      .select('email')
      .where('email', email)
    }
validation_username(db2: knex, username: any) {
    return db2('oauth_appservice')
      .select('username')
      .where('username', username)
    }
/**************************************************/  
}