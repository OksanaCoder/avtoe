import React from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import icon_4 from '../../img/icon_4.png'
import nocar from '../../img/nocar.jpeg'
import { Col, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CarType } from '../../types/appTypes'
import { useTranslation } from 'react-i18next'

type Props = {
  data: CarType[]
  filteredData: CarType[]
}

const CarItem = ({ filteredData = [] }: Props) => {
  console.log(filteredData)
  const { t } = useTranslation()
  return (
    <div>
      {filteredData.map((item) => {
        return (
          <Link
            key={item.id}
            style={{ textDecoration: 'none' }}
            to={`/carDetails/${item.id}`}
          >
            <Card className="card-style mb-3">
              {item.images.length === 0 ? (
                <Card.Img src={imageCar} className="img-feature"></Card.Img>
              ) : (
                <Card.Img src={item.images[0].url} className="img-feature"></Card.Img>
              )}

              <Card.Body className="card-text">
                <h5 className="bold">{item.Title}</h5>

                <h5 className="color-yellow">$ {item.Price}</h5>

                <>
                  <Row className="align-center">
                    <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                      <img alt="11" src={icon_2} className="white-icon invert-white" />
                      {item.Odometer} {t('km')}
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                      <img alt="11" src={icon_1} className="icon-small invert-white" />
                      {/* {item.city} */}
                      {t('kyiv')}
                    </Col>
                  </Row>
                  <Row className="align-center">
                    <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                      <img alt="11" src={icon_3} className="icon-small invert-white" />
                      {item.Fuel}
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="center-items">
                      <img alt="11" src={icon_4} className="icon-small invert-white" />
                      {item.KPP}
                    </Col>
                  </Row>
                </>

                <div className="display-flex mt-4">
                  <Link
                    className="btn-item auction-btn mr-2"
                    to={`/carDetails/${item.id}`}
                  >
                    {t('more')}
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

export default CarItem
