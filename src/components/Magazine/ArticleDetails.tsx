import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArticleType } from '../../types/appTypes'
import { useParams } from 'react-router-dom'
import logo_big from '../../img/logo-big.png'
import './style.css'

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
    <>
      <Row className='back-art'>
        <Col className='text-center'>
        <img src={item?.image1} className='article-img'/>
       </Col>
        </Row>
    <Container>
    
      <Row>
        <Col>
        <h3 className='text-center m-5 head-desc'>{item?.heading}</h3></Col>
        </Row>
        <Row>  
          <Col>
          <p className='p-4 art-content'>{item?.content}
            </p></Col></Row>
       
        <Row>

          <Col ><p className='p-4'>Автор: <h6 className='font-italic'>{item?.author}
            </h6>
            </p></Col>
      </Row>
    </Container>
    </>
  )
}

export default ArticleDetails