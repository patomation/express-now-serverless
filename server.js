const app = require('./src/lambdas/helloworld.js');

const port = 8080;
const server = require('http').createServer()


server
  .on('request', app)
  .on('listening', () =>{
    console.log('listeing');
  })
  .on('error', () => {
    console.log('ERROR!!!!');
  })
  .listen(port);
