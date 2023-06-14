module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Favorites', // name of table
      'name', // name of new column
      {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Favorites', 'name');
  }
};
