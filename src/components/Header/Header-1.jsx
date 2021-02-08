import React, { Component } from 'react'
import {Container, Button, Form, Row, Col } from 'react-bootstrap'
import './style-2.css'
import logo from '../../img/logo.svg'
import car from '../../img/white.png'
import woman from '../../img/woman.png'
import car_1 from '../../img/white-2.png'
import car_2 from '../../img/black-1.png'
import man from '../../img/man.png'
import cat from '../../img/caty.png'
import cloud from '../../img/cloud.png'
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
                  {/* <img style={{ width: '30px'}} src={logo} alt='logo' className='logo-svg'/> */}
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
                <h6 style={{fontSize: '30px', letterSpacing: '3px'}}>Мрієш Про Власне Авто ?</h6>
                <h4 style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold'}}>АВТО <small style={{fontSize: '60px', letterSpacing: '1px', fontWeight: 'bold', color: '#F7BA04'}}>Є</small>!</h4>
                <h6 style={{fontSize: '20px', letterSpacing: '3px'}}><small className='highlight'>Апетитні</small> умови також <small className='highlight'>Є</small></h6>

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
            <img src={cat} style={{ position: 'absolute', bottom: '70px', width: '30%', right: '35%'}}/>
            <img src={cloud} style={{ position: 'absolute', bottom: '200px', width: '30%', right: '0%'}}/>

            {/* <img src={car_1} style={{ position: 'absolute', bottom: '90px', width: '30%', right: '2%'}}/> */}
            {/* <img src={car_2} style={{ position: 'absolute', bottom: '100px', width: '30%', right: '30%', opacity:'0.3'}}/> */}
        
       </Container>
       </>
   )
}

export default Header
