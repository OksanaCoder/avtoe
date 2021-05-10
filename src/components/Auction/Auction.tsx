import React, { useEffect, useLayoutEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import CarItemAuction from '../CarItemAuction/CarItemAuction'
import Filter from '../Filter/Filter'
import { Row, Container, Col } from 'react-bootstrap'
import { CarType } from '../../types/appTypes'
import { useTranslation } from 'react-i18next'

type Props = {
  dataAuction: CarType[]
}

const Auction = ({ dataAuction = [] }: Props) => {
  const { t, i18n } = useTranslation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  const [filteredData, setFilteredData] = useState<CarType[]>([])

  const onSearch = (valueBrand, valueYear, valuePrice) => {
    setFilteredData(
      dataAuction.filter(
        (item) =>
          item.model.toLowerCase() === valueBrand.value.toLowerCase() &&
          valueYear.map((i) => Number(i.value)).includes(Number(item.year)) &&
          valuePrice.startPrice <= Number(item.startingPrice) &&
          Number(item.startingPrice) <= valuePrice.endPrice
      )
    )
  }

  useEffect(() => {
    setFilteredData(dataAuction)
  }, [dataAuction])

  return (
    <>
      <Container fluid style={{ padding: '0' }}>
        <Row className="flex-style padding-filter m-0" style={{ background: '#23292D' }}>
          <div className="heading-style col text-center">
            <div className="blue-line m-auto"></div>
            <h6 className="mt-3">{t('choose')}</h6>
            <h3 className="blue-color">{t('car')}</h3>
          </div>
        </Row>
        <Filter onSearch={onSearch} />
      </Container>
      {filteredData.length > 0 ? (
        <Container style={{ background: '#262626' }} className="pb-5" fluid>
          <Row className="p-5">
            <div className="heading-style">
              <h6 className="blue-line">{t('last')}</h6>
              <h3>{t('updates')}</h3>
            </div>
          </Row>
          <Row style={{ background: '#262626' }} className="pb-5">
            {filteredData.map((item) => (
              <Col lg={4} md={6} sm={12} key={item.id}>
                <CarItemAuction dataAuction={[item]} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Container style={{ background: '#262626' }} className="pb-5" fluid>
          <Row className="p-5">
            <div className="heading-style">
              <h6>Авто відсутні</h6>
            </div>
          </Row>
        </Container>
      )}

      {/* <CarItem data={data} /> */}
    </>
  )
}

export default Auction
