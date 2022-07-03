import { CustomErrorParams } from '../handlers/custom-error'
export const AuthInvalidUsername: CustomErrorParams = {
  message: 'Unauthorized ,This username is not allowed or wrong',
  code: 'AUTH001',
  statusCode: 401,
}
export const AuthInvalidPassword: CustomErrorParams = {
  message: 'Unauthorized ,This Password is not allowed or wrong',
  code: 'AUTH002',
  statusCode: 401
}
export const AuthMissingHeaders: CustomErrorParams = {
  message: 'Unauthorized ,Not allowed or wrong',
  code: 'AUTH003',
  statusCode: 401
}
export const AuthJWTError: CustomErrorParams = {
  message: 'Unauthorized ,Not allowed or wrong',
  code: 'AUTH004',
  statusCode: 401
}
export default {
  AuthInvalidUsername,
  AuthInvalidPassword,
  AuthMissingHeaders,
  AuthJWTError
}