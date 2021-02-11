
import React  from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


const LoginForm = (props) => {
    return(
        <>
        <Modal show={props.show} onHide={props.handleClose} className='login-form'>
            <Modal.Header closeButton>
                <Modal.Title>Увійти в аккаунт</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email або username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Пароль" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className='flex-form'>
                <Form.Check type="checkbox" label="Запам'ятати" />
                <small>Забули пароль ?</small>
                </Form.Group>
            <div className='flex-form mt-5'>
                <Button variant="primary" type="submit" className='btn-form yellow-back'>
                Увійти
                </Button>
                <Button variant="primary" type="submit" className='btn-form grey-back' onClick={props.handleClose}>
                Скасувати
                </Button>
                </div>
            </Form>
            </Modal.Body>
            </Modal>


        </>
    )
}
 

export default LoginForm