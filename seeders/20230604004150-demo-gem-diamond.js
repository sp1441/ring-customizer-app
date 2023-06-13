'use strict';
//this file is fully seeded!!
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gemDiamonds', [{
      name: 'Round Brilliant Cut',
      image: 'https://imgur.com/a/YOxyRkh',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Princess Cut',
      image: 'https://imgur.com/a/UONIHi4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Emerald Cut',
      image: 'https://imgur.com/a/8DZJEgb',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cushion Cut',
      image: 'https://imgur.com/a/oRwjJjt',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Oval Cut',
      image: 'https://imgur.com/a/MHDWzDA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Radiant Cut',
      image: 'https://imgur.com/a/su3WyXz',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Asscher Cut',
      image: 'https://imgur.com/a/5Emp4bY',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pear Cut',
      image: 'https://imgur.com/a/y1TkcFj',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heart Cut',
      image: 'https://imgur.com/a/CT9npE4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Marquise Cut',
      image: 'https://imgur.com/a/PeRkfJ8',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gemDiamonds', null, {});
  }
};
