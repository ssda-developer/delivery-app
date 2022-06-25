import { createContext, useState } from 'react';

const CartsContext = createContext({});

export const CartsProvider = ({children}) => {
    const [cartsData, setCartsData] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);

    const addCartsData = value => {
        setCartsData([...new Set([...cartsData, value])]);
    }

    const removeCartsData = value => {
        const arr = cartsData.filter(el => el !== value);
        setCartsData(arr);
    }

    const setCurrentRestaurant = value => {
        setRestaurantData(value);
    };

    return (
        <CartsContext.Provider value={{
            cartsData,
            restaurantData,
            addCartsData: addCartsData,
            removeCartsData: removeCartsData,
            setCurrentRestaurant: setCurrentRestaurant,
        }}>
            {children}
        </CartsContext.Provider>
    )
}

export default CartsContext;

