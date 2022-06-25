import { createContext, useState } from 'react';

const CartsContext = createContext({});

export const CartsProvider = ({children}) => {
    const [cartsData, setCartsData] = useState([]);

    const addCartsData = value => {
        setCartsData([...new Set([...cartsData, value])]);
    }

    const removeCartsData = value => {
        const arr = cartsData.filter(el => el !== value);
        setCartsData(arr);
    }

    return (
        <CartsContext.Provider value={{
            cartsData,
            addCartsData: addCartsData,
            removeCartsData: removeCartsData,
        }}>
            {children}
        </CartsContext.Provider>
    )
}

export default CartsContext;

