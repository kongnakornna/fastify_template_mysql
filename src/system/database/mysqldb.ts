import fp from 'fastify-plugin'
// knex mysql2 db 
const knex = require('knex')
// knex mysql2 db 
module.exports = fp(async (fastify: any, opts: any, done: any) => {
  try {
    const connection = await knex(opts.options)
    fastify.decorate(opts.connectionName, connection)
    done()
  } catch (error) {
    done(error)
  }
})
// knex mysql2 db 