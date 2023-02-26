import db from '../models/index';

const getAllGroup = async () => {
    try {

        const result = await db.BookCategoryGroup.findAll({
            attributes: ['id', 'name'],
            raw: true
        });

        if (result) {
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
module.exports = { getAllGroup }