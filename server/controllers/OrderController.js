import OrderModel from '../models/Order.js';

export const create = async (req, res) => {
    try {
        const doc = new OrderModel({
            userInfo: req.body.userInfo,
            foods: req.body.foods,
            total: req.body.total,
        });

        const order = await doc.save();

        res.json(order);
    } catch (err) {
        console.log(err);
    }
};
