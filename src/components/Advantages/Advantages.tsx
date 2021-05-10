import React from 'react'
import './style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import icon from '../../img/money.png'
import icon_1 from '../../img/credit-card.png'
import icon_2 from '../../img/quality.png'
import icon_3 from '../../img/certification.png'
import icon_4 from '../../img/competitive.png'
import icon_5 from '../../img/laptop.png'
import car_adv from '../../img/car-adv.png'
import { useTranslation } from 'react-i18next'

const Advantages = () => {
  const { t, i18n } = useTranslation()

  return (
    <div style={{ background: '#262626' }} className="p-5">
      <Container fluid>
        <Row>
          <div className="heading-style">
            <h6 className="blue-line">{t('why')}</h6>
            <h3>AVTOE ?</h3>
          </div>
        </Row>
        <Row style={{ display: 'flex', alignItems: 'center' }}>
          <Col lg={6} md={6} sm={12}>
            <img
              src={car_adv}
              style={{ width: '90%', marginTop: '50px', marginBottom: '60px' }}
            />
          </Col>
          <Col lg={6} md={6} sm={12} className="pb-5">
            <Row className="row-column text-left">
              <Col className="mb-5 text-white flex-between">
                <img src={icon} className="icon-adv" />

                <div>
                  <h5 className="bold">{t('reason1')}</h5>
                  <p className="text-400">{t('reason1More')}</p>
                </div>
              </Col>
              <Col className="mb-5 text-white flex-between">
                <img src={icon_1} className="icon-adv" />

                <div>
                  <h5 className="bold">{t('reason2')}</h5>
                  <p className="text-400">{t('reason2More')}</p>
                </div>
              </Col>
            </Row>
            <Row className="row-column text-left">
              <Col className="mb-5 text-white flex-between">
                <img src={icon_2} className="icon-adv" />

                <div>
                  <h5 className="bold">{t('reason3')}</h5>
                  <p className="text-400">{t('reason3More')}</p>
                </div>
              </Col>
              <Col className="mb-5 text-white flex-between">
                <img src={icon_3} className="icon-adv" />

                <div>
                  <h5 className="bold">{t('reason4')}</h5>
                  <p className="text-400">{t('reason4More')}</p>
                </div>
              </Col>
            </Row>
            <Row className="row-column text-left">
              <Col className="mb-5 text-white flex-between">
                <img src={icon_4} className="icon-adv" />

                <div>
                  <h5 className="bold">{t('reason5')}</h5>
                  <p className="text-400">{t('reason5More')}</p>
                </div>
              </Col>
              <Col className="mb-5 text-white flex-between">
                <img src={icon_5} className="icon-adv" />

                <div>
                  <h5 className="bold">{t('reason6')}</h5>
                  <p className="text-400">{t('reason6More')}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Advantages
