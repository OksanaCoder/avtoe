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
          <Container >
            {/* <h5>Вибери Категорію</h5> */}
            <div className='category-line'>
                <h6>Choose Category</h6>
            </div>
              <Row style={{textAlign: 'center', paddingTop: "100px"}}>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_1} className='img-category'/>
                    <h6>Легковые</h6>
                  </Col>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_2} className='img-category'/>
                    <h6>Внедорожники</h6>
                  </Col>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_3} className='img-category'/>
                    <h6>Автобусы</h6>
                  </Col>
                  <Col lg={3} md={6} sm={12} className='item-categ'>
                    <img src={img_4} className='img-category'/>
                    <h6>Мотоциклы</h6>
                  </Col>
              </Row>
          </Container>
       </div>
   )
}

export default Categories
