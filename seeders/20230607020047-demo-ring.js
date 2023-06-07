'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rings', [{
      setting: 'Prong',
      image: 'https://plus.unsplash.com/premium_photo-1679826780124-1dfac5eb3085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      setting: 'Bezel',
      image: 'https://images.unsplash.com/photo-1574102384320-f0ae72300c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      setting: 'Tension',
      image: 'https://images.unsplash.com/photo-1594213648713-78ce051bbeac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      setting: 'Channel',
      image: 'https://images.unsplash.com/photo-1531208853003-c1ec1b8a81d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1233&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rings', null, {});
  }
};
