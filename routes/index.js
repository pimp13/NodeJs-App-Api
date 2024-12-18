const { Router } = require('express');

const router = Router();

/** GET home page. */
router.get('/', (req, res) => {
  return res.render('index', { title: 'Express' });
});

module.exports = router;
