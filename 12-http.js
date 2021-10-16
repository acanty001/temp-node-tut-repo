const http = require('http')

const server = http.createServer((request, response) => {
  // console.log(request)
  if (request.url === '/') {
    response.end('Peace welcome to our home page')
  }
  else if (request.url === '/about') {
    response.end('Peace welcome to our about page')
  } else {
    response.end(`
      <h1>Ooops!</h1>.,
      <p>Seems like the page you have requested doesn't exist. :(</p>
      <a href="/">Back Home</a>
    `)
    }
  }
)

server.listen(5000)