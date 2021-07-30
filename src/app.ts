import * as fastify from 'fastify'
import * as path from 'path'
import mongooses = require('mongoose')
import "reflect-metadata";  
const mongoose = require('mongoose');
const multer = require('fastify-multer')
const autoload = require('fastify-autoload')
/************../config.conf**************/
// const envPath = path.join(__dirname, '../config.conf') 
/* ./config.conf */
const envPath = path.join(__dirname, '../config.conf') 
require('dotenv').config({ path: envPath })
const env = process.env 
const opts = {}
// console.log("envPath: ", envPath)
// console.log("env: ", env)
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
/**********autoload****************/
/*
app.register(autoload, {
  dir_plugins: path.join(__dirname, './system/plugins'),
  env_path : env 
})
*/
app.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
})
/**************************/
app.register(multer.contentParser) 
app.register(require('fastify-cors'), { 
  // put your options here
})
app.register(require('fastify-formbody'))
//doc https://www.fastify.io/docs/latest/ContentTypeParser/
/* fastify.post('/', (req, reply) => { reply.send(req.body) })  */
/**************************/

/* knex db connect  webservicedb */
// register knex db2
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
// register knex db3
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
/**************************/
import {createConnections} from "typeorm";
const connections = createConnections([{
            name: "db1_typeorm",
            type: "mysql",
            host: env.DB1_HOST,
            port: Number(env.DB21_PORT),
            username: env.DB1_USER,
            password: env.DB1_PASSWORD,
            database: env.DB1_NAME,
            entities: ["src/system/entity/**/*.ts" ],
            migrations: ["src/system/migration/**/*.ts"],
            subscribers: ["src/system/subscriber/**/*.ts"],
            //logging: true,
            synchronize: true
        },{
            name: "db2_typeorm",
            type: "mysql",
            host: env.DB2_HOST,
            port: Number(env.DB2_PORT),
            username: env.DB2_USER,
            password: env.DB2_PASSWORD,
            database: env.DB2_NAME,
            entities: ["src/system/entity/**/*.ts" ],
            migrations: ["src/system/migration/**/*.ts"],
            subscribers: ["src/system/subscriber/**/*.ts"],
            //logging: true,
            synchronize: true
        },{
                name: "db3_typeorm",
                type: "mysql",
                host: env.DB3_HOST,
                port: Number(env.DB3_PORT),
                username: env.DB3_USER,
                password: env.DB3_PASSWORD,
                database: env.DB3_NAME,
                entities: ["src/system/entity/**/*.ts" ],
                migrations: ["src/system/migration/**/*.ts"],
                subscribers: ["src/system/subscriber/**/*.ts"],
                //logging: true,
                synchronize: true
        }]).then(async connection => {  
            console.log("Connection has been established  TypeORM successfully....");
        }).catch(err => { 
            console.error("Unable to connect to the database TypeORM connection error :", err);
        });
/**************************/
/*
import {getConnection} from "typeorm";
const db1_typeorm = getConnection("db1_typeorm");
// you can work with "db1" database now...
const db2_typeorm = getConnection("db2_typeorm");
// you can work with "db2" database now...
const db3_typeorm = getConnection("db3_typeorm");
// you can work with "db2" database now...
console.log('db1_typeorm server running....'+db1_typeorm)
console.log('db2_typeorm server running....'+db2_typeorm)
console.log('db3_typeorm server running....' + db3_typeorm)
*/

/**************************/
app.register(require('./system/plugins/jwt'), {
    secret: env.JWT_SECRET  
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
const mongooseConnection = mongoose.connect(env.MONGO_URI, {useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true})
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