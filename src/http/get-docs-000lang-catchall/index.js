exports.handler = async function http (req) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html'
    },
    body: `henlo from \`get /docs/:lang/*\`</br></br><pre>${JSON.stringify(req, null ,2)}</pre>`
  }
}
