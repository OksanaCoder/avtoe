import React, { useState, useEffect, useRef } from 'react'
import { Col, Row, Container, Table } from 'react-bootstrap'
import imageCar from '../../img/ferrari.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './style.css'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import hammer from '../../img/hammer-white.jpeg'
import ModalContactUs from '../ModalContactUs/ModalContactUs'
import { useHistory, useParams } from 'react-router-dom'
import io from 'socket.io-client'
import { CarType } from '../../types/appTypes'

type Props = {
  data: CarType[]
}

const CarDetails = ({ data = [] }: Props) => {
  const [item, setItem] = useState<CarType>({} as CarType)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const found = data.find((item) => item.id === id)
    if (found) {
      setItem(found)
    }
  }, [id])

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

  //    const checkUser = () => {
  //        localStorage.getItem('user')
  //        localStorage.getItem('logged')
  //     }
  // const [logged, setLogged] = useState(false)
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
      <Container fluid className="pb-5">
        <div className="p-5">
          <h5 className="blue-line"></h5>
          <h5 className="header-details">Деталі авто</h5>
          <h6 className="mt-3">{item.name}</h6>
        </div>
        <Row>
          <Col>
            <Carousel>
              <div>
                <img src={item.image1} />
              </div>
              <div>
                <img src={item.image2} />
              </div>
              <div>
                <img src={item.image3} />
              </div>
            </Carousel>
          </Col>
          <Col>
            <h4 style={{ fontWeight: 'bold' }} className="pl-3 mb-4">
              {item.name}
            </h4>

            <Row className="align-center mt-3">
              <Col className="center-items">
                <img src={icon_2} className="icon-small" />
                {item.odometer} тис. км
              </Col>
              <Col className="center-items">
                <img src={icon_1} className="icon-small" />
                {item.city}
                Київ
              </Col>
            </Row>
            <Row className="align-center mb-3">
              <Col className="center-items">
                <img src={icon_3} className="icon-small" />
                {item.fuel}
              </Col>
              <Col className="center-items">
                <small className="a-icon">A</small>
                {item.drive}
              </Col>
            </Row>

            <Row className="mt-4 row-modal">
              <Col> Рік випуску:</Col>
              <Col> {item.year}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Привід:</Col>
              <Col> {item.drive}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Колір:</Col>
              <Col> {item.color}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col>Опис:</Col>
              <Col>{item.description}</Col>
            </Row>
            <Row className="mt-1 row-modal">
              <Col> Додаткова інформація:</Col>
              <Col> {item.extraInfo}</Col>
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
            <Row className="align-center mt-4">
              <Col>
                <small className="price-details">$ {item.startingPrice}</small>
              </Col>
              <Col>
                <button className="btn-item buy-now" onClick={openModal}>
                  Buy now
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
