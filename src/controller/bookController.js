import bookServices from '../services/bookServices';

//------------------------ADMIN VIEW-----------------------------

const handleGetBooksWithPagination = async (req, res) => {
    try {
        let { limit, page } = req.query;

        let result = await bookServices.getBooksWithPagination(+limit, +page);

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

const handlePostCreateNewBook = async (req, res) => {
    try {

        if (req.file) {
            const encoded = req.file.buffer.toString('base64');

            let data = {
                ...req.body, image: encoded
            }

            let result = await bookServices.postCreateNewBook(data);

            return res.status(200).json({
                EC: result.EC,
                DT: result.DT,
                EM: result.EM
            })
        } else {

            let result = await bookServices.postCreateNewBook(req.body);

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

const handlePutUpdateBook = async (req, res) => {
    try {
        if (req.file) {
            const encoded = req.file.buffer.toString('base64')

            let data = {
                ...req.body, image: encoded
            }

            let result = await bookServices.putUpdateBook(data, true);

            return res.status(200).json({
                EC: result.EC,
                DT: result.DT,
                EM: result.EM
            })
        } else {
            if (!req.body.image) {
                let result = await bookServices.putUpdateBook(req.body, true);

                return res.status(200).json({
                    EC: result.EC,
                    DT: result.DT,
                    EM: result.EM
                })
            } else {
                let result = await bookServices.putUpdateBook(req.body, false);

                return res.status(200).json({
                    EC: result.EC,
                    DT: result.DT,
                    EM: result.EM
                })
            }
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

const handlePutUpdateSellingBook = async (req, res) => {
    try {
        let result = await bookServices.putUpdateSellingBook(req.body);

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

const handleDeleteBook = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await bookServices.deleteBook(+id);

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

//------------------------CUSTOMER VIEW-----------------------------

const handleGetABook = async (req, res) => {
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

const handleGetBooksByBookCategory = async (req, res) => {
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

const handleGetBooksByBookCategoryGroup = async (req, res) => {
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

const handleGetBookDetail = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await bookServices.getBookDetail(+id);

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
    handleGetABook, handleGetBooksByBookCategory, handleGetBooksByBookCategoryGroup, handleGetBookDetail,

    handleGetBooksWithPagination, handlePostCreateNewBook, handlePutUpdateBook, handleDeleteBook,
    handlePutUpdateSellingBook
}