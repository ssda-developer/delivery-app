import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import * as FoodController from './controllers/FoodController.js';
import * as ShopController from './controllers/ShopController.js';
import * as OrderController from './controllers/OrderController.js';

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
    .connect('mongodb+srv://admin:admin@cluster0.itofs.mongodb.net/delivery?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB not ok', err));

app.use(express.json());
app.use(cors());

app.post('/foods/create', FoodController.create);
app.get('/foods/:shopId', FoodController.getAll);
app.post('/shops/create', ShopController.create);
app.get('/shops/', ShopController.getAll);
app.post('/orders/create', OrderController.create);

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Server listening on port ${PORT}`);
});
