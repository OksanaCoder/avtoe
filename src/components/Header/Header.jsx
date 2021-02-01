import React, { Component } from 'react'
import {Container, Button, Form } from 'react-bootstrap'
import './style.css'
import NavBar from '../NavBar/NavBar'
import arrow from '../../img/arrow-down.png'


const Header = () => {
   return(
       <>
       <Container fluid className='background' style={{fontWeight: '700'}}>
            <NavBar />
            <div className='flex-center white'>
                <h4 style={{fontSize: '35px', letterSpacing: '1px'}}>Купуй Надійно</h4>
                <h6 style={{fontSize: '16px', letterSpacing: '3px'}}>Кредит, Лізинг, Повна Оплата</h6>
            </div>
            <Form className='white form-style row'>
            <Form.Group controlId="exampleForm.ControlSelect1" className='col-lg-4 col-md-12 col-sm-12'>
                {/* <Form.Label>Марка авто</Form.Label> */}
                <Form.Label>Brand</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>BMW</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1"  className='col-lg-4 col-md-12 col-sm-12'>
                {/* <Form.Label>Рік випуску</Form.Label> */}
                <Form.Label>Year</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>2012</option>
                </Form.Control>
            </Form.Group>
            <div className='col-lg-4 col-md-12 col-sm-12'>
            {/* <Button className='btn-search'>Пошук</Button> */}
            <Button className='btn-search'>Search</Button>
            </div>
            <div className='row' style={{textAlign:'center', display: 'flex', justifyContent: 'center'}}>
            {/* <Form.Label>Ціна, $</Form.Label> */}
            <Form.Label>Price, $</Form.Label>
            <Form.Group controlId="formBasicCheckbox" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Check type="checkbox" label="0 - 3 000" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Check type="checkbox" label="3 000 - 9 000" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Check type="checkbox" label="9 000 - 20 000" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Check type="checkbox" label="20 000 - 50 000" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Check type="checkbox" label="50 000 и более" />
            </Form.Group>
            </div>
            </Form>
            <div className='flex-center'>
                <img src={arrow} className='arrow-down'/>
            </div>
       </Container>
       </>
   )
}

export default Header
