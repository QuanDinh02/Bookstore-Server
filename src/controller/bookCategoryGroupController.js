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

module.exports = { handleGetAllGroup }