'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BookComments extends Model {

        static associate(models) {
            BookComments.belongsTo(models.User, {foreignKey: 'commentor'});
        }
    }

    BookComments.init({
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        time: DataTypes.STRING,
        rate: DataTypes.INTEGER,
        commentor: DataTypes.INTEGER,
        book_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'BookComments',
    });
    return BookComments;
};