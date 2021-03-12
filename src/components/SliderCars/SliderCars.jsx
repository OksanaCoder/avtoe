import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCar from '../../img/ferrari.jpg'
import imageCar_1 from '../../img/toyota.jpg'
import imageCar_2 from '../../img/camry.jpg'
import './style.css'
import { Col, Row, Card, Container } from 'react-bootstrap'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import ModalDetails from '../ModalDetails/ModalDetails'


const SliderCars = () => {
  const [show_details, setShow_details] = useState(false);
  const handleShow_details = () => setShow_details(true);
  const handleClose_details = () => setShow_details(false);
    return (
        <>
      <div style={{background: '#262626', paddingBottom: '50px'}}>
        <Container fluid>
        <Row>
        <div className='heading-style  pl-5 pt-5 pb-5 ml-3'>
               
               <h6 className='blue-line'>Останні</h6>
               <h3>Оновлення</h3>
           
           </div>
        </Row>

   
        <Row>

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
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                </Col>
               
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
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                </Col>
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
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                </Col>
               
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
                                <Row className='display-flex justify-between mt-3'>
                                  <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                                </Row>


                                {/* details modal */}
                              <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                        </Card.Body>
                       
                    </Card>
                </Col>
               
      </Row>
      <Row>

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
                        <Row className='display-flex justify-between mt-3'>
                          <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                        </Row>


                        {/* details modal */}
                      <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                </Card.Body>
               
            </Card>
        </Col>
       
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
                        <Row className='display-flex justify-between mt-3'>
                          <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                        </Row>


                        {/* details modal */}
                      <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                </Card.Body>
               
            </Card>
        </Col>
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
                        <Row className='display-flex justify-between mt-3'>
                          <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                        </Row>


                        {/* details modal */}
                      <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                </Card.Body>
               
            </Card>
        </Col>
       
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
                        <Row className='display-flex justify-between mt-3'>
                          <Col><button  className='btn-item auction-btn' onClick={handleShow_details}>Детальніше</button></Col>
                        </Row>


                        {/* details modal */}
                      <ModalDetails show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} />
                </Card.Body>
               
            </Card>
        </Col>
       
</Row>
        
        <Row>
          <Col className='text-right'>
             <button className='btn-item auction-btn'>Весь перелік</button>
          </Col>
        </Row>
     
      </Container>

    
    </div>
                    
         
          
        </>
    )
}

export default SliderCars