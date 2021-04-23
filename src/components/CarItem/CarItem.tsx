import React from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import icon_4 from '../../img/icon_4.png'
import countdown from '../../img/time.svg'
import { Col, Row, Card } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import CarDetails from '../CarDetails/CarDetails'
import { CarType } from '../../types/appTypes'

type Props = {
  data: CarType[]
  filteredData: CarType[]
}

const CarItem = ({ filteredData = [] }: Props) => {
  console.log(filteredData, 'data in car item')

  return (
    <div>
      {filteredData.map((item) => {
        return (
          <>
            <Card className="card-style mb-3">
              {item.images.length == 0 ? (
                <Card.Img src={imageCar} className="img-feature"></Card.Img>
              ) : (
                <Card.Img src={item.image1} className="img-feature"></Card.Img>
              )}
              <Card.Body className="card-text">
                <h5 className="bold">{item.name}</h5>

                <h5 className="color-yellow">$ {item.startingPrice}</h5>

                {item.startingDate ? (
                  <h6 style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={countdown} className="mt-1 mr-2" />
                    {item.startingDate}
                  </h6>
                ) : null}

                {item.startPrice ? (
                  <p className="start-price mt-3">
                    Стартова ціна: ${' '}
                    <small className="start-price">{item.startPrice}</small>
                  </p>
                ) : (
                  <>
                    <Row className="align-center">
                      <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                        <img src={icon_2} className="white-icon invert-white" />
                        {item.odometer} тыс. км
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                        <img src={icon_1} className="icon-small invert-white" />
                        {/* {item.city} */}
                        Киев
                      </Col>
                    </Row>
                    <Row className="align-center">
                      <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                        <img src={icon_3} className="icon-small invert-white" />
                        {item.fuel}
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                        <img src={icon_4} className="icon-small invert-white" />
                        {item.drive}
                      </Col>
                    </Row>
                  </>
                )}

                <div className="display-flex mt-4">
                  <Link
                    className="btn-item auction-btn mr-2"
                    to={`/carDetails/${item.id}`}
                  >
                    Більше
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </>
        )
      })}
    </div>
  )
}

export default CarItem
