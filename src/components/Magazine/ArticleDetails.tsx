import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArticleType } from '../../types/appTypes'
import { useParams } from 'react-router-dom'

type Props = {
  dataArticles: ArticleType[]
}

const ArticleDetails = ({ dataArticles = [] }: Props) => {
  const [item, setItem] = useState<ArticleType>({} as ArticleType)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const found = dataArticles.find((item) => item.id === id)
    if (found) {
      setItem(found)
    }
  }, [dataArticles, id])

  return (
    <Container>
      <Row>
        <Col>{item?.heading}</Col>
        <Col>{item?.content}</Col>
        <Col>{item?.author}</Col>
      </Row>
    </Container>
  )
}

export default ArticleDetails
