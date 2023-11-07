import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top bg-blue-900 text-white py-2">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left flex items-center gap-4">
                <span className="text-sm">Need Help?</span>
                <span className="header__top__help flex items-center gap-1">
                  <i className="ri-phone-fill bg-white text-blue-900 rounded-full p-1"></i>{" "}
                  +1-202-555-0149
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right flex items-center justify-end gap-3">
                <Link
                  to="#"
                  className="flex items-center gap-1 text-white text-sm"
                >
                  <i className="ri-login-circle-line"></i> Login
                </Link>

                <Link
                  to="#"
                  className="flex items-center gap-1 text-white text-sm"
                >
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle py-5">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link
                    to="/home"
                    className="flex items-center gap-2 text-blue-900 text-lg font-bold"
                  >
                    <i className="ri-car-line text-2xl"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location flex items-center gap-2">
                <span>
                  <i className="ri-earth-line text-2xl text-blue-900"></i>
                </span>
                <div className="header__location-content">
                  <h4 className="text-blue-900 font-bold text-lg">
                    Bangladesh
                  </h4>
                  <h6 className="font-medium">Sylhet City, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location flex items-center gap-2">
                <span>
                  <i className="ri-time-line text-2xl text-blue-900"></i>
                </span>
                <div className="header__location-content">
                  <h4 className="text-blue-900 font-bold text-lg">
                    Sunday to Friday
                  </h4>
                  <h6 className="font-medium">10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="flex items-center justify-end "
            >
              <button className="header__btn bg-blue-900 text-white py-2 px-4 rounded">
                <Link
                  to="/contact"
                  className="flex items-center gap-1 text-white text-sm"
                >
                  <i className="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar bg-blue-900 py-3">
        <Container>
          <div className="navigation__wrapper flex items-center justify-between">
            <span className="mobile__menu">
              <i
                className="ri-menu-line text-white text-2xl"
                onClick={toggleMenu}
              ></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "nav__active nav__item text-white font-bold text-lg"
                        : "nav__item text-white text-lg"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-white cursor-pointer placeholder-white text-sm"
                />
                <span>
                  <i className="ri-search-line text-white text-2xl"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
