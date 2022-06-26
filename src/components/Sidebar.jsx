import { ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import StoreContext from '../context/StoreContext';

const Sidebar = () => {
    const {
        shoppingList, shopsData, currentShopsId, updateFoods, updateCurrentShopsId
    } = useContext(StoreContext);

    const clickHandler = shop => {
        updateFoods(shop.foods);
        updateCurrentShopsId(shop.id);
    };

    return (
        <aside>
            <h5>Shops:</h5>
            <ListGroup defaultActiveKey={'#link' + currentShopsId.id}>
                {
                    shopsData.map(shop => {
                        const isDisabled = currentShopsId !== shop.id && shoppingList.length;
                        return (
                            <ListGroup.Item action
                                            key={shop.id}
                                            disabled={isDisabled}
                                            href={'#link' + shop.id}
                                            onClick={() => clickHandler(shop)}>
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
