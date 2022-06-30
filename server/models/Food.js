import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: String,
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    }
});

export default mongoose.model('Food', FoodSchema);
