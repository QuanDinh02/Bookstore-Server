'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('BookCategory_Publisher', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bookCategory_id: {
                type: Sequelize.INTEGER
            },
            publisher_id: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('BookCategory_Publisher');
    }
};