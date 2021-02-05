import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Card, Modal, Button } from 'react-bootstrap'




const Featured = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow}>Детальніше</button></Col>
                                </Row>
                                <Modal show={show} onHide={handleClose} className='no-shadow no-border-modal'>
                                    <Modal.Header closeButton>  
                                    <Modal.Title>Деталі авто</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        
                                        <Row>
                                            <Col>
                                              <img src={imageCar} width='100%'/>
                                            </Col>
                                            <Col>
                                               
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
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
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow}>Детальніше</button></Col>
                                </Row>
                                <Modal show={show} onHide={handleClose} className='no-shadow no-border-modal'>
                                    <Modal.Header closeButton>  
                                    <Modal.Title>Деталі авто</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        
                                        <Row>
                                            <Col>
                                              <img src={imageCar} width='100%'/>
                                            </Col>
                                            <Col>
                                               
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
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
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow}>Детальніше</button></Col>
                                </Row>
                                <Modal show={show} onHide={handleClose} className='no-shadow no-border-modal'>
                                    <Modal.Header closeButton>  
                                    <Modal.Title>Деталі авто</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        
                                        <Row>
                                            <Col>
                                              <img src={imageCar} width='100%'/>
                                            </Col>
                                            <Col>
                                               
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                        </Card.Body>
                       
                    </Card>
                </Col>
                
            </Row>
                </Col>
                <Col lg={3} md={12} sm={12} className='adv-box'>
             
                </Col>
            </Row>
            
        </Container>
    )
}

export default Featured