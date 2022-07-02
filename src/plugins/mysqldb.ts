import fp from 'fastify-plugin'
// knex mysql2 
const knex = require('knex')
// knex mysql2 
module.exports = fp(async (fastify: any, opts: any, done: any) => {
  try {
    const connection = await knex(opts.options)
      fastify.decorate(opts.connectionName, connection)
       done()
      console.log('knex database connection mysql node name:' + opts.connectionName+' db_Name :' + opts.options.connection.database+' host :'+ opts.options.connection.host+' port :'+ opts.options.connection.port)
  } catch (error) {
      done(error)
      console.log('knex database connection error ' + error)
  }
})
// knex mysql2 db1 