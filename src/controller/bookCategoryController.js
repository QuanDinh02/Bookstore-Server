import bookCategoryServices from '../services/bookCategoryServices';

const handleGetBookCategoryWithPagination = async (req, res) => {
    try {
        let { limit, page } = req.query;

        let result = await bookCategoryServices.getBookCategoryWithPagination(+limit, +page);

        return res.status(200).json({
            EC: result.EC,
            DT: result.DT,
            EM: result.EM
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: -1,
            DT: '',
            EM: "error from server !"
        })
    }
}

const handlePostBookCategory = async (req, res) => {
    try {
        let data = req.body;

        let result = await bookCategoryServices.postCreateNewBookCategory(data);

        return res.status(200).json({
            EC: result.EC,
            DT: result.DT,
            EM: result.EM
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: -1,
            DT: '',
            EM: "error from server !"
        })
    }
}

const handlePutBookCategory = async (req, res) => {
    try {
        let data = req.body;

        let result = await bookCategoryServices.putUpdateBookCategory(data);

        return res.status(200).json({
            EC: result.EC,
            DT: result.DT,
            EM: result.EM
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: -1,
            DT: '',
            EM: "error from server !"
        })
    }
}

const handleDeleteBookCategory = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await bookCategoryServices.deleteBookCategory(+id);

        return res.status(200).json({
            EC: result.EC,
            DT: result.DT,
            EM: result.EM
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: -1,
            DT: '',
            EM: "error from server !"
        })
    }
}

module.exports = {
    handleGetBookCategoryWithPagination, handlePostBookCategory,
    handlePutBookCategory, handleDeleteBookCategory
}