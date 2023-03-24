import db from '../models/index';

const getAuthorsWithPagination = async (limit, page) => {
    try {
        if (limit !== 0) {
            let offSet = (page - 1) * limit;

            const { count, rows } = await db.Author.findAndCountAll({
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['id', 'name', 'description', 'image'],
                limit: limit,
                offset: offSet,
                nest: true,
                raw: true
            });

            let totalPages = Math.ceil(count / limit);

            let buildData = {
                total_pages: totalPages,
                authors: rows
            }

            return {
                EC: 0,
                DT: buildData,
                EM: 'get all authors successfully'
            }
        } else {
            const result = await db.Author.findAll({
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

const postCreateNewAuthor = async (data) => {
    try {
        let { name } = data;

        let existAuthor = await db.Author.findOne({
            where: {
                name: name
            },
            attributes: ['id', 'name'],
            raw: true
        })

        if (existAuthor) {
            return {
                EC: 1,
                DT: '',
                EM: 'author name is duplicated !'
            }

        } else {
            const result = await db.Author.create(data);

            if (result) {
                return {
                    EC: 0,
                    DT: '',
                    EM: 'create author successfully'
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

const putUpdateAuthor = async (data, checkNewImage) => {
    try {
        let { id, name } = data;

        let existAuthor = await db.Author.findOne({
            where: {
                name: name
            },
            attributes: ['id', 'name'],
            raw: true
        })

        if (existAuthor && existAuthor.id !== +id) {
            return {
                EC: 1,
                DT: '',
                EM: 'author name is duplicated !'
            }
        } else {
            if (checkNewImage) {
                let result = await db.Author.update({
                    name: data.name,
                    description: data.description,
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
                        EM: 'update author successfully'
                    }

                } else {
                    return {
                        EC: 1,
                        DT: '',
                        EM: 'update author failed !'
                    }
                }
            } else {
                let result = await db.Author.update({
                    name: data.name,
                    description: data.description
                }, {
                    where: {
                        id: +id
                    }
                })

                if (result) {
                    return {
                        EC: 0,
                        DT: '',
                        EM: 'update author successfully'
                    }

                } else {
                    return {
                        EC: 1,
                        DT: '',
                        EM: 'update author failed !'
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

const deleteAuthor = async (author_id) => {
    try {

        await db.Author.destroy({
            where: {
                id: author_id
            },
        });
        return {
            EC: 0,
            DT: '',
            EM: 'delete author successfully'
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
    getAuthorsWithPagination, postCreateNewAuthor,
    putUpdateAuthor, deleteAuthor
}
