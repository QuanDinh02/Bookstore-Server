'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Order',
            [
                {
                    id: 1,
                    date: '9/3/2023',
                    status: 'Completed',
                    address: '1234 Louis Pastreau',
                    payment: 'Cash',
                    total_price: 36000,
                    total_books: 2,
                    customer_id: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    date: '12/3/2023',
                    status: 'Canceled',
                    address: '1234 Louis Pastreau',
                    payment: 'Cash',
                    total_price: 36000,
                    total_books: 2,
                    customer_id: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 3,
                    date: '15/03/2023',
                    status: 'Processing',
                    address: '1234 Louis Pastreau',
                    payment: 'Cash',
                    total_price: 36000,
                    total_books: 2,
                    customer_id: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Order', null, {});
    }
};
