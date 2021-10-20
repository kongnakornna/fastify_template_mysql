export default {
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLength: 4,
        maxLength: 100
      },
      oldpassword: {
        type: 'string',
        minLength: 15,
        maxLength: 150
      },
      newpassword: {
        type: 'string',
        minLength: 15,
        maxLength: 150
      }, 
      name: {
            type: 'string'
        }, 
    },
    required: [
      'username',
      'oldpassword', 
      'newpassword', 
    ]
  }
}