const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../models');
const getFavorite = async (id, userId) => {
  return db.Favorites.findOne({
    where: { id, userId },
  });
};

// render favorites folder
router.get('/', isLoggedIn, async (req, res) => {
  try {
    const favorites = await db.Favorites.findAll({
      where: { userId: req.user.id },
      include: [
        { model: db.gemDiamond, as: 'diamond' },
        { model: db.gemEmerald, as: 'emerald' },
        { model: db.gemMorganite, as: 'morganite' },
        { model: db.gemRuby, as: 'ruby' },
        { model: db.gemSapphire, as: 'sapphire' },
      ],
    });

    res.render('favorites/index', { favorites });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

// edit a favorite
router.get('/edit/:id', isLoggedIn, async (req, res) => {
  try {
    const favorite = await db.Favorites.findOne({
      where: { id: req.params.id, userId: req.user.id },
      include: [
        { model: db.gemDiamond, as: 'diamond' },
        { model: db.gemEmerald, as: 'emerald' },
        { model: db.gemMorganite, as: 'morganite' },
        { model: db.gemRuby, as: 'ruby' },
        { model: db.gemSapphire, as: 'sapphire' }
      ]
    });

    if (!favorite) {
      return res.status(403).send('You do not have permission to edit this favorite.');
    }

    const gem = favorite.diamond || favorite.emerald || favorite.morganite || favorite.ruby || favorite.sapphire;

    res.render('favorites/edit', { favorite: { ...favorite.get(), gem } });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});


// Delete a favorite gem
router.delete('/delete/:id', isLoggedIn, async (req, res) => {
  try {
    const favorite = await db.Favorites.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!favorite) {
      return res.status(403).send('You do not have permission to delete this favorite.');
    }

    await favorite.destroy();
    res.redirect('/favorites');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

router.post('/', isLoggedIn, async (req, res) => {
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

  try {
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

// Update a favorite
router.put('/edit/:id', isLoggedIn, async (req, res) => {
  try {
    const favorite = await db.Favorites.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!favorite) {
      return res.status(403).send('You do not have permission to edit this favorite.');
    }

    favorite.comment = req.body.comment; // Update the comment based on the form input
    await favorite.save();

    res.redirect('/favorites');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

// Get route for displaying form to add comment
router.get('/add-comment/:id', isLoggedIn, async (req, res) => {
  try {
    const favorite = await getFavorite(req.params.id, req.user.id);
    if (!favorite) {
      return res.status(403).send('You do not have permission to add a comment to this favorite.');
    }
    res.render('favorites/add-comment', { favorite });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

// Post route for submitting the comment
router.post('/add-comment/:id', isLoggedIn, async (req, res) => {
  try {
    const favorite = await getFavorite(req.params.id, req.user.id);
    if (!favorite) {
      return res.status(403).send('You do not have permission to add a comment to this favorite.');
    }
    favorite.comment = req.body.comment;
    await favorite.save();
    res.redirect('/favorites');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});


// Get route for displaying form to edit comment
router.get('/edit-comment/:id', isLoggedIn, async (req, res) => {
  try {
    const favorite = await getFavorite(req.params.id, req.user.id);
    if (!favorite || !favorite.comment) {
      return res.status(403).send('You do not have permission to edit this comment.');
    }
    res.render('favorites/edit-comment', { favorite });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

// Put route for updating the comment
router.put('/edit-comment/:id', async (req, res) => {
  try {
    const favorite = await db.Favorites.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!favorite) return res.status(404).render('404');
    favorite.comment = req.body.comment;
    await favorite.save();
    res.redirect('/favorites');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error });
  }
});

// Put route for adding a comment
router.put('/add-comment/:id', async (req, res) => {
  try {
    const favorite = await db.Favorites.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (!favorite) return res.status(404).render('404');
    favorite.comment = req.body.comment;
    await favorite.save();
    res.redirect('/favorites');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error });
  }
});

module.exports = router;
