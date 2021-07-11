import React, { useEffect, useLayoutEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import CarItemAuction from '../CarItemAuction/CarItemAuction'
import Filter from '../Filter/Filter'
import { Row, Container, Col } from 'react-bootstrap'
import { AuctionResponse } from '../../types/appTypes'
import { useTranslation } from 'react-i18next'
import { OptionBrand, OptionPrice, OptionYear } from '../Filter/FilterHelper'

type Props = {
  dataAuction: AuctionResponse[]
}

const Auction = ({ dataAuction = [] }: Props) => {
  const { t } = useTranslation()

  const [filteredData, setFilteredData] = useState<AuctionResponse[]>([])
  console.log(filteredData, 'aucitons')
  const onSearch = (
    valueBrand: OptionBrand | null,
    valuesYearFrom: OptionYear | null,
    valuesYearTo: OptionYear | null,
    valuePrice: OptionPrice | null
  ) => {
    setFilteredData(
      dataAuction.filter(
        (item) =>
          (valueBrand === null ||
            item.car.Make.toLowerCase() === valueBrand.value.toLowerCase()) &&
          (valuesYearFrom === null || +valuesYearFrom.value <= +item.car.Year) &&
          (valuesYearTo === null || +valuesYearTo.value >= +item.car.Year) &&
          (valuePrice === null ||
            (valuePrice.startPrice <= Number(item.car.Price) &&
              (valuePrice.endPrice === null ||
                Number(item.car.Price) <= valuePrice.endPrice)))
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
              <h6>{t('noCarsAuction')}</h6>
            </div>
          </Row>
        </Container>
      )}
      {/* <CarItem data={data} /> */}
    </>
  )
}

export default Auction
