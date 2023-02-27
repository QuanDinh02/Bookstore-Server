'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('BookCategory',
            [
                {
                    name: 'Math',
                    category_group: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Physics',
                    category_group: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Comics',
                    category_group: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Finance and Currency',
                    category_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('BookCategory', null, {});
    }
};
