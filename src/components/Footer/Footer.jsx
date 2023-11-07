import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-blue-900 pt-20 pb-6">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link
                  to="/home"
                  className=" d-flex align-items-center gap-2 text-white"
                >
                  <i class="ri-car-line text-white"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content text-white text-opacity-75 mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
              Delectus et ad illo recusandae temporibus?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title text-white font-medium text-base mb-4">
                Quick Links
              </h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link
                      to={item.path}
                      className="text-white text-opacity-75 hover:text-yellow-500 transition duration-300"
                    >
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title text-white font-medium text-base mb-4">
                Head Office
              </h5>
              <p className="office__info text-white text-opacity-75 font-normal mb-2">
                123 Zindabazar, Sylhet, Bangladesh
              </p>
              <p className="office__info text-white text-opacity-75 font-normal mb-2">
                Phone: +0995345875365
              </p>

              <p className="office__info text-white text-opacity-75 font-normal mb-2">
                Email: muhib5532@gmail.com
              </p>

              <p className="office__info text-white text-opacity-75 font-normal mb-2">
                Office Time: 10am - 7pm
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title text-white font-medium text-base mb-4">
                Newsletter
              </h5>
              <p className="section__description text-white text-opacity-75 font-normal mb-2">
                Subscribe our newsletter
              </p>
              <div className="newsletter flex items-center justify-between bg-blue-900 border border-gray-400 rounded-full px-3 py-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent text-white outline-none w-full"
                />
                <span>
                  <i class="ri-send-plane-line text-white"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom border-t border-gray-400 pt-4">
              <p className="section__description text-white text-opacity-75 font-normal text-center pt-4">
                <i class="ri-copyright-line"></i>
                Copyright {year}, Developed by Muhibur Rahman. All rights
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
