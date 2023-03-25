import db from '../models/index';

const getBookCategoryWithPagination = async (limit, page) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.BookCategory.findAndCountAll({
                include: {
                    model: db.BookCategoryGroup, attributes: ['id', 'name']
                },
                attributes: ['id', 'name'],
                order: [
                    ['id', 'DESC']
                ],
                limit: limit,
                offset: offSet,
                nest: true,
                raw: true
            });

            let totalPages = Math.ceil(count / limit);

            let buildData = {
                total_pages: totalPages,
                book_categories: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get all book category successfully'
            }
        }
        else {
            const result = await db.BookCategory.findAll({
                attributes: ['id', 'name'],
                order: [
                    ['name', 'ASC']
                ],
                raw: true
            });

            return {
                EC: 0,
                DT: result,
                EM: 'get all book category successfully'
            }
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

const postCreateNewBookCategory = async (data) => {
    try {
        let { name, category_group } = data;

        let bookCategories = await db.BookCategory.findAll({
            where: {
                category_group: category_group
            },
            attributes: ['id', 'name'],
            raw: true
        })

        let check = bookCategories.some(item => item.name === name);

        if (!check) {
            const result = await db.BookCategory.create({
                name: name,
                category_group: +category_group
            });
            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create book category successfully'
                }
            }

        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'book category has already existed !'
            }
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

const putUpdateBookCategory = async (data) => {
    try {
        let { id, name, category_group } = data;

        let result = await db.BookCategory.update({
            name: name,
            category_group: +category_group
        }, {
            where: {
                id: +id
            }
        })

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'update book category successfully'
            }

        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'update book category failed !'
            }
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

const deleteBookCategory = async (bookCategory_id) => {
    try {

        let check = await db.BookCategory.findOne({
            where: {
                id: bookCategory_id
            },
        });

        if (check) {
            await db.BookCategory.destroy({
                where: {
                    id: bookCategory_id
                },
            });
            return {
                EC: 0,
                DT: '',
                EM: 'delete book category successfully'
            }
        } else {
            return {
                EC: 1,
                DT: '',
                EM: `book category doesn't exist !`
            }
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

module.exports = {
    getBookCategoryWithPagination, postCreateNewBookCategory,
    putUpdateBookCategory, deleteBookCategory
}
