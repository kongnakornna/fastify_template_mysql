export default {
    querystring: {
      properties: {
        query: {
          type: 'string',
          minLength: 3
        },
        username: {
          type: 'string',
          minLength: 3
        },
        password: {
          type: 'string',
          minLength: 5
        }
      },
      required: [
          'username',
          'password',
      ]
    }
  }