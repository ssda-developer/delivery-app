import { createContext, useState } from 'react';
import data from '../data.json';

const StoreContext = createContext({});

export const StoreProvider = ({children}) => {
    const [shopsData, setShopsData] = useState(data.shops);
    const updateShop = value => {
        setShopsData(value);
    }

    const [foodsData, setFoodsData] = useState(shopsData[0].foods);
    const updateFoods = value => {
        setFoodsData(value);
    }

    const [currentShopsId, setCurrentShopsId] = useState(shopsData[0]);
    const updateCurrentShopsId = value => {
        setCurrentShopsId(value);
    }

    const [shoppingList, setShoppingList] = useState([]);
    const updateShoppingList = value => {
        setShoppingList(value);
    };

    const [totalPrice, setTotalPrice] = useState(0);
    const updateTotalPrice = value => {
        setTotalPrice(value);
    }

    return (
        <StoreContext.Provider value={{
            foodsData,
            shopsData,
            shoppingList,
            currentShopsId,
            totalPrice,
            updateFoods: updateFoods,
            updateShop: updateShop,
            updateShoppingList: updateShoppingList,
            updateCurrentShopsId: updateCurrentShopsId,
            updateTotalPrice: updateTotalPrice,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext;

