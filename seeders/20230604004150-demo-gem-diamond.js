'use strict';
//this file is fully seeded!!
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gemDiamonds', [{
      name: 'Round Brilliant Cut',
      image: 'https://i.imgur.com/Z614wnK.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Princess Cut',
      image: 'https://i.imgur.com/7vkVytI.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Emerald Cut',
      image: 'https://i.imgur.com/PrCwIdP.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cushion Cut',
      image: 'https://i.imgur.com/tIWNEJd.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Oval Cut',
      image: 'https://i.imgur.com/9M6yTrQ.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Radiant Cut',
      image: 'https://i.imgur.com/ePi2LCF.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Asscher Cut',
      image: 'https://i.imgur.com/OapHs5D.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pear Cut',
      image: 'https://i.imgur.com/vFy52zd.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heart Cut',
      image: 'https://i.imgur.com/DbTPkN2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Marquise Cut',
      image: 'https://i.imgur.com/6kcnwH4.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gemDiamonds', null, {});
  }
};
