'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('gemEmeralds', [{
      name: 'Round Brilliant Cut',
      image: 'https://i.imgur.com/Uyb2j2L.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Princess Cut',
      image: 'https://i.imgur.com/ZMwdReM.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Emerald Cut',
      image: 'https://i.imgur.com/BsGkMKm.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cushion Cut',
      image: 'https://i.imgur.com/yuIwBF9.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Oval Cut',
      image: 'https://i.imgur.com/MHC3FK5.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Asscher Cut',
      image: 'https://i.imgur.com/m24BjW6.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pear Cut',
      image: 'https://i.imgur.com/RSxhtqi.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Heart Cut',
      image: 'https://i.imgur.com/LO6w1z6.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Marquise Cut',
      image: 'https://i.imgur.com/F4oHfGB.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gemEmeralds', null, {});
  }
};
