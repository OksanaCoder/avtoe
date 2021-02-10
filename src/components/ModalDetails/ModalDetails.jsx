
import React,  { useState, useEffect } from 'react'
import { Col, Row, Container, Card, Modal, Button } from 'react-bootstrap'
import imageCar from '../../img/ferrari.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'

const ModalDetails = (props) => {
    const [show_details, setShow_details] = useState(props);

    const handleClose_details = () => setShow_details(false);

    useEffect(() => {
        setShow_details(props);
      }, [props]);
    return (
        <>
            <Modal show={show_details} onHide={handleClose_details} className='no-shadow no-border-modal modal-details'>
                <Modal.Header closeButton>  
                <Modal.Title style={{fontWeight: '700'}}>Деталі авто</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
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
                     
                        <h4 style={{fontWeight: 'bold'}}>2016 Ferrari California</h4>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '30px'}}>$ 91 500</small>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>Автомат</Col>
                                </Row>
                                    {/* <button  className='btn-item swap-btn mt-3'>Запропонувати торг</button> */}
                                 <Row className='mt-4 row-modal'>
                                     <Col> Рік випуску:
                                     </Col>
                                     <Col> 2014
                                     </Col>
                                </Row>  
                                <Row className='mt-1 row-modal'> 
                                     <Col> Привід:
                                     </Col>
                                     <Col> повний
                                     </Col>
                                </Row>  
                                <Row className='mt-1 row-modal'>
                                     <Col> Колір:
                                     </Col>
                                     <Col> червоний
                                     </Col>
                                </Row>  
                                <Row className='mt-1 row-modal'>
                                     <Col> Опис:
                                     </Col>
                                     <Col> 
                                     </Col>
                                </Row>   
                                <Row className='mt-1 row-modal'>
                                     <Col> Додаткова інформація:
                                     </Col>
                                     <Col> 
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
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={handleClose_details} className='btn-form grey-back btn btn-primary pt-1 pl-4 pr-4 pb-1'>
                    Cancel
                </Button>
                </Modal.Footer>
                </Modal>
        </>

    )
}


export default ModalDetails