'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('UserAddress',
            [
                {
                    id: 1,
                    name: 'Joe Gek',
                    phone: '090023123',
                    address: '1203 Louis Pateraur',
                    default: 'TRUE',
                    user_id: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    name: 'Bill Jennie',
                    phone: '083073223',
                    address: '65/23 st.Morica',
                    default: 'FALSE',
                    user_id: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('UserAddress', null, {});
    }
};
