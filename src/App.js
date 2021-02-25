import './App.css';
import React, {useState, useRef} from 'react'
import Header from './components/Header/Header-1'
import Categories from './components/Categories/Categories'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import MobApp from './components/MobApp/MobApp'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link as BrowserLink } from 'react-router-dom'
import { Container, Navbar, Nav} from 'react-bootstrap'
import './components/NavBar/style.css'
import logo from './img/logo-small.png'
import person from './img/person.svg'
import book from './img/book.svg'
import calculate from './img/calculate.svg'
import read from './img/read.svg'
import email from './img/email.svg'
import work from './img/work.svg'
import cart from './img/cart.svg'
import hammer from './img/hammer.svg'
import home from './img/home.svg'
import Calculator from './components/NavBar/Calculator';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import Cooperation from './components/Cooperation/Cooperation' 
import Magazine from './components/Magazine/Magazine' 
import { Link } from 'react-scroll'
import './components/NavBar/style.css'

const App = () => {
 
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show_calc, setShow_calc] = useState(false)
  const handleShow_calc = () => setShow_calc(true);
  const handleClose_calc = () => setShow_calc(false)

  return (
    <>
    <Router>
        <Navbar expand="lg" className='bottomNav'>
               <Container fluid>
      <Nav className='mob-nav'> 
        <Nav className='nav-style nav-no-col nav-style-mob'>
               <Nav.Link href="#deets" className='nav-item'>
                        <img className='img-small' src={home}/>
                    <BrowserLink to='/'  className='black-color'>
                          Головна
                    </BrowserLink>      
               </Nav.Link>
               <Nav.Link className='nav-item' href="#deets">
                        <img className='img-small' src={cart}/>
                      <BrowserLink to='/catalog' className='black-color'>Catalog</BrowserLink>    
               </Nav.Link>
               <Nav.Link className='nav-item' href="#deets">
                        <img src={hammer} width='20px' className='mb-1 img-small'/>
                         Auction
               </Nav.Link>
  

               {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav"> */}
              
              
                        {/* <Nav.Link className=' nav-item' href="#deets">
                        <img className='img-small' src={read}/> */}
                        {/* <BrowserLink to='/magazine'  className='black-color'>
                          Журнал
                        </BrowserLink>  
                        </Nav.Link>  */}
                        {/* <Nav.Link className=' nav-item' href="#deets">
                        <img className='img-small' src={email}/>
                        <Link className='black-color' 
                              to='footer'
                              spy={true}
                              smooth={true}>
                          Контакти
                        </Link>
                        </Nav.Link> */}
                    </Nav>
                        <Nav className='ml-auto nav-style-mob'>
                           <Nav.Link className=' nav-item' href="#deets"  onClick={handleShow}>
                             <img className='img-small' src={person} />
                            Увійти
                            
                              </Nav.Link>
                              <Nav.Link className=' nav-item' href="#deets" onClick={handleShow1}>
                             <img className='img-small' src={person} />
                           Реєстрація
                            
                              </Nav.Link>
                        </Nav> 
                        </Nav>
              
                  
               {/* </Navbar.Collapse>  */}

            <Calculator show_calc={show_calc} handleShow_calc={handleShow_calc} handleClose_calc={handleClose_calc}/>

               {/* sign up modal */}

            <SignUpForm show1={show1} handleShow1={handleShow1} handleClose1={handleClose1} />

            {/* login form modal */}
            <LoginForm show={show} handleShow={handleShow} handleClose={handleClose} />       
        </Container>
      </Navbar>

      <Route path='/' exact component={Header} />
      <Route path='/catalog' exact component={Shop} />
      <Route path='/about' exact component={About} />  
      <Route path='/cooperation' exact component={Cooperation} />    
      {/* <MobApp /> */}
      <Route path='/magazine' exact component={Magazine} />    

      <Footer />
      </Router>
    </>
  );
}

export default App;
