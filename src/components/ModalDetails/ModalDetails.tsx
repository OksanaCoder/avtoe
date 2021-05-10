import React from 'react'
import { Col, Row, Modal, Button } from 'react-bootstrap'
import imageCar from '../../img/ferrari.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './style.css'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'

const ModalDetails = (props) => {
  const checkUser = () => {}

  return (
    <>
      {props.data.map((item, index) => {
        return (
          <Modal
            key={index}
            show={props.show_details}
            onHide={props.handleClose_details}
            className="no-shadow no-border-modal modal-details"
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ fontWeight: 700 }}>Деталі авто</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Carousel>
                    <div>
                      <img alt="11" src={imageCar} />
                    </div>
                    <div>
                      <img alt="11" src={imageCar} />
                    </div>
                    <div>
                      <img alt="11" src={imageCar} />
                    </div>
                  </Carousel>
                </Col>
                <Col>
                  <h4 style={{ fontWeight: 'bold' }} className="name-details">
                    {item.name}
                  </h4>
                  <small className="price-details">$ {item.price}</small>
                  <Row className="align-center">
                    <Col className="center-items">
                      <img alt="11" src={icon_2} className="icon-small" />
                      {item.mileage} тис. км
                    </Col>
                    <Col className="center-items">
                      <img alt="11" src={icon_1} className="icon-small" />
                      {item.city}
                    </Col>
                  </Row>
                  <Row className="align-center">
                    <Col className="center-items">
                      <img alt="11" src={icon_3} className="icon-small" />
                      {item.fuel}
                    </Col>
                    <Col className="center-items">
                      <small className="a-icon">A</small>
                      {item.type}
                    </Col>
                  </Row>
                  {/* <button  className='btn-item swap-btn mt-3'>Запропонувати торг</button> */}
                  <Row className="mt-4 row-modal">
                    <Col> Рік випуску:</Col>
                    <Col> {item.year}</Col>
                  </Row>
                  <Row className="mt-1 row-modal">
                    <Col> Привід:</Col>
                    <Col> {item.drive}</Col>
                  </Row>
                  <Row className="mt-1 row-modal">
                    <Col> Колір:</Col>
                    <Col> {item.color}</Col>
                  </Row>
                  <Row className="mt-1 row-modal">
                    <Col> Опис:</Col>
                    <Col> {item.description}</Col>
                  </Row>
                  <Row className="mt-1 row-modal">
                    <Col> Додаткова інформація:</Col>
                    <Col> {item.extraData}</Col>
                  </Row>
                  <Row className="mt-1 row-modal">
                    <Col> Контакти:</Col>
                    <Col>
                      <ul className="list-unstyled">
                        <li>+38 050 249 09 09</li>
                        <li> +38 093 249 09 09</li>
                        <li> +38 097 249 09 09</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row className="mt-1 row-modal">
                    <Col> Де ми знаходимось ?</Col>
                    <Col>Київ, проспект Степана Бандери, 13</Col>
                  </Row>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="mt-3">
              <Button onClick={props.handleClose_details} className="btn-cancel-modal">
                Cancel
              </Button>
              {item.typeSale == 'auction' && (
                <button className="btn-item auction-btn-bet" onClick={checkUser}>
                  Make a bet
                </button>
              )}
            </Modal.Footer>
          </Modal>
        )
      })}
    </>
  )
}

export default ModalDetails
