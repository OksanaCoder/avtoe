import './App.css'
import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header/Header-1'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link as BrowserLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './components/NavBar/style.css'
import person from './img/person.svg'
import mail from './img/mail.png'
import phone from './img/phone.png'
import search from './img/search.svg'
import read from './img/read.svg'
import cart from './img/cart.svg'
import hammer from './img/hammer.svg'
import home from './img/home.svg'
import SignUpForm from './components/SignUpForm/SignUpForm'
import LoginForm from './components/LoginForm/LoginForm'
import Cooperation from './components/Cooperation/Cooperation'
import Auction from './components/Auction/Auction'
import './components/NavBar/style.css'
import CarDetails from './components/CarDetails/CarDetails'
import Catalog from './components/Catalog/Catalog'
import RequestForm from './components/RequestForm/RequestForm'
import Profile from './components/Profile/Profile'
import { allAuctions, allCars, allAdvertisments } from './API'
import CarDetailsAuction from './components/CarDetailsAuction/CarDetailsAuction'
import classNames from 'classnames'
import { CarType } from './types/appTypes'

const App = () => {
  // let socket = io.connect('http://localhost:4000', {
  //   query: {
  //     token:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDU1NWY2OTQ1NDQyNDEwM2NlYmRhODgiLCJpYXQiOjE2MTcyNDUxODB9.s3fOFjdiV3U2DqU3IlPx9ZVtV2PdC9S89_4mMH1Co9k',
  //   },
  // })

  const [data, setData] = useState<CarType[]>([])
  const [dataAuction, setDataAuction] = useState([])
  const [dataFindCar, setDataFindCar] = useState([])
  const [logged, setLogged] = useState(false)
  const myRef = useRef<any>(null)
  const [show_form, setShow_form] = useState(false)
  const handleShowForm = () => setShow_form(true)
  const handleCloseForm = () => setShow_form(false)
  const [showed, setShowed] = useState(false)

  useEffect(() => {
    loadCars()
    loadAuctions()
    loadDataFindCar()
  }, [])

  const loadDataFindCar = () => {
    allAdvertisments()
      .then((response) => {
        if (response.data) {
          setDataFindCar(response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const loadCars = () => {
    allCars()
      .then((response) => {
        if (response.data) {
          setData(response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const loadAuctions = () => {
    allAuctions()
      .then((res) => {
        if (res.data) {
          setDataAuction(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  const handleOut = () => {
    setLogged(false)
    localStorage.clear()
    // history.push('/login')
  }

  return (
    <Router>
      <div
        style={{ background: '#062BB2' }}
        className={classNames(
          { noShow: showed },
          {
            'd-flex justify-content-between align-center pl-3 pr-3 pt-2 m-0 text-white': !showed,
          }
        )}
      >
        <h6 style={{ fontSize: '12px' }}>Завантажуй додаток ! Там зручніше</h6>
        <h6
          style={{ fontWeight: 700, fontSize: '12px' }}
          onClick={() => setShowed(!showed)}
        >
          x
        </h6>
      </div>
      <Navbar expand="lg" className="bottomNav">
        <Container fluid className="display-flex justify-content-around">
          <Nav className="mob-nav">
            <Nav className="nav-style nav-no-col nav-style-mob">
              <Nav.Link className="nav-item button-nav">
                <BrowserLink to="/" className="text-white link-nav">
                  <img className="img-small" src={home} />
                  Головна
                </BrowserLink>
              </Nav.Link>
              <Nav.Link className="nav-item button-nav">
                <BrowserLink to="/catalog" className="text-white link-nav">
                  <img className="img-small" src={cart} />
                  Каталог
                </BrowserLink>
              </Nav.Link>
              <Nav.Link className="nav-item button-nav">
                <BrowserLink to="/auction" className="text-white link-nav">
                  <img src={hammer} width="20px" className="mb-1 img-small" />
                  Аукціон
                </BrowserLink>
              </Nav.Link>

              <a
                className="text-white link-nav nav-item button-nav mag-link"
                href="https://oksishukh.wixsite.com/my-site-3"
              >
                <img className="img-small" src={read} />
                Журнал
              </a>

              <Nav.Link className="nav-item text-white link-nav button-nav">
                <BrowserLink to="/cooperation" className=" text-white link-nav">
                  <img className="img-small" src={search} />
                  Купимо
                </BrowserLink>
              </Nav.Link>
              {/* <Nav.Link className="nav-item link-nav button-nav">
                <BrowserLink to="/profile" className="text-white link-nav">
                  <img className="img-small" src={person} />
                  Мій кабінет
                </BrowserLink>
              </Nav.Link> */}
              {/* {!logged ? (
            
              ) : (
                <>
                  <Nav.Link className="nav-item link-nav button-nav">
                    <BrowserLink to="/profile" className="text-white link-nav">
                      <img className="img-small" src={person} />
                      {localStorage.getItem('fullName')}
                    </BrowserLink>
                  </Nav.Link>
                  <Nav.Link className=" nav-item link-nav button-nav">
                    <BrowserLink to="/login" className=" text-white link-nav">
                      <img className="img-small" src={person} onClick={handleOut} />
                      Вийти
                    </BrowserLink>
                  </Nav.Link>
                </>
              )} */}
              {/* 
              {!logged ? (
                <>
                  <Nav.Link className=" nav-item link-nav button-nav">
                    <BrowserLink to="/login" className=" text-white link-nav">
                      <img className="img-small" src={person} />
                      Увійти
                    </BrowserLink>
                  </Nav.Link>
                  <Nav.Link className=" nav-item link-nav button-nav">
                    <BrowserLink to="/register" className=" text-white link-nav">
                      <img className="img-small" src={person} />
                      Реєстрація
                    </BrowserLink>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="nav-item link-nav button-nav">
                    <BrowserLink to="/profile" className="text-white link-nav">
                      <img className="img-small" src={person} />
                      {localStorage.getItem('fullName')}
                    </BrowserLink>
                  </Nav.Link>
                  <Nav.Link className=" nav-item link-nav button-nav">
                    <BrowserLink to="/login" className=" text-white link-nav">
                      <img className="img-small" src={person} onClick={handleOut} />
                      Вийти
                    </BrowserLink>
                  </Nav.Link>
                </>
              )} */}
            </Nav>
          </Nav>
        </Container>
      </Navbar>

      <img className="img-mail" src={mail} onClick={handleShowForm} />
      <img className="img-phone" src={phone} onClick={scrollToBottom} />

      <RequestForm
        show_form={show_form}
        handleShowForm={handleShowForm}
        handleCloseForm={handleCloseForm}
      />

      <Route
        path="/login"
        component={() => (
          <LoginForm
            logged={logged}
            setLogged={(l) => {
              setLogged(l)
            }}
          />
        )}
      />

      <Route path="/register" component={SignUpForm} />

      <Route path="/" exact component={() => <Header reference={myRef} data={data} />} />

      <Route path="/about" exact component={About} />

      <Route
        path="/cooperation"
        exact
        component={() => <Cooperation dataFindCar={dataFindCar} />}
      />

      <Route
        exact
        path="/carDetails/:id"
        component={({ match }) => {
          return (
            <CarDetails
              item={data.find((item: any) => String(item.id) === String(match.params.id))}
            />
          )
        }}
      />

      <Route
        exact
        path="/carDetailsAuction/:id"
        component={({ match }) => (
          <CarDetailsAuction
            item={dataAuction.find(
              (item: any) => String(item.id) === String(match.params.id)
            )}
          />
        )}
      />

      <Route path="/catalog" exact>
        <Catalog data={data} />
      </Route>

      <Route exact path="/catalog/:type">
        <Catalog data={data} />
      </Route>

      <Route
        exact
        path="/auction/:type"
        component={({ match }) => (
          <Auction
            dataAuction={dataAuction}
            // filteredData={data.filter((item: any) => item.type === match.params.type)}
          />
        )}
      />
      <Route
        path="/auction"
        exact
        component={() => <Auction dataAuction={dataAuction} />}
      />

      <Route path="/profile" exact component={() => <Profile />} />
      <Footer />
    </Router>
  )
}

export default App
