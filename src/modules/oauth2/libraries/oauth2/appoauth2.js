// const express = require('express')
// ./modules/oauth2/libraries/oauth2/modules/oauth2/libraries/oauth2/
// const app = express()
// const port = 3030

import * as fastify from 'fastify'
const app: fastify.FastifyInstance = fastify.fastify({logger: {level: 'info'}})
/////////////
const bodyParser = require('body-parser')
const oauthServer = require('./modules/oauth2/libraries/oauth2/oauth/server.js')
const DebugControl = require('./modules/oauth2/libraries/oauth2/utilities/debug.js')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(DebugControl.log.request())

app.use('oauth2/client', require('./modules/oauth2/libraries/oauth2/routes/client.js')) // Client routes
app.use('oauth2/oauth', require('./modules/oauth2/libraries/oauth2/routes/auth.js')) // routes to access the auth stuff
// Note that the next router uses middleware. That protects all routes within this middleware

app.use('oauth2/secure', (req,res,next) => {
  DebugControl.log.flow('Authentication')
  return next()
},oauthServer.authenticate(), require('./modules/oauth2/libraries/oauth2/routes/secure.js')) // routes to access the protected stuff
app.use('oauth2/', (req,res) => res.redirect('oauth2/client'))


// app.listen(port)
// console.log("Oauth Server listening on port ", port)
// module.exports = app // For testing
