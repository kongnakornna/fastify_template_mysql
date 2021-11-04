import * as fastify from 'fastify'
import * as path from 'path'
const util = require('util')

/* */
import mongooses = require('mongoose')
import "reflect-metadata";  
var mongoose = require('mongoose');
const multer = require('fastify-multer')
const autoload = require('fastify-autoload')
/************../config.conf**************/
 
// const envPath = path.join(__dirname, '../config.conf') 
/* ./config.conf */
var envPath = path.join(__dirname, '../config.conf') 
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
 
/*
    npm install knex --save
    //Then add one of the following (adding a --save) flag:
    npm install pg -S
    npm install sqlite3 -S
    npm install mysql -S
    npm install mysql2 -S
    npm install oracledb -S
    npm install tedious -S
*/
/************ config typeorm start**************/

import {getConnectionManager, ConnectionManager, Connection} from "typeorm";
const connectionManager = getConnectionManager();
const connection = connectionManager.create({
                                            name: "default",
                                            type: "mysql",
                                            host: env.DB1_HOST,
                                            port: Number(env.DB1_PORT), 
                                            username: env.DB1_USER,
                                            password: env.DB1_PASSWORD,
                                            database: env.DB1_NAME,
                                            entities: ["src/entity/*{.ts,.js}"],
                                            migrations: ["src/migration/*.js" ],
                                            logging: true,  
                                            synchronize: true  
                                            }
                                        );
connection.connect(); //typeorm  performs connection
console.log('typeorm connectionManager ')
console.log(util.inspect(connectionManager, {showHidden: true, depth: null, colors: true}))

/* */
    import {createConnections} from "typeorm";
    const connections = createConnections([{
            name: "webservice1",
            type: "mysql",
            host: env.DB1_HOST,
            port: Number(env.DB1_PORT), 
            username: env.DB1_USER,
            password: env.DB1_PASSWORD,
            database: env.DB1_NAME, 
            entities: [
                         "src/entity/*{.ts,.js}"
                    ], 
            logging: true,  
            synchronize: true 
        }, {
            name: "webservice2",
            type: "mysql",
            host: env.DB2_HOST,
            port: Number(env.DB2_PORT), 
            username: env.DB2_USER,
            password: env.DB2_PASSWORD,
            database: env.DB2_NAME, 
            entities: [
                         "src/entity/*{.ts,.js}"
                    ], 
            logging: true,  
           // synchronize: true 
        }]); 

    import {getConnection} from "typeorm";
    const webservice1 = getConnection("webservice1");
    // you can work with "db1"  
    console.log('typeorm webservice1 ')
    console.log(util.inspect(webservice1, {showHidden: true, depth: null, colors: true}))
    // webservice2
    const webservice2 = getConnection("webservice2");
    // you can work with "db2"  
     console.log('typeorm webservice2 ')
    console.log(util.inspect(webservice2, { showHidden: true, depth: null, colors: true }))
    

/************ config typeorm end**************/
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
/**************************/
app.register(require('./system/plugins/jwt'), {
    secret: env.JWT_SECRET  
})
/**************************/

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
var mongooseConnection = mongoose.connect(env.MONGO_URI, {useCreateIndex: true,useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connection.on('error', (error:any) => app.log.error(error))
mongoose.connection.once('open', () => app.log.info('MongoDB has been connected'+ mongoose.connection.on))
console.log('mongoose on ' + mongooseConnection)
/***********oauth2-server start***************/
var oauthserver = require('fastify-oauth-server'); // กำลัง Dev
/*******************************************************/
// websocket
/*
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
*/
app.register(routers)
/**************************/
export default app