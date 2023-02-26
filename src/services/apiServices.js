import db from '../models/index';

const testAPI = async () => {
    try {
        const testData = await db.Book.findAll({
            include: { model: db.Author, attributes: ['id','name'] },
            attributes: ['id', 'name', 'description'],
            where: {
                author: 1
            },
            nest: true,
            raw: true
        });

        if (testData) {
            return {
                EC: 0,
                DT: testData,
                EM: 'get data successfully'
            }
        } else {
            return {
                EC: 0,
                DT: [],
                EM: 'get data successfully'
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

module.exports = { testAPI }