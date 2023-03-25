import db from '../models/index';

const getPublishersWithPagination = async (limit, page) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.Publisher.findAndCountAll({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['id', 'name', 'description', 'phone'],
                limit: limit,
                offset: offSet,
                nest: true,
                raw: true
            });

            let totalPages = Math.ceil(count / limit);

            let buildData = {
                total_pages: totalPages,
                publishers: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get all authors successfully'
            }
        } else {
            const result = await db.Publisher.findAll({
                attributes: ['id', 'name'],
                raw: true
            });

            return {
                EC: 0,
                DT: result,
                EM: 'get all authors successfully'
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

const postCreateNewPublisher = async (data) => {
    try {
        let { name } = data;

        let existPublisher = await db.Publisher.findOne({
            where: {
                name: name
            },
            attributes: ['id', 'name'],
            raw: true
        })

        if (existPublisher) {
            return {
                EC: 1,
                DT: '',
                EM: 'Publisher name is duplicated !'
            }

        } else {
            const result = await db.Publisher.create(data);

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create Publisher successfully'
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

const putUpdatePublisher = async (data) => {
    try {
        let { id, name } = data;

        let existPublisher = await db.Publisher.findOne({
            where: {
                name: name
            },
            attributes: ['id', 'name'],
            raw: true
        })

        if (existPublisher && existPublisher.id !== +id) {
            return {
                EC: 1,
                DT: '',
                EM: 'Publisher name is duplicated !'
            }
        } else {
            let result = await db.Publisher.update({
                name: data.name,
                description: data.description,
                phone: data.phone
            }, {
                where: {
                    id: +id
                }
            })

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'update publisher successfully'
                }

            } else {
                return {
                    EC: 1,
                    DT: '',
                    EM: 'update publisher failed !'
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

const deletePublisher = async (publisher_id) => {
    try {
        await db.Publisher.destroy({
            where: {
                id: publisher_id
            },
        });
        return {
            EC: 0,
            DT: '',
            EM: 'delete publisher successfully'
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
    getPublishersWithPagination, postCreateNewPublisher,
    putUpdatePublisher, deletePublisher
}
