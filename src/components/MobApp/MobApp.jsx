import React from 'react'
import image from '../../img/app.png'
import ios from '../../img/ios.png'
import android from '../../img/android.png'
import { Col, Row, Container } from 'react-bootstrap'
import './style.css'
import cat from '../../img/cat.png'


const MobApp = () => {
    return (
        <div className='yellow-back'>
            <Row className='center-app'>
           
                <Col lg={5} md={6} sm={12} className='text-left'>
                    <Container className='pt-5'>
                    <p className='font-25-700'>Завантажуй Наш Мобільний Додаток</p>
                        <div className='d-flex align-center'>
                                <img src={ios}  height='150px'/>
                                <img src={android} height='75px'/>
                        </div>
                    </Container>
                        
                </Col>
                <Col lg={7} md={6} sm={12} className='col-no-gap'>
                    <img src={image} className='img-app'/>
                </Col>

            </Row>
        </div>
    )
}


export default MobApp