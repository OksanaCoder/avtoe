import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bank_1 from '../../img/bank-1.png'
import bank_2 from '../../img/bank-2.png'
import  bank_3  from '../../img/bank-3.png'
import bank_4 from '../../img/tac.png'
import bank_5 from '../../img/hap.png'
import './style.css'

 const Calculators = ({reference}) => {
    return (
        <>
      
         <Row className='color-light-dark p-5 ' ref={reference}>
                <div className='heading-style'>
                    
                    <h6 className='blue-line'>Авто</h6>
                    <h3>в Кредит</h3>
                
                </div>
                </Row> 
          <Container className='color-dark' fluid>
                <Row className='row-calcs p-5'>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_1} className='img-bank'/>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_2} className='img-bank'/>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_3} className='img-bank'/>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_4} className='img-bank last'/>
                    </Col>
                </Row>
                <Row className='row-calcs p-5'>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_1} className='img-bank'/>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_2} className='img-bank'/>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_3} className='img-bank'/>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <img src={bank_1} className='img-bank last'/>
                    </Col>
                </Row>
          </Container>
        </>

    )
}

export default Calculators