'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Author_BookCategory',
      [
        {
          author_id: 1,
          bookCategory_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_id: 2,
          bookCategory_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_id: 2,
          bookCategory_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_id: 1,
          bookCategory_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          author_id: 3,
          bookCategory_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Author_BookCategory', null, {});
  }
};
