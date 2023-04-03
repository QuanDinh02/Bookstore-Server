import apiServices from '../services/apiServices';
import LoginRegisterServices from '../services/LoginRegisterServices';

const testAPI = async (req, res) => {
    try {
        let result = await apiServices.testAPI();
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

const handleCreateUser = async (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EC: -1,
                DT: '',
                EM: "Missing some parameters !"
            })
        }

        if (req.body.password && req.body.password.length < 3) {
            return res.status(200).json({
                EC: -1,
                DT: '',
                EM: "Password length must larger 3 characters !"
            })
        }

        let result = await LoginRegisterServices.userRegister(req.body);

        return res.status(200).json({
            EC: result.EC,
            DT: '',
            EM: result.EM
        })

    } catch (error) {
        return res.status(500).json({
            EC: -1,
            DT: '',
            EM: "error from server !"
        })
    }

}

const handleUserLogin = async (req, res) => {

    try {
        if (!req.body.login || !req.body.password) {
            return res.status(200).json({
                EC: -1,
                DT: '',
                EM: "Missing some parameters !"
            })
        }

        let result = await LoginRegisterServices.userLogin(req.body);
        if (result) {
            if (result.DT && result.DT.accessToken) {
                res.cookie("jwt", result.DT.accessToken, { httpOnly: true, maxAge: 15 * 60 * 1000 })
            }
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
const handleFetchAccount = async (req, res) => {
    return res.status(200).json({
        EC: 0,
        DT: req.user,
        EM: 'get account successfully'
    })
}

const handleLogoutUser = async (req, res) => {

    try {
        res.clearCookie("jwt");
        return res.status(200).json({
            EC: 0,
            DT: '',
            EM: 'Log out successfully'
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
    testAPI, handleUserLogin, 
    handleCreateUser, handleFetchAccount,
    handleLogoutUser
}