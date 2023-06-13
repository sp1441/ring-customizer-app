'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    userId: DataTypes.INTEGER,
    diamondId: DataTypes.INTEGER,
    emeraldId: DataTypes.INTEGER,
    morganiteId: DataTypes.INTEGER,
    rubyId: DataTypes.INTEGER,
    sapphireId: DataTypes.INTEGER
  }, {});

  Favorites.associate = function (models) {
    Favorites.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Favorites.belongsTo(models.gemDiamond, {
      foreignKey: 'diamondId',
      constraints: false,
      as: 'diamond'
    });
    Favorites.belongsTo(models.gemEmerald, {
      foreignKey: 'emeraldId',
      constraints: false,
      as: 'emerald'
    });
    Favorites.belongsTo(models.gemMorganite, {
      foreignKey: 'morganiteId',
      constraints: false,
      as: 'morganite'
    });
    Favorites.belongsTo(models.gemRuby, {
      foreignKey: 'rubyId',
      constraints: false,
      as: 'ruby'
    });
    Favorites.belongsTo(models.gemSapphire, {
      foreignKey: 'sapphireId',
      constraints: false,
      as: 'sapphire'
    });

  };

  return Favorites;
};
