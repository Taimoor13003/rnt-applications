import React, { useState, useEffect } from 'react'
import {Modal } from 'react-bootstrap'

function Modals({ chosen }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect(() => {
        if (!chosen && !show) return
        setShow(true)
    }, [chosen])
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <div className="bg-dark" style={{ boxShadow: "5px 5px 10px 2px rgb(0,0,0)" }}>
                    <img className="w-100 h-100 mx-auto d-block " src={chosen} />
                </div>
            </Modal>
        </>
    );
}
export default Modals