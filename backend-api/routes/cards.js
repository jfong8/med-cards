const express = require('express');
const authGuard = require('../middleware/authGuard');
const router = express.Router();

const bonesData = require('../data/bones-description.json');

router.use(authGuard);

// Triggered when request is made to 'api/cards/'
router.get('/', (req, res) => {
  res.status(200).json({ cards: bonesData }).end();
});

module.exports = router;
