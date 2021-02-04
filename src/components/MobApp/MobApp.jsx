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
           
                <Col lg={5} md={6} sm={12} className='text-center'>
                    <h4 style={{fontWeight: '700'}}>Завантажуй Наш Мобільний Додаток</h4>
                    <Row className='style-mob-app text-center'>
                        <Col>
                            <img src={ios}  height='150px'/>
                            <img src={android} height='75px'/>
                            
                       </Col>
                       
                    </Row>
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <img src={image} className='img-app'/>
                </Col>

            </Row>
        </div>
    )
}


export default MobApp