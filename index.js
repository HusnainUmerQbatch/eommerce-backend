require("dotenv").config();
const express = require("express");
const User = require('./src/models/user')
const app = express();
// import {generateToken} from './src/utlis/generatetoken'
const cookieSession = require('cookie-session')
const cors = require("cors");
// const session = require("express-session"); // Corrected import
// const connectDB = require("./config/db");

// require('./src/passport-setup')

// Importing authentication middleware
// const { passport } = require("../server/src/middleware/passport");

// const { auth, product, order, stripe } = require("./src/routes");

// // DB connection
// connectDB();

// app.use(session({
//   secret: "your-secret-key",
//   resave: false,
//   saveUninitialized: true,
// }));

// Middlewares
app.use(express.json());
app.use(cors());

// // Setting up cookies
// app.use(cookieSession({
//   name: 'tuto-session',
//   keys: ['key1', 'key2']
// }));

// Passport Initialized
app.use(passport.initialize());

// Setting Up Session
app.use(passport.session());

// Routes

app.get('/',  (req, res) => {
 console.log('WELCOME ')
});

// ... (other routes)

// Server
const Port = process.env.PORT || 5000;
const server = app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});

module.exports = server;
