'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('OrderDetail',
            [
                {
                    order_id: 1,
                    book_id: 2,
                    book_amount: 1,
                    price: 18000,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    order_id: 1,
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
