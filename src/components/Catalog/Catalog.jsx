import React, { useLayoutEffect, useState, useEffect } from 'react'
import './style.css'
import CarItem from '../CarItem/CarItem'
import Filter from '../Filter/Filter'
import { Row, Container, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Catalog = ({ data = [] }) => {
  const { type } = useParams()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  const [filteredData, setFilteredData] = useState([])

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

  useEffect(() => {
    if (type) {
      setFilteredData(data.filter((item) => item.type === type))
    }
  }, [type])

  return (
    <div>
      <Container fluid style={{ padding: '0' }}>
        <Row className="flex-style padding-filter m-0" style={{ background: '#23292D' }}>
          <div className="heading-style col text-center">
            <div className="blue-line m-auto"></div>
            <h6 className="mt-3">Обери</h6>
            <h3 className="blue-color">Авто Своєї Мрії</h3>
          </div>
        </Row>

        <Filter onSearch={onSearch} />

        {data.length > 0 ? (
          <Container style={{ background: '#262626' }} className="pb-5" fluid>
            <Row className="p-5">
              <div className="heading-style">
                <h6 className="blue-line">Останні</h6>
                <h3>Оновлення</h3>
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
                <h6>Авто відсутні</h6>
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
