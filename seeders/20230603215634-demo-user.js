'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: "John Doe",
      email: 'johndoe@example.com',
      password: '111111',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Jane Doe",
      email: 'jane.doe@example.com',
      password: '654321',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }

};
