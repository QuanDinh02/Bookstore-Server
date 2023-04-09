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

const handleGetUserGroups = async (req, res) => {
    try {
        let { limit, page } = req.query;

        let result = await userServices.getUserGroups(+limit, +page);

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

const handleGetUserAddress = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await userServices.getUserAddress(+id);

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

const handleGetDefaultAddress = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await userServices.getDefaultAddress(+id);

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

const handleCreateNewAddress = async (req, res) => {
    try {
        let data = req.body;

        let result = await userServices.postCreateNewAddress(data);

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

const handleUpdateAddress = async (req, res) => {
    try {
        let data = req.body;

        let result = await userServices.putUpdateAddress(data);

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

const handleSetDefaultAddress = async (req, res) => {
    try {
        let data = req.body;

        let result = await userServices.setDefaultAddress(data);

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

const handleDeleteAddress = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await userServices.deleteAddress(+id);

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

const handleUpdatePassword = async (req, res) => {
    try {
        let data = req.body;

        let result = await userServices.putUpdatePassword(data);

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

const handleGetUserProfile = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await userServices.getUserProfile(+id);

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

const handleUpdateUserProfile = async (req, res) => {
    try {
        if (req.file) {
            const encoded = req.file.buffer.toString('base64')

            let data = {
                ...req.body, image: encoded
            }

            let result = await userServices.putUpdateUserProfile(data, true);

            return res.status(200).json({
                EC: result.EC,
                DT: result.DT,
                EM: result.EM
            })
        } else {
            if (!req.body.image) {
                let result = await userServices.putUpdateUserProfile(req.body, true);

                return res.status(200).json({
                    EC: result.EC,
                    DT: result.DT,
                    EM: result.EM
                })
            } else {
                let result = await userServices.putUpdateUserProfile(req.body, false);

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

const handleGetDashboardInfo = async (req, res) => {
    try {
        let date = req.query.date;
        let result = await userServices.getDashboardInfo(date);

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
    handlePutUpdateUser, handleDeleteUser, handleGetUserGroups,

    handleGetUserAddress, handleCreateNewAddress,
    handleUpdateAddress, handleDeleteAddress,
    handleSetDefaultAddress, handleGetDefaultAddress,

    handleUpdatePassword, handleGetUserProfile, handleUpdateUserProfile,

    handleGetDashboardInfo
}