import './App.css'
import React, { useState, useRef, useEffect } from 'react'
import Header from './components/Header/Header-1'
import Categories from './components/Categories/Categories'
import Shop from './components/Catalog/Catalog'
import About from './components/About/About'
import MobApp from './components/MobApp/MobApp'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link as BrowserLink, useHistory} from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './components/NavBar/style.css'
import person from './img/person.svg'
import mail from './img/mail.png'
import phone from './img/phone.png'
import search from './img/search.svg'
import read from './img/read.svg'
import email from './img/email.svg'
import about from './img/info.svg'
import credit from './img/credit.svg'
// import call from './img/call.png'
import cart from './img/cart.svg'
import hammer from './img/hammer.svg'
import home from './img/home.svg'
import Calculator from './components/NavBar/Calculator'
import SignUpForm from './components/SignUpForm/SignUpForm'
import LoginForm from './components/LoginForm/LoginForm'
import Cooperation from './components/Cooperation/Cooperation'
import Auction from './components/Auction/Auction'
import './components/NavBar/style.css'
import CarDetails from './components/CarDetails/CarDetails'
import Catalog from './components/Catalog/Catalog'
import RequestForm from './components/RequestForm/RequestForm'
import Profile from './components/Profile/Profile'
import io from 'socket.io-client'
import { allAuctions, allCars, allAdvertisments } from './API'
import ArticleDetails from './components/ArticleDetails/ArticleDetails'
import CarDetailsAuction from './components/CarDetailsAuction/CarDetailsAuction'
import classNames from 'classnames'

const App = () => {
  // let socket = io.connect('http://localhost:4000', {
  //   query: {
  //     token:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDU1NWY2OTQ1NDQyNDEwM2NlYmRhODgiLCJpYXQiOjE2MTcyNDUxODB9.s3fOFjdiV3U2DqU3IlPx9ZVtV2PdC9S89_4mMH1Co9k',
  //   },
  // })
  const [data, setData] = useState([])
  const [dataAuction, setDataAuction] = useState([])
  const [dataFindCar, setDataFindCar] = useState([])

  useEffect(() => {
    loadCars()
    loadAuctions()
    loadDataFindCar()
  }, [])
  const loadDataFindCar = () => {
    return allAdvertisments()
      .then((response) => {
        if (response.data) {
          console.log(response.data, 'find car data')
          setDataFindCar(response.data)
        }

        return response.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  const loadCars = () => {
    return allCars()
      .then((response) => {
        if (response.data) {
          console.log(response.data)
          setData(response.data)
        }

        return response.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const loadAuctions = () => {
    return allAuctions()
      .then((res) => {
        if (res.data) {
          setDataAuction(res.data)
        }
        console.log(res.data, 'auction data')
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const [logged, setLogged] = useState(false)
  const myRef = useRef(null)
  const scrollToCredit = () => {
    myRef.current.scrollIntoView({
      behavior: 'smooth',
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

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)

  const [show_calc, setShow_calc] = useState(false)
  const handleShow_calc = () => setShow_calc(true)
  const handleClose_calc = () => setShow_calc(false)

  const [show_form, setShow_form] = useState(false)
  const handleShowForm = () => setShow_form(true)
  const handleCloseForm = () => setShow_form(false)
  const [showed, setShowed] = useState(false)

  return (
    <>
      <Router>
      <div style={{background: '#062BB2'}} className={classNames({"noShow" : showed}, {"d-flex justify-content-between align-center pl-3 pr-3 pt-2 m-0 text-white" : !showed})}>
         <h6 style={{fontSize: '12px'}}>Завантажуй додаток ! Там зручніше</h6>
         <h6 style={{fontWeight :'700', fontSize: '12px'}} onClick={() => setShowed(!showed)}>x</h6>
      </div>
        <Navbar expand="lg" className="bottomNav">
          <Container fluid className="display-flex justify-content-around">
            <Nav className="mob-nav">
              <Nav className="nav-style nav-no-col nav-style-mob" >
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
                <Nav.Link className="nav-item button-nav">
                <a className=" text-white link-nav  text-white" href="https://oksishukh.wixsite.com/my-site-3"><img className="img-small" src={read} />Журнал</a>
</Nav.Link>
                <Nav.Link className="nav-item text-white link-nav button-nav">
                  <BrowserLink to="/cooperation" className=" text-white link-nav">
                    <img className="img-small" src={search} />
                    Купимо
                  </BrowserLink>
                </Nav.Link>
                {/* <Nav.Link className="nav-item text-white link-nav button-nav">
                  <BrowserLink to="/about" className=" text-white link-nav">
                    <img className="img-small" src={about} />
                    Про нас
                  </BrowserLink>
                </Nav.Link> */}
{/* 
                <Nav.Link className="nav-item link-nav button-nav">
                  <BrowserLink className=" text-white link-nav" onClick={scrollToBottom}>
                    <img className="img-small" src={email} />
                    Контакти
                  </BrowserLink>
                </Nav.Link> */}

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
                )}
              </Nav>
            </Nav>

          
{/* 
            <Calculator
              show_calc={show_calc}
              handleShow_calc={handleShow_calc}
              handleClose_calc={handleClose_calc}
            /> */}

           </Container>
        </Navbar>
        {/* <img  src={call} onClick={scrollToBottom} /> */}
        <img className="img-mail" src={mail} onClick={handleShowForm} />
        <img  className="img-phone"  src={phone}  onClick={scrollToBottom} />

        <RequestForm
          show_form={show_form}
          handleShowForm={handleShowForm}
          handleCloseForm={handleCloseForm}
        />

        <Route
          path="/login"
          render={() => (
            <LoginForm
              logged={logged}
              setLogged={(l) => {
                console.log('trying to set state login')
                setLogged(l)
              }}
            />
          )}
        />
        <Route path="/register" component={SignUpForm} />
        <Route
          path="/"
          exact
          component={() => <Header reference={myRef} data={data} />}
        />
        <Route path="/about" exact component={About} />

        <Route
          path="/cooperation"
          exact
          render={() => <Cooperation dataFindCar={dataFindCar} />}
        />
    
        <Route
          exact
          path="/carDetails/:id"
          render={({ match }) => {
            console.log(match, data)
            return <CarDetails
              item={data.find((item) => String(item.id) === String(match.params.id))}
            />
          }}
        />
        <Route
          exact
          path="/carDetailsAuction/:id"
          render={({ match }) => (
            <CarDetailsAuction
              item={dataAuction.find(
                (item) => String(item.id) === String(match.params.id)
              )}
            />
          )}
        />
        <Route path="/catalog" exact component={() => <Catalog data={data} />} />
        <Route
          exact
          path="/catalog/:type"
          render={({ match }) => (
            <Catalog
              filteredData={data.filter((item) => item.type === match.params.type)}
            />
          )}
        />
        <Route
          exact
          path="/auction/:type"
          render={({ match }) => (
            <Auction
              dataAuction={dataAuction}
              filteredData={data.filter((item) => item.type === match.params.type)}
            />
          )}
        />
        <Route
          path="/auction"
          exact
          component={() => <Auction dataAuction={dataAuction} />}
        />
        <Route path="/profile" exact component={() => <Profile data={data} />} />
        <Footer />
      </Router>
    </>
  )
}

export default App
