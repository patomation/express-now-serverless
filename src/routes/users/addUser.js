const { Router } = require('express');
module.exports = require('../../createExpressApp')
.use(
  Router()
  .post('/users/', async (req, res, next) => {
    try {
        const user = new req.db.User({
            username: req.body.username,
            password: req.body.password,
        })
        await user.save()
        const location = '${req.base}${req.originalUrl}/${user.id}'
        res.setHeader('Location', location)
        res.status(201).send(user)
    } catch(error) {
        next(error)
    }
  })
)
