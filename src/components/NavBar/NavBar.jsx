import React, { useState } from 'react'
import { Container, Navbar, Nav, Modal, Button, Form } from 'react-bootstrap'
import './style.css'
import logo from '../../img/logo-small.png'
import person from '../../img/person.svg'
import sign from '../../img/sign-up.png'


const NavBar = () => {
   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [show1, setShow1] = useState(false)
   const handleClose1 = () => setShow1(false);
   const handleShow1 = () => setShow1(true);
   return(
       <>
            <Navbar expand="lg" style={{paddingTop: '20px'}}>
               <Container fluid>
               <Navbar.Brand href="#home"><img style={{ width: '40px'}} src={logo} alt='logo'/></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto" style={{display: 'flex', alignItems: 'center'}}>
                        <Nav.Link className='white nav-item' href="#deets">Про Нас</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Каталог</Nav.Link>  
                        <Nav.Link className='white nav-item' href="#deets">Співпраця</Nav.Link> 
                        <Nav.Link className='white nav-item' href="#deets">Контакти</Nav.Link>
                        {/* <Nav.Link className='white nav-item' href="#deets"> + Add </Nav.Link> */}
                           <Nav.Link className='white nav-item' href="#deets">
                             <img src={person} className='icon-white'/>
                             <button className='btn-link mr-3' onClick={handleShow}>Увійти</button>/
                             <img src={sign} className='icon-white ml-3'/>
                             <button className='btn-link' onClick={handleShow1}>Реєстрація</button>
                              </Nav.Link>
                           <Nav.Link className='white nav-item' href="#deets">
                           
                           <select style={{fontSize: '20px', background: 'none', border: 'none', color: '#fff'}}>
                             <option value="ua">🇺🇦</option>
                             <option value="ru">🇷🇺</option>           
                           </select>
                        </Nav.Link>
                  </Nav>
                  
               </Navbar.Collapse>
                  <Modal show={show1} onHide={handleClose1} className='login-form'>
                     <Modal.Header closeButton>
                        <Modal.Title>Реєстрація</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                     <Form>
                        <Form.Group controlId="formBasicName">
                           <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                           <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                           <Form.Control placeholder="Номер телефону" />
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword">
                           <Form.Control type="password" placeholder="Пароль" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                           <Form.Check type="checkbox" label="Я погоджуюся з умовами користування сайтом" />
      
                        </Form.Group>
                       <div className='flex-form mt-5'>
                        <Button variant="primary" type="submit" className='btn-form yellow-back'>
                           Зареєструватись
                        </Button>
                        <Button variant="primary" type="submit" className='btn-form grey-back' onClick={handleClose1}>
                           Скасувати
                        </Button>
                        </div>
                  </Form>
                     </Modal.Body>
                     </Modal>


                     <Modal show={show} onHide={handleClose} className='login-form'>
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
                        <Button variant="primary" type="submit" className='btn-form grey-back' onClick={handleClose}>
                           Скасувати
                        </Button>
                        </div>
                  </Form>
                     </Modal.Body>
                     </Modal>
               </Container>
               </Navbar>
              
       </>
   )
}

export default NavBar
