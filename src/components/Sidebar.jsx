import { ListGroup } from 'react-bootstrap';

const Sidebar = ({activeLink, updateFoods, restaurants}) => {
    return (
        <aside>
            <h2>Shops:</h2>
            <ListGroup defaultActiveKey={'#link' + activeLink}>
                {
                    restaurants.map((el, idx) => {
                        return (
                            <ListGroup.Item action
                                            key={idx}
                                            href={'#link' + (idx + 1)}
                                            onClick={() => updateFoods(el.foods)}>
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
