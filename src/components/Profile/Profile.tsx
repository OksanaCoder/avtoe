import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './style.css'

const Profile = () => {
  const bids = []
  return (
    <Container fluid className="profile p-5">
      <Row>
        <Col>
          <h2>Вітаю, {localStorage.getItem('fullName')}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* I need to show a table with the last bids:
                  ex. car model, time and bid */}
          {bids.length > 0 ? <h5>Твої ставки: </h5> : <h5>Поки що немає ставок</h5>}
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
