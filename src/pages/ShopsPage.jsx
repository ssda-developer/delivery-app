import Sidebar from '../components/Sidebar';
import FoodsList from '../components/FoodsList';
import { Col, Row } from 'react-bootstrap';

const ShopsPage = () => {
    return (
        <Row>
            <Col lg="4">
                <Sidebar/>
            </Col>
            <Col lg="8">
                <FoodsList/>
            </Col>
        </Row>
    );
};

export default ShopsPage;
