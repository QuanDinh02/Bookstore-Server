'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {
            User.belongsTo(models.UserGroup, {foreignKey: 'user_group'});
            User.hasMany(models.BookComments, {foreignKey: 'commentor'});
            User.hasMany(models.Order, {foreignKey: 'customer_id'});
            User.hasMany(models.UserAddress, {foreignKey: 'user_id'});
        }
    }

    User.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        dob: DataTypes.STRING,
        gender: DataTypes.STRING,
        image: DataTypes.TEXT('medium'),
        point: DataTypes.INTEGER,
        user_group: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};