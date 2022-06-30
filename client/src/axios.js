import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/'
})

export const getShops = async () => {
    const { data } = await instance.get('/shops');

    return data;
}

export const getFoods = async (shopId) => {
    const { data } = await instance.get(`/foods/${shopId}`);

    return data;
}
