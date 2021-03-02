
import React, { Component } from 'react';
import './style.css'
import CarItem from '../CarItem/CarItem'
import Featured from '../Featured/Featured'
import Filter from '../Filter/Filter'
import { Row, Container } from 'react-bootstrap'

const Shop = () => {
    return (
        <div style={{background: '#fff'}}>
            <Container fluid style={{padding: '0'}}>
                <Row className='flex-style padding-filter m-0' style={{background: '#23292D'}}>
                    
                <div className='heading-style col text-center'>
                    <h6>Обери</h6>
                    <h3 className='text-white'>Авто Своєї Мрії</h3>
                </div>
               
                </Row>
             
                   <Filter />
      
            </Container>
            <Featured />
        </div>
    )
}

export default Shop