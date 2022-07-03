import fp from "fastify-plugin"
import { createConnection } from 'typeorm';
import "reflect-metadata";
module.exports = fp(async (fastify: any, opts: any, done: any) => {
          const client: any = opts.options.client; 
          const host: any = opts.options.connection.host; 
          const user: any = opts.options.connection.user; 
          const password: any = opts.options.connection.password; 
          const database: any = opts.options.connection.database;  
          const port: any = opts.options.connection.port; 
          const entities: any = opts.options.entities; 
          const migrations: any = opts.options.migrations; 
          const subscribers: any =opts.options.subscribers; 
          /*
            console.log('typeorm')
            console.log('client ' + client)
            console.log('host ' + host)  
            console.log('user ' + user)
            console.log('password ' + password)
            console.log('db_Name ' + database)
            console.log('port ' + port)
            console.log('entities ' + entities)
            console.log('migrations ' + migrations)
            console.log('subscribers ' + subscribers)
          */
          // modules/user/
          const entities_user: any ="../modules/user/entities/*{.ts,.js}"; 
          createConnection({
                    type: client || "mysql",
                    host: host,
                    port: Number(port) || 3306,
                    username: user,
                    password: password,
                    database: database, 
                          entities: [
                                    entities
                                    ,entities_user
                          ],
                          migrations: [migrations],
                          subscribers: [subscribers],
                          logging: true,
                          synchronize: true // crate/after table auto 
                  }).then(connection => {
                          console.log("isConnection", connection.isConnected)
                  });
})