'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('OrderDetail',
            [
                {
                    id: 1,
                    order_id: 1,
                    book_id: 4,
                    book_amount: 2,
                    price: 36000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    order_id: 2,
                    book_id: 2,
                    book_amount: 2,
                    price: 36000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 3,
                    order_id: 3,
                    book_id: 2,
                    book_amount: 1,
                    price: 18000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 4,
                    order_id: 3,
                    book_id: 4,
                    book_amount: 1,
                    price: 18000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Order', null, {});
    }
};
