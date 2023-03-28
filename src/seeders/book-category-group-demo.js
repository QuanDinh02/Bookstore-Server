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
        },
        {
          name: 'Magazine',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Music',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Technology',
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
