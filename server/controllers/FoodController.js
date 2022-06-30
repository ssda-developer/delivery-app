import FoodModel from '../models/Food.js';

export const create = async (req, res) => {
    try {
        const doc = new FoodModel({
            name: req.body.name,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            shop: req.body.shop,
        });

        const post = await doc.save();

        res.json(post);
    } catch (err) {
        console.log(err);
    }
};

export const getAll = async (req, res) => {
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
