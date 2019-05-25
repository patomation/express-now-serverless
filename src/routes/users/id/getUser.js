const { Router } = require('express');
module.exports = require('../../../createExpressApp')
.use(
  Router()
  .get('/users/:id', async (req, res, next) => {
    try {
        const user= await req.db.User.findById(req.params.id)
        res.status(200).send(user);
    } catch(error) {
        next(error);
    }
  })
)
