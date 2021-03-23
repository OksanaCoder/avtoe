import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import styles from './style.css'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

const Filter = () => {
    const options = [ 
        { value: 1990, label: 1990},
        { value: 1991, label: 1991},
        { value: 1992, label: 1992}
    ]
    const optionBrand = [
        { value: 'BMW', label: 'BMW'}
    ]
    const optionYear = [
        { value: 0 + '-' + 3000, label: 0 + '-' +  3000},
        { value: 3000 + '-' +  9000, label: 3000 + '-' +  9000},
        { value: 9000 + '-' +  20000, label: 9000 + '-' + 20000},
        { value: 20000 + '-' +  50000, label: 20000 + '-' +  50000},
        { value: 50000 + '+', label: 50000 + '+'},
    ]

    return (
        <>
   
            <Form className='white p-5' style={{background: '#23292D', paddingBottom: '100px'}}>
              <Row className='form-style'>
          
                  <Form.Group controlId="exampleForm.ControlSelect1" className='col-lg-3 col-md-12 col-sm-12'>
                  <Form.Label>Brand</Form.Label>
                     <Select options={optionBrand}
                             className='selectStyle optionStyle'
                              />
                 </Form.Group>
              
   
              <Form.Group controlId="exampleForm.ControlSelect2" className='col-lg-3 col-md-12 col-sm-12'>
                  <Form.Label>Year</Form.Label>
                    <CreatableSelect options={options} 
                                   className='selectStyle optionStyle'
                                   isMulti/>
              </Form.Group>
  
            <Form.Group controlId="exampleForm.ControlSelect3" className='col-lg-3 col-md-12 col-sm-12'>
                <Form.Label>Price, $</Form.Label>
            <Select options={optionYear}
                             className='selectStyle optionStyle'
                              />
                  {/* <option>0 - 3000</option>
                  <option>3 000 - 9 000</option>
                  <option>9 000 - 20 000</option>
                  <option>20 000 - 50 000</option>
                  <option>50 000 +</option> */}
          
            </Form.Group>
       
            <div className='text-center col-lg-3 col-md-12 col-sm-12'>
            <Button className='btn-search'>Search</Button>
            </div>
       
            </Row>
            </Form>
        
          
        </>
    )
}

export default Filter