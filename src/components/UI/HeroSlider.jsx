import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0 bg-gradient-to-r from-blue-900 to-blue-800 bg-center bg-no-repeat bg-cover">
        <Container>
          <div className="slider__content pt-32">
            <h4 className="text-white mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-white mb-4 text-4xl font-semibold">
              Reserve Now and Get 50% Off
            </h1>

            <button className="btn reserve__btn mt-4 bg-white text-blue-900 font-semibold py-2 px-4 rounded">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0 bg-gradient-to-r from-blue-900 to-blue-800 bg-center bg-no-repeat bg-cover">
        <Container>
          <div className="slider__content pt-32">
            <h4 className="text-white mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-white mb-4 text-4xl font-semibold">
              Reserve Now and Get 50% Off
            </h1>

            <button className="btn reserve__btn mt-4 bg-white text-blue-900 font-semibold py-2 px-4 rounded">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0 bg-gradient-to-r from-blue-900 to-blue-800 bg-center bg-no-repeat bg-cover">
        <Container>
          <div className="slider__content pt-32">
            <h4 className="text-white mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-white mb-4 text-4xl font-semibold">
              Reserve Now and Get 50% Off
            </h1>

            <button className="btn reserve__btn mt-4 bg-white text-blue-900 font-semibold py-2 px-4 rounded">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
