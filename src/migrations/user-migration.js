'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('User', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fullname: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            dob: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.TEXT('medium')
            },
            facebook_url: {
                type: Sequelize.STRING
            },
            twitter_url: {
                type: Sequelize.STRING
            },
            point: {
                type: Sequelize.INTEGER
            },
            user_group: {
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
        await queryInterface.dropTable('User');
    }
};