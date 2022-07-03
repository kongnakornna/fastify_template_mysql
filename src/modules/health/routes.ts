import { getHealthSchema } from "./schema"
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
export default function healthHandler(app: FastifyInstance, options:any, next:any) {
  app.get("/health", { schema: getHealthSchema }, (req:FastifyRequest, res:FastifyReply) => {
    res.send({ status: "ok" })
  })
  next()
}
