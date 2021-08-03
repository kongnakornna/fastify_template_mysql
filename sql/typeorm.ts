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