if (process.env.NODE_ENV !== 'production npm start') {
    require('dotenv').config({ override: true });
  }

const express = require('express');
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require('body-parser'); 
const postRouter = require('./routes/posts.js');
const CLIENT_URL = process.env.CLIENT_URL;
const cookieParser = require('cookie-parser');
// const passport = require('passport');
const session = require('cookie-session');
const TWO_HOURS = 60 * 60 * 1000 * 13;
const SESS_SECRET = process.env.SESS_SECRET;
const hostname = '127.0.0.1';
const http = require('http');
const port = 5000;

const app = express();
const server = http.createServer(app);
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(express.json());
app.use(cookieParser());
app.use(session({
  name: process.env.SESS_NAME,
  cookieName: 'session',
  resave: false,
  saveUninitialized: true,
  secret:SESS_SECRET,
  cookie: {
      secure: process.env.NODE_ENV === 'production' ? "true" : "auto",
      sameSite: process.env.NODE_ENV === 'production' ? "none" : "lax",
      maxAge: TWO_HOURS,

  },

}));
app.use(logger('combined'));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// app.use(passport.initialize())
// require('./middlewares/passport_middleware')

app.use('/api/v1/posts', postRouter);

app.get('*', (req, res) => res.status(200).send({ message: 'Welcome to the default API route', }));

server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });