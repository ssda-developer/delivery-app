import ShopModel from '../models/Shop.js';

export const create = async (req, res) => {
    try {
        const doc = new ShopModel({
            name: req.body.name,
            address: req.body.address,
        });

        const shop = await doc.save();

        res.json(shop);
    } catch (err) {
        console.log(err);
    }
};

export const getAll = async (req, res) => {
    try {
        const shops = await ShopModel.find();
        res.json(shops);
    } catch (err) {
        console.log(err);
    }
};
