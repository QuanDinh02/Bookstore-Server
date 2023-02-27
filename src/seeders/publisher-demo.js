'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Publisher',
      [
        {
          name: 'New York Daily News',
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
