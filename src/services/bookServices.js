import db from '../models/index';
const { Op } = require("sequelize");

//------------------------ADMIN-----------------------

const getBooksWithPagination = async (limit, page) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.Book.findAndCountAll({
                include: [
                    { model: db.Author, attributes: ['id', 'name'] },
                    { model: db.BookCategory, attributes: ['id', 'name'] },
                    { model: db.Publisher, attributes: ['id', 'name'] },
                    { model: db.SellingBook, attributes: ['current_price', 'quantity', 'quality', 'status'] }
                ],
                attributes: [
                    'id', 'name', 'description', 'price', 'image',
                    'size', 'pages', 'volume', 'format', 'rate', 'publishingDay',
                    'publishingCompany', 'productCode', 'translator', 'language'
                ],
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
                books: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get all books successfully'
            }
        }
        else {
            const result = await db.Book.findAll({
                attributes: ['id', 'name'],
                raw: true
            });

            return {
                EC: 0,
                DT: result,
                EM: 'get all books successfully'
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

const postCreateNewBook = async (data) => {
    try {
        let { name } = data;

        let existBook = await db.Book.findOne({
            where: {
                name: name
            },
            attributes: ['id', 'name'],
            raw: true
        })

        if (existBook) {
            return {
                EC: 1,
                DT: '',
                EM: 'Book name is duplicated !'
            }

        } else {
            const result = await db.Book.create(data);

            await db.SellingBook.create({
                book_id: +result.dataValues.id,
                quantity: 0,
                current_price: +result.dataValues.price,
                quality: '',
                status: ''
            })

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create book successfully'
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

const putUpdateBook = async (data, checkNewImage) => {
    try {
        let { id, name } = data;

        let existBook = await db.Book.findOne({
            where: {
                name: name
            },
            attributes: ['id', 'name'],
            raw: true
        })

        if (existBook && existBook.id !== +id) {
            return {
                EC: 1,
                DT: '',
                EM: 'book name is duplicated !'
            }
        } else {
            delete data.id;
            if (checkNewImage) {
                let result = await db.Book.update(data, {
                    where: {
                        id: +id
                    }
                })

                if (result) {
                    return {
                        EC: 0,
                        DT: '',
                        EM: 'update book successfully'
                    }

                } else {
                    return {
                        EC: 1,
                        DT: '',
                        EM: 'update book failed !'
                    }
                }
            } else {
                delete data.image;
                let result = await db.Book.update(data, {
                    where: {
                        id: +id
                    }
                })

                if (result) {
                    return {
                        EC: 0,
                        DT: '',
                        EM: 'update book successfully'
                    }

                } else {
                    return {
                        EC: 1,
                        DT: '',
                        EM: 'update book failed !'
                    }
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

const putUpdateSellingBook = async (data) => {
    try {
        let { book_id } = data;

        let result = await db.SellingBook.update(data, {
            where: {
                book_id: +book_id
            }
        })

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'update selling book successfully'
            }

        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'update selling book failed !'
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

const getSellingBook = async (bookID) => {
    try {
        const result = await db.SellingBook.findOne({
            where: {
                book_id: bookID
            },
            attributes: ['current_price', 'quantity', 'quality', 'status'],
            nest: true,
            raw: true
        })

        if (result) {
            return {
                EC: 0,
                DT: result,
                EM: 'get selling book successfully'
            }
        } else {
            return {
                EC: 0,
                DT: {},
                EM: 'selling book is not existed !'
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

const deleteBook = async (book_id) => {
    try {

        await db.Book.destroy({
            where: {
                id: book_id
            },
        });

        await db.SellingBook.destroy({
            where: {
                book_id: book_id
            }
        })

        return {
            EC: 0,
            DT: '',
            EM: 'delete book successfully'
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

//-----------------------CUSTOMER---------------------

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

const getBooksByBookCategory = async (book_category_id, book_limit, page) => {
    try {
        if (book_limit !== 0) {

            let offSet = (page - 1) * book_limit;

            const { count, rows: books } = await db.Book.findAndCountAll({
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
                attributes: ['id', 'name', 'description', 'price', 'image', 'rate'],
                limit: book_limit,
                offset: offSet,
                nest: true,
                raw: true
            })

            let totalPages = Math.ceil(count / book_limit);

            if (books) {
                let books_data = books.map(item => {
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

                let buildData = {
                    books_data: books_data,
                    total_pages: totalPages
                }

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
        } else {
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
                attributes: ['id', 'name', 'description', 'price', 'image', 'rate'],
                nest: true,
                raw: true
            })

            if (books) {
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

const getBooksByBookCategoryGroup = async (group_id, book_limit, page) => {
    try {
        let offSet = (page - 1) * book_limit;

        let book_categories = await db.BookCategory.findAll({
            attributes: ['id'],
            where: {
                category_group: group_id
            },
            raw: true
        })

        let book_categories_arr = book_categories.map(item => +item.id);

        const { count, rows: books } = await db.Book.findAndCountAll({
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
            attributes: ['id', 'name', 'description', 'price', 'image', 'rate'],
            limit: book_limit,
            offset: offSet,
            nest: true,
            raw: true
        })

        let totalPages = Math.ceil(count / book_limit);

        if (books) {
            let books_data = books.map(item => {
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

            let buildData = {
                books_data: books_data,
                total_pages: totalPages
            }

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

const getBookDetail = async (bookID) => {
    try {

        const bookInfo = await db.Book.findOne({
            where: {
                id: bookID
            },
            include: [
                {
                    model: db.Author, attributes: ['id', 'name']
                },
                {
                    model: db.Publisher, attributes: ['id', 'name']
                },
                {
                    model: db.BookCategory, attributes: ['id', 'name'],
                    include: {
                        model: db.BookCategoryGroup, attributes: ['id', 'name']
                    }
                }
            ],
            attributes: [
                'id', 'name', 'description', 'price', 'image',
                'size', 'pages', 'volume', 'format', 'rate', 'publishingDay',
                'publishingCompany', 'productCode', 'translator', 'language'
            ],
            nest: true,
            raw: true
        });

        const bookSellingInfo = await db.SellingBook.findOne({
            where: {
                book_id: bookID
            },
            attributes: ['current_price', 'quality', 'status'],
            nest: true,
            raw: true
        })

        const { count, rows } = await db.BookComments.findAndCountAll({
            where: {
                book_id: bookID
            },
            include: {
                model: db.User, attributes: ['username', 'image']
            },
            attributes: ['id', 'title', 'content', 'time', 'rate'],
            nest: true,
            raw: true
        });

        if (bookInfo) {

            let stars = {
                star_5: {
                    rate: 0,
                    percent: 0
                },
                star_4: {
                    rate: 0,
                    percent: 0
                },
                star_3: {
                    rate: 0,
                    percent: 0
                },
                star_2: {
                    rate: 0,
                    percent: 0
                },
                star_1: {
                    rate: 0,
                    percent: 0
                }
            }

            bookInfo.current_price = bookSellingInfo.current_price;
            bookInfo.quality = bookSellingInfo.quality;
            bookInfo.status = bookSellingInfo.status;
            bookInfo.BookCategoryGroup = { ...bookInfo.BookCategory.BookCategoryGroup };
            delete bookInfo.BookCategory.BookCategoryGroup;

            let numberOfRatingPeople = 0;

            rows.forEach(element => {
                if (element.rate !== 0) {
                    stars[`star_${element.rate}`].rate += 1;
                    numberOfRatingPeople += 1;
                }
            });

            //let maxRate = 0;
            //let starHaveMaxRate = 5;

            Object.entries(stars).forEach(([key, value], index) => {
                stars[key].percent += Math.round((value.rate * 100) / numberOfRatingPeople);
                // if(value.rate > maxRate) {
                //     maxRate = value.rate;
                //     starHaveMaxRate = 5-index;
                // }
            });

            bookInfo.Comments = rows;
            bookInfo.TotalComments = count;
            bookInfo.StarRatings = stars;
            //bookInfo.maxRatingStar = starHaveMaxRate;

            return {
                EC: 0,
                DT: bookInfo,
                EM: 'get detailed book successfully'
            }
        } else {
            return {
                EC: 0,
                DT: [],
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

const getBooksByAuthor = async (author_id, book_limit, page) => {
    try {

        let offSet = (page - 1) * book_limit;

        const { count, rows: books } = await db.Book.findAndCountAll({
            where: {
                author: author_id
            },
            include: [
                {
                    model: db.Author, attributes: ['name']
                },
                {
                    model: db.SellingBook, attributes: ['current_price']
                }
            ],
            attributes: ['id', 'name', 'description', 'price', 'image', 'rate'],
            limit: book_limit,
            offset: offSet,
            nest: true,
            raw: true
        })

        let totalPages = Math.ceil(count / book_limit);

        if (books) {
            let books_data = books.map(item => {
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

            let buildData = {
                books_data: books_data,
                total_pages: totalPages
            }

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

const getBooksByPublisher = async (publisher_id, book_limit, page) => {
    try {
        let offSet = (page - 1) * book_limit;

        const { count, rows: books } = await db.Book.findAndCountAll({
            where: {
                publisher: publisher_id
            },
            include: [
                {
                    model: db.Author, attributes: ['name']
                },
                {
                    model: db.SellingBook, attributes: ['current_price']
                }
            ],
            attributes: ['id', 'name', 'description', 'price', 'image', 'rate'],
            limit: book_limit,
            offset: offSet,
            nest: true,
            raw: true
        })

        let totalPages = Math.ceil(count / book_limit);

        if (books) {
            let books_data = books.map(item => {
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

            let buildData = {
                books_data: books_data,
                total_pages: totalPages
            }

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

const getSearchBooks = async (book_name) => {
    try {

        const books = await db.Book.findAll({
            where: {
                name: {
                    [Op.substring]: `${book_name}`
                }
            },
            limit: 25,
            attributes: ['id', 'name'],
            raw: true
        })

        return {
            EC: 0,
            DT: books,
            EM: 'get searched books successfully'
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

const getSearchBookAdmin = async (limit, page, book_name) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.Book.findAndCountAll({
                where: {
                    name: {
                        [Op.substring]: `${book_name}`
                    }
                },
                include: [
                    { model: db.Author, attributes: ['id', 'name'] },
                    { model: db.BookCategory, attributes: ['id', 'name'] },
                    { model: db.Publisher, attributes: ['id', 'name'] },
                    { model: db.SellingBook, attributes: ['current_price', 'quantity', 'quality', 'status'] }
                ],
                attributes: [
                    'id', 'name', 'description', 'price', 'image',
                    'size', 'pages', 'volume', 'format', 'rate', 'publishingDay',
                    'publishingCompany', 'productCode', 'translator', 'language'
                ],
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
                books: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get all books successfully'
            }
        }
        else {
            const result = await db.Book.findAll({
                attributes: ['id', 'name'],
                raw: true
            });

            return {
                EC: 0,
                DT: result,
                EM: 'get all books successfully'
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
    getABook, getBooksByBookCategory, getBooksByBookCategoryGroup, getBookDetail,

    getBooksWithPagination, postCreateNewBook, putUpdateBook,
    deleteBook, putUpdateSellingBook, getSellingBook, getBooksByAuthor,
    getBooksByPublisher, getSearchBooks, getSearchBookAdmin
}