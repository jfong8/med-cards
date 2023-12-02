// Init Express App
const express = require('express');
const mongoose = require('mongoose');
const app = express();

process.env.ACCESS_TOKEN_SECRET = '12345';

// DB connection
const DB_CONN_STRING = 'mongodb+srv://jessiew4:GUiEjVt3FkEm82S@cluster0.aawubv7.mongodb.net/'
mongoose.connect(DB_CONN_STRING);

// Enable CORS
const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Set Routes
app.use('/api/cards', require('./routes/cards'));
app.use('/api/users', require('./routes/users'));

// Listen
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
