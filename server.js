require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const db = require('./models');
const favoritesController = require('./controllers/favoritesController');
const methodOverride = require('method-override');

// environment variables
const SECRET_SESSION = process.env.SECRET_SESSION;

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(methodOverride('_method'));

app.use(flash());            // flash middleware

app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

// add passport
require('./config/ppConfig')(app);

app.use((req, res, next) => {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// Use the isLoggedIn middleware and other routes after Passport has been initialized
const isLoggedIn = require('./middleware/isLoggedIn');

app.get('/', isLoggedIn, (req, res) => {
  res.render('index');
});

app.use('/auth', require('./controllers/auth'));

app.use('/favorites', favoritesController);

//GET ROUTES

// get all diamonds
app.get('/diamonds', isLoggedIn, async (req, res) => {
  try {
    const diamonds = await db.gemDiamond.findAll();
    res.render("diamonds", { diamonds });
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

// get all emeralds
app.get('/emeralds', isLoggedIn, async (req, res) => {
  try {
    const emeralds = await db.gemEmerald.findAll();
    res.render("emeralds", { emeralds });
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

// get all morganites
app.get('/morganites', isLoggedIn, async (req, res) => {
  try {
    const morganites = await db.gemMorganite.findAll();
    res.render("morganites", { morganites });
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

// get all rubies
app.get('/rubys', isLoggedIn, async (req, res) => {
  try {
    const rubys = await db.gemRuby.findAll();
    res.render("rubys", { rubys });
  } catch (error) {
    console.error(error);
    res.json({ message: "Data not found, please try again later" });
  }
});

// get all sapphires
app.get('/sapphires', isLoggedIn, async (req, res) => {
  try {
    const sapphires = await db.gemSapphire.findAll();
    res.render("sapphires", { sapphires });
  } catch (error) {
    res.json({ message: "Data not found, please try again later" });
  }
});

app.post('/favorites', isLoggedIn, async (req, res) => {
  try {
    const { gemId, gemType } = req.body;

    let gemForeignKey = {};
    switch (gemType) {
      case 'diamond':
        gemForeignKey.diamondId = gemId;
        break;
      case 'emerald':
        gemForeignKey.emeraldId = gemId;
        break;
      case 'ruby':
        gemForeignKey.rubyId = gemId;
        break;
      case 'morganite':
        gemForeignKey.morganiteId = gemId;
        break;
      case 'sapphire':
        gemForeignKey.sapphireId = gemId;
        break;
    }

    await db.Favorites.create({
      userId: req.user.id,
      ...gemForeignKey,
      gemType
    });
    res.redirect('/favorites');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

// Add this below /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get();
  res.render('profile', { id, name, email });
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(500).render('error', {
    message: 'Something broke!',
    error: err,
  });
});

app.get('/*', (req, res) => {
  res.render('error')
});

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
