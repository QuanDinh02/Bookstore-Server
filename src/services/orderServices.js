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
                order: [
                    ['id', 'DESC']
                ],
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
                order: [
                    ['id', 'DESC']
                ],
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

const getOrderDetailById = async (orderID) => {
    try {

        const order = await db.Order.findOne({
            where: {
                id: orderID
            },
            include: {
                model: db.User, attributes: ['id', 'fullname', 'email', 'address', 'phone']
            },
            attributes: [
                'id', 'date', 'status', 'total_price', 'total_books'
            ],
            nest: true,
            raw: true
        })

        const orderDetails = await db.OrderDetail.findAll({
            order: [
                ['id', 'DESC']
            ],
            where: {
                order_id: orderID
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

        if (order) {
            return {
                EC: 0,
                DT: {
                    order: order,
                    order_details: orderDetails
                },
                EM: 'get orders successfully'
            }
        } else {
            return {
                EC: 0,
                DT: '',
                EM: 'order is not existed !'
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

        let response_data = result.get({ plain: true });

        if (result) {
            return {
                EC: 0,
                DT: {
                    order: response_data
                },
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
        await db.OrderDetail.destroy({
            where: {
                order_id: order_id
            }
        });

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

const putUpdateOrderStatus = async (data) => {
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
                EM: 'Update order status successfully'
            }

        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'Update order status failed !'
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

const postCreateNewOrderDetails = async (data) => {
    try {

        const result = await db.OrderDetail.bulkCreate(data);

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

const deleteOrderDetail = async (data) => {
    try {

        let { order, item } = data;

        let result = await db.Order.update({
            total_price: order.total_price - item.price,
            total_books: order.total_books - item.amount
        }, {
            where: {
                id: +order.id
            }
        })

        if (result) {
            await db.OrderDetail.destroy({
                where: {
                    id: +item.id
                },
            });
            return {
                EC: 0,
                DT: '',
                EM: 'Delete item successfully'
            }
        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'Delete item failed'
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

module.exports = {
    getOrdersWithPagination, postCreateNewOrder,
    putUpdateOrder, deleteOrder,

    getOrderDetail, postCreateNewOrderDetails,
    deleteOrderDetail,

    getOrderDetailById, putUpdateOrderStatus
}