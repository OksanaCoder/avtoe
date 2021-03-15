import React, { useRef, useState, useEffect, useCallback } from 'react'
import {Container, Button, Form, Row, Col } from 'react-bootstrap'
import './style-2.css'
import search from '../../img/search.png'
import img_4 from '../../img/i-4.svg'
import img_1 from '../../img/i-1.svg'
import img_2 from '../../img/i-2.svg'
import img_3 from '../../img/i-3.svg'
import image3 from '../../img/fera.png'
import image2 from '../../img/slider-2.png'
import image1 from '../../img/slider-1.png'
import logo_big from '../../img/logo-big.png'
import logo_small from '../../img/logo-small.png'
import BackgroundSlider from 'react-background-slider'
import Calculators from '../Calculators/Calculators'
import  Advantages from '../Advantages/Advantages'
import SliderCars from '../SliderCars/SliderCars'


const Header = () => {
   const [ isPicked, setPicked ] = useState(false)
   const handleClick = () => {
     setPicked(!isPicked)
   }


   return(
       <>
         <Container className='background' fluid style={{fontWeight: '700'}}>
        {/* <BackgroundSlider className='background'
          images={[image1, image2, image3]}
          duration={3} transition={2} />  */}
          
           <Row className='p-4 nav-logo-lang'>
             <Col lg={6} md={6} sm={12} className='text-left'>
                  <img src={logo_small} alt='logo' width='30px'/>
             </Col>
             <Col lg={6} md={6} sm={12} className='text-right flex-right'>
                  <button onClick={handleClick} className={!isPicked ? 'active-link' : 'not-active'}><h6>UA</h6></button>
                  <button onClick={handleClick} className={isPicked ? 'active-link' : 'not-active'}><h6 className='ml-3'>RU</h6></button>
             </Col>
           </Row>
        
            <Row className='align-center'>
              
              <Col>
              <div className='flex-center white'>

                <h6 style={{fontSize: '1rem', fontWeight: 'bold',}}>Досить Мріяти про Авто</h6> 
                
                <h4 style={{fontSize: '3rem', fontWeight: 'bold', color: '#036DFD', lineHeight: '1'}}><small style={{fontSize: '2rem', fontWeight: 'bold', color: '#fff'}}>У</small>
                   <img style={{ width: '150px'}} src={logo_big} alt='logo' className='ml-3 mr-4'/>
                <small style={{fontSize: '2rem', fontWeight: 'bold', color: '#fff'}}>для тебе завжди є пропозиції</small></h4>
              
              <input type='text' placeholder='BMW X5  ' className='search-line'/>
              <img src={search}  width='20px'/>

              </div>
             </Col>
            </Row>
     
       <Row className='text-center mt-5'>

         <Col >
             <img src={img_4} className='white-fill mr-2' width='70px'/>
        
             <img src={img_1} width='70px' className='white-fill mr-2' />
         
             <img src={img_2} width='70px' className='white-fill' />

             <img src={img_3} width='70px' className='white-fill ml-2' />
         </Col>
       </Row>
           
       </Container>
 
       <SliderCars />
       <Calculators />
       <Advantages />

       
       </>
   )
}

export default Header
