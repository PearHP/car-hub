import React from "react";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form inline-block me-4 mb-4 w-1/2">
        <input
          type="text"
          placeholder="First Name"
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>
      <FormGroup className="booking__form inline-block ms-1 mb-4 w-1/2">
        <input
          type="text"
          placeholder="Last Name"
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>

      <FormGroup className="booking__form inline-block me-4 mb-4 w-1/2">
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>
      <FormGroup className="booking__form inline-block ms-1 mb-4 w-1/2">
        <input
          type="number"
          placeholder="Phone Number"
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>

      <FormGroup className="booking__form inline-block me-4 mb-4 w-1/2">
        <input
          type="text"
          placeholder="From Address"
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>
      <FormGroup className="booking__form inline-block ms-1 mb-4 w-1/2">
        <input
          type="text"
          placeholder="To Address"
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>

      <FormGroup className="booking__form inline-block me-4 mb-4 w-1/2">
        <select
          name=""
          id=""
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form inline-block ms-1 mb-4 w-1/2">
        <select
          name=""
          id=""
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        >
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form inline-block me-4 mb-4 w-1/2">
        <input
          type="date"
          placeholder="Journey Date"
          className="py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>
      <FormGroup className="booking__form inline-block ms-1 mb-4 w-1/2">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker py-2 px-4 border border-gray-300 text-gray-700 w-full"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea py-2 px-4 border border-gray-300 text-gray-700 w-full"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
