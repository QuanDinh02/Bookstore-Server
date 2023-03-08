'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Book', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT('medium')
            },
            price: {
                type: Sequelize.INTEGER
            },
            language: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.STRING
            },
            pages: {
                type: Sequelize.STRING
            },
            volume: {
                type: Sequelize.STRING
            },
            format: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.TEXT('medium')
            },
            rate: {
                type: Sequelize.INTEGER
            },
            publishingDay: {
                type: Sequelize.STRING
            },
            publishingCompany: {
                type: Sequelize.STRING
            },
            productCode: {
                type: Sequelize.STRING
            },
            translator: {
                type: Sequelize.STRING
            },
            publisher: {
                type: Sequelize.INTEGER
            },
            author: {
                type: Sequelize.INTEGER
            },
            category: {
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
        await queryInterface.dropTable('Book');
    }
};