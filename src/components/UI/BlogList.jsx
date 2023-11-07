import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col className="mb-5 lg:col-span-4 md:col-span-6 sm:col-span-6">
      <div className="blog__item border border-gray-300">
        <img src={imgUrl} alt="" className="w-full" />
        <div className="blog__info p-3">
          <Link
            to={`/blogs/${title}`}
            className="blog__title text-blue-900 font-semibold text-lg hover:text-yellow-500 transition duration-300"
          >
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link
            to={`/blogs/${title}`}
            className="read__more text-yellow-500 font-semibold text-base hover:text-yellow-600 transition duration-300"
          >
            Read More
          </Link>

          <div className="blog__time pt-3 mt-3 flex items-center justify-between border-t border-gray-300">
            <span className="blog__author text-blue-900 font-semibold">
              <i className="ri-user-line font-medium"></i> {author}
            </span>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 section__description">
                <i className="ri-calendar-line font-medium"></i> {date}
              </span>

              <span className="flex items-center gap-1 section__description">
                <i className="ri-time-line font-medium"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
