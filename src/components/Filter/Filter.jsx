import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import styles from './style.css'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

const Filter = (data) => {
    const options = [ 
        { value: 1990, label: 1990},
        { value: 1991, label: 1991},
        { value: 1992, label: 1992},
        { value: 1993, label: 1992},
        { value: 1994, label: 1994},
        { value: 1995, label: 1995},
        { value: 1996, label: 1996},
        { value: 1997, label: 1997},
        { value: 1998, label: 1998},
        { value: 1999, label: 1999},
        { value: 2000, label: 2000},
        { value: 2001, label: 2001},
        { value: 2002, label: 2002},
        { value: 2003, label: 2003},
        { value: 2004, label: 2004},
        { value: 2005, label: 2005},
        { value: 2006, label: 2006},
        { value: 2007, label: 2007},
        { value: 2008, label: 2008},
        { value: 2009, label: 2009},
        { value: 2010, label: 2010},
        { value: 2011, label: 2011},
        { value: 2012, label: 2012},
        { value: 2013, label: 2013},
        { value: 2014, label: 2014},
        { value: 2015, label: 2015},
        { value: 2016, label: 2016},
        { value: 2017, label: 2017},
        { value: 2018, label: 2018},
        { value: 2019, label: 2019},
        { value: 2020, label: 2020},
        { value: 2021, label: 2021}
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
    const [model, setModel] = useState('')
    const [years, setYears] = useState([])
    const [price, setPrice] = useState('')
    
    const onSearch = () => {
        console.log(data, 'in filter')
        // setModel(e.target.value)
        // setYears(e.target.value)
        // setPrice(e.target.value)
        // console.log(model, years, price, 'data to search')
    }
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
          
            </Form.Group>
       
            <div className='text-center col-lg-3 col-md-12 col-sm-12'>
            <Button className='btn-search' onClick={onSearch}>Search</Button>
            </div>
       
            </Row>
            </Form>
        
          
        </>
    )
}

export default Filter