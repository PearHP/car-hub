import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label
          htmlFor=""
          className="flex items-center gap-2 font-semibold text-blue-900"
        >
          <input type="radio" className="form-radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label
          htmlFor=""
          className="flex items-center gap-2 font-semibold text-blue-900"
        >
          <input type="radio" className="form-radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 flex items-center justify-between">
        <label
          htmlFor=""
          className="flex items-center gap-2 font-semibold text-blue-900"
        >
          <input type="radio" className="form-radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 flex items-center justify-between">
        <label
          htmlFor=""
          className="flex items-center gap-2 font-semibold text-blue-900"
        >
          <input type="radio" className="form-radio" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-right mt-5">
        <button className="px-4 py-2 rounded bg-blue-900 text-white border-none outline-none">
          Reserve Now
        </button>
      </div>
    </>
  );
};

export default PaymentMethod;
