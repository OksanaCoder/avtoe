import React, { useLayoutEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import CarItem from "../CarItem/CarItem";
import Filter from "../Filter/Filter";
import { Row, Container, Col } from "react-bootstrap";

const Auction = ({ data }) => {
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

      {data
        .filter((item) => item.typeSale === "auction")
        .map((item) => (
          <Row key={item.id} style={{ background: "#262626" }} className="pb-5">
            <Col lg={12} md={12} sm={12}>
              <CarItem filteredData={[item]} />
            </Col>
          </Row>
        ))}

      {/* <CarItem data={data} /> */}
    </>
  );
};

export default Auction;
