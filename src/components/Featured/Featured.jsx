import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Card } from 'react-bootstrap'
import ModalDetails from '../ModalDetails/ModalDetails'



const Featured = () => {
    const [show_details, setShow_details] = useState(false);
    const handleShow_details = () => setShow_details(true);
    const handleClose_details = () => setShow_details(false);

    return(
        <Container className='mt-5 text-white p-5' fluid>
            <Row>
                <Col lg={9} md={12} sm={12}>
                <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Details</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                </Col>
               
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>
                                
                        </Card.Body>
                       
                    </Card>
                </Col>
               
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>
                               
                        </Card.Body>
                       
                    </Card>
                </Col>
                
            </Row>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>
                                
                        </Card.Body>
                       
                    </Card>
                </Col>
               
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>
                               
                        </Card.Body>
                       
                    </Card>
                </Col>
               
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>                   
                        </Card.Body>
                       
                    </Card>
                </Col>
                
            </Row>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>
                               
                        </Card.Body>
                       
                    </Card>
                </Col>
               
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>
                                
                        </Card.Body>
                       
                    </Card>
                </Col>
               
                <Col lg={4} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                            <h5 className='color-yellow'>$ 91 500</h5>
                       
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>
                               
                        </Card.Body>
                       
                    </Card>
                </Col>
                
            </Row>
                </Col>
                <Col lg={3} md={12} sm={12} className='adv-box p-5'>
                    <Row className='d-flex flex-direction-column'>
                        <Col lg={12} className='short-border'>
                        <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature-adv'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <small className='font-adv'>2016 Ferrari California</small>
                            <p className='font-adv'>Cтартова ціна: <small className='font-bid-price'>$ 30 500</small></p>
                             <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item bit-btn'>Зробити ставку</button></Col>
                                </Row>       
                        </Card.Body>     
                        </Card>      
                     </Col>
                     <Col lg={12} className='short-border'>
                        <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature-adv'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <small className='font-adv'>2016 Ferrari California</small>
                            <p className='font-adv'>Cтартова ціна: <small className='font-bid-price'>$ 30 500</small></p>
                             <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item bit-btn'>Зробити ставку</button></Col>
                                </Row>       
                        </Card.Body>     
                        </Card>      
                     </Col>
                     <Col lg={12} className='short-border'>
                        <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature-adv'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <small className='font-adv'>2016 Ferrari California</small>
                            <p className='font-adv'>Cтартова ціна: <small className='font-bid-price'>$ 30 500</small></p>
                             <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item bit-btn'>Зробити ставку</button></Col>
                                </Row>       
                        </Card.Body>     
                        </Card>      
                     </Col>
                     <Col lg={12} className='short-border'>
                        <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature-adv'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <small className='font-adv'>2016 Ferrari California</small>
                            <p className='font-adv'>Cтартова ціна: <small className='font-bid-price'>$ 30 500</small></p>
                             <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item bit-btn'>Зробити ставку</button></Col>
                                </Row>       
                        </Card.Body>     
                        </Card>      
                     </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Featured