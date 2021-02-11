import React from 'react'
import { Form, ButtonCol, Button, Col } from 'react-bootstrap'

const Filter = () => {
    return (
        <>
        <Col>
            <Form className='white row form-style' style={{position: 'relative'}}>
            <Form.Group controlId="exampleForm.ControlSelect1" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Label>Brand</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>BMW</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2"  className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Label>Year</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>2012</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect3"  className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Label>Price, $</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>0 - 3000</option>
                  <option>3 000 - 9 000</option>
                  <option>9 000 - 20 000</option>
                  <option>20 000 - 50 000</option>
                  <option>50 000 +</option>
                </Form.Control>
            </Form.Group>
            <div className='col-lg-3 col-md-12 col-sm-12 text-center'>
            <Button className='btn-search'>Пошук</Button>
            </div>
            </Form>
            </Col>   
        </>
    )
}

export default Filter