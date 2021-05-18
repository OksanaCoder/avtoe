import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArticleType } from '../../types/appTypes'
import { useHistory, useParams } from 'react-router-dom'

type Props = {
  dataArticles: ArticleType[]
}

const ArticleDetails = ({ dataArticles = [] }: Props) => {
  const [item, setItem] = useState<ArticleType>({} as ArticleType)
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  useEffect(() => {
    const found = dataArticles.find((item) => Number(item.id) === Number(id))
    if (found) {
      setItem(found)
    }
  }, [dataArticles, id])

  return (
    <Container>
      <Row>
        <Col>{item.heading}</Col>
      </Row>
    </Container>
  )
}

export default ArticleDetails
