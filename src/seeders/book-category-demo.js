'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('BookCategory',
            [
                {
                    id: 1,
                    name: 'Mathematics',
                    category_group: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    name: 'Environment',
                    category_group: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 3,
                    name: 'Astronomy & Space Science',
                    category_group: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 4,
                    name: 'Human & Biology Science',
                    category_group: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 5,
                    name: 'Internet & Computer',
                    category_group: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 6,
                    name: 'Finance',
                    category_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 7,
                    name: 'Economics',
                    category_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 8,
                    name: 'Investment',
                    category_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 9,
                    name: 'Marketing - Sales',
                    category_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 10,
                    name: 'Health, Fitness & Sports',
                    category_group: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 11,
                    name: 'Psychology',
                    category_group: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 12,
                    name: 'Magazine',
                    category_group: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 13,
                    name: 'Action & Adventure',
                    category_group: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 14,
                    name: 'Classic',
                    category_group: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 15,
                    name: 'History',
                    category_group: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 16,
                    name: 'Poetry',
                    category_group: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 17,
                    name: 'Nutrition',
                    category_group: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 18,
                    name: 'Baking - Desserts',
                    category_group: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 19,
                    name: 'Architecture',
                    category_group: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 20,
                    name: 'Music',
                    category_group: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 21,
                    name: 'Photography',
                    category_group: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 22,
                    name: 'Fashion',
                    category_group: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('BookCategory', null, {});
    }
};
