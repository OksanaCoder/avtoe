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
import accord from '../../img/accord-bank.png'
import motor from '../../img/motor.png'
import calendar from '../../img/calendar.png'
import privod from '../../img/privod.png'
import locations from '../../img/locations.png'
import contacts from '../../img/contacts.svg'
import colors from '../../img/colors.png'
import more from '../../img/more.svg'
import pumb from '../../img/pumb.png'
import bank from '../../img/bank.svg'
import kpp from '../../img/kpp.png'
import infomore from '../../img/infomore.svg'
import nocar from '../../img/nocar.jpeg'
import ModalContactUs from '../ModalContactUs/ModalContactUs'
import { useHistory, useParams } from 'react-router-dom'
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

  const [showDetails, setShowDetails] = useState(false)
  const openDetails = () => {
    setShowDetails(true)
  }

  const [open, setOpenModal] = useState(false)
  const history = useHistory()
  const openModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
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
          <Col lg={6} md={6} sm={12} xs={12}>
            <Carousel>
              {item.images &&
                item.images.map((i) => {
                  return (
                    <div>
                      <img src={i} alt="car" className="car-details-img" />
                    </div>
                  )
                })}

              {/* {item.images.length === 0 && (
                <div>
                  <img src={nocar} alt="no-car" />
                </div>
              )} */}
              {/* {item.images.length === 0 ? (
                <div>
                  <img src={nocar} alt="no-car" />
                </div>
              ) : (
                item.images.map((i) => {
                  return (
                    <div>
                      <img src={i} alt="car" />
                    </div>
                  )
                })
              )} */}
            </Carousel>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h4 style={{ fontWeight: 'bold' }} className="pl-3">
              {item.name}
            </h4>
            <small style={{ fontWeight: 'bold' }} className="pl-3 mb-4">
              {t('partners')}
            </small>
            <Row className="row-calcs pb-2 pt-3">
              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://tascombank.ua/you/credits/na_prydbannia_avto"> */}
                <img src={bank_1} width="50" alt="bank" />
                {/* </a> */}
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://alfabank.ru/get-money/autocredit/"> */}
                <img src={pumb} width="50" alt="bank" />
                {/* </a> */}
              </Col>

              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://ru.otpbank.com.ua/privateclients/crediting/autoshpartners/"> */}
                <img src={bank_3} width="50" alt="bank" />
                {/* </a> */}
              </Col>

              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://privatbank.ua/kredity/kredit-na-avto?utm_source=GSearch&utm_medium=cpc&utm_campaign=UM_Car_Credit_GSearch_conv_Brand&utm_content=UM_Car_Credit_GSearch_conv_Brand_search_Brand_keywords&gclid=Cj0KCQjw4ImEBhDFARIsAGOTMj8s_rafqNPJIOj-JfTPl2JCJ72fRoJ6qkBtRJcm7X4bc9yLE5rePOUaAhWcEALw_wcB"> */}
                <img src={bank_4} width="50" alt="bank" />
                {/* </a> */}
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://alfabank.ru/get-money/autocredit/"> */}
                <img src={bank_5} width="50" alt="bank" />
                {/* </a> */}
              </Col>
            </Row>
            <Row className="row-calcs pb-2 pt-3">
              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://alfabank.ru/get-money/autocredit/"> */}
                <img src={bank} width="50" alt="bank" />
                {/* </a> */}
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://hapai.kiev.ua/ru?utm_source=google&utm_medium=cpc&utm_campaign=search_brand_111&gclid=Cj0KCQjwyZmEBhCpARIsALIzmnL2oSFW6py-tWs-bEoEhP1Zf757X3ZNWzbxUEuwVTVqP1UZAxTrQvYaAn9qEALw_wcB"> */}
                <img src={bank_2} width="50" alt="bank" />
                {/* </a> */}
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://alfabank.ru/get-money/autocredit/"> */}
                <img src={accord} alt="bank" width="50" />
                {/* </a> */}
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                {/* <a href="https://alfabank.ru/get-money/autocredit/"> */}
                <img src={motor} alt="bank" width="50" />
                {/* </a> */}
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
                <img src={kpp} className="icon-small" alt="type drive" />
                {item.drive}
              </Col>
            </Row>

            <Row className="mt-4 row-modal">
              <Col lg={12} md={12} sm={12} xs={12} className="font-weight-bold">
                <img src={calendar} alt="calendar" width="15" className="mr-2" />{' '}
                {t('yearProd')}:
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                {' '}
                {item.year}
              </Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={12} md={12} sm={12} xs={12} className="font-weight-bold">
                <img src={privod} alt="calendar" width="15" className="mr-2" />{' '}
                {t('privod')}:
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                {item.transmission}
              </Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={12} md={12} sm={12} xs={12} className="font-weight-bold">
                <img src={colors} alt="calendar" width="15" className="mr-2" />{' '}
                {t('color')}:
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                {' '}
                {item.color}
              </Col>
            </Row>
            <Row>
              <Col className="mt-3 mb-3 row-modal">
                <button className="btn-item buy-now" onClick={openDetails}>
                  {t('moreDetails')}
                </button>
              </Col>
            </Row>
            {showDetails ? (
              <>
                <Row className="mt-1 row-modal">
                  <Col lg={12} md={12} sm={12} xs={12} className="font-weight-bold">
                    <img src={more} alt="calendar" width="15" className="mr-2" />{' '}
                    {t('description')}:
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    {item.description}
                  </Col>
                </Row>
                <Row className="mt-1 row-modal">
                  <Col lg={12} md={12} sm={12} xs={12} className="font-weight-bold">
                    <img src={infomore} alt="calendar" width="15" className="mr-2" />{' '}
                    {t('extraInfo')}:
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    {' '}
                    {item.extraInfo}
                  </Col>
                </Row>
                <Row className="mt-1 row-modal">
                  <Col lg={12} md={12} sm={12} xs={12} className="font-weight-bold">
                    <img src={contacts} alt="calendar" width="15" className="mr-2" />{' '}
                    {t('contacts')}:
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <ul className="list-unstyled">
                      <li>+38 050 249 09 09</li>
                      <li> +38 093 249 09 09</li>
                      <li> +38 097 249 09 09</li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mt-1 row-modal">
                  <Col lg={12} md={12} sm={12} xs={12} className="font-weight-bold">
                    <img src={locations} alt="calendar" width="15" className="mr-2" />{' '}
                    {t('whereLocation')}
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    {t('address')}
                  </Col>
                </Row>
              </>
            ) : null}
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
