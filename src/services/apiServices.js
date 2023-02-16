import db from '../models/index';

const testAPI = async () => {
    try {
        const testData = await db.User.findAll({});
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
        console(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

module.exports = {testAPI}