import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import countdown from '../../img/time.svg'
import { Col, Row, Container, Modal, Button, Form, Card } from 'react-bootstrap'
import { Route, Link } from "react-router-dom";
import CarDetails from '../CarDetails/CarDetails'

const CarItem = ({ filteredData = [] }) => {
  console.log(filteredData, 'data in car item')

  // const API_URL = process.env.REACT_APP_URL;
  // const offer = (username, phone, price, comment) => {
  //   return axios
  //     .post(API_URL + "/offer", {
  //       username, 
  //       phone, 
  //       price, 
  //       comment
  //     })
  //     .then((response) => {
  //       if (response.data.accessToken) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // };

  // const onChangeUsername = (e) => {
  //   const username = e.target.value;
  //   setUsername(username);
  // };

  // const onChangePhone = (e) => {
  //   const phone = e.target.value;
  //   setPhone(phone);
  // };

  // const onChangePrice = (e) => {
  //   const price = e.target.value;
  //   setPrice(price);
  // };
  // const onChangeComment = (e) => {
  //   const comment = e.target.value;
  //   setComment(comment);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const confirmOffer = await offer(username, phone, price, comment);
  //   if (confirmOffer){
  //       alert("Заявку відправлено !")
  //       return <Redirect to="/auction" />;
  //   }else{
  //       alert("Помилка :(")
  //   }
  // };

  return (
    <div>
      <Container className='text-white pb-5' fluid style={{ background: '#262626' }}>
        <Row className='p-5'>
          <div className='heading-style'>

            <h6 className='blue-line'>Останні</h6>
            <h3>Оновлення</h3>

          </div>
        </Row>

        <Row className=' align-center'>

          {filteredData.map(item => {
            return (
              <>
                <Col lg={3} md={6} sm={12}>
                  <Card className='card-style mb-3'>
                    <Card.Img src={imageCar} className='img-feature'>
                    </Card.Img>
                    <Card.Body className='card-text'>
                      <h5 className='bold'>{item.name}</h5>
                      <h5 className='color-yellow'>$ {item.price}</h5>
                      {item.time ? <h6 style={{ display: 'flex', alignItems: 'center' }}><img src={countdown} className='mt-1 mr-2' fill='#fff' />12:12:09</h6> :
                        null
                      }

                      {item.startPrice ? <p className='start-price mt-3'>Стартова ціна: $ <small className='start-price'>{item.startPrice}</small></p> :
                        <>
                          <Row className='align-center'>
                            <Col lg={6} md={6} sm={6} xs={6} className='center-items'><img src={icon_2} className='white-icon' />{item.mileage} тыс. км</Col>
                            <Col lg={6} md={6} sm={6} xs={6} className='center-items'><img src={icon_1} className='icon-small' />{item.city}</Col>
                          </Row>
                          <Row className='align-center'>
                            <Col lg={6} md={6} sm={6} xs={6} className='center-items'><img src={icon_3} className='icon-small' />{item.fuel}</Col>
                            <Col lg={6} md={6} sm={6} xs={6} className='center-items'><small className='a-icon-1'>A</small>{item.type}</Col>
                          </Row>
                        </>
                      }
                      {/* </Col>
                                </Row>  */}
                      <div className='display-flex mt-3'>
                        {/* <button  className='btn-item auction-btn mr-' onClick={handleShow_details}>Детальніше</button> */}
                        {/* <button  className='btn-item auction-btn mr-2' onClick={showDetails}>Details</button> */}
                        <Link className='btn-item auction-btn mr-2' to={`/carDetails/${item.id}`}>Details</Link>

                        {/* <Col> <button className='btn-item buy-now'>Детальніше</button></Col> */}
                        {/* <button  className='btn-item swap-btn mt-3' onClick={handleShow_4}>Запропонувати торг</button> */}

                        {/* <button  className='btn-item swap-btn mt-3' onClick={handleShow_4}>Suggest a price</button> */}

                        {/* <button  className='btn-item auction-btn mt-3'>Зробити ставку</button> */}
                      </div>


                      {/* details modal */}
                      {/* <ModalDetails data={data} show_details={show_details} handleShow_details={handleShow_details} handleClose_details={handleClose_details} /> */}
                    </Card.Body>

                  </Card>
                </Col>

                {/* <Route
                                    exact path={`/carDetails/:id`}
                                    render={({match}) => (
                                    <CarDetails item={data.find(item => item.id === +match.params.id)}/>
                                    )}
                                    /> */}
              </>
            )
          })}






        </Row>

      </Container>
    </div>

  )
}

export default CarItem