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
                {
                    book_id: 3,
                    quantity: 20,
                    current_price: 16000,
                    quality: 'B',
                    status: 'Out of order',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 4,
                    quantity: 50,
                    current_price: 18000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 5,
                    quantity: 20,
                    current_price: 185000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 6,
                    quantity: 100,
                    current_price: 310000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 7,
                    quantity: 20,
                    current_price: 310000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 8,
                    quantity: 50,
                    current_price: 305000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 9,
                    quantity: 20,
                    current_price: 249000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 10,
                    quantity: 50,
                    current_price: 385000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 11,
                    quantity: 50,
                    current_price: 499000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 12,
                    quantity: 50,
                    current_price: 45000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 13,
                    quantity: 50,
                    current_price: 499000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 14,
                    quantity: 50,
                    current_price: 330000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 15,
                    quantity: 50,
                    current_price: 110000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 16,
                    quantity: 50,
                    current_price: 299000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 17,
                    quantity: 50,
                    current_price: 4500000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 18,
                    quantity: 50,
                    current_price: 220000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 19,
                    quantity: 50,
                    current_price: 660000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 20,
                    quantity: 50,
                    current_price: 219000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 21,
                    quantity: 50,
                    current_price: 4364000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 22,
                    quantity: 50,
                    current_price: 689000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 23,
                    quantity: 50,
                    current_price: 633000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 24,
                    quantity: 50,
                    current_price: 323000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 25,
                    quantity: 50,
                    current_price: 313000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 26,
                    quantity: 50,
                    current_price: 251000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 27,
                    quantity: 50,
                    current_price: 279000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 28,
                    quantity: 50,
                    current_price: 210000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 29,
                    quantity: 50,
                    current_price: 309000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 30,
                    quantity: 50,
                    current_price: 512000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 31,
                    quantity: 50,
                    current_price: 134000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 32,
                    quantity: 50,
                    current_price: 359000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 33,
                    quantity: 50,
                    current_price: 359000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 34,
                    quantity: 50,
                    current_price: 201000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 35,
                    quantity: 50,
                    current_price: 499000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 36,
                    quantity: 50,
                    current_price: 99000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 37,
                    quantity: 50,
                    current_price: 362000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 38,
                    quantity: 50,
                    current_price: 350000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 39,
                    quantity: 50,
                    current_price: 711000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 40,
                    quantity: 50,
                    current_price: 486000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 41,
                    quantity: 50,
                    current_price: 750000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 42,
                    quantity: 50,
                    current_price: 488000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 43,
                    quantity: 50,
                    current_price: 229000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 44,
                    quantity: 50,
                    current_price: 1030750,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 45,
                    quantity: 50,
                    current_price: 159000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 46,
                    quantity: 50,
                    current_price: 95000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 47,
                    quantity: 50,
                    current_price: 229000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 48,
                    quantity: 50,
                    current_price: 140000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 49,
                    quantity: 50,
                    current_price: 102500,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 50,
                    quantity: 50,
                    current_price: 650000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 51,
                    quantity: 50,
                    current_price: 760000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 52,
                    quantity: 50,
                    current_price: 96000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 53,
                    quantity: 50,
                    current_price: 768000,
                    quality: 'A',
                    status: 'On sale',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    book_id: 54,
                    quantity: 50,
                    current_price: 1020000,
                    quality: 'A',
                    status: 'On sale',
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
