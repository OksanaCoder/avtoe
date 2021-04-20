import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './style.css'

const ModalContactUs = (props) => {
    console.log(props)
    return(
        <Modal show={props.open} onHide={props.closeModal} >
            <Modal.Header closeButton>
            <Modal.Title>Зв'яжiться з нами</Modal.Title>
            </Modal.Header>
            <Modal.Body>Всі деталі за номерами:
                <ul className='list-unstyled pt-3'>
                    <li>+38 050 249 09 09</li>
                    <li>+38 093 249 09 09</li>
                    <li>+38 097 249 09 09</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={props.closeModal}  className='btn-modal'>
               Скасувати
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalContactUs