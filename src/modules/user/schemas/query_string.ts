export default {
  querystring: {
    properties: {
      query: {
        type: 'string',
        minLength: 3
      },
      limit: {
        type: 'integer'
      },
      offset: {
        type: 'integer'
      }
    },
    required: [
      'query'
    ]
  }
}