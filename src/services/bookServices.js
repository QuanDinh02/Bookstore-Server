import db from '../models/index';

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
                { model: db.Author, attributes: ['id','name'] },
                { model: db.BookCategory, attributes: ['id','name'] },
                { model: db.Publisher, attributes: ['id','name'] }
            ],
            attributes: ['id', 'name', 'description','image'],
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
module.exports = { postCreateABook, getAllBook }