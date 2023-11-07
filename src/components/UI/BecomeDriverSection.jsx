import React from "react";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver bg-gradient-to-r from-blue-900 to-blue-800 bg-center bg-cover py-20">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-full" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title text-white text-3xl font-bold leading-10 mb-8">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__driver-btn bg-white text-blue-900 font-semibold py-2 px-4 rounded-lg">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
