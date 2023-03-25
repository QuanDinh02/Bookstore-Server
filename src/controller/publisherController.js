import publisherServices from '../services/publisherServices';

const handleGetPublishersWithPagination = async (req, res) => {
    try {
        let { limit, page } = req.query;

        let result = await publisherServices.getPublishersWithPagination(+limit, +page);

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

const handlePostCreateNewPublisher = async (req, res) => {
    try {
        let data = req.body;

        let result = await publisherServices.postCreateNewPublisher(data);

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

const handlePutUpdatePublisher = async (req, res) => {
    try {
        let data = req.body;

        let result = await publisherServices.putUpdatePublisher(data);

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

const handleDeletePublisher = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await publisherServices.deletePublisher(+id);

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
    handleGetPublishersWithPagination, handlePostCreateNewPublisher,
    handlePutUpdatePublisher, handleDeletePublisher
}