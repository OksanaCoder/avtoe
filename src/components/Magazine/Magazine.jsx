import React, { useLayoutEffect } from 'react'
import './style.css'
import { Row, Col, Container } from 'react-bootstrap'
// import { data } from './news.json'

const Magazine = () => {
   
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <Container fluid>
                   <Row className='flex-style padding-filter m-0 pb-5' style={{background: '#23292D'}}>
                    
                    <div className='heading-style col text-center pb-3'>
                        <div className="blue-line m-auto"></div> 
                        <h6 className='mt-3'>Журнал</h6>
                        <h3 className='blue-color'>Для Автобізнесменів</h3>
                    </div>
                   
                    </Row>
                    <div className='heading-style p-5'  style={{background: '#262626'}}>                      
                        <h6 className='blue-line'>Новини</h6>                
                    </div>
                    <Row style={{background: '#262626'}} className='p-5 text-white'>
                        {/* <News /> */}
                    </Row>
                    
           
            </Container>

        </>
    )
}

export default Magazine