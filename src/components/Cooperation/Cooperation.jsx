import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import camry from '../../img/camry.jpg'
import wol from '../../img/wol.jpg'
import toyota from '../../img/toyota.jpg'
import './style.css'


const Cooperation = () => {
    return (
        <>
   
              <Row className='flex-style pt-5 pl-5 pr-5' style={{background: '#23292D'}}>
                    
                    <div className='heading-style col text-center pb-5'>
                        <h6>Ми</h6>
                        <h3 className='text-white'>Купимо Ваше Авто</h3>
                        <small className='text-white'>(української реєстрації)</small>
                        <Row className='mt-4'>
                            <Col className='text-white text-left'>
                                <small>Телефонуйте за номером:</small>
                                <ul className='list-unstyled'>
                                    <li>+38 050 249 09 09</li>
                                    <li>+38 073 249 09 09</li>
                                    <li>+38 097 249 09 09</li>
                                </ul>

                            </Col>
                            <Col className='text-white text-right'>
                                <small>Або відправляйте email за адресою:</small>
                                 <p>avtoe@i.ua</p>
                            </Col>
                        </Row>
                    </div>
                   
                    </Row>
                    <Row className='p-5' style={{paddingBottom: '100px'}}>
                        <Col lg={3} md={6} sm={12}>
                                <Card className='card-style mb-3'>
                                   <Card.Img src={camry} className='img-feature'>
                                   </Card.Img>
                                   <Card.Body className='text-dark card-text' style={{lineHeight: '0.2'}}>
                                    <h5 className='bold'>Toyota Camry-40</h5>
                                    <small>В хорошому стані !</small>                       
                                   </Card.Body>
                                 </Card>    
                        </Col> 
                        <Col lg={3} md={6} sm={12}>
                                <Card className='card-style mb-3'>
                                   <Card.Img src={wol} className='img-feature'>
                                   </Card.Img>
                                   <Card.Body className='text-dark card-text' style={{lineHeight: '0.2'}}>
                                    <h5 className='bold'>Toyota Camry-40</h5>
                                    <small>Груз - пас</small>                       
                                   </Card.Body>
                                 </Card>    
                        </Col> 
                        <Col lg={3} md={6} sm={12}>
                                <Card className='card-style mb-3'>
                                   <Card.Img src={toyota} className='img-feature'>
                                   </Card.Img>
                                   <Card.Body className='text-dark card-text' style={{lineHeight: '0.2'}}>
                                    <h5 className='bold'>Toyota Corola 2012-2015 гг,</h5>
                                    <small>Автомат</small>                       
                                   </Card.Body>
                                 </Card>    
                        </Col> 
                    </Row>
   
        </>
    )
}

export default Cooperation