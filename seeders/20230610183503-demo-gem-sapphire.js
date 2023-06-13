'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gemSapphires', [{
      name: 'Round Brilliant Cut',
      image: 'https://i.imgur.com/v0beESw.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Princess Cut',
      image: 'https://i.imgur.com/hTNfVN9.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Emerald Cut',
      image: 'https://i.imgur.com/Oda5haB.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cushion Cut', //upscaled here
      image: 'https://i.imgur.com/evPyMMF.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Oval Cut',
      image: 'https://i.imgur.com/Ucix9hE.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Asscher Cut',
      image: 'https://i.imgur.com/nS3SsvM.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pear Cut',
      image: 'https://i.imgur.com/TNMMaIc.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heart Cut',
      image: 'https://i.imgur.com/WAm9KcR.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Marquise Cut',
      image: 'https://i.imgur.com/fq1ghKp.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gemSapphires', null, {});
  }
};
