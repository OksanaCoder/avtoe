import './App.css';
import React, { useState, useRef } from 'react'
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
import mail from './img/mail.png'
import calculate from './img/calculate.svg'
import read from './img/read.svg'
import email from './img/email.svg'
import credit from './img/credit.svg'
import cart from './img/cart.svg'
import hammer from './img/hammer.svg'
import up from './img/arrow-up.png'
import home from './img/home.svg'
import Calculator from './components/NavBar/Calculator';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import Cooperation from './components/Cooperation/Cooperation' 
import Magazine from './components/Magazine/Magazine' 
import Auction from './components/Auction/Auction'
import './components/NavBar/style.css'
import RequestForm from './components/RequestForm/RequestForm'

const App = () => {

  const myRef = useRef(null)
  const scrollToCredit = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  const scrollToBottom =  () => {
    window.scrollTo({
     top: document.documentElement.scrollHeight,
     behavior: "smooth"
    })
  }  
  const scrollToTop =  () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth"
    })
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show_calc, setShow_calc] = useState(false)
  const handleShow_calc = () => setShow_calc(true);
  const handleClose_calc = () => setShow_calc(false)


  const [show_form, setShow_form] = useState(false)
  const handleShowForm = () => setShow_form(true)
  const handleCloseForm = () => setShow_form(false)
  return (
    <>
    <Router>
  
        <Navbar expand="lg" className='bottomNav'>
               <Container fluid className='display-flex justify-content-around'>
      <Nav className='mob-nav'> 
        <Nav className='nav-style nav-no-col nav-style-mob'>
               <Nav.Link className='nav-item'>
               <BrowserLink to='/'  className='text-white link-nav '>
                        <img className='img-small' src={home}/>
                   
                          Головна
                    </BrowserLink>      
               </Nav.Link>
               <Nav.Link className='nav-item'>
               <BrowserLink to='/catalog' className='text-white link-nav'> 
                        <img className='img-small' src={cart}/>
                       Catalog</BrowserLink>    
               </Nav.Link>
               <Nav.Link className='nav-item'>
               <BrowserLink to='/auction' className='text-white link-nav'>
                        <img src={hammer} width='20px' className='mb-1 img-small'/>
                      Auction</BrowserLink>   
               </Nav.Link>
  
               <Nav.Link className='nav-item'>
               <BrowserLink to='/'  className=' text-white link-nav' onClick={scrollToCredit}>
                        <img className='img-small' src={credit}/> 
                          Кредит
                        </BrowserLink>  
                </Nav.Link> 
                <Nav.Link className='nav-item text-white link-nav'  to='/magazine'  >
                <BrowserLink to='/magazine'  className=' text-white link-nav'>
                        <img className='img-small' src={read}/> 
                      
                          Журнал
                        </BrowserLink>  
                </Nav.Link>
                <Nav.Link className='nav-item text-white link-nav'  to='/magazine'  >
                <BrowserLink to='/cooperation'  className=' text-white link-nav'>
                        <img className='img-small' src={read}/> 
                      
                          Ищем
                        </BrowserLink>  
                </Nav.Link>
          
                        <Nav.Link className='nav-item link-nav'>
                        <BrowserLink className=' text-white link-nav'
                                     onClick={scrollToBottom}
                                  >

                        <img className='img-small' src={email}/>
                        
                          Контакти
                        </BrowserLink>
                        </Nav.Link>
                
                           <Nav.Link className=' nav-item link-nav'  onClick={handleShow}>
                             <img className='img-small' src={person} />
                            Увійти
                            
                              </Nav.Link>
                              <Nav.Link className=' nav-item link-nav' onClick={handleShow1}>
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
      
      <img className='img-mail' src={mail} onClick={handleShowForm}/>
      <img className='up' src={up} onClick={scrollToTop} />
      <RequestForm show_form={show_form} handleShowForm={handleShowForm} handleCloseForm={handleCloseForm} />
       

      <Route path='/' exact component={() => <Header reference={myRef} />}/>
      <Route path='/catalog' exact component={Shop} />
      <Route path='/about' exact component={About} />  
      <Route path='/auction' exact component={Auction} />  
      <Route path='/cooperation' exact component={Cooperation} />   
      <Route path='/magazine' exact component={Magazine} />    
      <MobApp />
      <Footer />
     
      </Router>
    </>
  );
}

export default App;
