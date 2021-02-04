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
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                         <div className='flex-card mt-3'>
                            <h5 className='color-yellow'>$ 91 500</h5>
                          <div>
                          <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                          <h6 className='small-grey'>Стартова ціна: <small style={{fontWeight: 'bold'}} >$ 50 500</small></h6>

                          </div>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Купити</button></Col>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow}>Деталі</button></Col>
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
               
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                        <div className='flex-card'>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Buy now</button></Col>
                                  <Col><button  className='btn-item auction-btn'>More</button></Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src='https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1667&q=80' className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                        <div className='flex-card'>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Buy now</button></Col>
                                  <Col><button  className='btn-item auction-btn'>More</button></Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src='https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80' className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                        <div className='flex-card'>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Buy now</button></Col>
                                  <Col><button  className='btn-item auction-btn'>More</button></Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Row className='margin-no'>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src='https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                        <div className='flex-card'>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Buy now</button></Col>
                                  <Col><button  className='btn-item auction-btn'>More</button></Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src='https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80' className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                        <div className='flex-card'>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Buy now</button></Col>
                                  <Col><button  className='btn-item auction-btn'>More</button></Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src='https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80' className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                        <div className='flex-card'>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Buy now</button></Col>
                                  <Col><button  className='btn-item auction-btn'>More</button></Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src='https://images.unsplash.com/photo-1501066927591-314112b5888e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-dark card-text'>
                            <h5 className='bold'>2016 Ferrari California</h5>
                        <div className='flex-card'>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <h6 className='small-grey'>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                        </div>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тис. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Київ</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                                <Row className='display-flex justify-between mt-3'>
                                  <Col> <button className='btn-item buy-now'>Buy now</button></Col>
                                  <Col><button  className='btn-item auction-btn'>More</button></Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Featured