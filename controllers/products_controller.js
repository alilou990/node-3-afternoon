const create = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {name, description, price, img_url} = req.body
    dbInstance.create_product([name, description, price, img_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const getOne = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params;
    dbInstance.read_product(id)
        .then((product) => res.status(200).send(product))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const getAll = (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_products()
        .then((products) => res.status(200).send(products))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const update = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {params, query} = req
    console.log(params.id)
    dbInstance.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
}

const deleteOne = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {id} = req.params
    dbInstance.delete_product(id)
    .then(() => res.sendStatus(200))
    .catch(err => {
        res.sendStatus(500)
        console.log(err)
    })
}

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteOne
}