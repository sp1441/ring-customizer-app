require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const db = require('./models');

// environment variables
SECRET_SESSION = process.env.SECRET_SESSION;
// console.log(">>>>>>>>>>", SECRET_SESSION);

// express_authentication git:(main) ✗ npm run dev

// > express_authentication@1.0.0 dev
// > nodemon

// [nodemon] 2.0.22
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,json
// [nodemon] starting `node server.js`
// >>>>>>>>>> alldayidreamaboutsoftwareengineering
// 🎧 You're listening to the smooth sounds of port 3000 🎧

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(flash());            // flash middleware

app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

// add passport
app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/auth', require('./controllers/auth'));

app.get('/rings', async (req, res) => {
  try {
    const rings = await db.Ring.findAll();
    res.render("rings", { rings });
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

app.get('/bands', async (req, res) => {
  try {
    const bands = await db.bands.findAll();
    res.json(bands);
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

app.get('/gems', async (req, res) => {
  try {
    const gems = await db.gems.findAll();
    res.json(gems);
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

app.get('/userRings', async (req, res) => {
  try {
    const userRings = await db.userRings.findAll();
    res.json(userRings);
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

// Add this below(?) /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get();
  res.render('profile', { id, name, email });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;