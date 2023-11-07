import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member border border-gray-300 rounded-md">
            <div className="single__member-img relative cursor-pointer">
              <img src={item.imgUrl} alt="" className="w-full rounded-md" />

              <div className="single__member-social absolute top-0 left-1/2 w-full h-full bg-blue-900 bg-opacity-60 rounded-md transform -translate-x-1/2 transition-all duration-500 opacity-0">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line w-7 h-7 text-black flex items-center justify-center bg-white rounded-full text-lg font-semibold"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i className="ri-twitter-line w-7 h-7 text-black flex items-center justify-center bg-white rounded-full text-lg font-semibold"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i className="ri-linkedin-line w-7 h-7 text-black flex items-center justify-center bg-white rounded-full text-lg font-semibold"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i className="ri-instagram-line w-7 h-7 text-black flex items-center justify-center bg-white rounded-full text-lg font-semibold"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
