import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import mail from '../../img/mail.svg'
import call from '../../img/call.svg'
import home from '../../img/home.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import './style.css'


const Footer = () => {
    return (
        <div style={{background: '#222833', padding: '100px 100px 20px 100px'}}>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12} className='footer-item'>
                        <img src={call} style={{color: "#fff"}} className='icon-fill'/>
                        <div className='ml-3 text-white'>
                        <h6>Контакти:</h6>
                        <ul className='list-unstyled'>
                            <li>+38 050 249 09 09</li>
                            <li>+38 066 249 09 09</li>
                            <li>+38 073 249 09 09</li>
                            <li>+38 093 249 09 09</li>
                            <li>+38 096 249 09 09</li>
                            <li>+38 097 249 09 09</li>
                            <li>+38 098 249 09 09</li>
                           
                        </ul>
                      </div>

                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-white footer-item font-footer'>
                         <img src={mail} className='icon-fill'/>
                        <div  className='ml-3'>
                          <h6>Email:</h6>
                          <small className='font-footer'>avtoe@i.ua</small>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-white footer-item'>
                         <img src={home} className='icon-fill'/>
                         <div className='ml-3'>
                            <h6>Адреса:</h6>
                            <small className='font-footer'>г. Киев, проспект Степана Бандеры, 13</small>
                          </div>
                    </Col>
                </Row>
                <Row className='line mt-5'>
                    <Col className='text-white flex-footer mt-4 mb-4 align-center'>
                       <small className='font-footer'>Ми в соціальних мережах: </small>
                       <ul className='list-unstyled flex-footer align-center'>
                           <li>
                               <a href='#'><img src={facebook} width='30px' className='ml-4 mr-4 icon-fill'/></a>
                           </li>
                           <li>
                               <a href='#'><img src={instagram} className='icon-fill' width='30px'/></a>
                           </li>
                       </ul>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    
                    <Col className='text-white text-center'><small>&copy; 2021 AVTOE</small></Col>
               
                </Row>
            </Container>
        </div>
    )
}

export default Footer