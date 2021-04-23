import React, { useState, useEffect, useRef } from 'react'
import { Col, Row, Container, Table } from 'react-bootstrap'
import imageCar from '../../img/ferrari.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './style.css'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import icon_4 from '../../img/icon_4.png'
import Moment from 'react-moment'
import ModalContactUs from '../ModalContactUs/ModalContactUs'
import { useHistory, useParams } from 'react-router-dom'
import io from 'socket.io-client'
import { CarType } from '../../types/appTypes'

type Props = {
  dataAuction: CarType[]
}

const CarDetailsAuction = ({ dataAuction = [] }: Props) => {
  let socket = io('http://localhost:4000', {
    query: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDU1NWY2OTQ1NDQyNDEwM2NlYmRhODgiLCJpYXQiOjE2MTcyNDUxODB9.s3fOFjdiV3U2DqU3IlPx9ZVtV2PdC9S89_4mMH1Co9k',
    },
  })

  const [item, setItem] = useState<CarType>()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const found = dataAuction.find((item) => item.id === id)
    if (found) {
      setItem(found)
    }
  }, [id, dataAuction])

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
  const [bid, setBid] = useState<string>()
  const sendBid = () => {
    socket.emit('bidInAuction', {
      auctionId: '60656f7c18e1b936bc78f21f',
      bidPrice: bid,
    })
    console.log(`your bid is ${bid}`)
  }
  // const checkLog = () => {
  //   alert('Please, log in !')
  //   history.push('/login')
  // }
  const checkLog = () => {
    alert('Завантажуй додаток !')
    //поставить ссилку на apps store
  }

  return (
    <>
      <Container fluid className="pb-5">
        <div className="p-5">
          <h5 className="blue-line"></h5>
          <h5 className="header-details">Деталі авто</h5>
          <h6 className="mt-3">{item?.name}</h6>
        </div>
        <Row>
          <Col>
            <Carousel>
              <div>
                <img src={item?.images[0]} />
              </div>
              <div>
                <img src={item?.images[1]} />
              </div>
              <div>
                <img src={item?.images[2]} />
              </div>
              <div>
                <img src={item?.images[3]} />
              </div>
            </Carousel>

            <Row className="mt-1 row-modal">
              <Col> ID аукцiону:</Col>
              <Col>#{item?.id}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Дата старту:</Col>
              <Col>
                <Moment format="DD/MM/YYYY HH:mm" style={{ fontWeight: 700 }}>
                  {item?.startingDate}
                </Moment>
              </Col>
            </Row>
          </Col>
          <Col>
            <h4 style={{ fontWeight: 'bold' }} className="pl-3">
              Початкова ставка:{' '}
              <small className="price-details-small border-dark">
                $ {item?.startingPrice}
              </small>
            </h4>
            <h5 style={{ fontWeight: 'bold' }} className="pl-3 mb-4">
              Ціна викупу:{' '}
              <small className="price-details-small border-dark">
                $ {item?.buyNowPrice}
              </small>
            </h5>

            <Row className="align-center mt-3">
              <Col className="center-items">
                <img src={icon_2} className="icon-small" />
                {item?.odometer} тис. км
              </Col>
              <Col className="center-items">
                <img src={icon_1} className="icon-small" />
                {item?.city}
                Київ
              </Col>
            </Row>
            <Row className="align-center mb-3">
              <Col className="center-items">
                <img src={icon_3} className="icon-small" />
                {item?.fuel}
              </Col>
              <Col className="center-items">
                <img src={icon_4} className="icon-small" />
                {item?.drive}
              </Col>
            </Row>

            <Row className="mt-4 row-modal">
              <Col> Рік випуску:</Col>
              <Col> {item?.year}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Привід:</Col>
              <Col> {item?.drive}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Колір:</Col>
              <Col> {item?.color}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col>Опис:</Col>
              <Col>{item?.description}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Додаткова інформація:</Col>
              <Col> {item?.extraInfo}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Контакти:</Col>
              <Col>
                <ul className="list-unstyled">
                  <li>+38 050 249 09 09</li>
                  <li> +38 093 249 09 09</li>
                  <li> +38 097 249 09 09</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Де ми знаходимось ?</Col>
              <Col>Київ, проспект Степана Бандери, 13</Col>
            </Row>
            <Row className="align-center mt-4 mb-5">
              <Col>
                <button className="btn-item buy-now" onClick={openModal}>
                  Викупити
                </button>
              </Col>
              <Col>
                <button className="btn-item auction-btn-bet" onClick={checkLog}>
                  Поставити ставку
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
