const { Router } = require('express');

const router = Router();

router.get('/:id', async (req, res) => {
  console.log('shit son');
  console.log(req.params.id);
  if(!req.params.id){
    console.log('what happend?');
    console.log(req.params.id);
    // return res.sendStatus(404);
    return res.status(200).send('<h1>ID: Missing </h1>')
  } else {
    return res.status(200).send('<h1>ID:'+req.params.id+'. Hello, world!</h1>')
  }

});


module.exports = router;
