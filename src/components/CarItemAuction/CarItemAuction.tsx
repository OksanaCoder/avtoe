import React from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import { useTranslation } from 'react-i18next'
import hammer from '../../img/hammer.svg'
import countdown from '../../img/time.svg'
import Moment from 'react-moment'
import { Col, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuctionResponse } from '../../types/appTypes'

type Props = {
  dataAuction: AuctionResponse[]
}

const CarItemAuction = ({ dataAuction = [] }: Props) => {
  const { t } = useTranslation()

  return (
    <div>
      {dataAuction.map((item) => {
        return (
          <Card key={item.id} className="card-style mb-3">
            {item.car.images[0].url === undefined ? (
              <Card.Img src={imageCar} className="img-feature"></Card.Img>
            ) : (
              <div className="d-flex flex-direction-column">
                <Card.Img src={item.car.images[0].url} className="img-feature"></Card.Img>
                <div className="bottom-img text-dark ">
                  {item.Date ? (
                    <h6>
                      <img src={countdown} className="mt-1 mr-2" alt="countdown" />
                      <Moment format="DD/MM/YYYY HH:mm" style={{ fontSize: '12px' }}>
                        {item.Date}
                      </Moment>
                    </h6>
                  ) : null}{' '}
                </div>
              </div>
            )}
            <Card.Body className="card-text">
              <div className="d-flex">
                <h5 className="mr-2 bold">{item.car.Model}</h5>
                <h5 className="bold">{item.car.Make}</h5>
              </div>

              {/* {item.status ? (
                <div className="active-auction d-flex align-center mb-3">
                  <small className="ml-3">{t('activeStatus')}</small>
                </div>
              ) : (
                <div className="inactive-auction d-flex align-center mb-3">
                  <small className="ml-3">{t('passiveStatus')}</small>
                </div>
              )} */}

              <div className="d-flex justify-content-between">
                <Row className="flex-col-row">
                  <Col>
                    <small>{t('startBid')}:</small>
                  </Col>
                  <Col>
                    <h6 className="color-yellow">$ {item.startingPrice}</h6>
                  </Col>
                </Row>
                <Row className="flex-col-row">
                  <Col>
                    <small>{t('buyOutPrice')}:</small>
                  </Col>
                  <Col>
                    <h6 className="color-yellow">$ {item.car.Price}</h6>
                  </Col>
                </Row>
              </div>

              <div className="display-flex justify-content-between mt-3 align-center">
                <Link
                  className="btn-item auction-btn mr-2"
                  to={`/carDetailsAuction/${item.id}`}
                >
                  {t('more')}
                </Link>
                <button
                  className="btn-item"
                  style={{ padding: '5px 50px', background: '#fff' }}
                >
                  <img src={hammer} alt="bid" width="20" />
                </button>
              </div>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default CarItemAuction
