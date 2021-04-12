import React, { useState } from "react";
import "./style.css";
import imageCar from "../../img/ferrari.jpg";
import icon_1 from "../../img/location.png";
import icon_2 from "../../img/speedometer.png";
import icon_3 from "../../img/petrol.png";
import countdown from "../../img/time.svg";
import Moment from 'react-moment';
import {
  Col,
  Row,
  Container,
  Modal,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import CarDetails from "../CarDetails/CarDetails";

const CarItemAuction = ({ dataAuction = [] }) => {
  console.log(dataAuction, "AUCTION ITEM");

  return (
    <div>
     

    
          {dataAuction.map((item) => {
            return (
              <>
                <Col lg={3} md={6} sm={12}>
                  <Card className="card-style mb-3">
                   { item.images.length == 0 ?  (<Card.Img src={imageCar} className="img-feature"></Card.Img> ) :
                      (<Card.Img src={item.image_1} className="img-feature"></Card.Img> )
                   } 
                    <Card.Body className="card-text">
                      <h5 className="bold">{item.name}</h5>
                      <h5 className="color-yellow">$ {item.startingPrice}</h5>
                      {item.startingDate ? (
                        <h6 style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={countdown}
                            className="mt-1 mr-2"
                            fill="#fff"
                          />
                          <Moment format='DD/MM/YYYY HH:mm' style={{fontSize: '12px'}} >{item.startingDate}</Moment>
                        
                        </h6>
                      ) : null}

                      {item.startPrice ? (
                        <p className="start-price mt-3">
                          Стартова ціна: ${" "}
                          <small className="start-price">
                            {item.startPrice}
                          </small>
                        </p>
                      ) : (
                        <>
                          <Row className="align-center">
                            <Col
                              lg={6}
                              md={6}
                              sm={6}
                              xs={6}
                              className="center-items"
                            >
                              <img src={icon_2} className="white-icon" />
                              {item.odometer} тыс. км
                            </Col>
                            <Col
                              lg={6}
                              md={6}
                              sm={6}
                              xs={6}
                              className="center-items"
                            >
                              <img src={icon_1} className="icon-small" />
                              {/* {item.city} */}
                              Киев
                            </Col>
                          </Row>
                          <Row className="align-center">
                            <Col
                              lg={6}
                              md={6}
                              sm={6}
                              xs={6}
                              className="center-items"
                            >
                              <img src={icon_3} className="icon-small" />
                              {item.fuel}
                            </Col>
                            <Col
                              lg={6}
                              md={6}
                              sm={6}
                              xs={6}
                              className="center-items"
                            >
                              <small className="a-icon-1">A</small>
                              {item.drive}
                            </Col>
                          </Row>
                        </>
                      )}
                      {/* </Col>
                                </Row>  */}
                      <div className="display-flex mt-3">
                        {/* <button  className='btn-item auction-btn mr-' onClick={handleShow_details}>Детальніше</button> */}
                        {/* <button  className='btn-item auction-btn mr-2' onClick={showDetails}>Details</button> */}
                        <Link
                          className="btn-item auction-btn mr-2"
                          to={`/carDetailsAuction/${item.id}`}
                        >
                          Details
                        </Link>

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
            );
          })}
   

    </div>
  );
};

export default CarItemAuction;
