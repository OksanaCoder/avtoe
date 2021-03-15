import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCar from '../../img/ferrari.jpg'
import imageCar_1 from '../../img/toyota.jpg'
import imageCar_2 from '../../img/camry.jpg'
import './style.css'
import { Col, Row, Card, Container } from 'react-bootstrap'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import arrow_down from '../../img/arrow-down.png'
import ModalDetails from '../ModalDetails/ModalDetails'
import CarItemBuyNow from '../CarItemBuyNow/CarItemBuyNow'
import {Link } from "react-router-dom";


const SliderCars = () => {
    const dataCars = [
        {
            name : "BMW",
            price : "80 500",
            mileage: 22,
            city: "Kyiv",
            fuel: "Бензин",
            type: "Автомат",
            color: "червоний",
            year: 2014,
            drive: "повний",
            moreInfo : " ",
            mainImage: [],
            images: [],

        }
]

  const [show_details, setShow_details] = useState(false);
  const handleShow_details = () => setShow_details(true);
  const handleClose_details = () => setShow_details(false);

  
    return (
        <>
      <div style={{background: '#262626', paddingBottom: '50px'}}>
        <Container fluid>
   
        <div className='heading-style p-5'  style={{background: '#262626'}}>
                        
                        <h6 className='blue-line'>Останні</h6>
                        <h3>Оновлення</h3>
                    
        </div>
               
       <div className='pad-none p-5'>
           
        <CarItemBuyNow dataCars={dataCars}/>
       
       </div>
  
        
        <Row>
          <Col className='text-center'>
             <Link to='/catalog'><button className='btn-item auction-btn'><img width='15px' src={arrow_down}/></button></Link>
          </Col>
        </Row>
     
      </Container>

    
    </div>
                    
         
          
        </>
    )
}

export default SliderCars