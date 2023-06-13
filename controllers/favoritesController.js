const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../models');

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
        { model: db.gemSapphire, as: 'sapphire' },
      ],
    });

    if (!favorite) {
      return res.status(403).send('You do not have permission to edit this favorite.');
    }

    res.render('favorites/edit', { favorite });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

// Delete a favorite
router.post('/delete/:id', isLoggedIn, async (req, res) => {
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

module.exports = router;
