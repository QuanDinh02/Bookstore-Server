'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Book',
      [
        {
          id: 1,
          name: 'Everything I Geometry',
          description: 'Everything I Geometry',
          price: 10000,
          author: 1,
          category: 1,
          publisher: 1,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'How The World Realy Works',
          description: 'How The World Realy Works',
          price: 20000,
          author: 1,
          category: 1,
          publisher: 4,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          name: 'The Science of Meditation',
          description: 'The Science of Meditation',
          price: 20000,
          author: 2,
          category: 2,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: 'The Seed of Science',
          description: 'The Seed of Science',
          price: 20000,
          author: 1,
          category: 2,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'The Saphiens',
          description: 'The Saphiens',
          price: 220000,
          author: 1,
          category: 2,
          publisher: 2,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          name: 'How to avoid a climate disaster',
          description: 'How to avoid a climate disaster',
          price: 336000,
          author: 2,
          category: 2,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          name: 'How to avoid a climate disaster',
          description: 'How to avoid a climate disaster',
          price: 336000,
          author: 2,
          category: 2,
          publisher: 1,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          name: 'Brieft Answer to the Big Questions',
          description: 'Brieft Answer to the Big Questions',
          price: 329000,
          author: 3,
          category: 3,
          publisher: 2,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          name: 'The Grand Design',
          description: 'The Grand Design',
          price: 249000,
          author: 3,
          category: 3,
          publisher: 2,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          name: 'Space Visual Encyclopedia',
          description: 'Space Visual Encyclopedia',
          price: 410000,
          author: 1,
          category: 3,
          publisher: 3,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 11,
          name: 'The Astronomy Book',
          description: 'The Astronomy Book',
          price: 512000,
          author: 1,
          category: 3,
          publisher: 2,
          rate: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          name: 'The Way To Give Generously',
          description: 'The Way To Give Generously',
          price: 56000,
          author: 1,
          category: 4,
          publisher: 3,
          rate: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 13,
          name: 'What Makes Us Human?',
          description: 'What Makes Us Human?',
          price: 499000,
          author: 1,
          category: 4,
          publisher: 3,
          rate: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          name: 'The Selfish Gene',
          description: 'The Selfish Gene',
          price: 330000,
          author: 1,
          category: 4,
          publisher: 4,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          name: 'Signet Classics : The Origin of Species',
          description: 'Signet Classics : The Origin of Species',
          price: 116000,
          author: 2,
          category: 4,
          publisher: 4,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          name: 'The Future of Capitalism',
          description: 'The Future of Capitalism',
          price: 329000,
          author: 2,
          category: 4,
          publisher: 4,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 17,
          name: 'The Biology Book',
          description: 'The Biology Book',
          price: 4608000,
          author: 2,
          category: 4,
          publisher: 3,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          name: 'The Master Algorithm',
          description: 'The Master Algorithm',
          price: 232000,
          author: 4,
          category: 5,
          publisher: 4,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 19,
          name: 'Data And Computer Communications',
          description: 'Data And Computer Communications',
          price: 672000,
          author: 4,
          category: 5,
          publisher: 4,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 20,
          name: 'Hacks For Minecrafters',
          description: 'Hacks For Minecrafters',
          price: 231000,
          author: 1,
          category: 5,
          publisher: 7,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 21,
          name: 'Artificial Intelligence',
          description: 'Artificial Intelligence',
          price: 4364000,
          author: 1,
          category: 5,
          publisher: 4,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 22,
          name: 'Financial Intelligence',
          description: 'Financial Intelligence',
          price: 706000,
          author: 5,
          category: 6,
          publisher: 5,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 23,
          name: 'Reach The Top In Finance',
          description: 'Reach The Top In Finance',
          price: 643000,
          author: 1,
          category: 6,
          publisher: 7,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 24,
          name: 'Mind Your Bussiness',
          description: 'Mind Your Bussiness',
          price: 323000,
          author: 1,
          category: 6,
          publisher: 5,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 25,
          name: 'Budgeting 101',
          description: 'Budgeting 101',
          price: 313000,
          author: 6,
          category: 6,
          publisher: 5,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 26,
          name: 'How to be smart with your money',
          description: 'How to be smart with your money',
          price: 279000,
          author: 6,
          category: 6,
          publisher: 5,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 27,
          name: 'Blockchain Revolution',
          description: 'Blockchain Revolution',
          price: 299000,
          author: 1,
          category: 7,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 28,
          name: 'The Goal',
          description: 'The Goal',
          price: 210000,
          author: 1,
          category: 7,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 29,
          name: 'Good Economics for Hard Times',
          description: 'Good Economics for Hard Times',
          price: 329000,
          author: 2,
          category: 7,
          publisher: 6,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 30,
          name: 'The Economics Book',
          description: 'The Economics Book',
          price: 512000,
          author: 2,
          category: 7,
          publisher: 6,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 31,
          name: 'Secret Of Millionaire Mind',
          description: 'Secret Of Millionaire Mind',
          price: 134000,
          author: 1,
          category: 8,
          publisher: 6,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 32,
          name: 'Negotiating The Impossible',
          description: 'Negotiating The Impossible',
          price: 369000,
          author: 1,
          category: 8,
          publisher: 6,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 33,
          name: 'Start Something That Matters',
          description: 'Start Something That Matters',
          price: 359000,
          author: 2,
          category: 8,
          publisher: 6,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 34,
          name: 'Zero to One',
          description: 'Zero to One',
          price: 201000,
          author: 2,
          category: 8,
          publisher: 6,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 35,
          name: 'Marketing 5.0: Technology For Humanity',
          description: 'Marketing 5.0: Technology For Humanity',
          price: 528000,
          author: 1,
          category: 9,
          publisher: 5,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 36,
          name: 'The Upside Of Irrationality',
          description: 'The Upside Of Irrationality',
          price: 99000,
          author: 1,
          category: 9,
          publisher: 7,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 37,
          name: 'Salespeople Dont Lie',
          description: 'Salespeople Dont Lie',
          price: 362000,
          author: 1,
          category: 9,
          publisher: 7,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 38,
          name: 'When Buyers Say NO',
          description: 'When Buyers Say NO',
          price: 379000,
          author: 1,
          category: 9,
          publisher: 7,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 39,
          name: 'Fit to Compete',
          description: 'Fit to Compete',
          price: 741000,
          author: 1,
          category: 9,
          publisher: 7,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 40,
          name: 'How Food Works',
          description: 'How Food Works',
          price: 486000,
          author: 5,
          category: 10,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 41,
          name: 'The Complete Human Body',
          description: 'The Complete Human Body',
          price: 768000,
          author: 5,
          category: 10,
          publisher: 2,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 42,
          name: 'How Psychology Works',
          description: 'How Psychology Works',
          price: 488000,
          author: 7,
          category: 11,
          publisher: 7,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 43,
          name: 'Talking to Strangers',
          description: 'Talking to Strangers',
          price: 229000,
          author: 7,
          category: 11,
          publisher: 8,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 44,
          name: 'The Art Of Game Of Thrones',
          description: 'The Art Of Game Of Thrones',
          price: 1030750,
          author: 1,
          category: 12,
          publisher: 2,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 45,
          name: 'The Old Man And The Sea',
          description: 'The Old Man And The Sea',
          price: 179000,
          author: 2,
          category: 14,
          publisher: 1,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 46,
          name: 'The Little Prince',
          description: 'The Little Prince',
          price: 95000,
          author: 2,
          category: 14,
          publisher: 1,
          rate: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 47,
          name: 'As You Wish',
          description: 'As You Wish',
          price: 249000,
          author: 1,
          category: 15,
          publisher: 1,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 48,
          name: 'Superfood Breakfasts',
          description: 'Superfood Breakfasts',
          price: 140000,
          author: 8,
          category: 17,
          publisher: 8,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 49,
          name: 'Grain Brain',
          description: 'Grain Brain',
          price: 102500,
          author: 8,
          category: 17,
          publisher: 8,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 50,
          name: 'Cabin',
          description: 'Cabin',
          price: 650000,
          author: 8,
          category: 19,
          publisher: 8,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 51,
          name: 'Yes Is More',
          description: 'Yes Is More',
          price: 760000,
          author: 8,
          category: 19,
          publisher: 8,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 52,
          name: 'What is Rock and Roll',
          description: 'What is Rock and Roll',
          price: 96000,
          author: 8,
          category: 20,
          publisher: 8,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 53,
          name: 'Araki',
          description: 'Araki',
          price: 768000,
          author: 8,
          category: 21,
          publisher: 8,
          rate: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 54,
          name: 'The Perfect Gentleman',
          description: 'The Perfect Gentleman',
          price: 1020000,
          author: 8,
          category: 22,
          publisher: 8,
          rate: 5,
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
