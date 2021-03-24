import React, { useLayoutEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import CarItem from '../CarItem/CarItem'
import Filter from '../Filter/Filter'
import { Row, Container } from 'react-bootstrap'

const Auction = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    const data = [
        { 
            id: 1,
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
            typeSale: 'auction',
            time: '14:10:05'
        },
        {
            id: 2,
            name : "BMW",
            price : "80 500",
            mileage: 22,
            city: "Kyiv",
            fuel: "Бензин",
            type: "Автомат",
            color: "червоний",
            year: 2014,
            drive: "повний",
            moreInfo : " ",
            mainImage: [],
            images: [],
            typeSale: 'buy now'
        }
    ]


    return (
        <>
        <Container fluid style={{padding: '0'}}>
                <Row className='flex-style padding-filter m-0' style={{background: '#23292D'}}>
                    
                <div className='heading-style col text-center'>
                    <div className="blue-line m-auto"></div> 
                    <h6 className='mt-3'>Обери</h6>
                    <h3 className='blue-color'>Авто Своєї Мрії</h3>
                </div>
               
                </Row>
             
                   <Filter />
      
        </Container>
            
         <CarItem  data={data} /> 
          
            
          
        </>
    )
}

export default Auction