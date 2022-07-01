import FoodModel from '../models/Food.js';

export const create = async (req, res) => {
    try {
        const doc = new FoodModel({
            name: req.body.name,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            shop: req.body.shop,
        });

        const food = await doc.save();

        res.json(food);
    } catch (err) {
        console.log(err);
    }
};

export const getAll = async (req, res) => {
    try {
        const foods = await FoodModel.find();
        res.json(foods);
    } catch (err) {
        console.log(err);
    }
};

export const getAllFromShop = async (req, res) => {
    const shopId = req.params.shopId;
    try {
        const foods = await FoodModel.find({
            shop: shopId
        });
        res.json(foods);
    } catch (err) {
        console.log(err);
    }
};
