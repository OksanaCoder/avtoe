import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Modal, Button, Form, Card } from 'react-bootstrap'
import ModalDetails from '../ModalDetails/ModalDetails'


const CarItem = () => {
    const [show_details, setShow_details] = useState(false);
    const handleShow_details = () => setShow_details(true);
    const handleClose_details = () => setShow_details(false);

    const [show_4, setShow_4] = useState(false)
    const handleShow_4 = () => {
        setShow_4(true)
    }
    const handleClose_4 = () => {
        setShow_4(false)
    }
    return (
        <div>
            <Container className='p-5 text-white' fluid style={{background: '#262626'}}>
            <Row>
                <div className='heading-style'>
                    
                    <h6 className='blue-line'>Останні</h6>
                    <h3>Оновлення</h3>
                
                </div>
            </Row>

                    <Row className=' align-center'>
                        <Col lg={3} md={6} sm={12}>             
                      <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='card-text'>
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
                                <Row>
                                    <Col>
                                       <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>40 000</small></p>
                                   </Col>
                                </Row> 
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  <Col> <button className='btn-item buy-now'>Детальніше</button></Col>
                                  <Col>   <button  className='btn-item swap-btn' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                        <Modal show={show_4} onHide={handleClose_4} className='no-shadow'>
                            <Modal.Header closeButton>
                            <Modal.Title>Предложить торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                
                                <Form.Group controlId="formBasicEmail" className='row'>
                                    <Form.Label className='col-5'>Логин</Form.Label>
                                    <Form.Control className='col-6 border-style' type="email" placeholder="Твой e-mail или телефон" />
                                </Form.Group>
                                <Form.Group className='row'>
                                 
                                    <Form.Label className='col-5'>Предложение</Form.Label>
                                    <div className='col-6' style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div className='row align-center'>
                                       <img className='col-6' src={imageCar} style={{width: '100%', marginLeft: '-14px', borderRadius: '10px'}}/>
                                        <div className='col-6' style={{lineHeight: '0.5'}}>
                                            <h6 style={{color: '#000', fontWeight: 'bold'}}>Ferrari</h6>
                                            <small style={{color: '#E24803', fontWeight: 'bold'}}>$ 91 500</small> 
                                        </div>
                                       </div>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1" className='row mt-4'>
                                    <Form.Label  className='col-5'>Твоя цена</Form.Label>
                                    <div className='float-pos'  className='col-7' style={{marginLeft:'-14px'}}>
                                       $ <input className='price-p border-style' placeholder=''/>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                    <Form.Control className='border-style' as="textarea" rows={3} placeholder='Твой комментарий'/>
                                </Form.Group>
                                <div className='text-center'>
                                        <h6 className='mb-3 mt-3'>Связаться с продавцом: <small className='tel'>+ 38 095 36 36 336</small></h6>
                                        <Button variant="primary" type="submit" className='btn-bid'>
                                            Предложить торг
                                        </Button>
                                </div>
                            </Form>
                            </Modal.Body>
                        </Modal>


                        <Col lg={3} md={6} sm={12}>             
                      <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='card-text'>
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
                                <Row>
                                    <Col>
                                       <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>40 000</small></p>
                                   </Col>
                                </Row> 
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  <Col> <button className='btn-item buy-now'>Детальніше</button></Col>
                                  <Col>   <button  className='btn-item swap-btn' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                        <Modal show={show_4} onHide={handleClose_4} className='no-shadow'>
                            <Modal.Header closeButton>
                            <Modal.Title>Предложить торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                
                                <Form.Group controlId="formBasicEmail" className='row'>
                                    <Form.Label className='col-5'>Логин</Form.Label>
                                    <Form.Control className='col-6 border-style' type="email" placeholder="Твой e-mail или телефон" />
                                </Form.Group>
                                <Form.Group className='row'>
                                 
                                    <Form.Label className='col-5'>Предложение</Form.Label>
                                    <div className='col-6' style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div className='row align-center'>
                                       <img className='col-6' src={imageCar} style={{width: '100%', marginLeft: '-14px', borderRadius: '10px'}}/>
                                        <div className='col-6' style={{lineHeight: '0.5'}}>
                                            <h6 style={{color: '#000', fontWeight: 'bold'}}>Ferrari</h6>
                                            <small style={{color: '#E24803', fontWeight: 'bold'}}>$ 91 500</small> 
                                        </div>
                                       </div>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1" className='row mt-4'>
                                    <Form.Label  className='col-5'>Твоя цена</Form.Label>
                                    <div className='float-pos'  className='col-7' style={{marginLeft:'-14px'}}>
                                       $ <input className='price-p border-style' placeholder=''/>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                    <Form.Control className='border-style' as="textarea" rows={3} placeholder='Твой комментарий'/>
                                </Form.Group>
                                <div className='text-center'>
                                        <h6 className='mb-3 mt-3'>Связаться с продавцом: <small className='tel'>+ 38 095 36 36 336</small></h6>
                                        <Button variant="primary" type="submit" className='btn-bid'>
                                            Предложить торг
                                        </Button>
                                </div>
                            </Form>
                            </Modal.Body>
                        </Modal>
                        <Col lg={3} md={6} sm={12}>             
                      <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='card-text'>
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
                                <Row>
                                    <Col>
                                       <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>40 000</small></p>
                                   </Col>
                                </Row> 
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  <Col> <button className='btn-item buy-now'>Детальніше</button></Col>
                                  <Col>   <button  className='btn-item swap-btn' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                        <Modal show={show_4} onHide={handleClose_4} className='no-shadow'>
                            <Modal.Header closeButton>
                            <Modal.Title>Предложить торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                
                                <Form.Group controlId="formBasicEmail" className='row'>
                                    <Form.Label className='col-5'>Логин</Form.Label>
                                    <Form.Control className='col-6 border-style' type="email" placeholder="Твой e-mail или телефон" />
                                </Form.Group>
                                <Form.Group className='row'>
                                 
                                    <Form.Label className='col-5'>Предложение</Form.Label>
                                    <div className='col-6' style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div className='row align-center'>
                                       <img className='col-6' src={imageCar} style={{width: '100%', marginLeft: '-14px', borderRadius: '10px'}}/>
                                        <div className='col-6' style={{lineHeight: '0.5'}}>
                                            <h6 style={{color: '#000', fontWeight: 'bold'}}>Ferrari</h6>
                                            <small style={{color: '#E24803', fontWeight: 'bold'}}>$ 91 500</small> 
                                        </div>
                                       </div>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1" className='row mt-4'>
                                    <Form.Label  className='col-5'>Твоя цена</Form.Label>
                                    <div className='float-pos'  className='col-7' style={{marginLeft:'-14px'}}>
                                       $ <input className='price-p border-style' placeholder=''/>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                    <Form.Control className='border-style' as="textarea" rows={3} placeholder='Твой комментарий'/>
                                </Form.Group>
                                <div className='text-center'>
                                        <h6 className='mb-3 mt-3'>Связаться с продавцом: <small className='tel'>+ 38 095 36 36 336</small></h6>
                                        <Button variant="primary" type="submit" className='btn-bid'>
                                            Предложить торг
                                        </Button>
                                </div>
                            </Form>
                            </Modal.Body>
                        </Modal>
                        <Col lg={3} md={6} sm={12}>             
                      <Card className='card-style mb-3'>
                        <Card.Img src={imageCar} className='img-feature'>
                        </Card.Img>
                        <Card.Body className='card-text'>
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
                                <Row>
                                    <Col>
                                       <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>40 000</small></p>
                                   </Col>
                                </Row> 
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  <Col> <button className='btn-item buy-now'>Детальніше</button></Col>
                                  <Col>   <button  className='btn-item swap-btn' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                        <Modal show={show_4} onHide={handleClose_4} className='no-shadow'>
                            <Modal.Header closeButton>
                            <Modal.Title>Предложить торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                
                                <Form.Group controlId="formBasicEmail" className='row'>
                                    <Form.Label className='col-5'>Логин</Form.Label>
                                    <Form.Control className='col-6 border-style' type="email" placeholder="Твой e-mail или телефон" />
                                </Form.Group>
                                <Form.Group className='row'>
                                 
                                    <Form.Label className='col-5'>Предложение</Form.Label>
                                    <div className='col-6' style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div className='row align-center'>
                                       <img className='col-6' src={imageCar} style={{width: '100%', marginLeft: '-14px', borderRadius: '10px'}}/>
                                        <div className='col-6' style={{lineHeight: '0.5'}}>
                                            <h6 style={{color: '#000', fontWeight: 'bold'}}>Ferrari</h6>
                                            <small style={{color: '#E24803', fontWeight: 'bold'}}>$ 91 500</small> 
                                        </div>
                                       </div>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1" className='row mt-4'>
                                    <Form.Label  className='col-5'>Твоя цена</Form.Label>
                                    <div className='float-pos'  className='col-7' style={{marginLeft:'-14px'}}>
                                       $ <input className='price-p border-style' placeholder=''/>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                    <Form.Control className='border-style' as="textarea" rows={3} placeholder='Твой комментарий'/>
                                </Form.Group>
                                <div className='text-center'>
                                        <h6 className='mb-3 mt-3'>Связаться с продавцом: <small className='tel'>+ 38 095 36 36 336</small></h6>
                                        <Button variant="primary" type="submit" className='btn-bid'>
                                            Предложить торг
                                        </Button>
                                </div>
                            </Form>
                            </Modal.Body>
                        </Modal>
                   </Row>
            
           </Container>
        </div>
    )
}

export default CarItem