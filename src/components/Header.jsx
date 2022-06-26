import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="bg-white border-bottom box-shadow">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Delivery App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Shops page</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/shopping-list-page">
                                <Nav.Link>Shopping list page</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
