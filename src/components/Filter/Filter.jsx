import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import styles from './style.css'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { optionPrice, optionBrand, optionsYear } from './FilterHelper'

const Filter = ({ onSearch }) => {
  const [valueBrand, setValueBrand] = useState('')
  const [valueYear, setValueYear] = useState([])
  const [valuePrice, setValuePrice] = useState('')

  const handleSearch = () => {
    onSearch(valueBrand, valueYear, valuePrice)
  }

  return (
    <>
      <Form
        className="white p-5"
        style={{ background: '#23292D', paddingBottom: '100px' }}
      >
        <Row className="form-style">
          <Form.Group
            controlId="exampleForm.ControlSelect1"
            className="col-lg-3 col-md-12 col-sm-12"
          >
            <Form.Label>Brand</Form.Label>
            <Select
              options={optionBrand}
              className="selectStyle optionStyle"
              value={valueBrand}
              onChange={setValueBrand}
            />
          </Form.Group>

          <Form.Group
            controlId="exampleForm.ControlSelect2"
            className="col-lg-3 col-md-12 col-sm-12"
          >
            <Form.Label>Year</Form.Label>
            <CreatableSelect
              options={optionsYear}
              className="selectStyle optionStyle"
              isMulti
              closeMenuOnSelect={false}
              value={valueYear}
              onChange={setValueYear}
            />
          </Form.Group>

          <Form.Group
            controlId="exampleForm.ControlSelect3"
            className="col-lg-3 col-md-12 col-sm-12"
          >
            <Form.Label>Price, $</Form.Label>
            <Select
              options={optionPrice}
              className="selectStyle optionStyle"
              value={valuePrice}
              onChange={setValuePrice}
              getOptionLabel={(option) => `${option.startPrice}-${option.endPrice}`}
              getOptionValue={(option) => option.id}
            />
          </Form.Group>

          <div className="text-center col-lg-3 col-md-12 col-sm-12">
            <Button className="btn-search" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </Row>
      </Form>
    </>
  )
}

export default Filter
