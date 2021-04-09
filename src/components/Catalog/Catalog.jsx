import React, { useLayoutEffect } from "react";
import "./style.css";
import CarItem from "../CarItem/CarItem";
import Filter from "../Filter/Filter";
import { Row, Container, Col } from "react-bootstrap";

const Catalog = ({ data, filteredData = [] }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
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

        <Filter data={data}/>
        <Container style={{ background: "#262626" }} className="pb-5" fluid>
          <Row className="p-5">
            <div className="heading-style">
              <h6 className="blue-line">Останні</h6>
              <h3>Оновлення</h3>
            </div>
          </Row>
        {filteredData.length === 0 &&
          data
            .filter((item) => item.typeSale === "buy now")
            .map((item) => (
        
                <Col lg={12} md={12} sm={12}>
                  <CarItem filteredData={[item]} />
                </Col>
         
            ))}
     </Container>
    {/* <Row style={{ background: "#262626" }} className="pb-5">
      <Row className="p-5">
        <div className="heading-style">
          <h6 className="blue-line">Останні</h6>
          <h3>Оновлення</h3>
        </div>
      </Row> */}
        {filteredData.length > 0 && (
      
            <Col lg={12} md={12} sm={12}>
              <CarItem filteredData={filteredData} />
            </Col>
    
        )}
  
      {/* </Row>     */}
      </Container>
    </div>
  );
};
{/* <Container
className="text-white pb-5"
fluid
style={{ background: "#262626" }}
>
<Row className="p-5">
  <div className="heading-style">
    <h6 className="blue-line">Останні</h6>
    <h3>Оновлення</h3>
  </div>
</Row> */}
export default Catalog;
