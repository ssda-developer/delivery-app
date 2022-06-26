import { useContext } from 'react';
import ShoppingList from '../components/ShoppingList';
import UserForm from '../components/UserForm';
import StoreContext from '../context/StoreContext';
import { Col, Row } from 'react-bootstrap';

const ShoppingListPage = () => {
    const { shoppingList } = useContext(StoreContext);

    return (
        <Row>
            <Col lg="6" className="mb-3">
                <UserForm/>
            </Col>
            <Col lg="6">
                <ShoppingList foods={shoppingList}/>
            </Col>
        </Row>
    );
};

export default ShoppingListPage;
