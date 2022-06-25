import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myData from '../data.json';
import Sidebar from '../components/Sidebar';
import ShoppingList from '../components/ShoppingList';

const ShopsPage = () => {
    const [foods, setFoods] = useState(myData.restaurants[0].foods);

    const updateFoods = (value) => {
        setFoods(value);
    }
    console.log(foods);

    return (
        <Container>
            <Row>
                <Col lg="4">
                    <Sidebar updateFoods={updateFoods} restaurants={myData.restaurants} activeLink={1}/>
                </Col>
                <Col lg="8">
                    <ShoppingList foods={foods}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopsPage;
