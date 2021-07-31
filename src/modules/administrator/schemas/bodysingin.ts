export default {
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLength: 4,
        maxLength: 500
      },
      password: {
        type: 'string',
        minLength: 8,
        maxLength: 500
      },
    },
    required: [
      'username',
      'password', 
    ]
  }
}