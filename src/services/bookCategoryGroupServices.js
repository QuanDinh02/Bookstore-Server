import db from '../models/index';
const { Op } = require("sequelize");

const getAllGroup = async () => {

    try {
        const book_categories_group = await db.BookCategoryGroup.findAll({
            attributes: ['id'],
            raw: true
        });

        let book_group_arr = book_categories_group.map(item => item.id);

        let result = book_group_arr.map(async (item) => {

            let book_categories = await db.BookCategory.findAll({
                attributes: ['id', 'name'],
                where: {
                    category_group: item
                },
                raw: true
            })

            let book_categories_arr = book_categories.map(item => +item.id);

            const authors = await db.Author.findAll({
                attributes: ['id', 'name'],
                nest: true,
                group: ['id', 'name'],
                include: {
                    model: db.BookCategory,
                    attributes: ['id', 'name'],
                    where: {
                        id: {
                            [Op.in]: book_categories_arr
                        }
                    },
                    through: { attributes: [] }
                },
                raw: true
            });

            let _authors = authors.map(item => {
                return {
                    id: item.id,
                    name: item.name
                }
            })

            const publishers = await db.Publisher.findAll({
                attributes: ['id', 'name'],
                nest: true,
                group: ['id', 'name'],
                include: {
                    model: db.BookCategory,
                    attributes: ['id', 'name'],
                    where: {
                        id: {
                            [Op.in]: book_categories_arr
                        }
                    },
                    through: { attributes: [] }
                },
                raw: true
            });

            let _publishers = publishers.map(item => {
                return {
                    id: item.id,
                    name: item.name
                }
            })

            let buildData = {
                group_id: item,
                book_categories: book_categories,
                Authors: _authors,
                Publishers: _publishers
            }

            return buildData;

        })

        const res = await Promise.all(result);
        return {
            EC: 0,
            DT: res,
            EM: 'get all book category group successfully'
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}
module.exports = { getAllGroup }