'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookCategoryGroup',
      [
        {
          name: 'Science',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Economics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Manga',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BookCategoryGroup', null, {});
  }
};
