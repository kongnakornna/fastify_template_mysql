import fp from 'fastify-plugin'
import { createConnection } from 'typeorm';
const typeorm :any= createConnection
module.exports = fp(async (fastify: any, opts: any, done: any) => {
  try {
    const connection = await typeorm(opts.options)
      fastify.decorate(opts.connectionName, connection)
       done()
      console.log('Typeorm database connection mysql node name:' + opts.connectionName+' db_Name :' + opts.options.connection.database+' host :'+ opts.options.connection.host+' port :'+ opts.options.connection.port)
  } catch (error) {
      done(error)
      console.log('typeorm database connection error ' + error)
  }
})
 
/*
createConnection({
  type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "root",
	database: "webservice1",
	entities: [
		"src/entities/*.ts"
	],
	// logging: true,
	// synchronize: true
}).then(connection => {
  console.log("isConnection", connection.isConnected) 
});

*/