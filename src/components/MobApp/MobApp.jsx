import React from 'react'
import image from '../../img/app.png'
import ios from '../../img/ios.png'
import android from '../../img/android.png'
import { Col, Row } from 'react-bootstrap'
import './style.css'


const MobApp = () => {
    return (
        <div className='grey-back'>
            <Row className='center-app'>
                <Col lg={6} md={6} sm={12}>
                    <img src={image} className='img-app'/>
                </Col>
                <Col lg={6} md={6} sm={12} className='text-center'>
                    <h5>New App available!</h5>
                    <p>Get notified of great cars any time, anywhere.</p>
                    <Row>
                        <Col>
                            <img src={ios} width='150px' height='150px'/>
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