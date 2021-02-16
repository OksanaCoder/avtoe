import React from 'react'
import './style.css'
import { Row, Col, Container } from 'react-bootstrap'
// import { data } from './news.json'

const Magazine = () => {
   
    return (
        <>
            <Container fluid>
                <Row className='flex-style pt-5 pl-5 pr-5' style={{background: '#23292D'}}>
                    
                <div className='heading-style col text-center p-5'>
                    <h6>Журнал</h6>
                    <h3 className='text-white'>Для Автобізнесменів</h3>
                </div>
               
                </Row>
                <Row>
                <div className='heading-style col text-center'>
                    <h3 className='text-white'>Новини</h3>
                </div>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>

        </>
    )
}

export default Magazine