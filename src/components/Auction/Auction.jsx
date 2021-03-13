import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import CarItem from '../CarItem/CarItem'
import Filter from '../Filter/Filter'
import { Row, Container } from 'react-bootstrap'

const Auction = () => {
    const data = [
        {
            name : "Ferrari California",
            price : "91 500",
            mileage: 22,
            city: "Kyiv",
            fuel: "Бензин",
            type: "Автомат",
            startPrice: "40 000", 
            color: "червоний",
            year: 2014,
            drive: "повний",
            moreInfo : " ",
            mainImage: [],
            images: [],

        }
    ]
    // const [data, setData]  = useState(arr)

    return (
        <>
        <Container fluid style={{padding: '0'}}>
                <Row className='flex-style padding-filter m-0' style={{background: '#23292D'}}>
                    
                <div className='heading-style col text-center'>
                    <h6>Обери</h6>
                    <h3 className='text-white'>Авто Своєї Мрії</h3>
                </div>
               
                </Row>
             
                   <Filter />
      
            </Container>
           
                    <CarItem  data={data}/> 
          
            
          
        </>
    )
}

export default Auction