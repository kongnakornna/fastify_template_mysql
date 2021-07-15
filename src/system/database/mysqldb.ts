import fp from 'fastify-plugin'
// knex mysql2 db 
const knex = require('knex')
// knex mysql2 db 
module.exports = fp(async (fastify: any, opts: any, done: any) => {
  try {
    const connection = await knex(opts.options)
      fastify.decorate(opts.connectionName, connection)
       done()
      console.log('knex database connection mysql node name:' + opts.connectionName+' DB_Name :' + opts.options.connection.database+' host :'+ opts.options.connection.host+' port :'+ opts.options.connection.port)
  } catch (error) {
      done(error)
      console.log('knex database connection error ' + error)
  }
})
// knex mysql2 db 