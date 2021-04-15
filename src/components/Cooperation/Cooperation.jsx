import React, { useLayoutEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import camry from '../../img/camry.jpg'
import wol from '../../img/wol.jpg'
import toyota from '../../img/toyota.jpg'
import './style.css'
import CarSearch from '../CarSearch/CarSearch'

const Cooperation = ({ dataFindCar = [] }) => {
  console.log(dataFindCar, 'items find cars')
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Row className="flex-style pl-5 pr-5" style={{ background: '#23292D' }}>
        <div className="heading-style col text-center pb-5">
          <div className="blue-line m-auto"></div>
          <h6 className="mt-3">Ми</h6>
          <h3 className="blue-color">Купимо Ваше Авто</h3>
          <small className="text-white">(української реєстрації)</small>
          <Row className="mt-4 align-center">
            <Col className="text-white text-center" lg={6} md={6} sm={12}>
              <small>Телефонуйте за номером:</small>
              <ul className="list-unstyled">
                <li>+38 050 249 09 09</li>
                <li>+38 073 249 09 09</li>
                <li>+38 097 249 09 09</li>
              </ul>
            </Col>
            <Col className="text-white text-center" lg={6} md={6} sm={12}>
              <small>Або відправляйте email за адресою:</small>
              <p>avtoe@i.ua</p>
            </Col>
          </Row>
        </div>
      </Row>
        {dataFindCar.length > 0 ? (
            <Row className="p-5" style={{ paddingBottom: '100px' }}>
                
                    <CarSearch dataFindCar={dataFindCar}/>
                
            </Row>
        ): ( <h6 className='p-5'>Поки що запитів немає</h6>)}
                
    
    </>
  )
}

export default Cooperation
