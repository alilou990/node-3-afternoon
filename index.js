require('dotenv').config();
const express = require('express');
const massive = require('massive');

const ctrl = require('./controllers/products_controller')

//Set up app
const app = express();

//ENV variables
const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

//TLM
app.use(express.json());

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Database is running!')
})

//ENDPOINTS
app.get('/api/products', ctrl.getAll);
app.get('/api/products/:id', ctrl.getOne);
app.post('/api/products', ctrl.create);
app.put('/api/products/:id', ctrl.update);
app.delete('/api/products/:id', ctrl.deleteOne);


app.listen(SERVER_PORT, () => {
    console.log("Server is running!")
})
