import { useContext, useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import StoreContext from '../context/StoreContext';

const FoodCard = ({ food, isShowCount = false }) => {
    const { shoppingList, updateShoppingList } = useContext(StoreContext);

    const [count, setCount] = useState(food.count || 1);
    const [price, setPrice] = useState(food.price);

    const getNewShoppingList = value => {
        return [...new Set([...shoppingList, Object.assign(food, { count: Number(value) })])];
    }

    const addHandler = () => {
        const [hasFood] = shoppingList.filter(el => el.id === food.id);
        let countTemp = 0;

        if (hasFood) {
            countTemp = hasFood.count;
        }

        setCount(countTemp + 1);
        updateShoppingList(getNewShoppingList(countTemp + 1));
    };

    const removeHandler = () => {
        updateShoppingList(shoppingList.filter(el => el !== food));
    };

    const changePrice = ({ target }) => {
        setCount(target.value);
        updateShoppingList(getNewShoppingList(target.value));
    }

    useEffect(() => {
        setCount(food.count || 1);
    }, [food.count]);

    useEffect(() => {
        setPrice(count * food.price);
    }, [count, food.price]);

    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={food.image}/>
            <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>Price: {parseFloat(isShowCount ? price : food.price).toFixed(2)}$</Card.Text>
                {
                    isShowCount
                        ? <>
                            <Form.Control type="number" value={count} min="1" className="mb-3" onChange={changePrice}/>
                            <Button variant="primary" onClick={removeHandler}>Remove from basket</Button>
                        </>
                        : <Button variant="primary" onClick={addHandler}>Add to basket</Button>
                }
            </Card.Body>
        </Card>
    );
};

export default FoodCard;
