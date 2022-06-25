import React from 'react';
import CardItem from './CardItem';
import { Row, Col } from 'react-bootstrap';

const ShoppingList = ({foods, isShowCount}) => {
    return (
        <Row>
            {
                foods.map((food, idx) => {
                    return (
                        <Col md={4} key={idx}>
                            <CardItem isShowCount={isShowCount} food={food} />
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default ShoppingList;
