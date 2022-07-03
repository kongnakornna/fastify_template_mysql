import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
export enum HttpStatusCode {
  ok = 200,
  created = 201,
  Accepted = 202,
  NonAuthoritativeInformation=203, 
  noContent = 204,
  badRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound=404,
  serverError = 500,
  serviceunavailable=503,
}

export type IHttpFastifyReply<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
}

export const ok = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.ok).send(data); // แสดงข้อมูล

export const created = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.created).send(data); // เพิ่มข้อมูล

export const Accepted = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.Accepted).send(data);  // ได้รับอนุญาต

export const NonAuthoritativeInformation = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.NonAuthoritativeInformation).send(data); // ไม่ได้รับอนุญาต

export const noContent = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.noContent).send(data); // ไม่มีเนื้อหา

export const badRequest = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.badRequest).send(data); // ไม่พบข้อมูล

export const Unauthorized = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.Unauthorized).send(data); // ไม่ได้รับอนุญาต

export const Forbidden = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.Forbidden).send(data); // ไม่ได้รับอนุญาต

export const NotFound = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.NotFound).send(data); // ไม่พบข้อมูล

export const serverError = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.serverError).send(data); //เซิร์ฟเวอร์ผิดพลาด

export const serviceunavailable = (res: FastifyReply, data?: any) => res.status(HttpStatusCode.serviceunavailable).send(data); //เซิร์ฟเวอร์ผิดพลาด
 
// https://restfulapi.net/http-status-codes/
/*
1×× Informational

100 Continue
101 Switching Protocols
102 Processing

2×× Success

200 OK
201 Created
202 Accepted
203 Non-authoritative Information
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status
208 Already Reported
226 IM Used

3×× Redirection

300 Multiple Choices
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
307 Temporary Redirect
308 Permanent Redirect

4×× Client Error

400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 Request-URI Too Long
415 Unsupported Media Type
416 Requested Range Not Satisfiable
417 Expectation Failed
418 I’m a teapot
421 Misdirected Request
422 Unprocessable Entity
423 Locked
424 Failed Dependency
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
444 Connection Closed Without FastifyReply
451 Unavailable For Legal Reasons
499 Client Closed Request

5×× Server Error

500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates
507 Insufficient Storage
508 Loop Detected
510 Not Extended
511 Network Authentication Required
599 Network Connect Timeout Error

*/