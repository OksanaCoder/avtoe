import React, { useEffect, useLayoutEffect, useState } from 'react'
import './style.css'
import CarItem from '../CarItem/CarItem'
import Filter from '../Filter/Filter'
import { Row, Container, Col } from 'react-bootstrap'
import { CarType } from '../../types/appTypes'
import { useTranslation } from 'react-i18next'
import { OptionBrand, OptionPrice, OptionYear } from '../Filter/FilterHelper'

type Props = {
  data: CarType[]
}

const Catalog = ({ data = [] }: Props) => {
  const { t } = useTranslation()

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // })

  const [filteredData, setFilteredData] = useState<CarType[]>([])

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const onSearch = (
    valueBrand: OptionBrand | null,
    valuesYearFrom: OptionYear | null,
    valuesYearTo: OptionYear | null,
    valuePrice: OptionPrice | null
  ) => {
    setFilteredData(
      data.filter(
        (item) =>
          (valueBrand === null ||
            item.model.toLowerCase() === valueBrand.value.toLowerCase()) &&
          (valuesYearFrom === null || +valuesYearFrom.value <= +item.year) &&
          (valuesYearTo === null || +valuesYearTo.value >= +item.year) &&
          (valuePrice === null ||
            (valuePrice.startPrice <= Number(item.startingPrice) &&
              (valuePrice.endPrice === null ||
                Number(item.startingPrice) <= valuePrice.endPrice)))
      )
    )
  }

  return (
    <div>
      <Container fluid style={{ padding: '0' }}>
        <Row className="flex-style padding-filter m-0" style={{ background: '#23292D' }}>
          <div className="heading-style col text-center">
            <div className="blue-line m-auto"></div>
            <h6 className="mt-3">{t('choose')}</h6>
            <h3 className="blue-color">{t('car')}</h3>
          </div>
        </Row>

        <Filter onSearch={onSearch} />

        {filteredData.length > 0 ? (
          <Container style={{ background: '#262626' }} className="pb-5" fluid>
            <Row className="p-5">
              <div className="heading-style">
                <h6 className="blue-line">{t('last')}</h6>
                <h3>{t('updates')}</h3>
              </div>
            </Row>
            <Row>
              {filteredData.map((item) => (
                <Col key={item.id} lg={4} md={6} sm={12}>
                  <CarItem data={data} filteredData={[item]} />
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <Container style={{ background: '#262626' }} className="pb-5" fluid>
            <Row className="p-5">
              <div className="heading-style">
                <h6>{t('noCars')}</h6>
              </div>
            </Row>
          </Container>
        )}
      </Container>
    </div>
  )
}

export default Catalog
