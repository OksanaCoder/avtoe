import React from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import head from '../../img/adv.png'
import icon from '../../img/money.png'
import icon_1 from '../../img/credit-card.png'
import icon_2 from '../../img/quality.png'
import icon_3 from '../../img/certification.png'
import icon_4 from '../../img/competitive.png'
import icon_5 from '../../img/laptop.png'


const Advantages = () => {
    return (
        <div style={{background: '#EFF3FB', padding: '50px 0 50px 0'}}>
            <Container className='text-center'>
                <div className='heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5'>
                    <h3>Чому ми ?</h3>
                </div>
            </Container>
            <Container fluid className='pt-5 pb-5'>    
                <Row className='mt-5'>
                    <Col lg={4} md={4} sm={12} className='text-center advantage mb-5'>

                        <img src={icon} className='icon-adv mt-4 mb-5' />
                     <div>
                        <h6 className='header-6'>Кредит та Лiзинг</h6>
                        <p>Варіанти розрахунку: кредит, лізинг або обмін авто з доплатою.</p>
                     </div>    
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center advantage mb-5'>
                       
                        <img src={icon_1} className='icon-adv mt-4 mb-5'/>
                     <div>  
                        <h6 className='header-6'>Зручний спосіб оплати</h6>
                        <p>Готiвковий та безготiвковий розрахунок.</p>
                      </div>  
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center advantage'>
                         
                         <img src={icon_2} className='icon-adv mt-4 mb-5'/>
                      <div>
                         <h6 className='header-6'>Якicть</h6>
                         <p>Топова діагностика на предмет серйозних пошкоджень.</p>
                      </div>
                    </Col>
             </Row>
             <Row className='mt-5'>       
                    <Col lg={4} md={4} sm={12} className='text-center advantage mb-5'>
                       
                        <img src={icon_3} className='icon-adv mt-4 mb-5'/>
                        <div>
                          <h6 className='header-6'>Досвiд</h6>
                          <p>Більше 20 років на українському авторинку.</p>
                        </div>  
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center advantage mb-5'>
                        
                        <img src={icon_4} className='icon-adv mt-4 mb-5'/>
                        <div>
                          <h6 className='header-6'>Вигода</h6>
                          <p>Знижки на додатковi послуги (мийки, автоклуби, станцiї).</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center advantage mb-5'>
                       
                        <img src={icon_5} className='icon-adv mt-4 mb-5'/>
                        <div>
                          <h6 className='header-6'>Європейська практика</h6>
                          <p>Покупка авто в онлайн режимі з гарантією якості.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Advantages