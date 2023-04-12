import db from '../models/index';
import { checkPassword, hashPassword } from './LoginRegisterServices';
const { Op } = require("sequelize");

const getUsersWithPagination = async (limit, page) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.User.findAndCountAll({
                order: [
                    ['id', 'DESC']
                ],
                include: {
                    model: db.UserGroup, attributes: ['id', 'name']
                },
                attributes: [
                    'id', 'fullname', 'username', 'email',
                    'phone', 'address', 'image', 'dob',
                    'gender', 'facebook_url', 'twitter_url'
                ],
                limit: limit,
                offset: offSet,
                nest: true,
                raw: true
            });

            let totalPages = Math.ceil(count / limit);

            let buildData = {
                total_pages: totalPages,
                users: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get users successfully'
            }
        } else {
            const result = await db.User.findAll({
                attributes: ['id', 'name'],
                raw: true
            });

            return {
                EC: 0,
                DT: result,
                EM: 'get all users successfully'
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

const getUserGroups = async (limit, page) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.UserGroup.findAndCountAll({
                order: [
                    ['id', 'DESC']
                ],
                attributes: [
                    'id', 'name'
                ],
                limit: limit,
                offset: offSet,
                nest: true,
                raw: true
            });

            let totalPages = Math.ceil(count / limit);

            let buildData = {
                total_pages: totalPages,
                users: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get user groups successfully'
            }
        } else {
            const result = await db.UserGroup.findAll({
                attributes: ['id', 'name'],
                raw: true
            });

            return {
                EC: 0,
                DT: result,
                EM: 'get all user groups successfully'
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

const postCreateNewUser = async (data) => {
    try {

        let { username } = data;

        let existUser = await db.User.findOne({
            where: {
                username: username
            },
            attributes: ['id', 'username'],
            raw: true
        })

        if (existUser) {
            return {
                EC: 1,
                DT: '',
                EM: 'user name is duplicated !'
            }

        } else {
            const result = await db.User.create(data);

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create user successfully'
                }
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

const putUpdateUser = async (data, checkNewImage) => {
    try {
        let { id, username } = data;

        let existUser = await db.User.findOne({
            where: {
                username: username
            },
            attributes: ['id', 'username'],
            raw: true
        })

        if (existUser && existUser.id !== +id) {
            return {
                EC: 1,
                DT: '',
                EM: 'user name is duplicated !'
            }
        } else {
            if (checkNewImage) {
                let result = await db.User.update({
                    username: data.username,
                    address: data.address,
                    phone: data.phone,
                    dob: data.dob,
                    gender: data.gender,
                    user_group: data.user_group,
                    image: data.image
                }, {
                    where: {
                        id: +id
                    }
                })

                if (result) {
                    return {
                        EC: 0,
                        DT: '',
                        EM: 'update user successfully'
                    }

                } else {
                    return {
                        EC: 1,
                        DT: '',
                        EM: 'update user failed !'
                    }
                }
            } else {
                let result = await db.User.update({
                    username: data.username,
                    address: data.address,
                    phone: data.phone,
                    dob: data.dob,
                    gender: data.gender,
                    user_group: data.user_group
                }, {
                    where: {
                        id: +id
                    }
                })

                if (result) {
                    return {
                        EC: 0,
                        DT: '',
                        EM: 'update user successfully'
                    }

                } else {
                    return {
                        EC: 1,
                        DT: '',
                        EM: 'update user failed !'
                    }
                }
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

const deleteUser = async (user_id) => {
    try {
        await db.User.destroy({
            where: {
                id: user_id
            },
        });
        return {
            EC: 0,
            DT: '',
            EM: 'delete user successfully'
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

const getUserAddress = async (id) => {
    try {
        const result = await db.UserAddress.findAll({
            where: {
                user_id: id
            },
            attributes: ['id', 'name', 'address', 'phone', 'default'],
            raw: true
        });

        return {
            EC: 0,
            DT: result,
            EM: 'get all user addresses successfully'
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
const postCreateNewAddress = async (data) => {
    try {

        const user_address_arr = await db.UserAddress.findAll({
            where: {
                user_id: data.user_id
            },
            raw: true
        });

        if (user_address_arr.length > 0) {
            const result = await db.UserAddress.create(data);

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create address successfully'
                }
            }
        } else {
            const result = await db.UserAddress.create({ ...data, default: 'TRUE' });

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create address successfully'
                }
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
const putUpdateAddress = async (data) => {
    try {
        let { address_id } = data;
        delete data.address_id;

        let result = await db.UserAddress.update({
            name: data.name,
            phone: data.phone,
            address: data.address,
        }, {
            where: {
                id: +address_id
            }
        })

        if (result) {
            return {
                EC: 0,
                DT: '',
                EM: 'update address successfully'
            }

        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'update address failed !'
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
const setDefaultAddress = async (data) => {
    try {
        let { address_id, default_address_id } = data;

        let defaultAddress = await db.UserAddress.update({
            default: 'FALSE'
        }, {
            where: {
                id: +default_address_id
            }
        });

        if (defaultAddress) {
            delete data.address_id;
            delete data.default_address_id;

            let result = await db.UserAddress.update({
                default: 'TRUE'
            }, {
                where: {
                    id: +address_id
                }
            })

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'set default address successfully'
                }

            } else {
                return {
                    EC: 1,
                    DT: '',
                    EM: 'set default address failed !'
                }
            }
        } else {
            return {
                EC: 1,
                DT: '',
                EM: 'set default address failed !'
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
const getDefaultAddress = async (id) => {
    try {
        const result = await db.UserAddress.findOne({
            where: {
                user_id: id,
                default: "TRUE"
            },
            attributes: ['name', 'address', 'phone', 'default'],
            raw: true
        });

        return {
            EC: 0,
            DT: result,
            EM: 'get user default address successfully'
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

const deleteAddress = async (id) => {
    try {
        await db.UserAddress.destroy({
            where: {
                id: id
            },
        });
        return {
            EC: 0,
            DT: '',
            EM: 'delete address successfully'
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

const putUpdatePassword = async (data) => {
    try {
        let { user_id, old_password, new_password } = data;

        let user = await db.User.findOne({
            where: {
                id: user_id
            },
        })

        if (user) {
            if (checkPassword(old_password, user.get({ plain: true }).password)) {
                let result = await db.User.update({
                    password: hashPassword(new_password)
                }, {
                    where: {
                        id: +user_id
                    }
                })

                if (result) {
                    return {
                        EC: 0,
                        DT: '',
                        EM: 'change password successfully'
                    }

                } else {
                    return {
                        EC: 1,
                        DT: '',
                        EM: 'change password failed !'
                    }
                }
            }
            else {
                return {
                    EC: 1,
                    DT: '',
                    EM: 'Password is incorrect !'
                }
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

const getUserProfile = async (id) => {
    try {
        const result = await db.User.findOne({
            where: {
                id: id
            },
            attributes: [
                'id', 'fullname', 'username',
                'email', 'phone', 'gender',
                'dob', 'image'
            ],
            raw: true
        });

        return {
            EC: 0,
            DT: result,
            EM: 'get user profile successfully'
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

const putUpdateUserProfile = async (data, checkNewImage) => {
    try {
        let { id } = data;

        if (checkNewImage) {
            let result = await db.User.update({
                fullname: data.fullname,
                phone: data.phone,
                dob: data.dob,
                gender: data.gender,
                image: data.image
            }, {
                where: {
                    id: +id
                }
            })

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'Update profile successfully'
                }

            } else {
                return {
                    EC: 1,
                    DT: '',
                    EM: 'Update profile failed !'
                }
            }
        } else {
            let result = await db.User.update({
                fullname: data.fullname,
                phone: data.phone,
                dob: data.dob,
                gender: data.gender
            }, {
                where: {
                    id: +id
                }
            })

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'Update profile successfully'
                }

            } else {
                return {
                    EC: 1,
                    DT: '',
                    EM: 'Update profile failed !'
                }
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

const getDashboardInfo = async (date) => {
    try {
        const { count: users_amount } = await db.User.findAndCountAll({
            raw: true
        });

        const { count: orders_amount } = await db.Order.findAndCountAll({
            where: {
                status: {
                    [Op.eq]: ['Completed']
                }
            },
            raw: true
        });

        const { count: books_amount } = await db.Book.findAndCountAll({
            raw: true
        });

        const result = await db.Order.findAll({
            where: {
                date: date,
                status: {
                    [Op.eq]: ['Completed']
                }
            },
            raw: true
        });

        let today_sales = 0;

        result.forEach(item => {
            today_sales += item.total_price;
        });

        return {
            EC: 0,
            DT: {
                users_count: users_amount,
                orders_count: orders_amount,
                books_count: books_amount,
                today_sale: today_sales
            },
            EM: 'get dashboard info successfully'
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
    getUsersWithPagination, postCreateNewUser,
    putUpdateUser, deleteUser, getUserGroups,

    getUserAddress, postCreateNewAddress,
    putUpdateAddress, deleteAddress,
    setDefaultAddress, getDefaultAddress,

    putUpdatePassword, getUserProfile, putUpdateUserProfile,
    getDashboardInfo
}