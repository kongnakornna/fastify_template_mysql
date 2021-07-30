
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  serverError = 500,
}

export default async function  helper(fastify: FastifyInstance) {
  
}
 