'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BookCategoryGroup',
      [
        {
          id: 1,
          name: 'Science-Technology',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Business & Economics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'Reference',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'Magazines',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'Literature',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: 'Cook Books',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: 'Art & Photography',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BookCategoryGroup', null, {});
  }
};
