import * as knex from 'knex'
/*  กำหนด type ให้กับระบบ */
declare module 'fastify' {
  interface FastifyInstance {
    knex: knex
    db: knex
    db2: knex
    db3: knex
    jwt: any
    authenticate: any
    ws: any
    io: any
    oauth: any
    oauth2: any
  }

  interface FastifyRequest {
    jwtVerify: any
    file: any
    files: any[]
    image: any[]
    oauth: any
    oauth2: any
  }

  interface FastifyReply {
    view: any
    css: any
    html: any
    oauth: any
    oauth2: any
  }
}