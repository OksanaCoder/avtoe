import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCar from '../../img/ferrari.jpg'
import imageCar_1 from '../../img/toyota.jpg'
import imageCar_2 from '../../img/camry.jpg'
import './style.css'
import { Col, Row, Card, Container } from 'react-bootstrap'


const SliderCars = () => {
   
    return (
        <>
      <div style={{background: '#262626', paddingBottom: '50px'}}>
        <Container fluid>
        <Row>
        <div className='heading-style  pl-5 pt-5 pb-5'>
               
               <h6 className='blue-line'>Останні</h6>
               <h3>Оновлення</h3>
           
           </div>
        </Row>

   
        <Row>

       <Col lg={3} md={6} sm={12}>
          <Card className='p-3 card-slider mb-4'>
            <img className='slider-img' src={imageCar}/>
            <Card.Body className='flex-footer'>
         
                   <h6 className='font-slider'>Ferra 2020</h6>
                    <h6 className='price-slider'>$ 20 000</h6>
          
              {/* <button className='more-btn'></button> */}
            
            </Card.Body>      
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Card className='p-3 card-slider mb-4'>
          <img className='slider-img' src={imageCar_1}/>
          <Card.Body>
                    <h6 className='font-slider'>Ferra 2020</h6>
                    <h6 className='price-slider'>$ 20 000</h6>
            </Card.Body>   
          </Card>
       </Col>
       <Col lg={3} md={6} sm={12}>
      <Card className='p-3 card-slider mb-4'>
      <img className='slider-img' src={imageCar_2}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
      <Card className='p-3 card-slider mb-4'>
      <img className='slider-img' src={imageCar}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      </Col>
      </Row>
      <Row>
      <Col lg={3} md={6} sm={12}>
      <Card className='p-3 card-slider mb-4'>
      <img className='slider-img' src={imageCar}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
      <Card className='p-3 card-slider mb-4'>
      <img className='slider-img' src={imageCar_1}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
      <Card className='p-3 card-slider mb-4'>
      <img className='slider-img' src={imageCar_2}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      </Col>
      <Col lg={3} md={6} sm={12}>
      <Card className='p-3 card-slider mb-4'>
      <img className='slider-img' src={imageCar}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      </Col>
        </Row>
        
        <Row>
          <Col className='text-right'>
             <button className='btn-item auction-btn'>Весь перелік</button>
          </Col>
        </Row>
     
      </Container>

    
    </div>
                    
         
          
        </>
    )
}

export default SliderCars