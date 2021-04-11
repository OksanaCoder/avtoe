import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'

const ArticleItem = ({ dataMagazine = [] }) => {
  console.log(dataMagazine, 'all news')
  return (
    <>
      <Row>
        {dataMagazine.map((item) => {
          return (
            <Col lg={4} md={6} sm={12} key={item.id}>
              <Card className="card-article p-3">
                <Card.Img variant="top" src={item.image1} />
                <Card.Body>
                  <Card.Title className="title-news">{item.heading}</Card.Title>
                  <Card.Text className="text-news">
                    {item.content.slice(0, 50)}...
                  </Card.Text>
                  <Link to={`/article/${item.id}`} className="card-button">
                    Читати далі
                  </Link>
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
