export default {
  body: {
    type: 'object',
    properties: {
     uid: {
        type: 'integer',
       // enum: ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
      lang: {
            type: 'string',
            minLength: 2,
            maxLength: 255
      },
    },
    required: [ // important ,validate role ,input data
        'uid', 
    ]
  }
}