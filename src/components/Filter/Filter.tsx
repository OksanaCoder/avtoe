import React, { useState } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import './style.css'
import search from '../../img/search.svg'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import {
  optionsPrice,
  optionsBrand,
  optionsYear,
  OptionBrand,
  OptionPrice,
  OptionYear,
} from './FilterHelper'
import { useTranslation } from 'react-i18next'

type Props = {
  onSearch: (
    valueBrand: OptionBrand | null,
    valuesYearFrom: OptionYear | null,
    valuesYearTo: OptionYear | null,
    valuePrice: OptionPrice | null
  ) => void
}

const Filter = ({ onSearch }: Props) => {
  const { t } = useTranslation()
  const [valueBrand, setValueBrand] = useState<OptionBrand | null>(null)
  const [valuesYearFrom, setValuesYearFrom] = useState<OptionYear | null>(null)
  const [valuesYearTo, setValuesYearTo] = useState<OptionYear | null>(null)
  const [valuePrice, setValuePrice] = useState<OptionPrice | null>(null)

  const handleSearch = () => {
    onSearch(valueBrand, valuesYearFrom, valuesYearTo, valuePrice)
  }

  const handleRevert = () => {
    setValueBrand(null)
    setValuesYearFrom(null)
    setValuesYearTo(null)
    setValuePrice(null)
    onSearch(null, null, null, null)
  }

  return (
    <>
      <Form
        className="white padding-filter"
        style={{ background: '#23292D', paddingBottom: '100px' }}
      >
        <Row className="form-style">
          <Form.Group
            controlId="exampleForm.ControlSelect1"
            className="col-lg-2 col-md-12 col-sm-12"
          >
            <Form.Label>Марка</Form.Label>
            <Select
              options={optionsBrand}
              className="selectStyle optionStyle"
              value={valueBrand}
              onChange={setValueBrand}
              placeholder={t('chooseFilter')}
              isClearable
            />
          </Form.Group>

          <Form.Group
            controlId="exampleForm.ControlSelect2"
            className="col-lg-2 col-md-12 col-sm-12"
          >
            <Form.Label>
              {t('year')} ({t('yearFrom')})
            </Form.Label>
            <CreatableSelect
              options={optionsYear}
              className="selectStyle optionStyle"
              closeMenuOnSelect={false}
              value={valuesYearFrom}
              onChange={setValuesYearFrom}
              isClearable
              placeholder={t('chooseFilter')}
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlSelect2"
            className="col-lg-2 col-md-12 col-sm-12"
          >
            <Form.Label>({t('yearTo')})</Form.Label>
            <CreatableSelect
              options={optionsYear}
              className="selectStyle optionStyle"
              closeMenuOnSelect={false}
              value={valuesYearTo}
              onChange={setValuesYearTo}
              isClearable
              placeholder={t('chooseFilter')}
            />
          </Form.Group>

          <Form.Group
            controlId="exampleForm.ControlSelect3"
            className="col-lg-2 col-md-12 col-sm-12"
          >
            <Form.Label>{t('price')}, $</Form.Label>
            <Select
              options={optionsPrice}
              className="selectStyle optionStyle"
              value={valuePrice}
              onChange={setValuePrice}
              getOptionLabel={(option) =>
                `${option.startPrice}${
                  option.endPrice === null ? '+' : '-' + option.endPrice
                }`
              }
              getOptionValue={(option) => option.id}
              isClearable
              placeholder={t('chooseFilter')}
            />
          </Form.Group>

          <div className="text-center col-lg-1 col-md-12 col-sm-12">
            <Button className="btn-search" onClick={handleSearch}>
              <img src={search} alt="search" width="20" />
            </Button>
          </div>
          <div className="text-center col-lg-1 col-md-12 col-sm-12">
            <Button className="btn-search" onClick={handleRevert}>
              {t('revert')}
            </Button>
          </div>
        </Row>
      </Form>
    </>
  )
}

export default Filter
