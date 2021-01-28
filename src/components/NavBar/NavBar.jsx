import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './style.css'
import logo from '../../img/logo.png'


const NavBar = () => {
   return(
       <>
            <Navbar expand="lg">
               <Container>
               <Navbar.Brand href="#home"><img style={{marginTop: '10px'}} src={logo} alt='logo'/></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                        <Nav.Link className='white nav-item' href="#deets">О нас</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Каталог</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Купим</Nav.Link>
                        <Nav.Link className='white nav-item' href="#deets">Контакты</Nav.Link>
                  </Nav>
                
               </Navbar.Collapse>
               </Container>
               </Navbar>
              
       </>
   )
}

export default NavBar
