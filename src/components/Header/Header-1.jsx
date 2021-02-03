import React, { Component } from 'react'
import {Container, Button, Form } from 'react-bootstrap'
import './style-2.css'
import NavBar from '../NavBar/NavBar'
import arrow from '../../img/arrow-down.png'
import search from '../../img/search.svg'


const Header = () => {
   return(
       <>
       <Container fluid className='background' style={{fontWeight: '700'}}>
            <NavBar />
            <div className='flex-center white'>
                <h4 style={{fontSize: '40px', letterSpacing: '1px', fontWeight: 'bold'}}>Купуй <small style={{fontSize: '40px', letterSpacing: '1px', fontWeight: 'bold', color: '#F7BA04'}}>Надійно</small></h4>
                <h6 style={{fontSize: '16px', letterSpacing: '3px', color: 'grey !important'}}>в Кредит, Лізинг, Повна Оплата</h6>
            </div>
            <Form className='white form-style row'>
            <Form.Group controlId="exampleForm.ControlSelect1" className='col-lg-3 col-md-12 col-sm-12'>
                {/* <Form.Label>Марка авто</Form.Label> */}
                <Form.Label className='text-dark'>Brand</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>BMW</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2"  className='col-lg-3 col-md-12 col-sm-12'>
                {/* <Form.Label>Рік випуску</Form.Label> */}
                <Form.Label className='text-dark'>Year</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>2012</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3"  className='col-lg-3 col-md-12 col-sm-12'>
                {/* <Form.Label>Рік випуску</Form.Label> */}
                <Form.Label className='text-dark'>Price, $</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>0 - 3000</option>
                  <option>3 000 - 9 000</option>
                  <option>9 000 - 20 000</option>
                  <option>20 000 - 50 000</option>
                  <option>50 000 +</option>
                </Form.Control>
            </Form.Group>
            <div className='col-lg-3 col-md-12 col-sm-12'>
            {/* <Button className='btn-search'>Пошук</Button> */}
            <Button className='btn-search'><img src={search}/></Button>
            </div>
            </Form>
            <img src='https://demo.vehicatheme.com/wp-content/uploads/2020/09/car-silver.png' style={{position: 'absolute', bottom: '-60px', width: '25%', left: '10%'}}/>
            {/* <div className='flex-center-arrow'>
                <img src={arrow} className='arrow-down'/>
            </div> */}
       </Container>
       </>
   )
}

export default Header
