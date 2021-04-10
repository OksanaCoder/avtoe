import React from 'react'
import {Card, Button, Row, Col } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'

const ArticleItem = ({dataMagazine}) => {
    console.log(dataMagazine)
    return (
        <>
        <Row>
            {dataMagazine.map(item => {
                return(
                 <Col lg={4} md={6} sm={12}>
                    <Card  className='card-article'>
                     <Card.Img variant="top" src='https://avtoe-avtoe-back-1.herokuapp.com/images/6070b1426cdf5900151c7abc.jpg' />
                     <Card.Body>
                        <Card.Title className='title-news'>{item.heading}</Card.Title>
                        <Card.Text className='text-news'>
                          {item.content.slice(0, 50)}...
                        </Card.Text>
                       <Link to={`/magazine/${item.id}`} className='card-button'>Читати далі</Link> 
                    </Card.Body>
                  </Card>
                </Col>
                )
            })}
        </Row>
        </>
    )
}
export default ArticleItem