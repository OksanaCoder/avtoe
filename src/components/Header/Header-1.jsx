import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Container, Button, Form, Row, Col, Nav } from 'react-bootstrap'
import './style-2.css'
import search from '../../img/search.png'
import img_4 from '../../img/i-4.svg'
import img_1 from '../../img/i-1.svg'
import img_2 from '../../img/i-2.svg'
import img_3 from '../../img/i-3.svg'
import logo_big from '../../img/logo-big.png'
import logo_small from '../../img/logo-small.png'
import MobApp from '../../components/MobApp/MobApp'
import Calculators from '../Calculators/Calculators'
import Advantages from '../Advantages/Advantages'
import Select from 'react-select'
import { useHistory, Link } from 'react-router-dom'
import Videos from '../Videos/Videos'
import org from '../../img/un.jpg'
import {  Tabs, Tab } from 'react-bootstrap'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Slide from 'react-reveal/Slide';

const Header = ({ reference, data }) => {
  const [isPicked, setPicked] = useState(false)
  const [searchItem, setSearchItem] = useState('')
  const [selected, setSelected] = useState('')
  console.log(data, 'for search bar')
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
    console.log(newVal, 'newVal')
    history.push(`/carDetails/${newVal.id}`)
  }
  const containerStyle = {
        width: '100%',
        height: '400px',
        marginTop: '40px'
      };
      
      const center = {
        lat: 50.48970142061635,
        lng: 30.488861167016232
      };

      const locations = [
          {
              name: 'avtoe',
              location: {
                lat: 50.48970142061635,
                lng: 30.488861167016232
              }
          }
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
      <Container className="background" fluid style={{ fontWeight: '700' }}>

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
            <Link to={`/catalog/PASSENGER`}>
              <img src={img_4} className="white-fill mr-2" width="70px" />
            </Link>

            <Link to={`/catalog/BIKE`}>
              {' '}
              <img src={img_1} width="70px" className="white-fill mr-2" />
            </Link>

            <Link to={`/catalog/SUV`}>
              {' '}
              <img src={img_2} width="70px" className="white-fill" />
            </Link>

            <Link to={`/catalog/BUS`}>
              {' '}
              <img src={img_3} width="70px" className="white-fill ml-2" />
            </Link>
          </Col>
        </Row>
      </Container>

      <Calculators reference={reference} />
      <Advantages />
      <MobApp />

       <div>
        <Container fluid className='p-5 about-pad'>
       
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Організація" className='tab-about'>
            <Row>
            <div className='heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5'>
               <div className="blue-line mr-auto"></div> 
               <h6 className='text-dark mt-3'>Громадська Організація</h6>
               <h3>Всеукраїнська асоціація автобізнесменів</h3>
          
           </div>
            </Row>
            <Row className='p-4 align-items-center mt-3'>
                <Col className='text-center' lg={6} md={12} sm={12}>
                <img src={org} width='70%' className='mb-2'/>
                </Col>
                <Col style={{lineHeight: '2', fontSize: '20px'}} lg={6} md={12} sm={12}>  
                        Наші ключові цілі - порядок, законність і надійність ведення автобізнесу в Україні. 
                        Ми відстоюємо порушені права покупців і продавців, забезпечуємо прозорі продажу автомобілів, 
                        піклуємося про розширення необхідної для автомобілістів інфраструктури. 
                        Кожен може стати членом нашої організації і допомагати нам робити автомобільний ринок України по-справжньому європейським!
                </Col>
            </Row>
            </Tab>
            <Tab eventKey="profile" title="Засновник">
            <Row >
            <div className='heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5'>
               <div className="blue-line mr-auto"></div> 
               <h6 className='text-dark mt-3'>Президент Всеукраїнської асоціації автобізнесменів</h6>
               <h3>Володимир Кузьменко</h3>
          
           </div>
            </Row>
            <Row className='p-4 align-items-center mt-3'>
                <Col lg={6} md={12} sm={12} className='text-center'>
                <img  className='mb-2' width='70%' src="https://thumb.tildacdn.com/tild3335-6566-4562-a264-306631386566/-/format/webp/a393fc5a-7ebe-4238-b.jpg"/>
                </Col>
                <Col lg={6} md={12} sm={12} style={{lineHeight: '2', fontSize: '20px'}}>
                "Автобізнес - це ціла галузь економіки України, яка справно платить податки і рухає багато інших галузей вітчизняної промисловості. 
                Але в той же час ця галузь системно стикається з низкою серйозних проблем. На жаль, починаючи з 90-х років минулого століття, 
                український вторинний автомобільний ринок переживає не кращі часи. Автомобільний бізнес - це лакмусовий папірець для кримінального світу.
                 На жаль, є багато шахраїв, системно намагаються провернути різні непорядні афери, ущемляючи права автомобілістів. Людей, які намагаються чесно купити або продати машину. 
                 Саме тому ми з вами об'єднуємося і впевнено рухаємося до принципово новим стандартам роботи цього ринку ".

                </Col>
            </Row>
            </Tab>
            <Tab eventKey="map" title="Місцеположення">
               
                <Col>
                <h6 className='pl-3 pt-3 mt-3'>г. Киев, проспект Степана Бандеры, 13</h6>
                     <LoadScript
                           googleMapsApiKey='AIzaSyABS95c2rEoEhNOc-7nFFD9kf3MokK582w'>
                            <GoogleMap

                            mapContainerStyle={containerStyle}
                            zoom={18}
                            center={center}
                            
                            >
                           {
                                center.lat &&
                                ( 
                                <Marker position={center} />
                                ) 
                            }
                         </GoogleMap>
                        </LoadScript> 
                        {/* https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0+%D0%91%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D1%8B,+13,+%D0%9A%D0%B8%D0%B5%D0%B2,+04073/@50.4896884,30.4882486,19.69z/data=!4m5!3m4!1s0x40d4cdfa6585fb59:0x40fdcaa1bc2427d4!8m2!3d50.489695!4d30.4888688 */}
                    </Col>
            </Tab>
           
            </Tabs>
            
            
        </Container>

        <Videos />
        </div>
    </>
  )
}

export default Header
