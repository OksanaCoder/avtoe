import React from 'react'
import {Card, Button, Row, Col } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'

const ArticleItem = ({dataMagazine}) => {
    console.log(dataMagazine)
    return (
        <>
        <Row className='m-auto'>
            {dataMagazine.map(item => {
                return(
                 <Col lg={3} md={6} sm={12}>
                    <Card  className='card-article'>
                     <Card.Img variant="top" src="holder.js/100px180" />
                     <Card.Body>
                        <Card.Title >{item.title}</Card.Title>
                        <Card.Text>
                          {item.text.slice(0, 30)}...
                        </Card.Text>
                       <Link to={`/magazine/${item.id}`} className='card-button'>Details</Link> 
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