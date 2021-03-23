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
        { value: 'Acura', label: 'Acura'},
        { value: 'Alfa Romeo', label: 'Alfa Romeo'},
        { value: 'Aston Martin', label: 'Aston Martin'},
        { value: 'Audi', label: 'Audi'},
        { value: 'Bentley', label: 'Bentley'},
        { value: 'Bugatti', label: 'Bugatti'},
        { value: 'Buick', label: 'Buick'},
        { value: 'Cadillac', label: 'Cadillac'},
        { value: 'Chery', label: 'Chery'},
        { value: 'Chevrolet', label: 'Chevrolet'},
        { value: 'Chrysler', label: 'Chrysler'},
        { value: 'Citroen', label: 'Citroen'},
        { value: 'Dacia', label: 'Dacia'},
        { value: 'Daewoo', label: 'Daewoo'},
        { value: 'Daihatsu', label: 'Daihatsu'},
        { value: 'Datsun', label: 'Datsun'},
        { value: 'BMW', label: 'BMW'},
        { value: 'Dodge', label: 'Dodge'},
        { value: 'DS', label: 'DS'},
        { value: 'Ferrari', label: 'Ferrari'},
        { value: 'Fiat', label: 'Fiat'},
        { value: 'Fisker', label: 'Fisker'},
        { value: 'Ford', label: 'Ford'},
        { value: 'Geely', label: 'Geely'},
        { value: 'Genesis', label: 'Genesis'},
        { value: 'GMC', label: 'GMC'},
        { value: 'Honda', label: 'Honda'},
        { value: 'Hummer', label: 'Hummer'},
        { value: 'Hyundai', label: 'Hyundai'},
        { value: 'Infiniti', label: 'Infiniti'},
        { value: 'Isuzu', label: 'Isuzu'},
        { value: 'Iveco', label: 'Iveco'},
        { value: 'Jaguar', label: 'Jaguar'},
        { value: 'Jeep', label: 'Jeep'},
        { value: 'Kia', label: 'Kia'},
        { value: 'Lancia', label: 'Lancia'},
        { value: 'Land Rover', label: 'Land Rover'},
        { value: 'Lexus', label: 'Lexus'},
        { value: 'LincoIn', label: 'LincoIn'},
        { value: 'Maserati', label: 'Maserati'},
        { value: 'Mazda', label: 'Mazda'},
        { value: 'Mercedes', label: 'Mercedes'},
        { value: 'Mercury', label: 'Mercury'},
        { value: 'MG', label: 'MG'},
        { value: 'Mini', label: 'Mini'},
        { value: 'Mitsubisi', label: 'Mitsubisi'},
        { value: 'Nissan', label: 'Nissan'},
        { value: 'Opel', label: 'Opel'},
        { value: 'Pegeot', label: 'Pegeot'},
        { value: 'Pontiac', label: 'Pontiac'},
        { value: 'Porsche', label: 'Porsche'},
        { value: 'Renault', label: 'Renault'},
        { value: 'Rolls-Royce', label: 'Rolls-Royce'},
        { value: 'Rover', label: 'Rover'},
        { value: 'Saab', label: 'Saab'},
        { value: 'Saturn', label: 'Saturn'},
        { value: 'Scania', label: 'Scania'},
        { value: 'Seat', label: 'Seat'},
        { value: 'Skoda', label: 'Skoda'},
        { value: 'Smart', label: 'Smart'},
        { value: 'SsangYong', label: 'SsangYong'},
        { value: 'Subaru', label: 'Subaru'},
        { value: 'Suzuki', label: 'Suzuki'},
        { value: 'Tesla', label: 'Tesla'},
        { value: 'Toyota', label: 'Toyota'},
        { value: 'Volkswagen', label: 'Volkswagen'},
        { value: 'Volvo', label: 'Volvo'},

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