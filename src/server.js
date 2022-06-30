require('dotenv').config()
const http = require('http')
const main = require('./main')

const PORT = process.env.VB_PORT || process.env.PORT || 6870

http.createServer(main).listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Service is up and running port: ' + PORT)
})
