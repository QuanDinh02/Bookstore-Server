'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BookCategory_Publisher extends Model {

        static associate(models) {
            
        }
    }

    BookCategory_Publisher.init({
        bookCategory_id: DataTypes.INTEGER,
        publisher_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'BookCategory_Publisher',
    });
    return BookCategory_Publisher;
};