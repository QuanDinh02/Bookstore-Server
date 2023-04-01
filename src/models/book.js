'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {

        static associate(models) {
            Book.belongsTo(models.Author, {foreignKey: 'author'});
            Book.belongsTo(models.BookCategory, {foreignKey: 'category'});
            Book.belongsTo(models.Publisher, {foreignKey: 'publisher'});
            Book.hasOne(models.SellingBook, {foreignKey: 'book_id'});
            Book.belongsToMany(models.User, { through: 'BookComments',foreignKey: 'book_id' });
            Book.hasMany(models.OrderDetail, { foreignKey: 'book_id' });
        }
    }

    Book.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT('medium'),
        price: DataTypes.INTEGER,
        language: DataTypes.STRING,
        size: DataTypes.STRING,
        pages: DataTypes.STRING,
        volume: DataTypes.STRING,
        format: DataTypes.STRING,
        image: DataTypes.TEXT('medium'),
        rate: DataTypes.INTEGER,
        publishingDay: DataTypes.STRING,
        publishingCompany: DataTypes.STRING,
        productCode: DataTypes.STRING,
        translator: DataTypes.STRING,
        publisher: DataTypes.INTEGER,
        author: DataTypes.INTEGER,
        category: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Book',
    });
    return Book;
};