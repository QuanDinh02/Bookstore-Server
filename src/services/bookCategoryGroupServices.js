import db from '../models/index';
const { Op } = require("sequelize");
import _ from 'lodash';

const getAllGroup = async () => {

    try {
        const book_categories_group = await db.BookCategoryGroup.findAll({
            attributes: ['id', 'name'],
            raw: true
        });

        let result = book_categories_group.map(async (item) => {

            let book_categories = await db.BookCategory.findAll({
                attributes: ['id', 'name'],
                where: {
                    category_group: item.id
                },
                raw: true
            })

            let book_categories_arr = book_categories.map(item => +item.id);

            let books = await db.Book.findAll({
                where: {
                    category: {
                        [Op.in]: book_categories_arr
                    }
                },
                attributes: ['author', 'publisher'],
                raw: true
            });

            let author_id_arr = books.map(a => {
                return a.author;
            });

            let publisher_id_arr = books.map(a => {
                return a.publisher;
            });

            author_id_arr = _.uniq(author_id_arr);
            publisher_id_arr = _.uniq(publisher_id_arr);

            const authors = await db.Author.findAll({
                attributes: ['id', 'name'],
                nest: true,
                group: ['id', 'name'],
                where: {
                    id: {
                        [Op.in]: author_id_arr
                    }
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
                where: {
                    id: {
                        [Op.in]: publisher_id_arr
                    }
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
                group_id: item.id,
                group_name: item.name,
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

const getAGroup = async (group_id) => {

    try {
        const bookGroup = await db.BookCategoryGroup.findOne({
            where: {
                id: group_id
            },
            attributes: ['id', 'name'],
            raw: true
        });


        let book_categories = await db.BookCategory.findAll({
            attributes: ['id', 'name'],
            where: {
                category_group: group_id
            },
            raw: true
        })

        let book_categories_arr = book_categories.map(item => +item.id);

        let books = await db.Book.findAll({
            where: {
                category: {
                    [Op.in]: book_categories_arr
                }
            },
            attributes: ['author', 'publisher'],
            raw: true
        });

        let author_id_arr = books.map(a => {
            return a.author;
        });

        let publisher_id_arr = books.map(a => {
            return a.publisher;
        });

        author_id_arr = _.uniq(author_id_arr);
        publisher_id_arr = _.uniq(publisher_id_arr);

        const authors = await db.Author.findAll({
            attributes: ['id', 'name'],
            nest: true,
            group: ['id', 'name'],
            where: {
                id: {
                    [Op.in]: author_id_arr
                }
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
            where: {
                id: {
                    [Op.in]: publisher_id_arr
                }
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
            group_id: bookGroup.id,
            group_name: bookGroup.name,
            book_categories: book_categories,
            Authors: _authors,
            Publishers: _publishers
        }

        return {
            EC: 0,
            DT: buildData,
            EM: 'get a book category group successfully'
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

const getCategoryGroupWithPagination = async (limit, page) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.BookCategoryGroup.findAndCountAll({
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
                category_groups: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get all book category group successfully'
            }
        } else {
            const result = await db.BookCategoryGroup.findAll({
                attributes: ['id', 'name'],
                raw: true
            });

            return {
                EC: 0,
                DT: result,
                EM: 'get all book category group successfully'
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

const postCreateNewCategoryGroup = async (data) => {
    try {
        let { name } = data;

        let categoryGroup = await db.BookCategoryGroup.findOne({
            where: {
                name: name
            },
            attributes: ['id', 'name'],
            raw: true
        })

        if (categoryGroup) {
            return {
                EC: 1,
                DT: '',
                EM: 'book category group has already existed !'
            }

        } else {
            const result = await db.BookCategoryGroup.create({
                name: name
            });

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create book category group successfully'
                }
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

const putUpdateCategoryGroup = async (data) => {
    try {
        let { id, name } = data;

        let result = await db.BookCategoryGroup.update({
            name: name
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

const deleteCategoryGroup = async (group_id) => {
    try {

        let categories = await db.BookCategory.findAll({
            where: {
                category_group: group_id
            },
            raw: true
        });

        if (categories.length === 0) {
            await db.BookCategoryGroup.destroy({
                where: {
                    id: group_id
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
                EM: `some book categories references to this group, delete them before remove this group !`
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
    getAllGroup, getAGroup, getCategoryGroupWithPagination,
    postCreateNewCategoryGroup, putUpdateCategoryGroup,
    deleteCategoryGroup
}