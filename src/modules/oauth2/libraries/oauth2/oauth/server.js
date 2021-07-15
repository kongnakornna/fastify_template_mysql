const OAuthServer = require('express-oauth-server')
const model = require('./model')

module.exports = new OAuthServer({
  model: model,
  grants: ['authorization_code', 'refresh_token'],
  accessTokenLifetime: 60 * 60 * 24 * 1, // 24 hours * 1 day, or 1* 1 day
  allowEmptyState: true,
  allowExtendedTokenAttributes: true,
})
