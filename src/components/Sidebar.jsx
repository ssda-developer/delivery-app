import { ListGroup } from 'react-bootstrap';
import CartsContext from '../context/CartsContext';
import { useContext, useEffect } from 'react';

const Sidebar = ({activeLink, updateFoods, restaurants}) => {
    const { cartsData, setCurrentRestaurant, restaurantData } = useContext(CartsContext);

    const clickHandler = (el) => {
        updateFoods(el.foods);
        setCurrentRestaurant(el.id);
    };

    const qwe = restaurantData.length ? restaurantData : restaurants[0].id;
    const [ttt] = restaurants.filter(el => el.id === qwe);

    useEffect(() => {
        updateFoods(ttt.foods);
    });

    console.log(qwe);

    return (
        <aside>
            <h2>Shops:</h2>
            <ListGroup defaultActiveKey={'#link' + qwe}>
                {
                    restaurants.map((el, idx) => {
                        return (
                            <ListGroup.Item action
                                            disabled={restaurantData !== el.id && cartsData.length}
                                            key={idx}
                                            href={'#link' + el.id}
                                            onClick={() => clickHandler(el)}>
                                {el.name}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </aside>
    );
};

export default Sidebar;
