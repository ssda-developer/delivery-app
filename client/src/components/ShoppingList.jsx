import { useContext, useEffect } from 'react';
import FoodCard from './FoodCard';
import { Row, Col } from 'react-bootstrap';
import StoreContext from '../context/StoreContext';

const ShoppingList = () => {
    const { shoppingList, totalPrice, updateTotalPrice } = useContext(StoreContext);

    useEffect(() => {
        const total = shoppingList.reduce((sum, food) => sum + (+food.price * food.count), 0);

        updateTotalPrice(total);
    }, [shoppingList, updateTotalPrice]);


    return shoppingList.length
        ? <>
            <Row>
                {
                    shoppingList.map((food, idx) => {
                        return (
                            <Col md={6} key={idx}>
                                <FoodCard isShowCount={true} food={food}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className="mt-2">
                <Col sm={12}>
                    Total: {totalPrice.toFixed(2)}$
                </Col>
            </Row>
        </>
        : <div className="alert alert-secondary" role="alert">
            You have not added any items to your shopping list yet.
        </div>

};

export default ShoppingList;
