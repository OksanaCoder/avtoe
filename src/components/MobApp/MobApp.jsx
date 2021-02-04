import React from 'react'
import image from '../../img/app.png'
import ios from '../../img/ios.png'
import android from '../../img/android.png'
import { Col, Row } from 'react-bootstrap'
import './style.css'
import cat from '../../img/cat.png'


const MobApp = () => {
    return (
        <div className='yellow-back'>
            <Row className='center-app'>
           
                <Col lg={5} md={6} sm={12} className='text-center mt-4'>
                    <h5 style={{fontWeight: '700'}}>Завантажуй Наш Мобільний Додаток</h5>
                    <Row className='style-mob-app text-center' style={{position: 'relative'}}>
                        <Col>
                            <img src={ios}  height='150px'/>
                            <img src={android} height='75px'/>
                            
                       </Col>
                       
                    </Row>
                    <img src={cat} width='150px' style={{position: 'absolute', left: '-20px', bottom: '-50px'}}/>
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <img src={image} className='img-app'/>
                </Col>

            </Row>
        </div>
    )
}


export default MobApp