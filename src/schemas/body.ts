export default {
  body: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
        minLength: 4,
        maxLength: 10
      },
      password: {
        type: 'string',
        minLength: 8,
        maxLength: 15
      },
      firstName: {
        type: 'string',
        minLength: 8,
        maxLength: 15
      },
      lastName: {
        type: 'string',
        minLength: 8,
        maxLength: 15
        },
      email: {
            type: 'string'
        },
      sex: {
        type: 'integer',
        enum: ['0','1', '2']
        },
       gender: {
        type: 'integer',
        enum: ['1', '2'] // enum: ['M', 'W']
      },
      age: {
        type: 'integer'
        },
        status: {
        type: 'integer',
        enum: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
      lang: {
            type: 'string',
            minLength: 2,
            maxLength: 255
      },
    },
    required: [
      'username',
      'password',
      'firstName',
      'lastName'
    ]
  }
}