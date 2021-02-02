import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './style.css'
import logo from '../../img/logo-1.png'

const NavBar = () => {
   return(
       <>
            <Navbar expand="lg" style={{paddingTop: '20px'}}>
               <Container>
               <Navbar.Brand href="#home"><img style={{ width: '100px'}} src={logo} alt='logo'/></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto" style={{display: 'flex', alignItems: 'center'}}>
                        {/* <Nav.Link className='white nav-item' href="#deets">Про нас</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Каталог</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Співпраця</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Контакти</Nav.Link> 
                        <Nav.Link className='white nav-item' href="#deets">Мова</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Увійти</Nav.Link>
                         <Nav.Link className='white nav-item' href="#deets">Реєстрація</Nav.Link> */}
                        <Nav.Link className='white nav-item' href="#deets">About us</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Our Cars</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Contacts</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">
                           + Add </Nav.Link>
                           <Nav.Link className='white nav-item' href="#deets">Sign in / Sign up</Nav.Link>
                           <Nav.Link className='white nav-item' href="#deets">
                           
                           <select style={{fontSize: '20px', background: 'none', border: 'none', color: '#fff'}}>
                             <option value="eng">🇬🇧</option>
                             <option value="ua">🇺🇦</option>
                             <option value="ru">🇷🇺</option>           
                           </select>
                        </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
               </Container>
               </Navbar>
              
       </>
   )
}

export default NavBar
