import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Article from './Article'
import { useTranslation } from 'react-i18next'


const Magazine = ({ dataArticles = [] }) => {
  const { t } = useTranslation()
  return (
    <>
      <Container fluid style={{ padding: '0' }}>
        <Row
          className="flex-style padding-filter m-0 pb-5"
          style={{ background: '#23292D' }}
        >
          <div className="heading-style col text-center pb-5">
            <div className="blue-line m-auto"></div>
            <h6 className="mt-3">Журнал</h6>
            <h3 className="blue-color mobile-font">Для {t('businessmen')}</h3>
          </div>
        </Row>
        {dataArticles.length > 0 ? <Article dataArticles={dataArticles} /> : <h4 className='p-5'>{t('loading')}</h4>}
      </Container>
    </>
  )
}

export default Magazine
