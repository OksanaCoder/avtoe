import React, { useState } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import './style.css'
import search from '../../img/search.svg'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { optionPrice, optionBrand, optionsYear } from './FilterHelper'
import { useTranslation } from 'react-i18next'

const Filter = ({ onSearch }) => {
  const { t, i18n } = useTranslation()
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
            <Form.Label>Модель</Form.Label>
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
            <Form.Label>{t('year')}</Form.Label>
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
            <Form.Label>{t('price')}, $</Form.Label>
            <Select
              options={optionPrice}
              className="selectStyle optionStyle"
              value={valuePrice}
              onChange={setValuePrice}
              getOptionLabel={(option) =>
                `${option.startPrice}${
                  option.endPrice === null ? '+' : '-' + option.endPrice
                }`
              }
              getOptionValue={(option) => option.id}
            />
          </Form.Group>

          <div className="text-center col-lg-3 col-md-12 col-sm-12">
            <Button className="btn-search" onClick={handleSearch}>
              <img src={search} alt="search" width="20" />
            </Button>
          </div>
        </Row>
      </Form>
    </>
  )
}

export default Filter
