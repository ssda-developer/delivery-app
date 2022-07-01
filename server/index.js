import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import * as FoodController from './controllers/FoodController.js';
import * as ShopController from './controllers/ShopController.js';
import * as OrderController from './controllers/OrderController.js';

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
    .connect(process.env.MONGODB_URL || 'mongodb+srv://admin:admin@cluster0.itofs.mongodb.net/delivery?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB not ok', err));

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(`
        <h3>This is the server for the "<a href="https://github.com/ssda-developer/delivery-app">delivery-app</a>" application</h3>
        <ul>
            <li><a href="./shops">Show all shops</a></li>
            <li><a href="./foods">Show all foods</a></li>
            <li><a href="./orders">Show all orders</a></li>
        </ul>
    `);
});

app.post('/foods/create', FoodController.create);
app.get('/foods/', FoodController.getAll);
app.get('/foods/:shopId', FoodController.getAllFromShop);
app.post('/shops/create', ShopController.create);
app.get('/shops/', ShopController.getAll);
app.post('/orders/create', OrderController.create);
app.get('/orders', OrderController.getAll);

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Server listening on port ${PORT}`);
});
