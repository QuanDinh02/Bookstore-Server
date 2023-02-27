'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('SellingBook',
            [
                {
                    book_id: 1,
                    quantity: 100,
                    current_price: 8000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 2,
                    quantity: 50,
                    current_price: 18000,
                    quality: 'A',
                    status: 'Out of order',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('SellingBook', null, {});
    }
};