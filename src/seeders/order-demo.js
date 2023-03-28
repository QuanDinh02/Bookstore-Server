'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Order',
            [
                {
                    date: '12/03/2023',
                    status: 'Processing',
                    address: '1234 Louis Pastreau',
                    payment: 'Cash',
                    total_price: 36000,
                    total_books: 2,
                    customer_id: 1,
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
