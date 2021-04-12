import React from 'react'
import { Col, Card } from 'react-bootstrap'

const CarSearch = ({dataFindCar}) => {
    console.log( dataFindCar, 'car search')

  return(
      <>
    { dataFindCar.map(i => {
       return(
        <>
        <Col lg={6} md={6} sm={12}>
            <h5 className="bold">{i.name}</h5>  
       </Col>
       <Col lg={6} md={6} sm={12}>
            <p>{i.description}</p>    
       </Col>
        </>
       )
           
       
    })}
       </>
  )
}

export default CarSearch