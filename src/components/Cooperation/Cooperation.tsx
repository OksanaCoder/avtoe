import React, { useLayoutEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.css'
import CarSearch from '../CarSearch/CarSearch'
import { useTranslation } from 'react-i18next'

const Cooperation = ({ dataFindCar = [] }) => {
  const { t } = useTranslation()

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // })

  return (
    <>
      <Row className="flex-style pl-5 pr-5" style={{ background: '#23292D' }}>
        <div className="heading-style col text-center pb-5">
          <div className="blue-line m-auto"></div>
          <h6 className="mt-3">{t('we')}</h6>
          <h3 className="blue-color">{t('willBuyCar')}</h3>
          <small className="text-white">({t('ukrReg')})</small>
          <Row className="mt-4 align-center">
            <Col className="text-white text-center" lg={6} md={6} sm={12}>
              <small>{t('callUs')}:</small>
              <ul className="list-unstyled">
                <li>+38 050 249 09 09</li>
                <li>+38 073 249 09 09</li>
                <li>+38 097 249 09 09</li>
              </ul>
            </Col>
            <Col className="text-white text-center" lg={6} md={6} sm={12}>
              <small>{t('sendEmail')}:</small>
              <p>avtoe@i.ua</p>
            </Col>
          </Row>
        </div>
      </Row>
      {dataFindCar.length > 0 ? (
        <Row className="p-5">
          <CarSearch dataFindCar={dataFindCar} />
        </Row>
      ) : (
        <h6 className="p-5">{t('noReq')}</h6>
      )}
    </>
  )
}

export default Cooperation
