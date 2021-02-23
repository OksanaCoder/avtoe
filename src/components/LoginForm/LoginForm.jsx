
import React, {useState}  from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


const LoginForm = (props) => {
    const [userLog, setUserLog] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://avtoe-back.herokuapp.com/users/login', {
           method: 'POST',
           headers: {
              'Content-Type' : 'application/json'
           },
           body: JSON.stringify(userLog)
        })
        .then(data => data.json())
        .then((res) => {
           console.log(res)
           setUserLog('')
        })
        .catch((err) => console.log('error'))
     }
  
     const handleChange = (e) => {
        setUserLog({
          [e.target.name] : [e.target.value]
       })
     }
  
    return(
        <>
        <Modal show={props.show} onHide={props.handleClose} className='login-form'>
            <Modal.Header closeButton>
                <Modal.Title>Увійти в аккаунт</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email або username" onChange={handleChange} value={userLog.email} name="email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Пароль" onChange={handleChange} value={userLog.password} value="password"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className='flex-form'>
                <Form.Check type="checkbox" label="Запам'ятати" />
                <small>Забули пароль ?</small>
                </Form.Group>
            <div className='flex-form mt-5'>
                <Button variant="primary" type="submit" className='btn-form yellow-back' onClick={handleSubmit}>
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