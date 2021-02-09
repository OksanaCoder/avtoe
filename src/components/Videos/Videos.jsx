import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Videos = () => {
    return (
        <>
        <Container fluid className='p-5'>
          <div className='heading-style col-lg-12 col-md-12 col-sm-12  mb-5 mt-5 text-center'>
               
               <h6>Ми</h6>
               <h3>У СМІ</h3>
          
           </div>
         <Row className='mt-5'>
             <Col lg={4} md={6} sm={12} className='mb-5'>
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/sTIsrKdBT6Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </Col>
             <Col lg={4} md={6} sm={12} >
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/GVE4qa5d4F4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </Col>
             <Col lg={4} md={6} sm={12} >
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/R08pReNnNyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </Col>
             <Col lg={4} md={6} sm={12} >
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/vDrGe8lUcGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </Col>
             <Col lg={4} md={6} sm={12} >
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZzbW48S5XgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </Col>
         </Row>            
        </Container>
        </>


    )
}
export default Videos