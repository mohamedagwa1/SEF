import React from "react";
// import ButtonTop from "../../Components/ButtonTop/ButtonTop";
// import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer";
import {FaRegClock} from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClock,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
//bootstrap
import { Col, Container, Row, Button } from "react-bootstrap";
import itlogo from "../../assets/images/it.jpg";

//style
import "./jobShowPage.css";
import MenuCheckBoxs from "../menu-checkboxs/MenuCheckBoxs";

const JobShowPage = () => {
  const navigate=useNavigate();

  return (
    <>
      {/* <Header /> */}

      <section className="job-screen-show1">
        <div className="bg-layer1">
        <Container className="pt-3">
          <Row className="justify-content-md-center">
            <Col className="job-title1">
              <span style={{ disply: "none" }} className="mt-0 h5">
                Job
              </span>
               <div>

               </div>
              <p className="line1 mb-1"></p>
              <span>
                <small>6th jun 2023</small>
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="Looking-job1 my-2" xs={12} md={6}>
              <h2>Looking For a Job?</h2>
              <span>
                Hear ypu can find your beast match between 1000s of updated and
                available positions.
              </span>
            </Col>
            <Col xs={12} md={6}>
              <form className="form-inline my-1 my-lg-0 mt-3">
                <input
                  className="form-control mr-sm-2 mainLoginInput"
                  type="search"
                  placeholder="&#xF002; Search for a job "
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
                <span className="bar-icon1">
                  <FontAwesomeIcon icon={faBars}  />{" "}

                </span>
              </form>
            </Col>
          </Row>
        </Container>

        <Container className="apply-job1 justify-content-between mt-3 ">
          <Row>
            <Col md={4} className='menujobshow'>
              <MenuCheckBoxs />
            </Col>
            <Col md={8} xs={10}>
              <div className="contacts-job1 my-3">
                <div className="comp-name1 mt-3 d-flex justify-content-between align-items-center  ">
                  <div className="job-company-post1 d-flex  ">
                    <span className="col-xs-12">
                      <img src={itlogo} alt="company logo" />
                    </span>
                    <div className="col-xs-12 ms-2 ">
                      <p className="job-titel1 mb-0 h3 fw-bolder">Frontend Developer</p>
                      <p className="minmiz-font1">
                        <small>Lorem ipsum dolor sit.</small>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="mb-0 content-onsite1">
                      <strong>5000 EGP - 8000 EGP</strong> Per Month{" "}
                      <span className="onsite-mob-view1 mt-0 onsite">
                        <span className="onsite-icon1">
                          <FontAwesomeIcon icon={faLocationDot} className="loctaion-icon1" />
                        </span>
                        Onsite
                      </span>
                    </div>
                    <p className="mt-0 onsite1 onsite-web-view1">
                      <span className="onsite-icon1">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      Onsite
                    </p>
                  </div>
                </div>
                <div className="comp-post1 my-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt tenetur nobis minima officia minus perferendis
                    accusantium incidunt iure, ab nesciunt provident eaque ex
                    quo cupiditate sit! Odio, a.
                  </p>
                </div>
                <div className="search-key1">
                  <span>
                    <Button className=" " variant="outline-warning">
                      React Js
                    </Button>
                  </span>
                  <span>
                    <Button className=" mx-3" variant="outline-warning">
                      Development
                    </Button>
                  </span>
                </div>
                <div className="posted-time1 my-2">
                  <span className="me-2 time-icon">
                  <FaRegClock />
                  </span>
                  2 h ago
                </div>
                <div className="about-comp1 my-4">
                  <h4 className="mb-2 fw-bolder">About Us</h4>

                  <p className="info-font-size1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus quia error ullam tenetur quos blanditiis cupiditate
                    molestias deleniti reprehenderit nobis!
                  </p>
                </div>
                <div className="job-desc1 my-4">
                  <h4 className="mb-2 fw-bolder">Job Description </h4>
                  <p className="info-font-size">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem nobis illum optio commodi explicabo iusto ea
                    similique a laborum saepe!
                  </p>
                </div>
                <div className="job-requermnets1 my-4">
                  <h4 className="mb-2 fw-bolder">Job Requermnets </h4>
                  <p className="info-font-size1 pb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum rem repellendus, id maxime ex quae enim neque eaque
                    fugit commodi.
                  </p>
                </div>
                <div className="btn-apply1">
                  <Button style={{ colo: "#fff" }} variant="warning" onClick={()=>navigate('/jobApp')}>
                    Apply
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </section>
      {/* <ButtonTop /> */}
      {/* <Footer /> */}
    </>
  );
};

export default JobShowPage;
