'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SellingBook extends Model {

        static associate(models) {
            SellingBook.belongsTo(models.Book, {foreignKey: 'book_id'});
        }
    }
    SellingBook.init({
        book_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        current_price: DataTypes.INTEGER,
        quality: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'SellingBook',
    });
    return SellingBook;
};