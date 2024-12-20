import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ArticleType } from '../../types/appTypes'
import { Link } from 'react-router-dom'
import './style.css'
import { useTranslation } from 'react-i18next'

type Props = {
  dataArticles: ArticleType[]
}

const Article = ({ dataArticles = [] }: Props) => {
  console.log(dataArticles)
  const { t } = useTranslation()
  return (
    <>
      <Row className="p-2 row-grey d-flex justify-content-start">
        {dataArticles.map((item) => {
          return (
            <Col
              lg={3}
              md={12}
              sm={12}
              xs={12}
              key={item.id}
              className="article-item mb-5"
            >
              <Row className="row-article p-1">
                <Col lg={12} md={12} sm={12} xs={12}></Col>
                {item.images.length > 0
                  ? item.images.map((i) => {
                      return <img src={i.url} className="img-article mb-4" />
                    })
                  : null}
                <Col lg={12} md={12} sm={12} xs={12} className="justify-content-between">
                  <h6>{item.Title.slice(0, 40)}...</h6>
                  <small>{item.Description.slice(0, 70)}...</small>
                  <div className="display-flex mt-4">
                    <Link
                      className="btn-item auction-btn mr-2"
                      to={`/articleDetails/${item.id}`}
                    >
                      {t('read')}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Article
