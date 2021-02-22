import React, { useEffect, useState }  from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const SignUpForm = (props) => {
  const [user, setUser] = useState({
     firstname:"",
     lastname:"", 
     username:"",
     email:"",
     password:"", 
     dob:"",
     phone:"",
     role:""
  })


   const handleSubmit = (e) => {
      e.preventDefault()
      fetch('https://avtoe-back.herokuapp.com/users/register', {
         method: 'POST',
         headers: {
            'Content-Type' : 'application/json'
         },
         body: JSON.stringify(user)
      })
      .then(data => data.json())
      .then((res) => {
         console.log(res)
         setUser('')
      })
      .catch((err) => console.log('error'))
   }

   const handleChange = (e) => {
     setUser({
        [e.target.name] : [e.target.value]
     })
   }

    return (
        <>
         <Modal show={props.show1} onHide={props.handleClose1} className='login-form'>
                     <Modal.Header closeButton>
                        <Modal.Title>Реєстрація</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                     <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicFirstName">
                           <Form.Control type="text" placeholder="Firs tname" value={user.firstname} onChange={handleChange} name='firstname'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName">
                           <Form.Control type="text" placeholder="Last name" value={user.lastname} onChange={handleChange} name='lastname'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                           <Form.Control type="text" placeholder="User name" value={user.username} onChange={handleChange} name='username'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                           <Form.Control type="email" placeholder="Email" value={user.email}  onChange={handleChange} name='email'/>
                        </Form.Group>
         
                        <Form.Group controlId="formBasicPassword">
                           <Form.Control type="password" placeholder="Пароль" value={user.password}  onChange={handleChange} name='password' />
                        </Form.Group>
                  
                        <Form.Group controlId="formBasicDateOfBirth">
                           <Form.Control type="date" value={user.dob}  onChange={handleChange} name='dob'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                           <Form.Control placeholder="Номер телефону" value={user.phone}  onChange={handleChange} name='phone'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                           <Form.Check type="checkbox" label="Я погоджуюся з умовами користування сайтом" />
      
                        </Form.Group>
                       <div className='flex-form mt-5'>
                        <Button variant="primary" type="submit" className='btn-form yellow-back'>
                           Зареєструватись
                        </Button>
                        <Button variant="primary" className='btn-form grey-back' onClick={props.handleClose1}>
                           Скасувати
                        </Button>
                        </div>
                  </Form>
                     </Modal.Body>
                     </Modal>
        </>
    )
}

export default SignUpForm