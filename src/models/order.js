'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {

        static associate(models) {
            Order.belongsTo(models.User, {foreignKey: 'customer_id'});
            Order.hasMany(models.OrderDetail, {foreignKey: 'order_id'});
        }
    }

    Order.init({
        date: DataTypes.STRING,
        status: DataTypes.STRING,
        address: DataTypes.STRING,
        payment: DataTypes.STRING,
        total_price: DataTypes.INTEGER,
        total_books: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};