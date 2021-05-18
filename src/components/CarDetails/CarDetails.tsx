import React, { useState, useEffect, useRef } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import imageCar from '../../img/ferrari.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './style.css'
import '../Calculators/style.css'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import icon_4 from '../../img/icon_4.png'
import bank_1 from '../../img/bank-1.png'
import bank_2 from '../../img/bank-2.png'
import bank_3 from '../../img/bank-3.png'
import bank_4 from '../../img/bank-4.png'
import bank_5 from '../../img/bank-5.png'
import hapai from '../../img/hapai.png'
import ModalContactUs from '../ModalContactUs/ModalContactUs'
import { useHistory, useParams } from 'react-router-dom'
import io from 'socket.io-client'
import { CarType } from '../../types/appTypes'
import { useTranslation } from 'react-i18next'

type Props = {
  data: CarType[]
}

const CarDetails = ({ data = [] }: Props) => {
  const { t } = useTranslation()
  const [item, setItem] = useState<CarType>({} as CarType)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const found = data.find((item) => item.id === id)
    if (found) {
      setItem(found)
    }
  }, [data, id])

  let socket = io('http://localhost:4000', {
    query: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDU1NWY2OTQ1NDQyNDEwM2NlYmRhODgiLCJpYXQiOjE2MTcyNDUxODB9.s3fOFjdiV3U2DqU3IlPx9ZVtV2PdC9S89_4mMH1Co9k',
    },
  })
  useEffect(() => {
    socket.on('winner', function (data) {
      console.log(data)
    })
    socket.on('buyNowAuction', function (data) {
      console.log(data)
    })
    socket.on('sold', function (data) {
      console.log(data)
    })

    socket.on('errorHandler', function (data) {
      console.log(data)
    })
    socket.on('bidInAuction', function (data) {
      console.log(data)
    })
  })
  const isLoggedIn = useRef(localStorage.getItem('token'))
  console.log(item, ' for car details')

  const [open, setOpenModal] = useState(false)
  const history = useHistory()
  const openModal = () => {
    socket.emit('buyNowAuction', {
      auctionId: '606823e6c780943d60b7a09c',
    })
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }

  const [bid, setBid] = useState(null)
  const sendBid = () => {
    socket.emit('bidInAuction', {
      auctionId: '60656f7c18e1b936bc78f21f',
      bidPrice: bid,
    })
    console.log(`your bid is ${bid}`)
  }
  const checkLog = () => {
    alert('Please, log in !')
    history.push('/login')

    //  return <Redirect to='/login'/>
  }
  return (
    <>
      <Container fluid className="pb-5 mb-5">
        <div className="p-5">
          <h5 className="blue-line"></h5>
          <h5 className="header-details">{t('details')}</h5>
          <h6 className="mt-3">{item.name}</h6>
        </div>
        <Row>
          <Col>
            <Carousel>
              {item.image1 ? (
                <div>
                  <img src={item.image1} />
                </div>
              ) : (
                <div>
                  <img src={imageCar} />
                </div>
              )}

              {item.image2 ? (
                <div>
                  <img src={item.image2} />
                </div>
              ) : (
                <div>
                  <img src={imageCar} />
                </div>
              )}
              {item.image3 ? (
                <div>
                  <img src={item.image3} />
                </div>
              ) : (
                <div>
                  <img src={imageCar} />
                </div>
              )}
            </Carousel>
          </Col>
          <Col>
            <h4 style={{ fontWeight: 'bold' }} className="pl-3">
              {item.name}
            </h4>
            <small style={{ fontWeight: 'bold' }} className="pl-3 mb-4">
              Авто в кредит
            </small>
            <Row className="row-calcs pb-2 pt-3">
              <Col lg={2} md={2} sm={2} xs={2}>
                <a href="https://privatbank.ua/kredity/kredit-na-avto?utm_source=GSearch&utm_medium=cpc&utm_campaign=UM_Car_Credit_GSearch_conv_Brand&utm_content=UM_Car_Credit_GSearch_conv_Brand_search_Brand_keywords&gclid=Cj0KCQjw4ImEBhDFARIsAGOTMj8s_rafqNPJIOj-JfTPl2JCJ72fRoJ6qkBtRJcm7X4bc9yLE5rePOUaAhWcEALw_wcB">
                  <img src={bank_1} className="img-bank" alt="bank" />
                </a>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <a href="https://ru.otpbank.com.ua/privateclients/crediting/autoshpartners/">
                  <img src={bank_2} className="img-bank" alt="bank" />
                </a>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <a href="https://alfabank.ru/get-money/autocredit/">
                  <img src={bank_3} className="img-bank" alt="bank" />
                </a>
              </Col>

              <Col lg={2} md={2} sm={2} xs={2}>
                <a href="https://tascombank.ua/you/credits/na_prydbannia_avto">
                  <img src={bank_4} className="img-bank" alt="bank" />
                </a>
              </Col>

              {/* <Col lg={2} md={6} sm={6} xs={6}>
                <a href="https://automoney.ua/calc-builder/">
                  <img
                    src="https://cdn.shortpixel.ai/client/q_lossy,ret_img/https://automoney.ua/wp-content/uploads/2020/06/logo.png"
                    className="img-bank"
                    alt="bank"
                  />
                </a>
              </Col> */}
              <Col lg={2} md={2} sm={2} xs={2}>
                <a href="https://hapai.kiev.ua/ru?utm_source=google&utm_medium=cpc&utm_campaign=search_brand_111&gclid=Cj0KCQjwyZmEBhCpARIsALIzmnL2oSFW6py-tWs-bEoEhP1Zf757X3ZNWzbxUEuwVTVqP1UZAxTrQvYaAn9qEALw_wcB">
                  <img src={bank_5} className="img-bank-last" alt="bank" />
                </a>
              </Col>
            </Row>

            <Row className="align-center mt-3">
              <Col className="center-items">
                <img src={icon_2} className="icon-small" alt="odometer" />
                {item.odometer} тис. км
              </Col>
              <Col className="center-items">
                <img src={icon_1} className="icon-small" alt="city" />
                {item.city}
                Київ
              </Col>
            </Row>
            <Row className="align-center mb-3">
              <Col className="center-items">
                <img src={icon_3} className="icon-small" alt="fuel" />
                {item.fuel}
              </Col>

              <Col className="center-items">
                <img src={icon_4} className="icon-small" alt="type drive" />
                {item.drive}
              </Col>
            </Row>

            <Row className="mt-4 row-modal">
              <Col> {t('yearProd')}:</Col>
              <Col> {item.year}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> {t('privod')}:</Col>
              <Col> {item.drive}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> {t('color')}:</Col>
              <Col> {item.color}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col>{t('description')}:</Col>
              <Col>{item.description}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> {t('extraInfo')}:</Col>
              <Col> {item.extraInfo}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> {t('contacts')}:</Col>
              <Col>
                <ul className="list-unstyled">
                  <li>+38 050 249 09 09</li>
                  <li> +38 093 249 09 09</li>
                  <li> +38 097 249 09 09</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> {t('whereLocation')}</Col>
              <Col>{t('address')}</Col>
            </Row>
            <Row className="align-center mt-4">
              <Col>
                <small className="price-details">$ {item.startingPrice}</small>
              </Col>
              <Col>
                <button className="btn-item buy-now" onClick={openModal}>
                  {t('buyOut')}
                </button>
              </Col>
            </Row>

            <ModalContactUs open={open} onHide={closeModal} closeModal={closeModal} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CarDetails
