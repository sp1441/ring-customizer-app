'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bands', [{
      name: 'White Gold',
      image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Rose Gold',
      image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Yellow Gold',
      image: 'https://images.unsplash.com/photo-1607513746994-51f730a44832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Platinum',
      image: 'https://images.unsplash.com/photo-1550852826-5369a2d5e585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Silver',
      image: 'https://images.unsplash.com/photo-1594255897691-9d1edad1ecfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bands', null, {});
  }
};
