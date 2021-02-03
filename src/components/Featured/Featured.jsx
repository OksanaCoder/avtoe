import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Card } from 'react-bootstrap'




const Featured = () => {
    return(
        <Container className='mt-5 text-white' fluid>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
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
                        <Card.Img src={imageCar} className='img-feature'>
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
                        <Card.Img src={imageCar} className='img-feature'>
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
                        <Card.Img src={imageCar} className='img-feature'>
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
                <Row>
                <Col lg={3} md={6} sm={12}>
                    <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
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
                        <Card.Img src={imageCar} className='img-feature'>
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
                        <Card.Img src={imageCar} className='img-feature'>
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
                        <Card.Img src={imageCar} className='img-feature'>
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