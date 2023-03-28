import userServices from '../services/userServices';

const handleGetUsersWithPagination = async (req, res) => {
    try {
        let { limit, page } = req.query;

        let result = await userServices.getUsersWithPagination(+limit, +page);

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

const handlePostCreateNewUser = async (req, res) => {
    try {

        if (req.file) {
            const encoded = req.file.buffer.toString('base64')

            let data = {
                ...req.body, image: encoded
            }

            let result = await userServices.postCreateNewUser(data);

            return res.status(200).json({
                EC: result.EC,
                DT: result.DT,
                EM: result.EM
            })
        } else {

            let result = await userServices.postCreateNewUser(req.body);

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

const handlePutUpdateUser = async (req, res) => {
    try {
        if (req.file) {
            const encoded = req.file.buffer.toString('base64')

            let data = {
                ...req.body, image: encoded
            }

            let result = await userServices.putUpdateUser(data, true);

            return res.status(200).json({
                EC: result.EC,
                DT: result.DT,
                EM: result.EM
            })
        } else {
            if (!req.body.image) {
                let result = await userServices.putUpdateUser(req.body, true);

                return res.status(200).json({
                    EC: result.EC,
                    DT: result.DT,
                    EM: result.EM
                })
            } else {
                let result = await userServices.putUpdateUser(req.body, false);

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

const handleDeleteUser = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await userServices.deleteUser(+id);

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
    handleGetUsersWithPagination, handlePostCreateNewUser,
    handlePutUpdateUser, handleDeleteUser
}