
import React,  { useState, useEffect } from 'react'
import { Col, Row, Container, Card, Modal, Button } from 'react-bootstrap'
import imageCar from '../../img/ferrari.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { useParams } from 'react-router-dom';

const CarDetails = ({match, props}) => {
//    console.log(props, ' for modal')
   const [loggedIn, setLoggedIn]  = useState(false)
   
    const { params : { id},
        } = match;
   
  
        
   const checkUser = () => {
    
    }

    return (
        <>
       <h4>{id}</h4>
              {/* <Container fluid>
                 <h4>Деталі авто</h4>
                 {match.data.map((item, index) =>{
                 return(
                     <>
                 <Row>
             
                        <Col>
                        <Carousel>
                            <div>
                                <img src={imageCar} />
                            </div>
                            <div>
                                <img  src={imageCar} />
                            </div>
                            <div>
                                <img  src={imageCar}/>
                            </div>
                        </Carousel>
                        </Col>
                        <Col>
                     
                        <h4 style={{fontWeight: 'bold'}} className='name-details'>{item.name}</h4>
                                   <small className='price-details'>$ {item.price}</small>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>{item.mileage} тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>{item.city}</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>{item.fuel}</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>{item.type}</Col>
                                </Row>
                                 <Row className='mt-4 row-modal'>
                                     <Col> Рік випуску:
                                     </Col>
                                     <Col> {item.year}
                                     </Col>
                                </Row>  
                                <Row className='mt-1 row-modal'> 
                                     <Col> Привід:
                                     </Col>
                                     <Col> {item.drive}
                                     </Col>
                                </Row>  
                                <Row className='mt-1 row-modal'>
                                     <Col> Колір:
                                     </Col>
                                     <Col> {item.color}
                                     </Col>
                                </Row>  
                                <Row className='mt-1 row-modal'>
                                     <Col> Опис:
                                     </Col>
                                     <Col> {item.description}
                                     </Col>
                                </Row>   
                                <Row className='mt-1 row-modal'>
                                     <Col> Додаткова інформація:
                                     </Col>
                                     <Col> {item.extraData}
                                     </Col>
                                </Row>   
                                <Row className='mt-1 row-modal'>
                                     <Col> Контакти:
                                     </Col>
                                     <Col>  
                                          <ul className='list-unstyled'>
                                              <li>+38 050 249 09 09</li>
                                              <li> +38 093 249 09 09</li>
                                              <li> +38 097 249 09 09</li>
                                          </ul>
                                          
                                     </Col>
                                </Row>  
                                <Row className='mt-1 row-modal'>
                                     <Col> Де ми знаходимось ?
                                     </Col>
                                     <Col>  
                                      Київ, проспект Степана Бандери, 13
                                     </Col>
                                </Row>  
                     
                        </Col>
                    </Row>
            
                <div className='mt-3'>
                  { item.typeSale == 'auction' &&  <button  className='btn-item auction-btn-bet' onClick={checkUser}>Make a bet</button>}
                </div>
                </>
             )
            })}
              </Container>
               */}
                    
                 
            
            
        </>

    )
}


export default CarDetails