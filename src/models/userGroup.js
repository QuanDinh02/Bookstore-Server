'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserGroup extends Model {

        static associate(models) {
            UserGroup.hasMany(models.User, { foreignKey: 'user_group' });
        }
    }

    UserGroup.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'UserGroup',
    });
    return UserGroup;
};