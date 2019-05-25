const getUsers = require('./src/routes/users/getUsers.js');
const addUser = require('./src/routes/users/addUser.js');
const getUser = require('./src/routes/users/id/getUser.js');

const port = 8080;
const server = require('http').createServer();
const { Router } = require('express');

server
  .on(
    'request',
    Router({ mergeParams: true })
    .use(getUsers)
    .use(addUser)
    .use(getUser)
  )
  .on('post', getUsers)
  .on('listening', () =>{
    console.log('listeing');
  })
  .on('error', () => {
    console.log('ERROR!!!!');
  })
  .listen(port);
