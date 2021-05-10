import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'
import './style.css'

const CarSearch = ({ dataFindCar }) => {
  return (
    <>
      {dataFindCar.map((i, index) => {
        return (
          <Fragment key={index}>
            <Col lg={6} md={6} sm={12} xs={12}>
              <h5 className="bold">{i.name}</h5>
              <hr className="line" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <p>{i.description}</p>
              <hr />
            </Col>
          </Fragment>
        )
      })}
    </>
  )
}

export default CarSearch
