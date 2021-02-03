import React, { Component } from 'react'
import {Container, Button, Form, Row, Col } from 'react-bootstrap'
import './style-2.css'
import NavBar from '../NavBar/NavBar'
import arrow from '../../img/arrow-down.png'
import search from '../../img/search.svg'


const Header = () => {
   return(
       <>
       <Container fluid className='background' style={{fontWeight: '700'}}>
            <NavBar />
            <Row className='align-center'>
              <Col lg={6}>
              <div className='flex-center white'>
                <h4 style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold'}}>Купуй <small style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold', color: '#F7BA04'}}>Надійно</small></h4>
                <h6 style={{fontSize: '20px', letterSpacing: '3px', color: 'grey !important'}}>в Кредит, Лізинг, Повна Оплата</h6>
            </div>
              </Col>
          <Col lg={6}>
            
            <Form className='white form-style row' style={{position: 'relative'}}>
            <Form.Group controlId="exampleForm.ControlSelect1" className='col'>
                {/* <Form.Label>Марка авто</Form.Label> */}
                <Form.Label className='text-dark'>Brand</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>BMW</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2"  className='col'>
                {/* <Form.Label>Рік випуску</Form.Label> */}
                <Form.Label className='text-dark'>Year</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>2012</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3"  className='col'>
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
            <div className='col text-center'>
            {/* <Button className='btn-search'>Пошук</Button> */}
            <Button className='btn-search'>Пошук</Button>
            </div>
            {/* <img width='200px' style={{position: 'absolute', right: '0', top: '100px'}} src='https://image.freepik.com/free-photo/adult-fluffy-red-cat-sitting-raised-its-front-paws-up-animal-isolated_116441-14215.jpg' /> */}

            </Form>
            </Col>   
            </Row>
            <img src='https://demo.vehicatheme.com/wp-content/uploads/2020/09/car-silver.png' style={{position: 'absolute', bottom: '-60px', width: '30%', left: '5%'}}/>
       </Container>
       </>
   )
}

export default Header
