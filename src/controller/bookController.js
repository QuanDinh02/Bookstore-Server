import bookServices from '../services/bookServices';

const handleCreateABook = async (req, res) => {
    try {
        if (req.file) {
            const encoded = req.file.buffer.toString('base64')

            let data = {
                ...req.body, image: encoded
            }

            let result = await bookServices.postCreateABook(data);

            return res.status(200).json({
                EC: result.EC,
                DT: result.DT,
                EM: result.EM
            })
        } else {

            let result = await bookServices.postCreateABook(req.body);

            return res.status(200).json({
                EC: result.EC,
                DT: result.DT,
                EM: result.EM
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EC: -1,
            DT: '',
            EM: "error from server !"
        })
    }
}

const handleGetAllBook = async (req, res) => {
    try {
        let result = await bookServices.getAllBook();

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

const handleGetABook = async (req,res) => {
    try {
        let id = req.params.id;
        let result = await bookServices.getABook(+id);

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

const handleGetBooksByBookCategory = async (req,res) => {
    try {
        let id = req.params.id;
        let result = await bookServices.getBooksByBookCategory(+id);

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

const handleGetBooksByBookCategoryGroup = async (req,res) => {
    try {
        let id = req.params.id;
        let result = await bookServices.getBooksByBookCategoryGroup(+id);

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
    handleCreateABook, handleGetAllBook, handleGetABook,
    handleGetBooksByBookCategory, handleGetBooksByBookCategoryGroup
}