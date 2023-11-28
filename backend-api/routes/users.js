const express = require('express');
const authService = require('../services/authService');
const router = express.Router();

// Requests to /api/users
router.post('/', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send('Missing username or password');
    return;
  }
  if (await authService.userExists(req.body.username)) {
    res.status(400).send('Username already in use');
    return;
  }
  try {
    authService.createUser({ username: req.body.username, password: req.body.password });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send('Missing username or password');
    return;
  }

  try {
    const user = await authService.checkLoginAndReturnUser({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send('Invalid username or password');
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete('/', async (req, res) => {
  await authService.clearCollection();
  res.status(200).send('UserAuth collection cleared');
});

module.exports = router;
