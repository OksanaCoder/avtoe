import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ArticleDetails = ({ item }) => {
  console.log(item, 'article details')
  return (
      <Container flud className="back-black">
        <Row>
          <h2>Деталі</h2>
        </Row>
        <Row>
          <Col>
            <h2>{item.heading}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{item.content}</p>
          </Col>
        </Row>
      </Container>
  )
}

export default ArticleDetails
