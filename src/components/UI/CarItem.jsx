import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="border border-gray-300 p-5 rounded-lg">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-full" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="text-center text-2xl font-bold">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info flex items-center justify-between mt-3 mb-4">
            <span className="flex items-center gap-1">
              <i class="ri-car-line text-yellow-500 text-lg"></i> {model}
            </span>
            <span className="flex items-center gap-1">
              <i class="ri-settings-2-line text-yellow-500 text-lg"></i>{" "}
              {automatic}
            </span>
            <span className="flex items-center gap-1">
              <i class="ri-timer-flash-line text-yellow-500 text-lg"></i>{" "}
              {speed}
            </span>
          </div>

          <button className="w-1/2 py-2 rounded-l-lg bg-blue-900 text-white font-semibold">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className="w-1/2 py-2 rounded-r-lg bg-yellow-500 text-white font-semibold">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
