import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import styles from './style.css'

const Filter = () => {
    return (
        <>
   
            <Form className='white p-5' style={{background: '#23292D', paddingBottom: '100px'}}>
              <Row className='form-style'>
          
                  <Form.Group controlId="exampleForm.ControlSelect1" className='col-lg-3 col-md-12 col-sm-12'>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="select" className='selectStyle'>
                    <option>BMW</option>
                  </Form.Control>
                 </Form.Group>
              
   
              <Form.Group controlId="exampleForm.ControlSelect2" className='col-lg-3 col-md-12 col-sm-12'>
                  <Form.Label>Year</Form.Label>
                  <Form.Control as="select" className='selectStyle'>
                    <option>2012</option>
                  </Form.Control>
              </Form.Group>
  
            <Form.Group controlId="exampleForm.ControlSelect3" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Label>Price, $</Form.Label>
                <Form.Control as="select" className='selectStyle'>
                  <option>0 - 3000</option>
                  <option>3 000 - 9 000</option>
                  <option>9 000 - 20 000</option>
                  <option>20 000 - 50 000</option>
                  <option>50 000 +</option>
                </Form.Control>
            </Form.Group>
       
            <div className='text-center col-lg-3 col-md-12 col-sm-12'>
            <Button className='btn-search'>Пошук</Button>
            </div>
       
            </Row>
            </Form>
        
          
        </>
    )
}

export default Filter