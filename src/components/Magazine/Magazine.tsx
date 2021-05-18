import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Article from './Article'
import { allArticles } from '../../API'

const Magazine = () => {
  const [dataArticles, setDataArticles] = useState([])
  useEffect(() => {
    loadMagazine()
  }, [])

  const loadMagazine = () => {
    allArticles()
      .then((response) => {
        if (response.data) {
          setDataArticles(response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Container fluid style={{ padding: '0' }}>
        <Row className="flex-style padding-filter m-0" style={{ background: '#23292D' }}>
          <div className="heading-style col text-center">
            <div className="blue-line m-auto"></div>
            <h6 className="mt-3">журнал</h6>
            <h3 className="blue-color">Для Автобізнесменів</h3>
          </div>
        </Row>
        {dataArticles.length > 0 ? <Article dataArticles={dataArticles} /> : <h4>404</h4>}
      </Container>
    </>
  )
}

export default Magazine
