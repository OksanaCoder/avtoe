import React, { useState, useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
// import imageCar from '../../img/ferrari.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './style.css'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import icon_4 from '../../img/icon_4.png'
import Moment from 'react-moment'
import ModalContactUs from '../ModalContactUs/ModalContactUs'
import { useParams } from 'react-router-dom'
import { CarType } from '../../types/appTypes'
import { useTranslation } from 'react-i18next'

type Props = {
  dataAuction: CarType[]
}

const CarDetailsAuction = ({ dataAuction = [] }: Props) => {
  const { t } = useTranslation()

  const [item, setItem] = useState<CarType>()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const found = dataAuction.find((item) => item.id === id)
    if (found) {
      setItem(found)
    }
  }, [id, dataAuction])



  const [open, setOpenModal] = useState(false)


  const openModal = () => {

    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  const [bid] = useState<string>()


  const checkLog = () => {
    alert('Завантажуй додаток !')
  }

  return (
    <>
      <Container fluid className="pb-5">
        <div className="p-5">
          <h5 className="blue-line"></h5>
          <h5 className="header-details">{t('details')}</h5>
          <h6 className="mt-3">{item?.Title}</h6>
        </div>
        <Row>
          <Col>
            <Carousel>
              <div>
                <img alt="11" src={item?.images[0]} />
              </div>
              <div>
                <img alt="11" src={item?.images[1]} />
              </div>
              <div>
                <img alt="11" src={item?.images[2]} />
              </div>
              <div>
                <img alt="11" src={item?.images[3]} />
              </div>
            </Carousel>

            {/* <Row className="mt-1 row-modal">
              <Col> {t('id')}:</Col>
              <Col>#{item?.id}</Col>
  </Row>*/ }
             <Row className="mt-1 row-modal">
               <Col>{t('dataStart')}:</Col>
              {/* <Col>
                 <Moment format="DD/MM/YYYY HH:mm" style={{ fontWeight: 700 }}>
                   {item?.startingDate}
                 </Moment>
               </Col> */}
             </Row> 
          </Col>
          <Col>
            <h4 style={{ fontWeight: 'bold' }} className="pl-3">
              {t('startBid')}:{' '}
              {/* <small className="price-details-small border-dark">
                $ {item?.startingPrice}
              </small> */}
            </h4>
            <h5 style={{ fontWeight: 'bold' }} className="pl-3 mb-4">
              {t('buyOutPrice')}:{' '}
              <small className="price-details-small border-dark">
                {/* $ {item?.buyNowPrice} */}
              </small>
            </h5>

            <Row className="align-center mt-3">
              <Col className="center-items">
                <img alt="11" src={icon_2} className="icon-small" />
                {item?.Odometer} тис. км
              </Col>
              <Col className="center-items">
                <img alt="11" src={icon_1} className="icon-small" />
                {/* {item?.city} */}
                Київ
              </Col>
            </Row>
            <Row className="align-center mb-3">
              <Col className="center-items">
                <img alt="11" src={icon_3} className="icon-small" />
                {item?.Fuel}
              </Col>
              <Col className="center-items">
                <img alt="11" src={icon_4} className="icon-small" />
                {/* {item?.drive} */}
              </Col>
            </Row>

            <Row className="mt-4 row-modal">
              <Col lg={6} md={12} sm={12} xs={12}  className='font-weight-bold'> {t('year')}:</Col>
              <Col lg={6} md={12} sm={12} xs={12}  > {item?.Year}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={6} md={12} sm={12} xs={12}  className='font-weight-bold'> {t('privod')}:</Col>
              {/* <Col lg={6} md={12} sm={12} xs={12}  > {item?.drive}</Col> */}
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={6} md={12} sm={12} xs={12}  className='font-weight-bold'> {t('color')}:</Col>
              <Col lg={6} md={12} sm={12} xs={12}  > {item?.color}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={6} md={12} sm={12} xs={12}  className='font-weight-bold'>{t('description')}:</Col>
              <Col lg={6} md={12} sm={12} xs={12}  >{item?.description}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={6} md={12} sm={12} xs={12}  className='font-weight-bold'> {t('extraInfo')}:</Col>
              <Col lg={6} md={12} sm={12} xs={12}  > {item?.extra_info}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={6} md={12} sm={12} xs={12}  className='font-weight-bold'> {t('contacts')}:</Col>
              <Col lg={6} md={12} sm={12} xs={12}  >
                <ul className="list-unstyled">
                  <li>+38 050 249 09 09</li>
                  <li> +38 093 249 09 09</li>
                  <li> +38 097 249 09 09</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col lg={6} md={12} sm={12} xs={12}  className='font-weight-bold'> {t('whereLocation')}</Col>
              <Col lg={6} md={12} sm={12} xs={12}  >{t('address')}</Col>
            </Row>
            <Row className="align-center mt-4 mb-5">
              <Col>
                <button className="btn-item buy-now mb-3" onClick={openModal}>
                  {t('buyOut')}
                </button>
              </Col>
              <Col>
                <button className="btn-item auction-btn-bet" onClick={checkLog}>
                  {t('setBid')}
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

export default CarDetailsAuction
