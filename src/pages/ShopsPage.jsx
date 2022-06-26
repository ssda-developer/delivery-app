import Sidebar from '../components/Sidebar';
import FoodsList from '../components/FoodsList';
import { Col, Row } from 'react-bootstrap';

const ShopsPage = () => {
    return (
        <Row>
            <Col lg="4" className="mb-3">
                <Sidebar/>
            </Col>
            <Col lg="8">
                <FoodsList/>
            </Col>
        </Row>
    );
};

export default ShopsPage;
