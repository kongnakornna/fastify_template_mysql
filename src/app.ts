import * as fastify from 'fastify'
import * as path from 'path'
import mongooses = require('mongoose')
import "reflect-metadata";
const mongoose = require('mongoose');
const multer = require('fastify-multer')
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
import WebSocket from 'ws'
import routers from './router'
/**************************/
const app: fastify.FastifyInstance = fastify.fastify({
    logger: {
        level: 'info'
    }
})
/**************************/
app.setErrorHandler((error, req, res) => {
    req.log.error(error.toString())
    res.send({ error })
})
/**************************/
app.register(multer.contentParser)
app.register(require('fastify-cors'))
app.register(require('fastify-formbody'))
/**************************/
/* knex db connect  webservicedb */
app.register(require('./system/database/mysqldb'), {
    options: {
        client: 'mysql2',
        connection: {
            host: process.env.DB1_HOST || 'localhost',
            port: Number(process.env.DB1_PORT) || 3306,
            user: process.env.DB1_USER || 'root',
            password: process.env.DB1_PASSWORD || 'root',
            database: process.env.DB1_NAME || 'webservicedb'
        },
        debug: true
    },
    connectionName: 'db'
})
/**************************/
// register knex db2
app.register(require('./system/database/mysqldb'), {
    options: {
        client: 'mysql2',
        connection: {
            host: process.env.DB2_HOST || 'localhost',
            port: Number(process.env.DB2_PORT) || 3306,
            user: process.env.DB2_USER || 'root',
            password: process.env.DB2_PASSWORD || 'root',
            database: process.env.DB2_NAME || 'test'
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
            host: process.env.DB3_HOST || 'localhost',
            port: Number(process.env.DB3_PORT) || 3306,
            user: process.env.DB3_USER || 'root',
            password: process.env.DB3_PASSWORD || 'root',
            database: process.env.DB3_NAME || 'test2'
        },
        debug: true
    },
    connectionName: 'db3'
})
/* knex db connect   */
app.register(require('./system/plugins/jwt'), {
    secret: process.env.JWT_SECRET || '#5371##99nau'
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
        console.log('user connected!')
        socket.on('welcome', (message: any) => {
            socket.emit('welcome', 'Hello from server')
        })
        socket.on('chat message', (message: any) => {
            socket.broadcast.emit('chat message', message)
        })
    })
    app.ws.on('connection', (ws: any) => {
        console.log('Client connected!')
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
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/ultimate', {
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
    url: 'mongodb://localhost/ultimate'
})
// MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/ultimate', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('error', (error) => app.log.error(error))
mongoose.connection.once('open', () => app.log.info('MongoDB has been connected'))
console.log('mongoose on ' + mongoose)
/**************************/
app.register(routers)
/**************************/
export default app