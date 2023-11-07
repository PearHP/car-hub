import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section className="about__section mt-0 md:mt-280">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title text-2xl md:text-3xl">
                Welcome to car rent service
              </h2>
              <p className="section__description text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item flex flex-wrap gap-6">
                <p className="section__description flex items-center gap-2 text-base md:text-lg">
                  <i class="ri-checkbox-circle-line text-yellow-500 text-lg"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>

                <p className="section__description flex items-center gap-2 text-base md:text-lg">
                  <i class="ri-checkbox-circle-line text-yellow-500 text-lg"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className="about__section-item flex flex-wrap gap-6">
                <p className="section__description flex items-center gap-2 text-base md:text-lg">
                  <i class="ri-checkbox-circle-line text-yellow-500 text-lg"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>

                <p className="section__description flex items-center gap-2 text-base md:text-lg">
                  <i class="ri-checkbox-circle-line text-yellow-500 text-lg"></i>{" "}
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img mt-0 md:mt-30">
              <img src={aboutImg} alt="" className="w-full" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
