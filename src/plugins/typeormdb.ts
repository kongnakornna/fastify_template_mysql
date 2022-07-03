import "reflect-metadata";
import fp from "fastify-plugin";
import * as path from 'path'
const envPath = path.join(__dirname, '../config.conf')
import { createConnection, getConnectionOptions } from "typeorm" 
export default fp(async server => {
    try {
        await createConnection({
                type: "mysql",
                host: process.env.DB1_HOST || process.env.HOST_DEV || process.env.HOST_PROD || 'localhost',
                port: Number(process.env.PORTDB) || 3306,
                username: process.env.DB1_USER || process.env.USERS_DEV || process.env.USERS_PROD, 
                password: process.env.DB1_PASSWORD || process.env.PASSWORD_DEV || process.env.PASSWORD_PROD,
                database: process.env.DB1 || process.env.DATABASE_DEV || process.env.DATABASE_PROD,
                entities: [
                    "src/entities/*{.ts,.js}",
                    "../modules/user/entities/*{.ts,.js}"
                ], 
                migrations: ["src/migration/*{.ts,.js}"],
                subscribers: ["src/subscriber/*{.ts,.js}"],
            logging: true,
            // synchronize: true // crate/after table auto 
        }).then(connection => {
            /*
                console.log('process.env.DB1_HOST', process.env.DB1_HOST)
                console.log('process.env.DB1_USER', process.env.DB1_USER)
                console.log('process.env.DB1_PASSWORD', process.env.DB1_PASSWORD)
                console.log('process.env.DB1', process.env.DB1)
                console.log('createConnection', createConnection)
            */ 
                console.log(JSON.stringify(createConnection, null, 2));
                console.log("isConnection Database TypeORM ",connection.isConnected+' host: '+process.env.DB1_HOST+' database:'+process.env.DB1+' port:'+process.env.PORTDB) 
            });
            /*
                const connectionOptions = await getConnectionOptions()
                        Object.assign(connectionOptions, {
                        options: { encrypt: true },
                        entities: [SdUsers, SdUsers]
                        })

                        console.log(`connecting to database: ${connectionOptions.type}...`)
                        const connection = await createConnection(connectionOptions)
                        console.log("Typeorm database connected")

                        server.decorate("db", {
                            SdUsers: connection.getRepository(SdUsers), 
                        })
            */
  } catch (error) {
            console.log('process.env.DB1_HOST', process.env.DB1_HOST)
            console.log('process.env.DB1_USER', process.env.DB1_USER)
            console.log('process.env.DB1_PASSWORD', process.env.DB1_PASSWORD)
            console.log('process.env.DB1',process.env.DB1)
            console.log(error)
            console.log("make sure you have set .env variables - see .env")
  }
})