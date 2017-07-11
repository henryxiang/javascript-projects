const router = require('express').Router();
const path = require('path');
const indexFile = path.join(__dirname, '..', 'public', 'index.html');

router.get('/', (req, res) => {
  res.sendFile(indexFile); 
});

module.exports = router;
