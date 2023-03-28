'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserAddress extends Model {

        static associate(models) {
            UserAddress.belongsTo(models.User, {foreignKey: 'user_id'});
        }
    }

    UserAddress.init({
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        default: DataTypes.STRING,
        user_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'UserAddress',
    });
    return UserAddress;
};