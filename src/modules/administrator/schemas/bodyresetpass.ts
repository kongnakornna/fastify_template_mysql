export default {
  body: {
    type: 'object',
    properties: {
      reset_valule: {
        type: 'string',
        minLength: 10,
        maxLength: 500
      },
    },
    required: [
      'reset_valule',
    ]
  }
}