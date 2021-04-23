import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bank_1 from '../../img/bank-1.png'
import bank_2 from '../../img/bank-2.png'
import bank_3 from '../../img/bank-3.png'
import bank_4 from '../../img/tac.png'
import bank_5 from '../../img/hap.png'
import hapai from '../../img/hapai.png'
import automoney from '../../img/automoney.png'
import './style.css'

const Calculators = ({ reference }) => {
  return (
    <>
      <Row className="color-light-dark p-5 " ref={reference}>
        <div className="heading-style">
          <h6 className="blue-line">Авто</h6>
          <h3>в Кредит</h3>
        </div>
      </Row>
      <Container className="color-dark" fluid>
        <Row className="row-calcs pt-5 pb-4 pl-5 pr-5">
          <Col lg={3} md={6} sm={12} xs={12}>
            <a href="https://privatbank.ua/kredity/kredit-na-avto?utm_source=GSearch&utm_medium=cpc&utm_campaign=UM_Car_Credit_GSearch_conv_Brand&utm_content=UM_Car_Credit_GSearch_conv_Brand_search_Brand_keywords&gclid=Cj0KCQjw4ImEBhDFARIsAGOTMj8s_rafqNPJIOj-JfTPl2JCJ72fRoJ6qkBtRJcm7X4bc9yLE5rePOUaAhWcEALw_wcB">
              <img src={bank_1} className="img-bank first" />
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <a href="https://ru.otpbank.com.ua/privateclients/crediting/autoshpartners/">
              <img src={bank_2} className="img-bank first" />
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <a href="https://alfabank.ru/get-money/autocredit/">
              <img src={bank_3} className="img-bank middle-img" />
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} xs={12}>
            <a href="https://tascombank.ua/you/credits/na_prydbannia_avto">
              <img src={bank_4} className="img-bank middle-img" />
            </a>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <a href="https://automoney.ua/calc-builder/">
              <img
                src="https://cdn.shortpixel.ai/client/q_lossy,ret_img/https://automoney.ua/wp-content/uploads/2020/06/logo.png"
                className="img-bank-small  last-img"
              />
            </a>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img src={hapai} className="img-bank last-img-bank" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Calculators
