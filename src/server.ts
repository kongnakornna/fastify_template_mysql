import app from './app'
const packageJSON = require('../package.json')
console.log('NODE_ENV', process.env.NODE_ENV);
let port_main: any = (packageJSON.port);  
var start = async () => {
  try {
    await app.listen(port_main)
    /*
      console.log('app :'+app) 
      console.log('App register :'+app.register) 
      console.log('NODE_ENV',process.env.NODE_ENV)
    */
      console.log(`App is running at port %d on %s mode at ${new Date()}`, process.env.PORT, process.env.NODE_ENV)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()