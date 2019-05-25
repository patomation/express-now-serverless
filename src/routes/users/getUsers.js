const { Router } = require('express');
module.exports = require('../../createExpressApp')
.use(
  Router()
  .get('/users/', async (req, res, next) => {
    try {
        const users = await req.db.User.find()
        res.status(200).send(users)
    } catch (error) {
        next(error)
    }
  })
)
