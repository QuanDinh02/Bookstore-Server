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
        fullname: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        password: DataTypes.STRING,
        dob: DataTypes.STRING,
        gender: DataTypes.STRING,
        image: DataTypes.TEXT('medium'),
        facebook_url: DataTypes.STRING,
        twitter_url: DataTypes.STRING,
        point: DataTypes.INTEGER,
        user_group: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};