import { ListGroup } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import StoreContext from '../context/StoreContext';
import { getFoods, getShops } from '../axios';

const Sidebar = () => {
    const {
        shoppingList, shopsData, currentShopsId, updateShop, updateFoods, updateCurrentShopsId
    } = useContext(StoreContext);

    const clickHandler = shopId => {
        getFoods(shopId).then(foodList => {
            updateFoods(foodList);
            updateCurrentShopsId(shopId);
        })
    };

    return (
        <aside>
            <h5>Shops: {currentShopsId}</h5>
            <ListGroup defaultActiveKey={'#link' + currentShopsId}>
                {
                    shopsData.map((shop, idx) => {
                        const isDisabled = currentShopsId !== shop._id && shoppingList.length;
                        return (
                            <ListGroup.Item action
                                            key={idx}
                                            disabled={isDisabled}
                                            href={'#link' + shop._id}
                                            onClick={() => clickHandler(shop._id)}>
                                {shop.name}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </aside>
    );
};

export default Sidebar;
