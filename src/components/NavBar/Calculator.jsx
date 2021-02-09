import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import price from '../../img/tag.svg'
import percent from '../../img/offer.svg'
import calendar from '../../img/calendar.svg'
import payment from '../../img/money.svg'

const Calculator = (props) => {
    
   const [show_calc, setShow_calc] = useState(false)
   const handleClose_calc = () => setShow_calc(false);

    useEffect(() => {
        setShow_calc(props);
      }, [props]);
    return (
        <>
         <Modal show={show_calc} onHide={handleClose_calc} className='login-form calc_form'>
                     <Modal.Header closeButton>
                        <Modal.Title>Кредитний калькулятор</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>

                     <Form>
                     <Row>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Ціна
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={price} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Ставка, %
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={percent} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup" />
                              </InputGroup>
                        </Col>
                     </Row>
                     <Row className='line-bottom mt-4'>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Період (місяців)
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={calendar} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                              <Form.Label htmlFor="inlineFormInputGroup" >
                              Завдаток
                              </Form.Label>
                              <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                 <InputGroup.Text><img src={payment} className='icon-calc'/></InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl id="inlineFormInputGroup"  />
                              </InputGroup>
                        </Col>
                     </Row>
                    
                       <Row className='calc-output'>
                          <Col lg={4} md={12} sm={12} className='border-right-calc'>
                             <h5>Місячний платіж</h5>
                             <h4>-</h4>
                          </Col>
                          <Col lg={4} md={12} sm={12} className='border-right-calc'>
                             <h5>Загальний відсоток</h5>
                             <h4>-</h4>
                          </Col>
                          <Col lg={4} md={12} sm={12}>
                             <h5>Загальна сума</h5>
                             <h4>-</h4>
                          </Col>
                       </Row>
                     
                       <div className='text-right mt-5'>
                     
                        <Button variant="primary" type="submit" className='btn-form grey-back' onClick={handleClose_calc}>
                           Скасувати
                        </Button>
                       </div>
                  </Form>
                     </Modal.Body>
                     </Modal>
        </>
    )
}

export default Calculator