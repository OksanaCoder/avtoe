import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
// import LoginForm from '../LoginForm/LoginForm'
import SignUpForm from '../SignUpForm/SignUpForm'

const Profile = () => {
  return (
    <Container fluid className="p-5">
      {/* <Row>
        <Col>
           <h2>Вітаю, {localStorage.getItem('fullName')}</h2>
        </Col>
      </Row> */}
      {/* <Row>
        <Col> */}
      {/* I need to show a table with the last bids:
                  ex. car model, time and bid */}
      {/* {bids.length > 0 ? <h5>Твої ставки: </h5> : <h5>Поки що немає ставок</h5>}
        </Col>
      </Row> */}
      {/* <LoginForm /> */}
      <SignUpForm />
    </Container>
  )
}

export default Profile
