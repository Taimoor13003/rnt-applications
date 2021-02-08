import React, { useState} from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios'

const postDeleteHandler = (idValue) => {
    // console.log(idValue)
    axios.delete(`${process.env.REACT_APP_DOMAIN}/project/AdminDelete/${idValue}`).then((response) => {
        if (response.data._id === idValue) {
            window.setTimeout(
                () => 
                    window.location.reload(true)
                ,
                1000
            );}})
}


function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className="bg-danger w-100 font-weight-bold" style={{ height: "40px",borderRadius:"0px",fontFamily:"sans-serif",color:'black' }} onClick={handleShow}>
                Delete
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="text-white bg-warning"  closeButton>
                    <Modal.Title className="font-weight-bold text-white">Admin Delete Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body className="roboto-font font-weight-bold">Do You Really Wanna Delete This Posted Project!</Modal.Body>
                <Modal.Footer className="d-flex justify-content-end">
                    <Button className="bg-warning border-0" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="danger" onClick={() => {
                        handleClose() ;
                        postDeleteHandler(props.info)
                    }}>
                        DELETE
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Example