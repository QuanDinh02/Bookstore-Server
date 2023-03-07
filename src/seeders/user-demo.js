'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('User',
            [
                {
                    id: 1,
                    username: 'John Cena',
                    email: 'johnostega95@gmail.com',
                    phone: '090123123',
                    password: '123123',
                    dob: '12/03/1995',
                    gender: 'Man',
                    image: '',
                    point: 0,
                    user_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    username: 'Bobb Leo',
                    email: 'boobleo94@gmail.com',
                    phone: '080123133',
                    password: '123456',
                    dob: '22/03/1994',
                    gender: 'Man',
                    image: '',
                    point: 0,
                    user_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 3,
                    username: 'Donald Lily',
                    email: 'lily27@gmail.com',
                    phone: '090008113',
                    password: 'mycute',
                    dob: '09/03/2000',
                    gender: 'Woman',
                    image: '',
                    point: 0,
                    user_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User', null, {});
    }
};
