const { Router } = require('express');
module.exports = require('../../../createExpressApp')
.use(
  Router()
  .delete('/users/:id', async (req, res, next) => {
    try {
        req.db.User.findByIdAndRemove(req.params.id, (err, user) => {
          const response = {
            message: "User successfully deleted",
            id: req.params.id
          }
          res.status(200).send(response)
        });

    } catch(error) {
        next(error)
    }
  })
)
