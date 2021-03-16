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
                          <option value="BMW">BMW</option>
                          <option value="ACURA">ACURA</option>
                          <option value="ASTON MARTIN">ASTON MARTIN</option>
                          <option value="AUDI">AUDI</option>
                          <option value="BENTLEY">BENTLEY</option>
                          <option value="BUICK">BUICK</option>
                          <option value="CADILLAC">CADILLAC</option>
                          <option value="CHEVROLET">CHEVROLET</option>
                          <option value="CHRYSLER">CHRYSLER</option>
                          <option value="DODGE">DODGE</option>
                          <option value="FERRARI">FERRARI</option>
                          <option value="FORD">FORD</option>
                          <option value="GMC">GMC</option>
                          <option value="HONDA">HONDA</option>
                          <option value="HUMMER">HUMMER</option>
                          <option value="HYUNDAI">HYUNDAI</option>
                          <option value="INFINITI">INFINITI</option>
                          <option value="ISUZU">ISUZU</option>
                          <option value="JAGUAR">JAGUAR</option>
                          <option value="JEEP">JEEP</option>
                          <option value="KIA">KIA</option>
                          <option value="LAMBORGHINI">LAMBORGHINI</option>
                          <option value="LAND ROVER">LAND ROVER</option>
                          <option value="LEXUS">LEXUS</option>
                          <option value="LINCOLN">LINCOLN</option>
                          <option value="LOTUS">LOTUS</option>
                          <option value="MASERATI">MASERATI</option>
                          <option value="MAYBACH">MAYBACH</option>
                          <option value="MAZDA">MAZDA</option>
                          <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
                          <option value="MERCURY">MERCURY</option>
                          <option value="MINI">MINI</option>
                          <option value="MITSUBISHI">MITSUBISHI</option>
                          <option value="NISSAN">NISSAN</option>
                          <option value="PONTIAC">PONTIAC</option>
                          <option value="PORSCHE">PORSCHE</option>
                          <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
                          <option value="SAAB">SAAB</option>
                          <option value="SATURN">SATURN</option>
                          <option value="SUBARU">SUBARU</option>
                          <option value="SUZUKI">SUZUKI</option>
                          <option value="TOYOTA">TOYOTA</option>
                          <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                          <option value="VOLVO">VOLVO</option>

                  </Form.Control>
                 </Form.Group>
              
   
              <Form.Group controlId="exampleForm.ControlSelect2" className='col-lg-3 col-md-12 col-sm-12'>
                  <Form.Label>Year</Form.Label>
                  <Form.Control as="select" className='selectStyle'>
                  <option value="2013">2021</option>
                  <option value="2012">2020</option>
                  <option value="2011">2019</option>
                  <option value="2014">2018</option>
                  <option value="2013">2017</option>
                  <option value="2012">2016</option>
                  <option value="2011">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  
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
            <Button className='btn-search'>Search</Button>
            </div>
       
            </Row>
            </Form>
        
          
        </>
    )
}

export default Filter