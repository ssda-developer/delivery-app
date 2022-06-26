import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { firebaseDB } from '../firebase';
import StoreContext from '../context/StoreContext';

const UserForm = () => {
    const { shoppingList, totalPrice } = useContext(StoreContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(firebaseDB, 'orders'), {
                userInfo: {
                    name: e.target.elements.name.value,
                    email: e.target.elements.email.value,
                    phone: e.target.elements.phone.value,
                    address: e.target.elements.address.value,
                    order: shoppingList,
                    total: totalPrice,
                }
            });
        } catch (e) {
            console.error('Error: ', e);
        }
    };

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="number" name="email" placeholder="Email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" placeholder="Phone"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" placeholder="Address"/>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

export default UserForm;
