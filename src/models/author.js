'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Author extends Model {

        static associate(models) {
            Author.hasMany(models.Book, { foreignKey: 'author' });
            Author.belongsToMany(models.BookCategory, { through: 'Author_BookCategory',foreignKey: 'author_id' });
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