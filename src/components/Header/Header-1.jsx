import React, { Component } from 'react'
import {Container, Button, Form, Row, Col } from 'react-bootstrap'
import './style-2.css'
import logo from '../../img/logo-small.png'
import car from '../../img/car.png'
import img_4 from '../../img/i-4.svg'
import img_1 from '../../img/i-1.svg'
import img_2 from '../../img/i-2.svg'
import img_3 from '../../img/i-3.svg'


const Header = () => {
   return(
       <>
       <Container fluid className='background' style={{fontWeight: '700'}}>
           <Row className='p-4'>
             <Col lg={6} md={6} sm={6} className='text-left'>
                  <img style={{ width: '30px'}} src={logo} alt='logo'/>
             </Col>
             <Col lg={6} md={6} sm={6} className='text-right'>
                 <select style={{fontSize: '20px', background: 'none', border: 'none', color: '#fff'}}>
                             <option value="ua">🇺🇦</option>
                             <option value="ru">🇷🇺</option>           
                  </select>
             </Col>
           </Row>
            <Row className='align-center'>
              <Col>
              <div className='flex-center white'>
                <h4 style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold'}}>Продаємо <small style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold', color: '#F7BA04'}}>Своїм</small></h4>
                <h6 style={{fontSize: '20px', letterSpacing: '3px'}}>в Кредит, Лізинг, Повна Оплата</h6>
              </div>
             </Col>
            </Row>
       <Row className='text-center mt-5'>

         <Col >
             <img src={img_4} className='white-fill mr-2' width='70px'/>
        
             <img src={img_1}width='70px' className='white-fill mr-2' />
         
             <img src={img_2} width='70px' className='white-fill' />

             <img src={img_3}width='70px' className='white-fill ml-2' />
         </Col>
       </Row>
            <img src={car} style={{ opacity: '0.4', position: 'absolute', bottom: '80px', width: '35%', left: '2%'}}/>
        
       </Container>
       </>
   )
}

export default Header
