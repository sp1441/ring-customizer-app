exports.edit = async (req, res) => {
  const user = await User.findOne({ where: { id: req.session.userId } });
  res.render('profile-edit', { user });
};

exports.update = async (req, res) => {
  const { aboutMe, email, website } = req.body;

  await User.update({ aboutMe, email, website }, {
    where: {
      id: req.session.userId
    }
  });

  res.redirect('/profile');
};
