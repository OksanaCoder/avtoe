import React from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
import head from '../../img/adv.png'
import icon from '../../img/loan.png'
import icon_1 from '../../img/card.png'
import icon_2 from '../../img/q.png'
import icon_3 from '../../img/ex.png'
import icon_4 from '../../img/advan.png'
import icon_5 from '../../img/web.png'


const Advantages = () => {
    return (
        <div className='back-grey'>
            <Container>
                <img src={head} className='mb-5'/>
                {/* <h2>Наши Преиму/щества</h2> */}
                <Row className='mt-5'>
                    <Col lg={4} md={4} sm={12} className='text-center'>
                        <h6 className='header-6'>Кредит та Лiзинг</h6>
                        <img src={icon} className='icon-adv mt-4 mb-5' />
                        <p>Варіанти розрахунку: кредит, лізинг або обмін авто з доплатою.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center'>
                        <h6 className='header-6'>Зручний спосіб оплати</h6>
                        <img src={icon_1} className='icon-adv mt-4 mb-5'/>
                        <p>Готiвковий та безготiвковий розрахунок.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center'>
                         <h6 className='header-6'>Якicть</h6>
                         <img src={icon_2} className='icon-adv mt-4 mb-5'/>
                         <p>Топова діагностика на предмет серйозних пошкоджень.</p>
                    </Col>
             </Row>
             <Row className='mt-5'>       
                    <Col lg={4} md={4} sm={12} className='text-center'>
                        <h6 className='header-6'>Досвiд</h6>
                        <img src={icon_3} className='icon-adv mt-4 mb-5'/>
                        <p>Більше 20 років на українському авторинку.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center'>
                        <h6 className='header-6'>Вигода</h6>
                        <img src={icon_4} className='icon-adv mt-4 mb-5'/>
                        <p>Знижки на додатковi послуги (мийки, автоклуби, станцiї).</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='text-center'>
                        <h6 className='header-6'>Європейська практика</h6>
                        <img src={icon_5} className='icon-adv mt-4 mb-5'/>
                        <p>Покупка авто в онлайн режимі з гарантією якості.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Advantages