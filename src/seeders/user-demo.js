'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('User',
            [
                {
                    id: 1,
                    fullname: 'John Cena',
                    username: 'J.Cena',
                    email: 'johnostega95@gmail.com',
                    phone: '090123123',
                    address: '1203 Louis Pateraur',
                    password: '123123',
                    dob: '12/03/1995',
                    gender: 'Man',
                    image: '',
                    facebook_url: 'Cena@facebook.com',
                    twitter_url: 'Cena@twitter.com',
                    point: 0,
                    user_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    fullname: 'Bobb Leo',
                    username: 'B.Leo',
                    email: 'boobleo94@gmail.com',
                    phone: '080123133',
                    address: '1201 Louis Pateraur',
                    password: '123456',
                    dob: '22/03/1994',
                    gender: 'Man',
                    image: '',
                    facebook_url: 'Leo@facebook.com',
                    twitter_url: 'Leo@twitter.com',
                    point: 0,
                    user_group: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 3,
                    fullname: 'Donald Lily',
                    username: 'D.Lily',
                    email: 'lily27@gmail.com',
                    phone: '090008113',
                    address: '1202 Louis Pateraur',
                    password: 'mycute',
                    dob: '09/03/2000',
                    gender: 'Woman',
                    image: '',
                    facebook_url: 'Lily@facebook.com',
                    twitter_url: 'Lily@twitter.com',
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
