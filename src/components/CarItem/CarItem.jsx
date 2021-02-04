import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Modal, Button, Form } from 'react-bootstrap'

const CarItem = () => {
   
    const [show_4, setShow_4] = useState(false)
    const handleShow_4 = () => {
        setShow_4(true)
    }
    const handleClose_4 = () => {
        setShow_4(false)
    }
    return (
        <div>
            <Container className='p-5' fluid>
            <Row>
                <Col lg={8} md={12} sm={12}>
                    <Row className='car-item-style align-center'>
                        <Col lg={4} md={6} sm={12}>
                            <img src={imageCar} style={{width: '100%'}}/>
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                         <Row>                           
                                <Col lg={7} md={12} sm={12} className='btns-flex'>
                                <h6 style={{fontWeight: 'bold'}}>2016 Ferrari California</h6>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '20px'}}>$ 91 500</small>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>22 тыс. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>Автомат</Col>
                                </Row>
                                <Row>
                                    <Col>
                                       <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>40 000</small></p>
                                   </Col>
                                </Row> 
                                </Col>
                         
                                <Col lg={5} md={12} sm={12} className='btns-flex'>                  
                                      <button className='btn-item buy-now'>Купити</button>
                                      <button  className='btn-item swap-btn' onClick={handleShow_4}>Запропонувати торг</button>
                                
                                     <button  className='btn-item auction-btn'>Зробити ставку</button>
                                    </Col>
                               </Row>
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
                    <Row className='car-item-style align-center'>
                        <Col lg={4} md={6} sm={12}>
                            <img src={imageCar} style={{width: '100%'}}/>
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                         <Row>                           
                                <Col lg={7} md={12} sm={12}>
                                <h6 style={{fontWeight: 'bold'}}>2016 Ferrari California</h6>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '20px'}}>$ 91 500</small>
                                   <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>22 тыс. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>Автомат</Col>
                                </Row>
                                <Row>
                                    <Col>
                                       <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>40 000</small></p>
                                    </Col>
                                </Row> 
                                </Col>
                         
                                <Col lg={5} md={12} sm={12} className='btns-flex'>                  
                                      <button className='btn-item buy-now'>Купити</button>
                                      <button  className='btn-item swap-btn' onClick={handleShow_4}>Запропонувати торг</button>
                                
                                     <button  className='btn-item auction-btn'>Зробити ставку</button>
                                    </Col>
                               </Row>
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
                                       $ <input type='number' className='price-p border-style' placeholder=''/>
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
                    <Row className='car-item-style align-center'>
                        <Col lg={4} md={6} sm={12}>
                            <img src={imageCar} style={{width: '100%'}}/>
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                         <Row>                           
                                <Col lg={7} md={12} sm={12}>
                                <h6 style={{fontWeight: 'bold'}}>2016 Ferrari California</h6>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '20px'}}>$ 91 500</small>
                                   <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>22 тыс. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>Автомат</Col>
                                </Row>
                                <Row>
                                    <Col>
                                       <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>40 000</small></p>
                                    </Col>
                                </Row> 
                                </Col>
                         
                                <Col lg={5} md={12} sm={12} className='btns-flex'>                  
                                      <button className='btn-item buy-now'>Купити</button>
                                      <button  className='btn-item swap-btn' onClick={handleShow_4}>Запропонувати торг</button>
                                
                                     <button  className='btn-item auction-btn'>Зробити ставку</button>
                                    </Col>
                               </Row>
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
                                       $ <input type='number' className='price-p border-style' placeholder=''/>
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
                </Col>
                <Col lg={4} md={12} sm={12}  className='car-item-style'>

                </Col>
            
            </Row>
            {/* <Row style={{display: 'flex', alignItems: 'center', marginBottom: '100px'}}>
                <Col lg={12} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={imageCar} style={{width: '100%'}}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3 style={{fontWeight: 'bold'}}>2016 Ferrari California</h3>
                            <Row className='align-center'>
                                <Col lg={6} md={6} sm={12}>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '30px'}}>$ 91 500</small>
                                </Col>
                                <Col> <button className='btn-item buy-now'>Купить сейчас</button></Col>
                            </Row>
                         
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>22 тыс. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>Автомат</Col>
                                </Row>
                            
                                <Row className='align-center'> 
                                    <Col></Col>
                                    <Col><button  className='btn-item swap-btn'>Предложить торг</button></Col>
                                </Row>
                               <Row className='align-center' >
                                   <Col>$<input type='number' placeholder='40 000' className='price-input'/></Col>
                                   <Col><button  className='btn-item auction-btn'>Сделать ставку</button></Col>
                               </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{display: 'flex', alignItems: 'center', marginBottom: '100px'}}>
                <Col lg={12} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={imageCar} style={{width: '100%'}}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3 style={{fontWeight: 'bold'}}>2016 Ferrari California</h3>
                            <Row className='align-center'>
                                <Col lg={6} md={6} sm={12}>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '30px'}}>$ 91 500</small>
                                </Col>
                                <Col> <button className='btn-item buy-now'>Купить сейчас</button></Col>
                            </Row>
                         
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>22 тыс. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>Автомат</Col>
                                </Row>
                            
                                <Row className='align-center'> 
                                    <Col></Col>
                                    <Col><button  className='btn-item swap-btn'>Предложить торг</button></Col>
                                </Row>
                               <Row className='align-center' >
                                   <Col>$<input type='number' placeholder='40 000' className='price-input'/></Col>
                                   <Col><button  className='btn-item auction-btn'>Сделать ставку</button></Col>
                               </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{display: 'flex', alignItems: 'center', marginBottom: '100px'}}>
                <Col lg={12} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={imageCar} style={{width: '100%'}}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3 style={{fontWeight: 'bold'}}>2016 Ferrari California</h3>
                            <Row className='align-center'>
                                <Col lg={6} md={6} sm={12}>
                                   <small style={{color: '#E24800', fontWeight: 'bold', fontSize: '30px'}}>$ 91 500</small>
                                </Col>
                                <Col> <button className='btn-item buy-now'>Купить сейчас</button></Col>
                            </Row>
                         
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_2} className='icon-small'/>22 тыс. км</Col>
                                    <Col className='center-items'><img src={icon_1} className='icon-small'/>Киев</Col>
                                </Row>
                                <Row className='align-center text-center'>
                                    <Col className='center-items'><img src={icon_3} className='icon-small'/>Бензин, 6 л.</Col>
                                    <Col className='center-items'><small className='a-icon'>A</small>Автомат</Col>
                                </Row>
                            
                                <Row className='align-center'> 
                                    <Col></Col>
                                    <Col><button  className='btn-item swap-btn'>Предложить торг</button></Col>
                                </Row>
                               <Row className='align-center' >
                                   <Col>$<input type='number' placeholder='40 000' className='price-input'/></Col>
                                   <Col><button  className='btn-item auction-btn'>Сделать ставку</button></Col>
                               </Row>
                        </Col>
                    </Row>
                </Col>
            </Row> */}
            
           </Container>
        </div>
    )
}

export default CarItem