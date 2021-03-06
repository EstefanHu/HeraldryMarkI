'use strict';
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()
const app = express();
const DB_CONNECTION = process.env.APP_DB || 'houseI';
const sessionStore = new RedisStore({
  host: 'localhost',
  port: 6379,
  client: redisClient,
  ttl: 260
});
const PORT = process.env.PORT || 4000;

mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
mongoose.connection.once('open', () => {
  console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
  console.log('Connection Error: ' + err);
});

require('dotenv').config()

app.use((express.static(path.join(__dirname, '../client/build'))));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(session({
  secret: process.env.SESSIONS_KEY || 'super-secret-sessions',
  store: sessionStore,
  saveUninitialized: false,
  resave: false,
  name: 'houseCookie',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: false,
    sameSite: false,
    secure: process.env.ENVIRONMENT === 'production'
  }
}));

app.get('/flush', (_, res) => {
  try {
    redisClient.flushdb((err, succeeded) => {
      if (err) throw err;
      console.log('flushed session store: ' + succeeded);
    })
    res.json('flushed');
  } catch (error) {
    res.status(500).json('Error:' + error);
  }
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});