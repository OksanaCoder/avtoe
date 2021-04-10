import React from 'react'
import { Container, Row } from 'react'

const ArticleDetails = ({item}) => {
    console.log(item, 'article details')
    return (
        <>
          <Container flud className='back-black'>
             <Row><h2>Деталі</h2></Row>
              <Row></Row>
               <Row></Row>
          </Container>
        </>
    )
}

export default ArticleDetails