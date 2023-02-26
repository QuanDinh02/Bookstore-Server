'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BookCategoryGroup extends Model {

        static associate(models) {
            BookCategoryGroup.hasMany(models.BookCategory, { foreignKey: 'category_group' });
        }
    }
    
    BookCategoryGroup.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'BookCategoryGroup',
    });
    return BookCategoryGroup;
};