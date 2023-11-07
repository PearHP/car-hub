import React from "react";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section
      className="common__section mb-5 bg-gradient-to-b from-blue-900 to-blue-800 bg-no-repeat bg-cover flex justify-center items-center"
      style={{
        backgroundImage: `url(${
          require("../../assets/all-images/drive.jpg").default
        })`,
        height: "calc(100vh - 64px)",
      }}
    >
      <Container className="text-center">
        <h1 className="text-light text-4xl">{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
