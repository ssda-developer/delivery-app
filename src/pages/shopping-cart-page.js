import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import CartsContext from '../context/CartsContext';
import CartsList from '../components/CartsList';

const ShoppingCartPage = () => {
    const {cartsData} = useContext(CartsContext);

    return (
        <Container>
            <Row>
                <Col lg="6">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="number" placeholder="Email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col lg="6">
                    <CartsList foods={cartsData}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ShoppingCartPage;
