import app from './app'
const port =  process.env.PORT || 8001
const address = '0.0.0.0'  
/**************************/
const start = async () => {
  try {
    await app.listen(port, address)
    console.log('NodeJs Fastify knex server listening on ' + address +':'+ port)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}
start()
/**************************/