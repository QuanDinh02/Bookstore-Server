'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Author',
      [
        {
          id: 1,
          name: 'Many Authors',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Penguin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Stephen Hawking',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Allain',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'Ingram',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: 'Adam',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: 'DK',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Author', null, {});
  }
};
