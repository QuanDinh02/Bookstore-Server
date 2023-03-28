'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookCategory_Publisher',
      [
        {
          bookCategory_id: 1,
          publisher_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          bookCategory_id: 1,
          publisher_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          bookCategory_id: 2,
          publisher_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          bookCategory_id: 3,
          publisher_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          bookCategory_id: 3,
          publisher_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BookCategory_Publisher', null, {});
  }
};
