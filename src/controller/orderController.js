import orderServices from '../services/orderServices';

const handleGetOrdersWithPagination = async (req, res) => {
    try {
        let { limit, page } = req.query;

        let result = await orderServices.getOrdersWithPagination(+limit, +page);

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
const handlePostCreateNewOrder = async (req, res) => {
    try {
        let data = req.body;

        let result = await orderServices.postCreateNewOrder(data);

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
const handlePutUpdateOrder = async (req, res) => {
    try {
        let data = req.body;

        let result = await orderServices.putUpdateOrder(data);

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
const handleDeleteOrder = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await orderServices.deleteOrder(+id);

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
const handlePutUpdateOrderStatus = async (req, res) => {
    try {
        let data = req.body;

        let result = await orderServices.putUpdateOrderStatus(data);

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

const handleGetOrderDetail = async (req, res) => {
    try {
        let { customer, status } = req.query;

        let result = await orderServices.getOrderDetail(+customer, status);

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
const handleGetOrderDetailByOrderId = async (req, res) => {
    try {
        let id = req.params.id;

        let result = await orderServices.getOrderDetailById(+id);

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
const handleCreateOrderDetails = async (req, res) => {
    try {
        let data = req.body;

        let result = await orderServices.postCreateNewOrderDetails(data);

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

const handleDeleteOrderDetail = async (req, res) => {
    try {
        let data = req.body;

        let result = await orderServices.deleteOrderDetail(data);

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
    handleGetOrdersWithPagination, handlePostCreateNewOrder,
    handlePutUpdateOrder, handleDeleteOrder,

    handleGetOrderDetail, handleCreateOrderDetails, handleDeleteOrderDetail,

    handleGetOrderDetailByOrderId, handlePutUpdateOrderStatus
}