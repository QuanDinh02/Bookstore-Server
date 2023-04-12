'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Publisher extends Model {

        static associate(models) {
            Publisher.hasMany(models.Book, { foreignKey: 'publisher' });
        }
    }
    Publisher.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        phone: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Publisher',
    });
    return Publisher;
};