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
const userController = require('./controllers/userController');


// environment variables
const SECRET_SESSION = process.env.SECRET_SESSION;

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use((req, res, next) => {
  if (req.body) {
    for (let key in req.body) {
      if (typeof req.body[key] === 'string') {
        req.body[key] = req.body[key].trim();
      }
    }
  }

  next();
});

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
  const user = req.user;

  user.reload()  // Reload user data from the database
    .then(user => {
      res.render('profile', { user: user }); // Pass user data to the view
    })
    .catch(err => {
      console.log(err);
      res.redirect('/');
    });
});



// routes for editing and updating user profile
app.get('/profile/edit', isLoggedIn, (req, res) => {
  const user = req.user;
  res.render('edit', { user: user });
});


app.post('/profile', isLoggedIn, (req, res) => {
  const user = req.user; // Get the current user from the request

  user.update({
    aboutMe: req.body.aboutMe,
    website: req.body.website
  })
    .then(() => {
      res.redirect('/profile');
    })
    .catch(err => {
      console.log(err);
      req.flash('error', 'An error occurred while updating the profile');
      res.redirect('/profile/edit');
    });
});

app.delete('/profile/delete/:field', isLoggedIn, async (req, res) => {
  try {
    const { field } = req.params;
    const user = await db.user.findOne({
      where: {
        id: req.user.id
      }
    });

    // don't delete email field if one shows up
    if (field === 'email') {
      res.redirect('/profile');
    } else {
      // delete the specified field
      user[field] = null;
      await user.save();
      res.redirect('/profile');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting user information");
  }
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
