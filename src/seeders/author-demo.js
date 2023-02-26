'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Author',
      [
        {
          name: 'Oda',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Robert',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Author', null, {});
  }
};
