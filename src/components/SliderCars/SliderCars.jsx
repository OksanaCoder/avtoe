import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCar from '../../img/ferrari.jpg'
import imageCar_1 from '../../img/toyota.jpg'
import imageCar_2 from '../../img/camry.jpg'
import './style.css'
import { Col, Row, Card } from 'react-bootstrap'


const SliderCars = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <>
      <Slider {...settings}>
        <Card className='p-3'>
        <img className='slider-img' src={imageCar}/>
        <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>      
        </Card>
      <Card className='p-3'>
      <img className='slider-img' src={imageCar_1}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      <Card className='p-3'>
      <img className='slider-img' src={imageCar_2}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      <Card className='p-3'>
      <img className='slider-img' src={imageCar}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      <Card className='p-3'>
      <img className='slider-img' src={imageCar}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      <Card className='p-3'>
      <img className='slider-img' src={imageCar_1}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      <Card className='p-3'>
      <img className='slider-img' src={imageCar_2}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      <Card className='p-3'>
      <img className='slider-img' src={imageCar}/>
      <Card.Body>
                <h6 className='font-slider'>Ferra 2020</h6>
                <h6 className='price-slider'>$ 20 000</h6>
        </Card.Body>   
      </Card>
      
     
    
    </Slider>
                    
         
          
        </>
    )
}

export default SliderCars