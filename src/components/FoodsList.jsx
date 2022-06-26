import FoodCard from './FoodCard';
import { useContext } from 'react';
import StoreContext from '../context/StoreContext';
import { Row, Col } from 'react-bootstrap';

const FoodsList = () => {
    const { foodsData } = useContext(StoreContext);

    return (
        <Row>
            {
                foodsData.map(food => {
                    return (
                        <Col md={4} key={food.id}>
                            <FoodCard food={food}/>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default FoodsList;
