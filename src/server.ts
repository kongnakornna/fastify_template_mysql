import app from './app'
const port =  process.env.PORT || 8002
const address = '0.0.0.0'  
/******************************/
/***********redis**************/
const redis = require('redis').createClient({ host:  process.env.redis_host || 'localhost', port: process.env.redis_port || 6379 })
app.register(require('fastify-redis'), {
    host: process.env.redis_host || '127.0.0.1',
    port: process.env.redis_port || 6379,
    namespace: 'Hello redis'
  })
app.register(require('fastify-redis'), {
    client: redis,
    namespace: 'Test redis'
})
/***********redis**************/
const start = async () => {
  try {
      await app.listen(port, address)
      console.log('redis Run on ' +redis)
      console.log('App service NodeJs Fastify V.1.0.1 knex server listening on ' + address + ':' + port)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}
start()
/**************************/