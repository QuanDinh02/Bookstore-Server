'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {

        static associate(models) {
            OrderDetail.belongsTo(models.Order, {foreignKey: 'order_id'});
            OrderDetail.belongsTo(models.Book, {foreignKey: 'book_id'});
        }
    }

    OrderDetail.init({
        order_id: DataTypes.INTEGER,
        book_id: DataTypes.INTEGER,
        book_amount: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'OrderDetail',
    });
    return OrderDetail;
};