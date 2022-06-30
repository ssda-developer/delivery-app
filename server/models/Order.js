import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userInfo: {
        type: {},
        required: true
    },
    foods: {
        type: [],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Order', OrderSchema);
