import * as fastify from 'fastify'
import mongooses = require('mongoose')
import "reflect-metadata"; // for TypeORM
const mongoose = require('mongoose');
const multer = require('fastify-multer')
/**************************/
import * as path from 'path'
const envPath = path.join(__dirname, './config.conf')
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {} 
console.log("DB1_HOST: ", env.DB1_HOST)
/**************************/

import WebSocket from 'ws'
import routers from './router'
/**************************/
const app: fastify.FastifyInstance = fastify.fastify({
    logger: {
        level: 'info'
    }
})
 
app.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
})
/**************************/
app.register(multer.contentParser)
app.register(require('fastify-cors'))
app.register(require('fastify-formbody'))
/**************************/

/* knex db1 connect  webservicedb */
app.register(require('./system/database/mysqldb'), {
    options: {
        client: 'mysql2',
        connection: {
            host: env.DB1_HOST,
            port: Number(env.DB1_PORT), 
            user: env.DB1_USER,
            password: env.DB1_PASSWORD,
            database: env.DB1_NAME
        },
        debug: true
    },
    connectionName: 'db1'
})
/**************************/
// register knex db2
app.register(require('./system/database/mysqldb'), {
    options: {
        client: 'mysql2',
        connection: {
            host: env.DB2_HOST,
            port: Number(env.DB2_PORT),
            user: env.DB2_USER,
            password: env.DB2_PASSWORD,
            database: env.DB2_NAME
        },
        debug: true
    },
    connectionName: 'db2'
})
/**************************/
// register knex db2
app.register(require('./system/database/mysqldb'), {
    options: {
        client: 'mysql2',
        connection: {
            host: env.DB3_HOST,
            port: Number(env.DB3_PORT),
            user: env.DB3_USER,
            password: env.DB3_PASSWORD,
            database: env.DB3_NAME
        },
        debug: true
    },
    connectionName: 'db3'
})
/* knex db connect   */
/**************************/
/* typeorm db1 connect  webservice3 */
import { createConnection } from 'typeorm';
/* entity  */
/* entity  */
import {Photo} from "./modules/testtypeorm/entity/Photo";
createConnection({
  type: "mysql",
	host:  env.DB3_HOST,
	port: Number(env.DB3_PORT),
	username: env.DB3_USER,
	password: env.DB3_PASSWORD,
	database: env.DB3_NAME,
    entities: [
      "src/system/entity/**/*.ts"  // "src/entities/*.ts"
    ],
    migrations: [
        "src/system/migration/**/*.ts"
    ],
    subscribers: [
        "src/system/subscriber/**/*.ts"
    ]
	//logging: true,
	//synchronize: true
}).then(connection => {
  console.log("TypeORM is Database Connection : "+env.DB3_NAME+' :', connection.isConnected) 
});
/**************************/


app.register(require('./system/plugins/jwt'), {
    secret: env.JWT_SECRET || '#5371##99nau'
})
/**************************/
// websocket
app.register(require('./system/plugins/ws'))
// socket.io
app.register(require('./system/plugins/io'), {})
app.ready((error: any) => {
    if (error) throw error
    console.log('WebSocket server running....')
    app.io.on('connection', (socket: any) => {
        console.log('user socket connected!')
        socket.on('welcome', (message: any) => {
            socket.emit('welcome', 'Hello from server socket')
        })
        socket.on('chat message', (message: any) => {
            socket.broadcast.emit('chat message', message)
        })
    })
    app.ws.on('connection', (ws: any) => {
        console.log('Client connected websocket!')
        ws.on('message', (message: any) => {
            const clients: any[] = app.ws.clients
            clients.forEach((client: any) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message)
                }
            })
        })
    })
})
/***************/
app.register(require('fastify-static'), {
    root: path.join(__dirname, '../public'),
    prefix: '/assets/'
})
/**************************/
app.register(require('point-of-view'), {
    engine: {
        ejs: require('ejs'),
        root: path.join(__dirname, '../views'),
    },
    includeViewExtension: true
})
/**************************/
// MongoDB
//connected fastify to mongoose
//  https://medium.com/swlh/fullstack-crud-application-with-fastify-mongoose-and-react-admin-86d3e743dcdf
try {
    mongoose.connect(env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} catch (e) {
    console.error(e);
}
/**************************/
app.register(require('fastify-mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    url: env.MONGO_URI
})
// MongoDB
mongoose.connect(env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('error', (error:any) => app.log.error(error))
mongoose.connection.once('open', () => app.log.info('MongoDB has been connected'+ mongoose.connection.on))
console.log('mongoose on ' + mongoose)
/**************************/
/***********oauth2-server start***************/
var oauthserver = require('fastify-oauth-server'); // กำลัง Dev
/*******************************************************/

/***********oauth2-server end***************/
app.register(routers)
/**************************/
export default app