const express = require('express')
const helmet = require('helmet')

const app = express()

//Secures Express app by setting various HTTP headers.
// See: https://www.npmjs.com/package/helmet
app.use(helmet())

app.get('*', (req, res) => {
    res.send(200, '<h1>Hello, world!</h1>')
})

module.exports = app
