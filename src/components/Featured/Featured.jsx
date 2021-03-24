import React, { useState } from 'react'
import './style.css'
import imageCar from '../../img/ferrari.jpg'
import icon_1 from '../../img/location.png'
import icon_2 from '../../img/speedometer.png'
import icon_3 from '../../img/petrol.png'
import { Col, Row, Container, Card } from 'react-bootstrap'
import ModalDetails from '../ModalDetails/ModalDetails'
import CarItem from '../CarItem/CarItem'


const Featured = () => {
    const data = [
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
    // const [show_details, setShow_details] = useState(false);
    // const handleShow_details = () => setShow_details(true);
    // const handleClose_details = () => setShow_details(false);

    return(
        <Container className='text-white' fluid>

            <Row style={{background: '#262626'}} className='pb-5'>
           
                <Col lg={12} md={12} sm={12}>           
                    <CarItem data={data} />
                </Col>

            </Row>
        </Container>
    )
}

export default Featured