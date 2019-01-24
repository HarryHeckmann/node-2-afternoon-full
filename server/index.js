require('dotenv').config()

const express = require("express");
const { json } = require("body-parser");
const massive = require('massive')

const app = express();
const PORT = process.env.PORT;
const ps = require('./products_controller')

app.use(json())

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        console.log('Database connected')
        app.set('db', dbInstance)
        })
    .catch(err => {
        console.log(err)
    })

app.get('/api/products', ps.getAll)
app.get('/api/products:id', ps.getOne)
app.put('/api/products:id?desc=', ps.update)
app.post('/api/products', ps.create)
app.delete('/api/products:id', ps.delete)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})