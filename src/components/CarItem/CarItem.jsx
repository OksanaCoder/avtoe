import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Modal, Button, Form, Card } from 'react-bootstrap'
import ModalDetails from '../ModalDetails/ModalDetails'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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

    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [price, setPrice] = useState("")
    const [comment, setComment] = useState("")

  const API_URL = process.env.REACT_APP_URL;
  const offer = (username, phone, price, comment) => {
    return axios
      .post(API_URL + "/offer", {
        username, 
        phone, 
        price, 
        comment
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const onChangePrice = (e) => {
    const price = e.target.value;
    setPrice(price);
  };
  const onChangeComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmOffer = await offer(username, phone, price, comment);
    if (confirmOffer){
        alert("Заявку відправлено !")
        return <Redirect to="/auction" />;
    }else{
        alert("Помилка :(")
    }
  };
    return (
        <div>
            <Container className='text-white pb-5' fluid style={{background: '#262626'}}>
            <Row className='p-5'>
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
                                <Row className='display-flex mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  {/* <Col> <button className='btn-item buy-now'>Детальніше</button></Col> */}
                                  <Col>   <button  className='btn-item swap-btn mt-3' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  {/* <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col> */}
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                      
                        <Modal
                            show={show_4} 
                            onHide={handleClose_4}
                            className="login-form"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Запропонувати торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="Ім'я"
                                    onChange={onChangeUsername}
                                    value={username}
                                    name="username"
                                    className="input-style"
                                />
                            
                                </Form.Group>

                                <Form.Group controlId="formBasicPhoneNumber">
                                <Form.Control
                                    type="number"
                                    placeholder="Номер телефону"
                                    onChange={onChangePhone}
                                    value={phone}
                                    className="input-style mb-4"
                                />
                                </Form.Group>


                                <Form.Group controlId="formBasicPrice">
                                <Form.Control
                                    type="number"
                                    placeholder="Твоя ціна, $"
                                    onChange={onChangePrice}
                                    value={price}
                                    className="input-style mb-4"
                                />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                   <Form.Control    className='border-style'  
                                                    as="textarea" rows={3} 
                                                    placeholder='Твій коментарій'
                                                    value={comment}
                                                    onChange={onChangeComment}
                                                    />
                               </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn-form yellow-back"
                                    onClick={handleSubmit}
                                >
                                    Відправити
                                </Button>
                            
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
                                <Row className='display-flex mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  {/* <Col> <button className='btn-item buy-now'>Детальніше</button></Col> */}
                                  <Col>   <button  className='btn-item swap-btn mt-3' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  {/* <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col> */}
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                      
                        <Modal
                            show={show_4} 
                            onHide={handleClose_4}
                            className="login-form"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Запропонувати торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="Ім'я"
                                    onChange={onChangeUsername}
                                    value={username}
                                    name="username"
                                    className="input-style"
                                />
                            
                                </Form.Group>

                                <Form.Group controlId="formBasicPhoneNumber">
                                <Form.Control
                                    type="number"
                                    placeholder="Номер телефону"
                                    onChange={onChangePhone}
                                    value={phone}
                                    className="input-style mb-4"
                                />
                                </Form.Group>


                                <Form.Group controlId="formBasicPrice">
                                <Form.Control
                                    type="number"
                                    placeholder="Твоя ціна, $"
                                    onChange={onChangePrice}
                                    value={price}
                                    className="input-style mb-4"
                                />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                   <Form.Control    className='border-style'  
                                                    as="textarea" rows={3} 
                                                    placeholder='Твій коментарій'
                                                    value={comment}
                                                    onChange={onChangeComment}
                                                    />
                               </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn-form yellow-back"
                                    onClick={handleSubmit}
                                >
                                    Відправити
                                </Button>
                            
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
                                <Row className='display-flex mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  {/* <Col> <button className='btn-item buy-now'>Детальніше</button></Col> */}
                                  <Col>   <button  className='btn-item swap-btn mt-3' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  {/* <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col> */}
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                      
                        <Modal
                            show={show_4} 
                            onHide={handleClose_4}
                            className="login-form"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Запропонувати торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="Ім'я"
                                    onChange={onChangeUsername}
                                    value={username}
                                    name="username"
                                    className="input-style"
                                />
                            
                                </Form.Group>

                                <Form.Group controlId="formBasicPhoneNumber">
                                <Form.Control
                                    type="number"
                                    placeholder="Номер телефону"
                                    onChange={onChangePhone}
                                    value={phone}
                                    className="input-style mb-4"
                                />
                                </Form.Group>


                                <Form.Group controlId="formBasicPrice">
                                <Form.Control
                                    type="number"
                                    placeholder="Твоя ціна, $"
                                    onChange={onChangePrice}
                                    value={price}
                                    className="input-style mb-4"
                                />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                   <Form.Control    className='border-style'  
                                                    as="textarea" rows={3} 
                                                    placeholder='Твій коментарій'
                                                    value={comment}
                                                    onChange={onChangeComment}
                                                    />
                               </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn-form yellow-back"
                                    onClick={handleSubmit}
                                >
                                    Відправити
                                </Button>
                            
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
                                <Row className='display-flex mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                  {/* <Col> <button className='btn-item buy-now'>Детальніше</button></Col> */}
                                  <Col>   <button  className='btn-item swap-btn mt-3' onClick={handleShow_4}>Запропонувати торг</button></Col>
                                
                                  {/* <Col>  <button  className='btn-item auction-btn'>Зробити ставку</button></Col> */}
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                        </Col>

                      
                        <Modal
                            show={show_4} 
                            onHide={handleClose_4}
                            className="login-form"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Запропонувати торг</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="Ім'я"
                                    onChange={onChangeUsername}
                                    value={username}
                                    name="username"
                                    className="input-style"
                                />
                            
                                </Form.Group>

                                <Form.Group controlId="formBasicPhoneNumber">
                                <Form.Control
                                    type="number"
                                    placeholder="Номер телефону"
                                    onChange={onChangePhone}
                                    value={phone}
                                    className="input-style mb-4"
                                />
                                </Form.Group>


                                <Form.Group controlId="formBasicPrice">
                                <Form.Control
                                    type="number"
                                    placeholder="Твоя ціна, $"
                                    onChange={onChangePrice}
                                    value={price}
                                    className="input-style mb-4"
                                />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                   
                                   <Form.Control    className='border-style'  
                                                    as="textarea" rows={3} 
                                                    placeholder='Твій коментарій'
                                                    value={comment}
                                                    onChange={onChangeComment}
                                                    />
                               </Form.Group>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="btn-form yellow-back"
                                    onClick={handleSubmit}
                                >
                                    Відправити
                                </Button>
                            
                            </Form>
                            </Modal.Body>
                        </Modal>
                 


                                           
                   </Row> 
            
           </Container>
        </div>
    )
}

export default CarItem