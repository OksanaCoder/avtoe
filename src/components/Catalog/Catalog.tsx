import React, { useEffect, useLayoutEffect, useState } from 'react'
import './style.css'
import CarItem from '../CarItem/CarItem'
import Filter from '../Filter/Filter'
import { Row, Container, Col } from 'react-bootstrap'
import { CarType } from '../../types/appTypes'
import { useTranslation } from 'react-i18next'

type Props = {
  data: CarType[]
}

const Catalog = ({ data = [] }: Props) => {
  const { t, i18n } = useTranslation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  const [filteredData, setFilteredData] = useState<CarType[]>([])

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const onSearch = (valueBrand, valueYear, valuePrice) => {
    setFilteredData(
      data.filter(
        (item) =>
          item.model.toLowerCase() === valueBrand.value.toLowerCase() &&
          valueYear.map((i) => Number(i.value)).includes(Number(item.year)) &&
          valuePrice.startPrice <= Number(item.startingPrice) &&
          Number(item.startingPrice) <= valuePrice.endPrice
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

        {data.length > 0 ? (
          <Container style={{ background: '#262626' }} className="pb-5" fluid>
            <Row className="p-5">
              <div className="heading-style">
                <h6 className="blue-line">{t('last')}</h6>
                <h3>{t('updates')}</h3>
              </div>
            </Row>
            <Row>
              {filteredData.map((item) => (
                <Col lg={4} md={6} sm={12}>
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
{
  /* <Container
className="text-white pb-5"
fluid
style={{ background: "#262626" }}
>
<Row className="p-5">
  <div className="heading-style">
    <h6 className="blue-line">Останні</h6>
    <h3>Оновлення</h3>
  </div>
</Row> */
}
export default Catalog
