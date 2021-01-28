import React, { Component } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import { Col, Row, Container } from 'react-bootstrap'

const CarItem = () => {
    return (
        <div>
            <Container style={{paddingTop: '100px'}}>
            <Row style={{display: 'flex', alignItems: 'center'}}>
                <Col lg={12} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={imageCar} style={{width: '100%'}}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3 style={{fontWeight: 'bold'}}>2016 Ferrari California</h3>
                            <Row className='align-center'>
                                <Col lg={6} md={6} sm={12}>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '30px'}}>$ 91 500</small>
                                </Col>
                                <Col> <button className='btn-item buy-now'>Купить сейчас</button></Col>
                            </Row>
                         
                                <Row className='align-center text-center'>
                                    <Col>22 тыс. км</Col>
                                    <Col>Киев</Col>
                                </Row>
                                <Row className='align-center text-center'>
                                    <Col>Бензин, 6 л.</Col>
                                    <Col>Автомат</Col>
                                </Row>
                            
                                <Row className='align-center'> 
                                    <Col></Col>
                                    <Col><button  className='btn-item swap-btn'>Предложить торг</button></Col>
                                </Row>
                               <Row className='align-center'>
                                   <Col>$<input type='number' placeholder='40 000' className='price-input'/></Col>
                                   <Col><button  className='btn-item auction-btn'>Сделать ставку</button></Col>
                               </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
           </Container>
        </div>
    )
}

export default CarItem