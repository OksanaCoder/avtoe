
import React, { Component } from 'react';
import './style.css'
import CarItem from '../CarItem/CarItem'
import Featured from '../Featured/Featured'
import { Row, Container } from 'react-bootstrap'

const Shop = () => {
    return (
        <div>
            <Container fluid>
                <Row className='flex-style'>
                    
                <div className='heading-style col-lg-6 col-md-6 col-sm-12'>
                    <h6>Згенерована</h6>
                    <h3>Підбірка авто</h3>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12' style={{textAlign: 'right'}}>
                    {/* <button className='grey-btn btn'>Купити авто</button>
                    <button className='orange-btn btn'>Аукціон</button> */}
                    <button className='grey-btn btn'>Buy car</button>
                    <button className='orange-btn btn ml-3'>Auction</button>
                </div>

                </Row>
            </Container>
             <Featured />
         
            <Container className='text-right mt-5 mb-5' fluid>
               <button className='grey-btn btn'>View all</button>
            </Container>
            {/* <CarItem /> */}
        </div>
    )
}

export default Shop