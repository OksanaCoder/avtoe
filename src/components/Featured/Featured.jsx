import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Card } from 'react-bootstrap'




const Featured = () => {
    return(
        <Container className='mt-5 text-white'>
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <Card className='card-style mb-3 card-height'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='text-white card-text'>
                            <h4>2016 Ferrari California</h4>
                            <h2 className='color-yellow'>$ 91 500</h2>
                            <h6 style={{color: 'grey'}}>Ринкова ціна: <small style={{fontWeight: 'bold'}} >$ 140 500</small></h6>
                            <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='white-icon'/>22 тыс. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon-1'>A</small>Автомат</Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <Row>
                        
                        <Col lg={6} md={6} sm={12}>
                        <Card className='card-style text-left mb-3'>
                        <Card.Img src={imageCar}>
                        </Card.Img>
                        <Card.Body className='text-white'>
                            <h6>2016 Ferrari California</h6>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <Row className='align-center text-left'>
                                    <Col className='center-items-small '><img src={icon_2} className='icon-small-2'/>22 тыс. км</Col>
                                    <Col className='center-items-small'><img src={icon_1} className='icon-small-2'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-left'>
                                    <Col className='center-items-small'><img src={icon_3} className='icon-small-2'/>Бензин, 6 л.</Col>
                                    <Col className='center-items-small'><small className='a-icon-2 icon-small-2'>A</small>Автомат</Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <Card className='card-style text-left mb-3'>
                        <Card.Img src={imageCar}>
                        </Card.Img>
                        <Card.Body className='text-white'>
                            <h6>2016 Ferrari California</h6>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <Row className='align-center text-left'>
                                    <Col className='center-items-small '><img src={icon_2} className='icon-small-2'/>22 тыс. км</Col>
                                    <Col className='center-items-small'><img src={icon_1} className='icon-small-2'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-left'>
                                    <Col className='center-items-small'><img src={icon_3} className='icon-small-2'/>Бензин, 6 л.</Col>
                                    <Col className='center-items-small'><small className='a-icon-2 icon-small-2'>A</small>Автомат</Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <Card className='card-style text-left mb-3'>
                        <Card.Img src={imageCar}>
                        </Card.Img>
                        <Card.Body className='text-white'>
                            <h6>2016 Ferrari California</h6>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <Row className='align-center text-left'>
                                    <Col className='center-items-small '><img src={icon_2} className='icon-small-2'/>22 тыс. км</Col>
                                    <Col className='center-items-small'><img src={icon_1} className='icon-small-2'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-left'>
                                    <Col className='center-items-small'><img src={icon_3} className='icon-small-2'/>Бензин, 6 л.</Col>
                                    <Col className='center-items-small'><small className='a-icon-2 icon-small-2'>A</small>Автомат</Col>
                                </Row>
                        </Card.Body>
                       
                    </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <Card className='card-style text-left mb-3'>
                        <Card.Img src={imageCar}>
                        </Card.Img>
                        <Card.Body className='text-white'>
                            <h6>2016 Ferrari California</h6>
                            <h6 className='color-yellow'>$ 91 500</h6>
                            <Row className='align-center text-left'>
                                    <Col className='center-items-small '><img src={icon_2} className='icon-small-2'/>22 тыс. км</Col>
                                    <Col className='center-items-small'><img src={icon_1} className='icon-small-2'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-left'>
                                    <Col className='center-items-small'><img src={icon_3} className='icon-small-2'/>Бензин, 6 л.</Col>
                                    <Col className='center-items-small'><small className='a-icon-2 icon-small-2'>A</small>Автомат</Col>
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