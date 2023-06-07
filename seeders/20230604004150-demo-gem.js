'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Gems', [{
      name: 'Round Brilliant Cut',
      image: 'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Princess Cut',
      image: 'https://images.unsplash.com/photo-1545828751-0a3b3a1da949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=787&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Emerald Cut',
      image: 'https://images.unsplash.com/photo-1600119612651-0db31b3a7baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cushion Cut',
      image: 'https://images.unsplash.com/photo-1589361558560-58fd95e47b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Oval Cut',
      image: 'https://images.unsplash.com/photo-1524906551559-1351548fa78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Radiant Cut',
      image: 'https://images.unsplash.com/photo-1568672548621-43000a4ecc87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Asscher Cut',
      image: 'https://images.unsplash.com/photo-1534099220662-ae626ea5da74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pear Cut',
      image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heart Cut',
      image: 'https://images.unsplash.com/photo-1571172964533-d2d13d88ce7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
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
    await queryInterface.bulkDelete('Gems', null, {});
  }
};
