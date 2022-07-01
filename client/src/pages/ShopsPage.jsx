import Sidebar from '../components/Sidebar';
import FoodsList from '../components/FoodsList';
import { Col, Row } from 'react-bootstrap';
import { getFoods, getShops } from '../services/service';
import { useContext, useEffect, useState } from 'react';
import StoreContext from '../context/StoreContext';

const ShopsPage = () => {
    const { currentShopsId, updateShop, updateFoods, updateCurrentShopsId } = useContext(StoreContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        getShops()
            .then(shopsList => {
                const [firstShop] = shopsList;
                const activeShopId = currentShopsId || firstShop._id;

                getFoods(activeShopId).then(foodList => {
                    updateCurrentShopsId(activeShopId);
                    updateShop(shopsList);
                    updateFoods(foodList);

                    setIsLoading(false);
                })
            });
    }, []);

    return isLoading
        ? <Row>
            <Col lg="12">
                <p className="text-center">Loading shops, please wait...</p>
            </Col>
        </Row>
        : <Row>
            <Col lg="4" className="mb-3">
                <Sidebar/>
            </Col>
            <Col lg="8">
                <FoodsList/>
            </Col>
        </Row>
};

export default ShopsPage;
