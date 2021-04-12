import React, { useLayoutEffect } from 'react'
import './style.css'
import { Row, Col, Container } from 'react-bootstrap'
import ArticleItem from '../ArticleItem/ArticleItem'


const Magazine = ({dataMagazine}) => {
   
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
                   <Row className='p-5'>
                      <a href="https://oksishukh.wixsite.com/my-site-3">Тисни щоб перейти</a>
                   </Row>
                    
           
            </Container>

        </>
    )
}

export default Magazine