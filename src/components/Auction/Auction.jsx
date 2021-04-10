import React, { useLayoutEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import CarItemAuction from "../CarItemAuction/CarItemAuction";
import Filter from "../Filter/Filter";
import { Row, Container, Col } from "react-bootstrap";

const Auction = ({ dataAuction }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  //   console.log(data.data, "data in auction");

  return (
    <>
      <Container fluid style={{ padding: "0" }}>
        <Row
          className="flex-style padding-filter m-0"
          style={{ background: "#23292D" }}
        >
          <div className="heading-style col text-center">
            <div className="blue-line m-auto"></div>
            <h6 className="mt-3">Обери</h6>
            <h3 className="blue-color">Авто Своєї Мрії</h3>
          </div>
        </Row>
        <Filter />
      </Container>
    { dataAuction.length > 0 ? (
<Container style={{ background: "#262626" }} className="pb-5" fluid>
          <Row className="p-5">
            <div className="heading-style">
              <h6 className="blue-line">Останні</h6>
              <h3>Оновлення</h3>
            </div>
          </Row>
      <Row style={{ background: "#262626" }} className="pb-5">
      {dataAuction
        .map((item) => (
         
            <Col lg={12} md={12} sm={12} key={item.id} >
              <CarItemAuction dataAuction={[item]} />
            </Col>
       
        ))}
   </Row>
   </Container>
    ) : ( 
      <Container style={{ background: "#262626" }} className="pb-5" fluid>
          <Row className="p-5">
            <div className="heading-style">
              <h6>Авто відсутні</h6>
            </div>
          </Row>
   </Container>
    )}
      
      {/* <CarItem data={data} /> */}
    </>
  );
};

export default Auction;
