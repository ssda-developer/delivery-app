import { Modal } from 'react-bootstrap';

const Message = ({show, setShow}) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Success
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Your order has been successfully received. Wait for the courier.</p>
            </Modal.Body>
        </Modal>
    );
};

export default Message;
