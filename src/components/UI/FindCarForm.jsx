import React from "react";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form bg-white pt-14 pb-12 px-4 md:px-0">
      <div className="d-flex flex-wrap justify-between items-center">
        <FormGroup className="form__group w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="From address"
            required
            className="w-full border border-gray-300 py-2 px-4 rounded-lg outline-none text-gray-700 leading-5 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </FormGroup>

        <FormGroup className="form__group w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="To address"
            required
            className="w-full border border-gray-300 py-2 px-4 rounded-lg outline-none text-gray-700 leading-5 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </FormGroup>

        <FormGroup className="form__group w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="date"
            placeholder="Journey date"
            required
            className="w-full border border-gray-300 py-2 px-4 rounded-lg outline-none text-gray-700 leading-5 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </FormGroup>

        <FormGroup className="form__group w-full md:w-1/3 mb-4 md:mb-0">
          <input
            className="journey__time w-full border border-gray-300 py-2 px-4 rounded-lg outline-none text-gray-700 leading-5 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>

        <FormGroup className="select__group w-full md:w-1/3 mb-4 md:mb-0">
          <select className="w-full border border-gray-300 py-2 px-4 rounded-lg outline-none text-gray-700 leading-5 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group w-full md:w-auto">
          <button className="btn find__car-btn bg-black text-white py-2 px-4 rounded-lg outline-none transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white">
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
