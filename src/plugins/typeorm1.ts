import "reflect-metadata"
import fp from "fastify-plugin"
import { createConnection, getConnectionOptions } from "typeorm"
// import { Inventory } from "../modules/inventory/entity"
import { SdUsers } from "../entities/SdUsers.entity"

export default fp(async server => {
  try {
    const connectionOptions = await getConnectionOptions()
    Object.assign(connectionOptions, {
      options: { encrypt: true },
      entities: [SdUsers]
    })

    console.log(`connecting to database: ${connectionOptions.type}...`)
    const connection = await createConnection(connectionOptions)
    console.log("database connected")

    server.decorate("db", {
        SdUsers: connection.getRepository(SdUsers), 
    })
  } catch (error) {
    console.log(error)
    console.log("make sure you have set .env variables - see .env.sample")
  }
})
