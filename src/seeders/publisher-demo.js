'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Publisher',
      [
        {
          id: 1,
          name: 'Alphabooks',
          description: 'Alphabooks',
          phone: '0901874662',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Usborne',
          description: 'Usborne',
          phone: '0901874663',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Brown Watson',
          description: 'Brown Watson',
          phone: '0901874664',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Pearson',
          description: 'UK',
          phone: '0901357668',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'The Reuters',
          description: 'USA',
          phone: '305059593',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: 'Parragone',
          description: 'Parragone',
          phone: '32124124',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: 'Bloomsbury',
          description: 'Bloomsbury',
          phone: '32124124',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name: 'DK',
          description: 'DK',
          phone: '32124124',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Publisher', null, {});
  }
};
