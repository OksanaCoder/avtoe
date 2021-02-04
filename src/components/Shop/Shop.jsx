
import React, { Component } from 'react';
import './style.css'
import CarItem from '../CarItem/CarItem'
import Featured from '../Featured/Featured'
import { Row, Container, Nav } from 'react-bootstrap'

const Shop = () => {
    return (
        <div>
            <Container fluid>
                <Row className='flex-style pt-5 pl-5 pr-5'>
                    
                <div className='heading-style col-lg-6 col-md-6 col-sm-12'>
                    <h6>Оновлений</h6>
                    <h3>Каталог авто</h3>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12' style={{textAlign: 'right'}}>
                    <button className='grey-btn btn-shop'>Купівля</button>
                    <button className='orange-btn btn-shop ml-3 weight-bold '>Аукціон</button>
                </div>

                </Row>
            </Container>
             <Featured />
         
            <Container className='text-right mt-2 mb-5 pr-5' fluid>
               
                <button className='grey-btn  btn-shop'>Весь перелік</button>
              
            </Container>
            <CarItem />
        </div>
    )
}

export default Shop