import db from '../models/index';

const getOrdersWithPagination = async (limit, page) => {
    try {
        let offSet = (page - 1) * limit;

        const { count, rows } = await db.Order.findAndCountAll({
            order: [
                ['id', 'DESC']
            ],
            include: {
                model: db.User, attributes: ['id', 'username']
            },
            attributes: [
                'id', 'date', 'status', 'address',
                'payment', 'total_price', 'total_books'
            ],
            limit: limit,
            offset: offSet,
            nest: true,
            raw: true
        });

        let totalPages = Math.ceil(count / limit);

        let buildData = {
            total_pages: totalPages,
            orders: rows
        }

        return {
            EC: 0,
            DT: buildData,
            EM: 'get orders successfully'
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

const fetchOrderDetail = async (order_id) => {
    const order = await db.Order.findOne({
        where: {
            id: order_id
        },
        attributes: [
            'id', 'date', 'status', 'total_price'
        ],
        raw: true
    })

    const result = await db.OrderDetail.findAll({
        order: [
            ['id', 'DESC']
        ],
        where: {
            order_id: order_id
        },
        include: {
            model: db.Book, attributes: ['id', 'name', 'image'],
            include: {
                model: db.SellingBook, attributes: ['id', 'current_price']
            }
        },
        attributes: [
            'id', 'book_amount', 'price'
        ],
        nest: true,
        raw: true
    });

    return {
        order: order,
        order_details: result
    }
}
const getOrderDetail = async (customerId, status) => {
    try {

        if (status === 'All') {
            const orders = await db.Order.findAll({
                where: {
                    customer_id: customerId
                },
                attributes: [
                    'id'
                ],
                raw: true
            })

            let order_arr_id = orders.map(item => +item.id);

            let order_arr = await Promise.all(order_arr_id.map(fetchOrderDetail));

            return {
                EC: 0,
                DT: {
                    orders: order_arr
                },
                EM: 'get orders successfully'
            }

        } else {
            const orders = await db.Order.findAll({
                where: {
                    customer_id: customerId,
                    status: status
                },
                attributes: [
                    'id'
                ],
                raw: true
            })

            let order_arr_id = orders.map(item => +item.id);

            let order_arr = await Promise.all(order_arr_id.map(fetchOrderDetail));

            return {
                EC: 0,
                DT: {
                    orders: order_arr
                },
                EM: 'get orders successfully'
            }
        }
        
    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

const postCreateNewOrder = async (data) => {
    try {

        const result = await db.Order.create(data);

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'Order successfully'
            }
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

const putUpdateOrder = async (data) => {
    try {
        const { id } = data;
        delete data.id;

        let result = await db.Order.update(data, {
            where: {
                id: +id
            }
        })

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'update order successfully'
            }

        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'update order failed !'
            }
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

const deleteOrder = async (order_id) => {
    try {
        await db.Order.destroy({
            where: {
                id: order_id
            },
        });
        return {
            EC: 0,
            DT: '',
            EM: 'delete order successfully'
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

const postCreateNewOrderDetail = async (data) => {
    try {

        const result = await db.OrderDetail.create(data);

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'Add order detail successfully'
            }
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

const putUpdateOrderDetail = async (data) => {
    try {
        const { id } = data;
        delete data.id;

        let result = await db.OrderDetail.update(data, {
            where: {
                id: +id
            }
        })

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'update order detail successfully'
            }

        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'update order detail failed !'
            }
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

const deleteOrderDetail = async (order_detail_id) => {
    try {
        await db.OrderDetail.destroy({
            where: {
                id: order_detail_id
            },
        });
        return {
            EC: 0,
            DT: '',
            EM: 'delete order detail successfully'
        }

    } catch (error) {
        console.log(error);
        return {
            EC: -2,
            EM: 'Something is wrong on services !',
            DT: ''
        }
    }
}

module.exports = {
    getOrdersWithPagination, postCreateNewOrder,
    putUpdateOrder, deleteOrder,

    getOrderDetail, postCreateNewOrderDetail,
    putUpdateOrderDetail, deleteOrderDetail
}