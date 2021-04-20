import React from 'react'
import './style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import head from '../../img/adv.png'
import icon from '../../img/money.png'
import icon_1 from '../../img/credit-card.png'
import icon_2 from '../../img/quality.png'
import icon_3 from '../../img/certification.png'
import icon_4 from '../../img/competitive.png'
import icon_5 from '../../img/laptop.png'
import car_adv from '../../img/car-adv.png'

const Advantages = () => {
    return (
        <div style={{background: '#262626'}} className='p-5'>
            <Container fluid>
               <Row>
                <div className='heading-style'>
                    
                    <h6 className='blue-line'> Чому</h6>
                    <h3>AVTOE ?</h3>
                
                </div>
                </Row> 
                <Row style={{display: 'flex', alignItems: 'center'}}>
                    <Col lg={6} md={6} sm={12}>
                   
                    <img src={car_adv} style={{width: '90%', marginTop: '50px', marginBottom: '60px'}}/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='pb-5'>
                        <Row className='row-column text-left'>
                      
                            <Col className='mb-5 text-white flex-between'>

                                <img src={icon} className='icon-adv' />
                             
                             <div>
                                    <h5 className='bold'>Кредит та Лiзинг</h5>
                                    <p className='text-400'>Варіанти розрахунку: кредит, лізинг або обмін авто з доплатою.</p>
                            </div>
                            </Col>
                            <Col className='mb-5 text-white flex-between'>

                             <img src={icon_1} className='icon-adv'/>
                             
                             <div>
                                    <h5 className='bold'>Зручний спосіб оплати</h5>
                                    <p className='text-400'>Готiвковий та безготiвковий розрахунок.</p>
                            </div>
                            </Col>
                        </Row>
                        <Row className='row-column text-left'>
                            <Col className='mb-5 text-white flex-between'>

                                <img src={icon_2} className='icon-adv' />
                             
                             <div>
                                    <h5 className='bold'>Якicть</h5>
                                    <p className='text-400'>Варіанти розрахунку: кредит, лізинг або обмін авто з доплатою.</p>
                            </div>
                            </Col>
                            <Col className='mb-5 text-white flex-between'>

                                <img src={icon_3} className='icon-adv' />
                             
                             <div>
                                    <h5 className='bold'>Досвiд</h5>
                                    <p className='text-400'>Більше 20 років на українському авторинку.</p>
                            </div>
                            </Col>
                            </Row>
                            <Row className='row-column text-left'>
                            <Col className='mb-5 text-white flex-between'>

                                <img src={icon_4} className='icon-adv' />
                             
                             <div>
                                    <h5 className='bold'>Вигода</h5>
                                    <p className='text-400'>Знижки на додатковi послуги (мийки, автоклуби, станцiї).</p>
                            </div>
                            </Col>
                            <Col className='mb-5 text-white flex-between'>

                                <img src={icon_5} className='icon-adv' />
                             
                             <div>
                                    <h5 className='bold'>Європейська практика</h5>
                                    <p className='text-400'>Покупка авто в онлайн режимі з гарантією якості.</p>
                            </div>
                            </Col>
                            </Row>
                            </Col>
                        </Row>
                
            
            </Container>
        </div>
    )
}

export default Advantages