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
          rate: 5,
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
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Naruto',
          description: 'The Ninja World',
          price: 20000,
          author: 1,
          category: 3,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Eagle',
          description: 'The Animal World',
          price: 22000,
          author: 1,
          category: 3,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Yamamoto',
          description: 'The best chapter in Onepiece fighting at Wano Arc',
          price: 30000,
          author: 3,
          category: 3,
          publisher: 3,
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
