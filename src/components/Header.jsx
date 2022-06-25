import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header className="mb-4">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Delivery App</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Shops page</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/shopping-cart-page">
                                <Nav.Link>Shopping cart page</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
