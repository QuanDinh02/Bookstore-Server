import db from '../models/index';
const { Op } = require("sequelize");

const postCreateABook = async (data) => {
    try {
        const result = await db.Book.create(data);

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'create new book successfully'
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

const getAllBook = async () => {
    try {

        const result = await db.Book.findAll({
            include: [
                { model: db.Author, attributes: ['id', 'name'] },
                { model: db.BookCategory, attributes: ['id', 'name'] },
                { model: db.Publisher, attributes: ['id', 'name'] }
            ],
            attributes: ['id', 'name', 'description', 'image'],
            nest: true,
            raw: true
        });

        if (result) {
            return {
                EC: 0,
                DT: result,
                EM: 'get all book successfully'
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

const getABook = async (bookID) => {
    try {

        const bookInfo = await db.Book.findOne({
            where: {
                id: bookID
            },
            include: {
                model: db.Author, attributes: ['name']
            },
            attributes: ['id', 'name', 'description', 'price', 'image'],
            nest: true,
            raw: true
        });

        const bookSellingInfo = await db.SellingBook.findOne({
            where: {
                book_id: bookID
            },
            attributes: ['current_price'],
            nest: true,
            raw: true
        })

        if (bookInfo) {
            bookInfo.current_price = bookSellingInfo.current_price;
            return {
                EC: 0,
                DT: bookInfo,
                EM: 'get highlight book successfully'
            }
        } else {
            return {
                EC: 0,
                DT: {},
                EM: 'book is not existed !'
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

const getBooksByBookCategory = async (book_category_id) => {
    try {

        const books = await db.Book.findAll({
            where: {
                category: book_category_id
            },
            include: [
                {
                    model: db.Author, attributes: ['name']
                },
                {
                    model: db.SellingBook, attributes: ['current_price']
                }
            ],
            attributes: ['id', 'name', 'description','price', 'image','rate'],
            limit: 6,
            nest: true,
            raw: true
        })

        if(books) {
            let buildData = books.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    current_price: item.SellingBook.current_price,
                    image: item.image,
                    rate: item.rate,
                    author: item.Author.name,
                }
            })

            return {
                EC: 0,
                DT: buildData,
                EM: 'get books successfully'
            } 
        } else {
            return {
                EC: 0,
                DT: [],
                EM: ''
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

const getBooksByBookCategoryGroup = async (group_id) => {
    try {

        let book_categories = await db.BookCategory.findAll({
            attributes: ['id'],
            where: {
                category_group: group_id
            },
            raw: true
        })

        let book_categories_arr = book_categories.map(item => +item.id);

        const books = await db.Book.findAll({
            where: {
                category: {
                    [Op.in]: book_categories_arr
                }
            },
            include: [
                {
                    model: db.Author, attributes: ['name']
                },
                {
                    model: db.SellingBook, attributes: ['current_price']
                }
            ],
            attributes: ['id', 'name', 'description','price', 'image','rate'],
            limit: 6,
            nest: true,
            raw: true
        })

        if(books) {
            let buildData = books.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    current_price: item.SellingBook.current_price,
                    image: item.image,
                    rate: item.rate,
                    author: item.Author.name,
                }
            })

            return {
                EC: 0,
                DT: buildData,
                EM: 'get books successfully'
            } 
        } else {
            return {
                EC: 0,
                DT: [],
                EM: ''
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
    postCreateABook, getAllBook, getABook, 
    getBooksByBookCategory, getBooksByBookCategoryGroup
}