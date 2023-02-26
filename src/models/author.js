'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Author extends Model {

        static associate(models) {
            Author.hasMany(models.Book, { foreignKey: 'author' });
        }
    }
    Author.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Author',
    });
    return Author;
};