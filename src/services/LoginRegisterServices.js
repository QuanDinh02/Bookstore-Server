import bcrypt from "bcryptjs";
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);
import { Op } from 'sequelize';

import { createToken } from '../middleware/jwt';

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const checkExistEmail = async (userEmail) => {
    let check = await db.User.findOne({ where: { email: userEmail } });
    if (check) {
        return true;
    }
    return false;
}

const checkExistPhone = async (userPhone) => {
    let check = await db.User.findOne({ where: { phone: userPhone } });
    if (check) {
        return true;
    }
    return false;
}

const checkPassword = (inputPassword, hashPass) => {
    return bcrypt.compareSync(inputPassword, hashPass);
}

const userRegister = async (userData) => {

    try {
        let checkEmail = await checkExistEmail(userData.email);
        if (checkEmail) {
            return {
                EC: 1,
                EM: 'Email has already existed !'
            }
        }

        let checkPhone = await checkExistPhone(userData.phone);
        if (checkPhone) {
            return {
                EC: 1,
                EM: 'Phone has already existed !'
            }
        }

        let hash_password = hashPassword(userData.password);

        await db.User.create({
            email: userData.email,
            username: userData.username,
            phone: userData.phone,
            password: hash_password,
            user_group: 2
        })

        return {
            EC: 0,
            EM: "Create new user successfully"
        }

    } catch (error) {
        console.log(error);
        return {
            EC: 2,
            EM: "Some things is wrong at service!"
        }
    }
}

const userLogin = async (userData) => {
    try {
        let checkEmail = await checkExistEmail(userData.login);
        let checkPhone = await checkExistPhone(userData.login);

        if (checkEmail === true || checkPhone === true) {
            let user = await db.User.findOne({
                where: {
                    [Op.or]: [
                        { email: userData.login },
                        { phone: userData.login }
                    ]
                },
                include: { model: db.UserGroup, attributes: ['name'] }
            })

            if (user) {
                if (checkPassword(userData.password, user.get({ plain: true }).password)) {

                    let payload = {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        isAuthenticated: true,
                        group: user.UserGroup.name,
                    }

                    let accessToken = createToken(payload);
                    return {
                        EC: 0,
                        DT: {
                            accessToken: accessToken,
                            id: user.id,
                            email: user.email,
                            username: user.username,
                            group: user.UserGroup.name
                        },
                        EM: 'Login success !'
                    }
                }

            }
        }

        return {
            EC: 1,
            DT: '',
            EM: 'Your email/phone or password is incorrect !'

        }

    } catch (error) {
        console.log(error);
        return {
            EC: 2,
            DT: '',
            EM: "Some things is wrong at service!"
        }
    }
}

module.exports = { userRegister, userLogin, checkPassword, hashPassword }