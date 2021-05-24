import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import mail from '../../img/mail.svg'
import call from '../../img/call.svg'
import home from '../../img/home.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import './style.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div id="footer" style={{ background: '#010916', padding: '100px 50px 20px 50px' }}>
      <Container fluid>
        <Row>
          <Col lg={4} md={4} sm={12} className="footer-item font-footer">
            <img alt="11" src={call} style={{ color: '#fff' }} className="icon-fill" />
            <div className="ml-3 text-white">
              <h6>{t('contacts')}:</h6>
              <ul className="list-unstyled color-white">
                <li><a href="tel:+38 050 249 09 09">+38 050 249 09 09</a></li>
                <li><a href="tel:+38 066 249 09 09">+38 066 249 09 09</a></li>
                <li><a href="tel:+38 073 249 09 09">+38 073 249 09 09</a></li>
                <li><a href="tel:+38 093 249 09 09">+38 093 249 09 09</a></li>
                <li><a href="tel:+38 096 249 09 09">+38 096 249 09 09</a></li>
                <li><a href="tel:+38 097 249 09 09">+38 097 249 09 09</a></li>
                <li><a href="tel:+38 098 249 09 09">+38 098 249 09 09</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="text-white footer-item font-footer">
            <img alt="11" src={mail} className="icon-fill" />
            <div className="ml-3">
              <h6>Email:</h6>
              <small className="font-footer">avtoe@i.ua</small>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} className="text-white footer-item font-footer">
            <img alt="11" src={home} className="icon-fill" />
            <div className="ml-3">
              <h6>{t('adressHead')}:</h6>
              <small className="font-footer">{t('address')}</small>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="opacity"></Col>
        </Row>
        <Row className="line mt-5">
          <Col className="text-white flex-footer mt-4 mb-4 align-center">
            <small className="font-footer">{t('social')} </small>
            <ul className="list-unstyled flex-footer align-center">
              <li>
                <a href="https://www.facebook.com/avtoeukraine/">
                  <img
                    alt="11"
                    src={facebook}
                    width="30px"
                    className="ml-4 mr-4 icon-fill"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/avtoe.ua/">
                  <img alt="11" src={instagram} className="icon-fill" width="30px" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5" style={{ paddingBottom: '100px' }}>
          <Col className="text-white text-center">
            <small>&copy; 2012 AVTOE</small>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
