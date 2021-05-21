import './App.css'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import Header from './components/Header/Header-1'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-phone-number-input/style.css'
import { BrowserRouter as Router, Route, Link as BrowserLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './components/NavBar/style.css'
import mail from './img/mail.png'
import phone from './img/phone.png'
import search_black from './img/search-black.svg'
import read from './img/read.svg'
import cart from './img/cart.svg'
import hammer from './img/hammer.svg'
import home from './img/home.svg'
import SignUpForm from './components/SignUpForm/SignUpForm'
import LoginForm from './components/LoginForm/LoginForm'
import Cooperation from './components/Cooperation/Cooperation'
import Magazine from './components/Magazine/Magazine'
import Auction from './components/Auction/Auction'
import './components/NavBar/style.css'
import CarDetails from './components/CarDetails/CarDetails'
import Catalog from './components/Catalog/Catalog'
import RequestForm from './components/RequestForm/RequestForm'
import Profile from './components/Profile/Profile'
import { allAuctions, allCars, allAdvertisments, allArticles } from './API'
import CarDetailsAuction from './components/CarDetailsAuction/CarDetailsAuction'
import classNames from 'classnames'
import { CarType } from './types/appTypes'
import CatalogByType from './components/Catalog/CatalogByType'
import { useTranslation } from 'react-i18next'
import ScrollToTop from './components/common/ScrollToTop'
import ArticleDetails from './components/Magazine/ArticleDetails'

const App = () => {
  const scrollToTop = () => window.scrollTo(0, 0)

  const { t } = useTranslation()
  const [data, setData] = useState<CarType[]>([])
  const [dataAuction, setDataAuction] = useState<CarType[]>([])
  const [dataFindCar, setDataFindCar] = useState([])
  const [dataArticles, setDataArticles] = useState([])
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
    loadMagazine()
  }, [])

  const loadMagazine = () => {
    allArticles()
      .then((response) => {
        if (response.data) {
          setDataArticles(response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
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

  // const handleOut = () => {
  //   setLogged(false)
  //   localStorage.clear()
  // history.push('/login')
  // }

  return (
    <Router>
      <ScrollToTop />
      <div
        style={{ background: '#062BB2' }}
        className={classNames(
          { noShow: showed },
          {
            'd-flex justify-content-between align-center pl-3 pr-3 pt-2 m-0 text-white':
              !showed,
          }
        )}
      >
        <h6 style={{ fontSize: '12px' }}>{t('mob')}</h6>
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
                <BrowserLink to="/" className="text-white link-nav" onClick={scrollToTop}>
                  <img alt="11" className="img-small" src={home} />
                  {t('main')}
                </BrowserLink>
              </Nav.Link>
              <Nav.Link className="nav-item button-nav">
                <BrowserLink
                  to="/catalog"
                  className="text-white link-nav"
                  onClick={scrollToTop}
                >
                  <img alt="11" className="img-small" src={cart} />
                  Каталог
                </BrowserLink>
              </Nav.Link>
              <Nav.Link className="nav-item button-nav">
                <BrowserLink
                  to="/auction"
                  className="text-white link-nav"
                  onClick={scrollToTop}
                >
                  <img alt="11" src={hammer} width="20px" className="mb-1 img-small" />
                  {t('auction')}
                </BrowserLink>
              </Nav.Link>

              <Nav.Link className="nav-item text-white link-nav button-nav">
                <BrowserLink
                  to="/magazine"
                  className="text-white link-nav"
                  onClick={scrollToTop}
                >
                  <img alt="11" className="img-small" src={read} />
                  Журнал
                </BrowserLink>
              </Nav.Link>

              <Nav.Link className="nav-item text-white link-nav button-nav">
                <BrowserLink
                  to="/cooperation"
                  className=" text-white link-nav"
                  onClick={scrollToTop}
                >
                  <img alt="11" className="img-small" src={search_black} />
                  {t('willBuy')}
                </BrowserLink>
              </Nav.Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>

      <img className="img-mail" src={mail} onClick={handleShowForm} alt="mail" />
      <img className="img-phone" src={phone} onClick={scrollToBottom} alt="phone" />

      <RequestForm
        show_form={show_form}
        handleShowForm={handleShowForm}
        handleCloseForm={handleCloseForm}
      />

      <Route path="/login">
        <LoginForm
          logged={logged}
          setLogged={(l) => {
            setLogged(l)
          }}
        />
      </Route>

      <Route path="/register">
        <SignUpForm />
      </Route>

      <Route path="/" exact>
        <Header reference={myRef} data={data} />
      </Route>

      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/magazine" exact>
        <Magazine dataArticles={dataArticles} />
      </Route>
      <Route exact path="/articleDetails/:id">
        <ArticleDetails dataArticles={dataArticles} />
      </Route>

      <Route path="/cooperation" exact>
        <Cooperation dataFindCar={dataFindCar} />
      </Route>

      <Route exact path="/carDetails/:id">
        <CarDetails data={data} />
      </Route>

      <Route exact path="/carDetailsAuction/:id">
        <CarDetailsAuction dataAuction={dataAuction} />
      </Route>

      <Route path="/catalog" exact>
        <Catalog data={data} />
      </Route>

      <Route exact path="/catalog/:type">
        <CatalogByType data={data} />
      </Route>

      <Route exact path="/auction/:type">
        <Auction dataAuction={dataAuction} />
      </Route>
      <Route path="/auction" exact>
        <Auction dataAuction={dataAuction} />
      </Route>

      <Route path="/profile" exact>
        <Profile />
      </Route>

      <Footer />
    </Router>
  )
}

export default App
