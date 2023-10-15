const express = require('express');
const router = express.Router();

const bonesData = require('../data/bones.json');

// Triggered when request is made to 'api/cards/'
router.get('/', (req, res) => {
  res.status(200).json({ cards: bonesData }).end();
});

module.exports = router;
