import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Container, Button, Form, Row, Col, Nav } from 'react-bootstrap'
import './style-2.css'
import search from '../../img/search.png'
import img_4 from '../../img/btn-1.png'
import img_1 from '../../img/btn-4.png'
import img_2 from '../../img/btn-2.png'
import img_3 from '../../img/btn-3.png'
import logo_big from '../../img/logo-big.png'
import logo_small from '../../img/logo-small.png'
import MobApp from '../../components/MobApp/MobApp'
import Calculators from '../Calculators/Calculators'
import Advantages from '../Advantages/Advantages'
import Select from 'react-select'
import { useHistory, Link } from 'react-router-dom'
import Videos from '../Videos/Videos'
import org from '../../img/un.jpg'
import { Tabs, Tab } from 'react-bootstrap'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import About from '../../components/About/About'

const Header = ({ reference, data }) => {
  const [isPicked, setPicked] = useState(false)
  const [searchItem, setSearchItem] = useState('')
  const [selected, setSelected] = useState('')
  let history = useHistory()
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'black',
    }),
  }
  const handleClick = () => {
    setPicked(!isPicked)
  }
  const handleChange = (newVal) => {
    setSelected(newVal)
    history.push(`/carDetails/${newVal.id}`)
  }
  const containerStyle = {
    width: '100%',
    height: '400px',
    marginTop: '40px',
  }

  const center = {
    lat: 50.48970142061635,
    lng: 30.488861167016232,
  }

  const locations = [
    {
      name: 'avtoe',
      location: {
        lat: 50.48970142061635,
        lng: 30.488861167016232,
      },
    },
  ]
  //  const options = () => {
  //    data.map(item => {
  //      return {
  //        value: item.name,
  //        label: item.name
  //       }
  //    })
  //  }
  const renderList = () => {
    return data.map((data) => ({ label: data.name, value: data.name, id: data.id }))
  }

  //  const name  = data.map(i => {
  //    return i.name
  //  })

  // const dataList = [
  //   { label: name, label: name}
  // ]

  return (
    <>
      <Container className="background" fluid style={{ fontWeight: 700 }}>
        <Row className="p-4 nav-logo-lang">
          <Col lg={6} md={6} sm={12} className="text-left">
            <img src={logo_small} alt="logo" width="30px" />
          </Col>
          <Col lg={6} md={6} sm={12} className="text-right flex-right">
            <button
              onClick={handleClick}
              className={!isPicked ? 'active-link' : 'not-active'}
            >
              <h6>UA</h6>
            </button>
            <button
              onClick={handleClick}
              className={isPicked ? 'active-link' : 'not-active'}
            >
              <h6 className="ml-3">RU</h6>
            </button>
          </Col>
        </Row>

        <Row className="align-center">
          <Col>
            <div className="flex-center white">
              <h6 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Досить Мріяти про Авто
              </h6>

              <h4
                style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#036DFD',
                  lineHeight: '1',
                }}
              >
                <small style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>
                  У
                </small>
                <img
                  style={{ width: '150px' }}
                  src={logo_big}
                  alt="logo"
                  className="ml-3 mr-4"
                />
                <small style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>
                  для тебе завжди є пропозиції
                </small>
              </h4>

              <Select
                className="search-line"
                placeholder="Пошук..."
                options={renderList()}
                styles={customStyles}
                onChange={handleChange}
                value={selected}
              />
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <Link to={`/catalog/PASSENGER`} className="img-wrapper">
              <img src={img_4} className="mr-2 ml-2 white-fill" width="70px" />
            </Link>

            <Link to={`/catalog/BIKE`} className="img-wrapper">
              {' '}
              <img src={img_1} width="70px" className="white-fill mr-2" />
            </Link>

            <Link to={`/catalog/SUV`} className="img-wrapper">
              {' '}
              <img src={img_2} width="70px" className="white-fill" />
            </Link>

            <Link to={`/catalog/BUS`} className="img-wrapper">
              {' '}
              <img src={img_3} width="70px" className="white-fill ml-1" />
            </Link>
          </Col>
        </Row>
      </Container>

      <Calculators reference={reference} />
      <Advantages />
      <MobApp />
      <About />
    </>
  )
}

export default Header
