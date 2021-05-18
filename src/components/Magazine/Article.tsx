import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Article = ({ dataArticles = [] }) => {
  return (
    <>
      <Row>
        {dataArticles.map((item) => {
          return (
            <Col lg={12} md={12} sm={12} xs={12}>
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}></Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  {item.heading}
                </Col>
              </Row>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Article
