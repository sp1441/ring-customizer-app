'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gemEmeralds', [{
      name: 'Round Brilliant Cut',
      image: 'https://imgur.com/a/X7urAVf',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Princess Cut',
      image: 'https://imgur.com/a/FQhFOW6',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Emerald Cut',
      image: 'https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cushion Cut',
      image: 'https://imgur.com/a/8kZ1N3K',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Oval Cut',
      image: 'https://imgur.com/a/OSr8fQH',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Asscher Cut',
      image: 'https://imgur.com/a/aul4fVc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pear Cut',
      image: 'https://imgur.com/a/r0tMJ5Z',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heart Cut',
      image: 'https://imgur.com/a/j6iFs56',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Marquise Cut',
      image: 'https://images.unsplash.com/photo-1618763604327-86ab15cd7b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gemEmeralds', null, {});
  }
};
