import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Card } from 'react-bootstrap'
import ModalDetails from '../ModalDetails/ModalDetails'
import CarItem from '../CarItem/CarItem'


const Featured = () => {
    const data = [
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
            typeSale: 'buy now'
        }
]
    const [show_details, setShow_details] = useState(false);
    const handleShow_details = () => setShow_details(true);
    const handleClose_details = () => setShow_details(false);

    return(
        <Container className='text-white' fluid>
{/*          
                    <div className='heading-style p-5'  style={{background: '#262626'}}>
                        
                        <h6 className='blue-line'>Останні</h6>
                        <h3>Оновлення</h3>
                    
                    </div> */}
               

            <Row style={{background: '#262626'}} className='pb-5'>
           
                <Col lg={12} md={12} sm={12}>           
                    <CarItem data={data}/>
                </Col>

{/* 
                <Col lg={3} md={12} sm={12} className='adv-box pt-5 mb-5' style={{background: '#000', borderRadius :'20px'}}>
                    <Row className='d-flex flex-direction-column'>
                        <Col lg={12} md={6} sm={12} className='short-border'>
                        <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature-adv'>
                        </Card.Img>
                        <Card.Body className='card-text'>
                            <small>2016 Ferrari California</small>
                            <p >Cтартова ціна: <small className='font-bid-price'>$ 30 500</small></p>
                             <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item bit-btn'>Зробити ставку</button></Col>
                                </Row>       
                        </Card.Body>     
                        </Card>      
                     </Col>
                     
              </Row>
            </Col> */}
            </Row>
        </Container>
    )
}

export default Featured