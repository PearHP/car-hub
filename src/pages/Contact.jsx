import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section className="bg-gray-100">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="font-bold text-2xl mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    className="border border-gray-400 rounded-md p-2 w-full"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    className="border border-gray-400 rounded-md p-2 w-full"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="border border-gray-400 rounded-md p-2 w-full"
                  ></textarea>
                </FormGroup>

                <button
                  className="contact__btn bg-blue-700 text-white rounded-md py-2 px-4"
                  type="submit"
                >
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="font-bold text-2xl">Contact Information</h6>
                <p className="section__description mb-0">
                  123 ZindaBazar, Sylhet, Bangladesh
                </p>
                <div className="flex items-center gap-2">
                  <h6 className="text-sm mb-0">Phone:</h6>
                  <p className="section__description mb-0">+88683896366</p>
                </div>

                <div className="flex items-center gap-2">
                  <h6 className="mb-0 text-sm">Email:</h6>
                  <p className="section__description mb-0">example@gmail.com</p>
                </div>

                <h6 className="font-bold text-2xl mt-4">Follow Us</h6>

                <div className="flex items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
