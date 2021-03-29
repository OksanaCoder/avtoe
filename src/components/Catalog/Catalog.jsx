
import React, { Component, useLayoutEffect } from 'react';
import './style.css'
import CarItem from '../CarItem/CarItem'
import Filter from '../Filter/Filter'
import { Row, Container, Col } from 'react-bootstrap'

const Catalog = ({ data, filteredData = [] }) => {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Container fluid style={{ padding: '0' }}>
                <Row className='flex-style padding-filter m-0' style={{ background: '#23292D' }}>

                    <div className='heading-style col text-center'>
                        <div className="blue-line m-auto"></div>
                        <h6 className='mt-3'>Обери</h6>
                        <h3 className='blue-color'>Авто Своєї Мрії</h3>
                    </div>

                </Row>

                <Filter />
                {
                    filteredData.length > 0 ? (
                        <Row style={{ background: '#262626' }} className='pb-5'>

                            <Col lg={12} md={12} sm={12}>
                                <CarItem filteredData={filteredData} />
                            </Col>

                        </Row>
                    ) : (
                            <p>List of cars</p>
                        )
                }


            </Container>

        </div>
    )
}

export default Catalog