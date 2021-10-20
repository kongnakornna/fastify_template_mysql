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
       // minLength: 15,
       // maxLength: 100
      },
      newpassword: {
        type: 'string',
        minLength: 15,
        maxLength: 100
      },
      firstname: {
        type: 'string',
        minLength: 8,
        maxLength: 100
      },
      user_id: {
        type: 'integer',
        //enum: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
      lang: {
            type: 'string',
            minLength: 2,
            maxLength: 255
      },
    },
    required: [ // important ,validate role ,input data
        'username',
        'oldpassword',
        'newpassword', 
       // 'user_id', 
    ]
  }
}