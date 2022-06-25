import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import CartsContext from '../context/CartsContext';

const CardItem = ({food = {}, isShowCount = false}) => {
    const [count, setCount] = useState(food.count || 1);
    const [price, setPrice] = useState(food.price);

    const { addCartsData, removeCartsData, cartsData } = useContext(CartsContext);

    const addHandler = () => {
        const tempCount = parseInt(food.count || 0) + parseInt(count);
        addCartsData(Object.assign(food, {count: tempCount}));
        console.log(cartsData);
    };

    const removeHandler = () => {
        removeCartsData(food);
        console.log(cartsData);
    };

    const changePrice = ({target}) => {
        setCount(target.value);
        setPrice(target.value * food.price);
    }

    return (
        <Card>
            <Card.Img variant="top" src={food.image} />
            <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>Price: {price}</Card.Text>
                {
                    isShowCount
                        ? <>
                            <Form.Control type="number" value={count} className="mb-3" onChange={changePrice} placeholder="Count"/>
                            <Button variant="primary" onClick={removeHandler}>Remove from cart</Button>
                        </>
                        : <Button variant="primary" onClick={addHandler}>Add to cart</Button>
                }
            </Card.Body>
        </Card>
    );
};

export default CardItem;
