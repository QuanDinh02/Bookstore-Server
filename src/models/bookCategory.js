'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BookCategory extends Model {

        static associate(models) {
            BookCategory.hasMany(models.Book, { foreignKey: 'category' });
            BookCategory.belongsTo(models.BookCategoryGroup, {foreignKey: 'category_group'});
        }
    }

    BookCategory.init({
        name: DataTypes.STRING,
        category_group: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'BookCategory',
    });
    return BookCategory;
};