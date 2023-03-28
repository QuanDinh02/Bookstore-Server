import db from '../models/index';

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
                attributes: ['id', 'username', 'email', 'phone', 'image', 'dob', 'gender'],
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

module.exports = {
    getUsersWithPagination, postCreateNewUser,
    putUpdateUser, deleteUser
}