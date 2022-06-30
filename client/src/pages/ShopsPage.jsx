import Sidebar from '../components/Sidebar';
import FoodsList from '../components/FoodsList';
import { Col, Row } from 'react-bootstrap';
import { getFoods, getShops } from '../axios';
import { useContext, useEffect } from 'react';
import StoreContext from '../context/StoreContext';

const ShopsPage = () => {
    const {
        updateShop, updateFoods, updateCurrentShopsId
    } = useContext(StoreContext);

    useEffect(() => {
        getShops()
            .then(shopsList => {
                const [firstShop] = shopsList;

                getFoods(firstShop._id).then(foodList => {
                    updateShop(shopsList);
                    updateFoods(foodList);
                    updateCurrentShopsId(firstShop._id);
                })
            });
    }, []);

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
