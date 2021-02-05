import React, { useState } from 'react'
import { Container, Navbar, Nav, Modal, Button, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import './style.css'
import logo from '../../img/logo-small.png'
import person from '../../img/person.svg'
import sign from '../../img/sign-up.png'
import price from '../../img/tag.svg'
import percent from '../../img/offer.svg'
import calendar from '../../img/calendar.svg'
import payment from '../../img/money.svg'
import { Link, BrowserRouter } from 'react-router-dom'



const NavBar = () => {
   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [show1, setShow1] = useState(false)
   const handleClose1 = () => setShow1(false);
   const handleShow1 = () => setShow1(true);
   const [show_calc, setShow_calc] = useState(false)
   const handleClose_calc = () => setShow_calc(false);
   const handleShow_calc = () => setShow_calc(true);
  
   return(
       <BrowserRouter>

            <Navbar expand="lg" style={{paddingTop: '20px', marginBottom: '0'}}>
               <Container fluid>
               <Navbar.Brand href="#home"><img style={{ width: '40px'}} src={logo} alt='logo'/></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto" style={{display: 'flex', alignItems: 'center'}}>
                        <Nav.Link className='white nav-item' href="#deets">Про Нас</Nav.Link>
                          {/* <Nav.Link className='white nav-item' href="#deets">Каталог</Nav.Link>  */}
                        <Nav.Link className='white nav-item' href="#deets" onClick={handleShow_calc}>Кредитний калькулятор</Nav.Link>  
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
               
               {/* modal for calculator */}
               <Modal show={show_calc} onHide={handleClose_calc} className='login-form calc_form'>
                     <Modal.Header closeButton>
                        <Modal.Title>Кредитний калькулятор</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>

                     <Form>
                     <Row>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Ціна
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={price} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Ставка, %
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={percent} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup" />
                              </InputGroup>
                        </Col>
                     </Row>
                     <Row className='line-bottom mt-4'>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Період (місяців)
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={calendar} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Завдаток
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={payment} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                     </Row>
                    
                       <Row className='calc-output'>
                          <Col lg={4} md={12} sm={12} className='border-right-calc'>
                             <h5>Місячний платіж</h5>
                             <h4>-</h4>
                          </Col>
                          <Col lg={4} md={12} sm={12} className='border-right-calc'>
                             <h5>Загальний відсоток</h5>
                             <h4>-</h4>
                          </Col>
                          <Col lg={4} md={12} sm={12}>
                             <h5>Загальна сума</h5>
                             <h4>-</h4>
                          </Col>
                       </Row>
                     
                       <div className='text-right mt-5'>
                     
                        <Button variant="primary" type="submit" className='btn-form grey-back' onClick={handleClose_calc}>
                           Скасувати
                        </Button>
                       </div>
                  </Form>
                     </Modal.Body>
                     </Modal>

               {/* sign up modal */}

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

            {/* login form modal */}
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
              
       </BrowserRouter>
   )
}

export default NavBar
