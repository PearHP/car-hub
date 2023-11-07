import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-full" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher flex items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i class="ri-user-line text-yellow-500"></i> {blog.author}
                  </span>

                  <span className="flex items-center gap-1 section__description">
                    <i class="ri-calendar-line text-yellow-500"></i> {blog.date}
                  </span>

                  <span className="flex items-center gap-1 section__description">
                    <i class="ri-time-line text-yellow-500"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 font-normal">
                  <blockquote className="text-lg">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment flex gap-3">
                  <img
                    src={commentImg}
                    alt=""
                    className="w-16 h-16 rounded-full border-2 border-blue-900 object-cover"
                  />
                  <div className="comment__content">
                    <h6 className="font-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay flex items-center gap-1 text-yellow-500 cursor-pointer">
                      <i class="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className="flex gap-3">
                      <Input
                        type="text"
                        placeholder="Full name"
                        className="border border-gray-300 rounded-md py-2 px-3"
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-md py-2 px-3"
                      />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3 bg-blue-900 text-white py-2 px-4 rounded-md">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className="font-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-md" />
                    <h6>
                      <Link
                        to={`/blogs/${item.title}`}
                        className="text-blue-900 font-bold"
                      >
                        {blog.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
