
import React, { Component } from 'react';
import './style.css'
import CarItem from '../CarItem/CarItem'
import Featured from '../Featured/Featured'
import Filter from '../Filter/Filter'
import { Row, Container } from 'react-bootstrap'

const Shop = () => {
    return (
        <div style={{background: '#fff'}}>
            <Container fluid>
                <Row className='flex-style pt-5 pl-5 pr-5' style={{background: '#23292D'}}>
                    
                <div className='heading-style col text-center'>
                    <h6>Обери</h6>
                    <h3 className='text-white'>Авто Своєї Мрії</h3>
                </div>
               
                </Row>
                <Row className='pr-5 pl-5' style={{background: '#23292D', paddingBottom: '100px'}}> 
                   <Filter />
                </Row>
            </Container>
             <Featured />
         
            {/* <Container className='text-right mt-2 mb-5 pr-5' fluid>
               
                <button className='grey-btn  btn-shop'>Весь перелік</button>
              
            </Container> */}
            {/* <CarItem /> */}
        </div>
    )
}

export default Shop