import React from 'react'
import image from '../../img/app.png'
import ios from '../../img/ios.png'
import android from '../../img/android.png'
import { Col, Row } from 'react-bootstrap'
import './style.css'


const MobApp = () => {
    return (
        <div className='yellow-back'>
            <Row className='center-app'>
                <Col lg={6} md={6} sm={12}>
                    <img src={image} className='img-app'/>
                </Col>
                <Col lg={6} md={6} sm={12} className='text-center'>
                    <h3 style={{fontWeight: '700', marginTop: '20px'}}>Завантажуй Наш Мобільний Додаток</h3>
                    <p style={{letterSpacing: '2px'}}>Будь в курсі останніх оновлень.</p>
                    <Row className='align-center'>
                        <Col>
                            <img src={ios} width='150px' height='150px'/>
                            
                       </Col>
                       <Col>
                            <img src={android} width='170px' height='75px'/>
                       </Col>
                    </Row>
                </Col>
                {/* <Col lg={6} md={6} sm={12}>
                    <h6>Доступна Мобільна Версія</h6>
                    <p>Будь в курсі останніх поповнень</p>
                </Col> */}

            </Row>
        </div>
    )
}


export default MobApp