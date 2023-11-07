import React from "react";
import { Col } from "reactstrap";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item flex flex-col items-center">
      <span className="mb-3 d-inline-block">
        <i className={`${item.icon} text-yellow-500 text-2xl`} />
      </span>

      <h6 className="text-lg font-semibold transition duration-300 hover:text-yellow-500">
        {item.title}
      </h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
