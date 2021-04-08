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
import { Redirect, useHistory } from 'react-router-dom'
import io from 'socket.io-client'

const CarDetails = ({ item }) => {
  let socket = io.connect('http://localhost:4000', {
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
          {item.typeSale === 'auction' && <h6 className="mt-3">{item.name}</h6>}
        </div>
        <Row>
          <Col>
            <Carousel>
              <div>
                <img src={imageCar} />
              </div>
              <div>
                <img src={imageCar} />
              </div>
              <div>
                <img src={imageCar} />
              </div>
            </Carousel>
            {item.typeSale === 'auction' && (
              <>
                <Row className="mt-1 row-modal">
                  <Col> ID аукцiону:</Col>
                  <Col>#{item.id}</Col>
                </Row>
                <Row className="mt-1 row-modal mb-4">
                  <Col> До кiнця торгiв залишилось:</Col>
                  <Col>{item.time}</Col>
                </Row>
                <Row className="mt-1 row-modal mb-4">
                  <Col> Кiлькiсть ставок:</Col>
                  <Col>{/* {item.bids.length} */}0</Col>
                </Row>
                <Row className="mt-4 pb-5 row-modal">
                  <Col>Початкова ставка:</Col>
                  <Col>{item.startPrice}</Col>
                </Row>
              </>
            )}
          </Col>
          <Col>
            {item.typeSale === 'auction' ? (
              <h4 style={{ fontWeight: 'bold' }} className="pl-3 mb-4">
                Current bid: $ 12,306.00
              </h4>
            ) : (
              <h4 style={{ fontWeight: 'bold' }} className="pl-3 mb-4">
                {item.name}
              </h4>
            )}

            <Row className="align-center mt-3">
              <Col className="center-items">
                <img src={icon_2} className="icon-small" />
                {item.mileage} тис. км
              </Col>
              <Col className="center-items">
                <img src={icon_1} className="icon-small" />
                {item.city}
              </Col>
            </Row>
            <Row className="align-center mb-3">
              <Col className="center-items">
                <img src={icon_3} className="icon-small" />
                {item.fuel}
              </Col>
              <Col className="center-items">
                <small className="a-icon">A</small>
                {item.type}
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
              <Col> {item.extraData}</Col>
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
                <small className="price-details">$ {item.price}</small>
              </Col>
              <Col>
                <button className="btn-item buy-now" onClick={openModal}>
                  Buy now
                </button>
              </Col>
            </Row>

            <ModalContactUs open={open} onHide={closeModal} closeModal={closeModal} />
            {item.typeSale == 'auction' && (
              <>
                <Row className="mt-4 pb-5 row-modal">
                  <Col>
                    ${' '}
                    <input
                      type="number"
                      value={bid}
                      onChange={(e) => setBid(e.target.value)}
                    />
                  </Col>
                  <Col>
                    {isLoggedIn.current ? (
                      <>
                        <button className="btn-item auction-btn-bet" onClick={sendBid}>
                          Make a bid
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn-item auction-btn-bet" onClick={checkLog}>
                          Make a bid
                        </button>
                      </>
                    )}
                  </Col>
                </Row>
              </>
            )}
          </Col>
        </Row>
        {item.typeSale === 'auction' && (
          <>
            <h5 className="p-5">Posted bids</h5>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Bid amount</th>
                      <th>Username</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bid && isLoggedIn.current ? (
                      <tr>
                        <td className="current-bid">${bid}</td>
                        <td className="current-bid">Your bid</td>
                        <td className="current-bid">14:04:11</td>
                      </tr>
                    ) : (
                      <tr>
                        <td className="current-bid">$1700</td>
                        <td className="current-bid">Mike</td>
                        <td className="current-bid">14:04:11</td>
                      </tr>
                    )}

                    <tr>
                      <td>$3,000</td>
                      <td>Mark</td>
                      <td>14:04:11</td>
                    </tr>
                    <tr>
                      <td>$3,000</td>
                      <td>Mark</td>
                      <td>14:04:11</td>
                    </tr>
                    <tr>
                      <td>$3,000</td>
                      <td>Mark</td>
                      <td>14:04:11</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  )
}

export default CarDetails