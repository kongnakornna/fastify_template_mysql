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
      firstname: {
        type: 'string',
        minLength: 8,
        maxLength: 100
      },
      lastname: {
        type: 'string',
        minLength: 8,
        maxLength: 100
        },
      email: {
            type: 'string'
        },
      fullname: {
            type: 'string'
        },
      sex: {
        type: 'integer',
        enum: ['0','1', '2']
        },
      role_id: {
        type: 'integer', 
      },
      network_id: {
        type: 'integer', 
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
    required: [ // important ,validate role ,input data
        'username',
        'password',
        'email',
        'role_id',
        'fullname',
    ]
  }
}