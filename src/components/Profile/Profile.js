import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './style.css' 

const Profile = () => {
    // const [username, setUsername] = useState('')
    // useEffect(() => {
    //     console.log('localS name', localStorage.getItem('fullName'))
    //     setUsername(localStorage.getItem('fullName'))
    // }, [])
    return (
        <Container fluid className='profile p-5'>
            <Row>
                <Col>
                 <h2>Welcome, username!</h2>
                </Col>
            </Row>
          <Row>
              <Col>
                  <h6>Your email:</h6>
                  <h5 >Your bids: </h5> 
                  {/* I need to show a table with the last bids:
                  ex. car model, time and bid */}
                
              </Col>
          </Row>
        </Container>
    )
}

export default Profile