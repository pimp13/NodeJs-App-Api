const { Router } = require('express');
const router = new Router();

/** GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;