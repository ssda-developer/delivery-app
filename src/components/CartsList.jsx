import React from 'react';
import CardItem from './CardItem';
import { Row, Col } from 'react-bootstrap';

const CartsList = ({foods}) => {
    return (
        <Row>
            {
                foods.map((food, idx) => {
                    return (
                        <Col md={6} key={idx}>
                            <CardItem isShowCount={true} food={food} />
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default CartsList;
