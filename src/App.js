import './App.css';
import React, {useState} from 'react'
import Header from './components/Header/Header-1'
import Categories from './components/Categories/Categories'
import Shop from './components/Shop/Shop'
import Advantages from './components/Advantages/Advantages'
import MobApp from './components/MobApp/MobApp'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar, Nav, Modal, Button, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import './components/NavBar/style.css'
import logo from './img/logo-small.png'
import person from './img/person.svg'
import sign from './img/sign-up.png'
import price from './img/tag.svg'
import percent from './img/offer.svg'
import calendar from './img/calendar.svg'
import payment from './img/money.svg'
import book from './img/book.svg'
import calculate from './img/calculate.svg'
import read from './img/read.svg'
import email from './img/email.svg'
import work from './img/work.svg'
import cart from './img/cart.svg'
import hammer from './img/hammer.svg'
import otp from './img/otp.png'
import accordbank from './img/accordbank.png'
import privat from './img/privat.png'
import home from './img/home.svg'


const App = () => {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show_calc, setShow_calc] = useState(false)
  const handleClose_calc = () => setShow_calc(false);
  const handleShow_calc = () => setShow_calc(true);
  return (
    <>
    <Router>
        <Navbar expand="lg" className='bottomNav'>
               <Container fluid>
        <Nav className='nav-style'>
               <Nav.Link className='nav-item' href="#deets">
                        <img src={cart}/>
                      <Link to='/catalog' className='black-color'>Каталог</Link>    
               </Nav.Link>
               <Nav.Link className='nav-item' href="#deets">
                        <img src={hammer} width='20px' className='mb-1'/>
                         Аукціон
               </Nav.Link>
        </Nav>

               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto nav-style">
                  <Nav.Link href="#deets" className='nav-item'>
                        <img src={home}/>
                    <Link to='/'  className='black-color'>
                          Головна
                    </Link>      
                          </Nav.Link>
                        <Nav.Link className='nav-item' href="#deets">
                        <img src={book}/>
                          Про Нас
                          </Nav.Link>
                        <Nav.Link className=' nav-item' href="#deets" onClick={handleShow_calc}>
                        <img src={calculate}/>
                          Калькулятор</Nav.Link>  
                        <Nav.Link className=' nav-item' href="#deets">
                        <img src={work}/>
                          Співпраця</Nav.Link> 
                        <Nav.Link className=' nav-item' href="#deets">
                        <img src={read}/>
                          Журнал</Nav.Link> 
                        <Nav.Link className=' nav-item' href="#deets">
                        <img src={email}/>
                          Контакти</Nav.Link>
                           <Nav.Link className=' nav-item' href="#deets"  onClick={handleShow}>
                             <img src={person} />
                            Увійти
                            
                              </Nav.Link>
                              <Nav.Link className=' nav-item' href="#deets" onClick={handleShow1}>
                             <img src={person} />
                           Реєстрація
                            
                              </Nav.Link>
                             
                        
                  </Nav>
                  
               </Navbar.Collapse> 

               <Modal show={show_calc} onHide={handleClose_calc} className='login-form calc_form'>
                     <Modal.Header closeButton>
                        <Modal.Title><h2>Кредитний калькулятор</h2></Modal.Title>
                     
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
      {/* <NavBar /> */}
     
      <Route path='/' exact component={Header} />
      <Route path='/catalog' exact component={Shop} />
      <Advantages />
      <MobApp />
      <Footer />
      </Router>
    </>
  );
}

export default App;
