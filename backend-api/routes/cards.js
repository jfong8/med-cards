const express = require('express');
const authGuard = require('../middleware/authGuard');
const Card = require('../models/card');
const router = express.Router();

router.use(authGuard);

// Triggered when request is made to 'api/cards/'
router.get('/', async (req, res) => {
  let data = {};
  try {
    data = await Card.find();
  } catch (error) {
    res.status(500).send(error);
  }
  res.status(200).json({ cards: data }).end();
});

router.post('/', async (req, res) => {
  if (!req.body.name || !req.body.fileName || !req.body.description) {
    res.status(400).send('Missing fields');
    return;
  }
  if (await Card.findOne({ name: req.body.name })) {
    res.status(400).send('Card already exists');
    return;
  }
  try {
    await Card.create({
      name: req.body.name,
      fileName: req.body.fileName,
      description: req.body.description,
    });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send('No card with matching id');
    return;
  }
  try {
    await Card.deleteOne({ id });
  } catch (error) {
    res.status(500).send(error);
  }
  res.status(200).send(`Deleted ${id}`);
});

router.delete('/', async (req, res) => {
  try {
    await Card.deleteMany({});
  } catch (error) {
    res.status(500).send(error);
  }
  res.status(200).send('Card collection cleared');
});

module.exports = router;
