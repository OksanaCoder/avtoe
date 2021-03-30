import React, { Component } from 'react'
import {Container, Col, Row } from 'react-bootstrap'
import './style.css'
import img_1 from '../../img/categ-1.png'
import img_2 from '../../img/categ-2.png'
import img_3 from '../../img/categ-3.png'
import img_4 from '../../img/categ-4.png'


const Categories = () => {
   return(
       <div className='back-yellow'> 
          <Container fluid>
            <div className='category-line pt-5'>
                <h6 className='p-5'>Обери Категорію</h6>
            </div>
              <Row className='pt-5 pl-5 pr-5 text-center'>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_1} className='img-category'/>
                    <h5>Легкові</h5>
                  </Col>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_2} className='img-category smaller'/>
                    <h5> Позашляховики</h5>
                  </Col>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_3} className='img-category'/>
                    <h5>Автобуси</h5>
                  </Col>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_4} className='img-category'/>
                    <h5>Мотоцикли</h5>
                  </Col>
              </Row>
          </Container>
       </div>
   )
}

export default Categories
