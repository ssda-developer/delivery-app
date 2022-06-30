import FoodCard from './FoodCard';
import { useContext } from 'react';
import StoreContext from '../context/StoreContext';
import { Row, Col } from 'react-bootstrap';

const FoodsList = () => {
    const { foodsData } = useContext(StoreContext);

    return (
        <Row>
            {
                foodsData.map((food, idx) => {
                    return (
                        <Col md={4} key={idx}>
                            <FoodCard food={food}/>
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default FoodsList;
