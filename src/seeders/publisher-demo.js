'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Publisher',
      [
        {
          name: 'New York Daily News',
          description: 'New York',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Guardian News & Media Ltd',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Japan News',
          phone: '0901874662',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pearson',
          description: 'UK',
          phone: '0901357668',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Reuters',
          description: 'The United State of America',
          phone: '33333',
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
