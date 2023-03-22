import bookCategoryGroupServices from '../services/bookCategoryGroupServices';

const handleGetAllGroup = async (req, res) => {
    try {
        let result = await bookCategoryGroupServices.getAllGroup();

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

const handleGetAGroup = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await bookCategoryGroupServices.getAGroup(+id);

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

const handleGetCateroryGroupWithPagination = async (req, res) => {
    try {
        let { limit, page } = req.query;

        let result = await bookCategoryGroupServices.getCategoryGroupWithPagination(+limit, +page);

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

const handlePostCategoryGroup = async (req, res) => {
    try {
        let data = req.body;

        let result = await bookCategoryGroupServices.postCreateNewCategoryGroup(data);

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

const handlePutCategoryGroup = async (req, res) => {
    try {
        let data = req.body;

        let result = await bookCategoryGroupServices.putUpdateCategoryGroup(data);

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

const handleDeleteCategoryGroup = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await bookCategoryGroupServices.deleteCategoryGroup(+id);

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
    handleGetAllGroup, handleGetAGroup, handleGetCateroryGroupWithPagination,
    handlePostCategoryGroup, handlePutCategoryGroup, handleDeleteCategoryGroup
}