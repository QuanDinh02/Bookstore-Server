'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('BookComments',
            [
                {
                    title: 'Very Good',
                    content: 'The content is so great that I read it many times',
                    time: '21/01/2023 21:26:35',
                    rate: 5,
                    commentor: 1,
                    book_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Good',
                    content: '',
                    time: '22/01/2023 08:06:15',
                    rate: 4,
                    commentor: 3,
                    book_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'The Best',
                    content: 'It makes me remember something in out life',
                    time: '22/01/2023 08:06:15',
                    rate: 5,
                    commentor: 2,
                    book_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
                
            ]
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('BookComments', null, {});
    }
};
