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
        description: DataTypes.TEXT('medium'),
        image: DataTypes.TEXT('medium')
    }, {
        sequelize,
        modelName: 'Author',
    });
    return Author;
};