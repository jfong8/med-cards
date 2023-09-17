const express = require('express');
const router = express.Router();

// Triggered when request is made to 'api/cards/'
router.get('/', (req, res) => {
  res.status(200).json({ cards: 'Hello Card Data' }).end();
});

module.exports = router;
