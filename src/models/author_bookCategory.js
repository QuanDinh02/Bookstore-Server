'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Author_BookCategory extends Model {

        static associate(models) {
            
        }
    }

    Author_BookCategory.init({
        author_id: DataTypes.INTEGER,
        bookCategory_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Author_BookCategory',
    });
    return Author_BookCategory;
};