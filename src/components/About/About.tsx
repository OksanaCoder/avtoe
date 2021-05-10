import React from 'react'
import Videos from '../Videos/Videos'
import org from '../../img/un.jpg'
import { Row, Col, Tabs, Tab } from 'react-bootstrap'
import './style.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  const containerStyle = {
    width: '100%',
    height: '400px',
    marginTop: '40px',
  }

  const center = {
    lat: 50.48970142061635,
    lng: 30.488861167016232,
  }

  // const locations = [
  //   {
  //     name: 'avtoe',
  //     location: {
  //       lat: 50.48970142061635,
  //       lng: 30.488861167016232,
  //     },
  //   },
  // ]

  return (
    <div>
      <div className="about-pad">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title={t('org')} className="tab-about">
            <Row>
              <div className="heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5">
                <div className="blue-line mr-auto"></div>
                <h6 className="text-dark mt-3 ">{t('orgHead')}</h6>
                <h3 className="text-media">{t('orgName')}</h3>
              </div>
            </Row>
            <Row className="p-4 align-items-center mt-3">
              <Col className="text-center" lg={6} md={12} sm={12}>
                <img alt="11" src={org} width="70%" className="mb-2" />
              </Col>
              <Col style={{ lineHeight: '2', fontSize: '20px' }} lg={6} md={12} sm={12}>
                {t('orgMore')}
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title={t('owner')}>
            <Row>
              <div className="heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5">
                <div className="blue-line mr-auto"></div>
                <h6 className="text-dark mt-3">{t('ownerHead')}</h6>
                <h3 className="text-media">{t('ownerName')}</h3>
              </div>
            </Row>
            <Row className="p-4 align-items-center mt-3">
              <Col lg={6} md={12} sm={12} className="text-center">
                <img
                  alt="11"
                  className="mb-5"
                  width="90%"
                  src="https://thumb.tildacdn.com/tild3335-6566-4562-a264-306631386566/-/format/webp/a393fc5a-7ebe-4238-b.jpg"
                />
              </Col>
              <Col lg={6} md={12} sm={12} style={{ lineHeight: '2', fontSize: '20px' }}>
                "{t('about')}".
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="map" title={t('location')}>
            <Col>
              <h6 className="pl-3 pt-3 mt-3">г. Киев, проспект Степана Бандеры, 13</h6>
              <LoadScript googleMapsApiKey="AIzaSyABS95c2rEoEhNOc-7nFFD9kf3MokK582w">
                <GoogleMap mapContainerStyle={containerStyle} zoom={18} center={center}>
                  {center.lat && <Marker position={center} />}
                </GoogleMap>
              </LoadScript>
              {/* https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0+%D0%91%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D1%8B,+13,+%D0%9A%D0%B8%D0%B5%D0%B2,+04073/@50.4896884,30.4882486,19.69z/data=!4m5!3m4!1s0x40d4cdfa6585fb59:0x40fdcaa1bc2427d4!8m2!3d50.489695!4d30.4888688 */}
            </Col>
          </Tab>
        </Tabs>
      </div>

      <Videos />
    </div>
  )
}

export default About
