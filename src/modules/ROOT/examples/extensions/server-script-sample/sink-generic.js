// Don't forget to add this package
import base64 from 'base-64'

export default {
  label: "label goes here",
  description: "description goes here",

  security: {
    runAs: 'user goes here',
  },

  triggers ({ on }) {
    return on('request')
      .where('request.path', '/path')
      .where('request.method', 'POST')
      .for('system:sink')
  },

  async exec ({ $request, $response }) {
    // The body is base64 encoded.
    // If we're working with json content, don't forget the JSON.parse
    const body = JSON.parse(base64.decode($request.rawBody))

    // Do something with the data...
    // ...

    // Prepare the response
    $response.status = 200
    $response.header = { 'Content-Type': ['application/json'] }
    $response.body = JSON.stringify({ result: 'example' })

    // and send back everything
    return $response
  }
}
