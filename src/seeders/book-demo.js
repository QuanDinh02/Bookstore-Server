'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Book',
      [
        {
          name: 'The Newton Laws',
          description: '3 laws of Newton',
          price: 10000,
          author: 2,
          category: 2,
          publisher: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'One piece',
          description: 'Pirates vs Marines',
          price: 20000,
          author: 1,
          category: 3,
          publisher: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Book', null, {});
  }
};
