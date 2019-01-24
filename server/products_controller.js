module.exports ={
    create: (req, res) => {
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body
        db.create_product([name, description, price, image_url]).then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const db = req.app.get('db');
        db.read_product(req.params.id).then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.satus(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    },

    getAll: (req, res) => {
        const db = req.app.get('db');
        db.read_products().then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db');
        db.update_product([req.params.id, req.query.description]).then(results => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        db.delete_product(req.params.id).then(results => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send(err, 'You done messed up A-A-Ron')
            console.log(err)
        })
    }
}