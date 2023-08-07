import React from "react";
import "./Courses.css";
import im2 from "../../assets/images/Rectangle 66.png";
import TopNav_student from "../../Components/TopNav-student-portal/TopNav_student";

//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { container, Card, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
function Courses() {
  const navigate=useNavigate();
  const [Data, setData] = useState(Array.from({ length: 10 }));
  const [CurrentPage, setCurrentPage] = useState(1);
  const recordsPerPages = 4;
  const lastIndex = CurrentPage * recordsPerPages;
  const firstIndex = lastIndex - recordsPerPages;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPages);
  const maxButtonsToShow = 3; // Maximum number of buttons to show initially
  const maxButtonsToRender = Math.min(maxButtonsToShow, nPage); // Maximum number of buttons to render

  let startButton = Math.min(
    Math.max(CurrentPage - Math.floor(maxButtonsToRender / 2), 1),
    nPage - maxButtonsToRender + 1
  );
  const endButton = Math.min(startButton + maxButtonsToRender - 1, nPage);

  const numbers = [...Array(endButton - startButton + 1)].map(
    (_, index) => startButton + index
  );

  if (endButton - startButton + 1 < maxButtonsToRender) {
    startButton = Math.max(endButton - maxButtonsToRender + 1, 1);
  }

  function prePage() {
    if (CurrentPage !== firstIndex) {
      setCurrentPage(CurrentPage - 1);
    }
  }

  function nextPage() {
    if (CurrentPage !== lastIndex) {
      setCurrentPage(CurrentPage + 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  return (
    <>
      <TopNav_student />

      <div className=" bg-image">
        <div className="bg-layer">
            <div className="container">
              <div className="row ">
                <div className="col-lg-12 m-3">
                  <p
                    className="text-white line-after mb-2"
                    style={{ marginTop: "150px" }}
                  >
                    Courses
                  </p>
                  <div className="d-flex justify-content-between  flex-lg-row ">
                    <p className="text-white mb-2 mb-lg-0">6th June 2023</p>
                    {/* <button className="btn Default-bg text-white btn-ctreate d-none d-md-block">CREATE NEW ARTICLE</button> */}
                  </div>

                </div>    <Row>
                <div className="row mt-3 mb-3">
                  <div className="col text-end">
                    <i
                      className="fa-solid fa-circle-chevron-left main-color fa-xl hover-color icon m-3 fs-2 "
                      onClick={prePage}
                    ></i>

                    <i
                      className="fa-solid fa-circle-chevron-right main-color fa-xl hover-color icon fs-2"
                      onClick={nextPage}
                    ></i>
                  </div>

                </div>

                {records.map((items, index) => (
                  <div key={index} className="col-lg-3 my-2  p-2 ">
                    <Col className="">
                      <Card>
                        <Card>
                          <Card.Img
                            variant="top"
                            src={im2}
                            className="position-relative img"
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <h5 className="title text-center">
                              Python for Beginners
                            </h5>
                            <p className="text-center">
                              <span className="main-color text">
                                Instructor:{" "}
                                <span className="text-white">Mohammed</span>
                              </span>
                            </p>
                          </div>
                        </Card>
                        <Card.Body>
                          <p>
                            <span>
                              <i class="far fa-calendar-alt main-color m-2 fs-5"></i>
                            </span>
                            Wedensday,June 7th
                          </p>
                          <p>
                            <span>
                              <i class="fas fa-clipboard-list main-color m-2 fs-5"></i>
                            </span>
                            12 Lessons
                          </p>
                          <Button
                            variant="primary mb-3 pt-2 "
                            className="button"
                            onClick={()=>navigate('/CourseShowPagenotEnrolled')}
                          >
                            {" "}
                            ENROLL
                          </Button>
                          <br />
                          <Card.Link href="# " className="nav-link">
                            Viwe Details
                            <span>
                              <i
                                class="fa-solid fa-chevron-right"
                                style={{ marginLeft: "10px" }}
                              ></i>
                            </span>
                          </Card.Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                ))}
              </Row>
                <div className="jobs container  mt-4  m-auto">
              <div className="row d-flex justify-content-between m-3 ">
                <div className="d-flex flex-column  justify-content-between  flex-lg-row mt-5 mb-4 align-items-center">
                  <p className="text-white   font-s-20 mb-5 ">Other Courses</p>
                  <div className="search-container  d-flex flex-sm-row    mb-4">
                    <input
                      className="text-white "
                      id="search"
                      type="text"
                      placeholder="Search in Articles"
                    />
                    <i class="fa-solid fa-magnifying-glass search-icon main-color "></i>
                  </div>
                </div>

              </div>

              <div className=" ">
                <div className="w-100 Black-div">
                  <div className="row p-3 mb-4">
                    <div className="my-2 d-none d-lg-block  ">
                      <div className="w-90 ">
                        <div className="row p-3 ">
                          <div className="col-lg-5 col-md-12 "></div>
                          <div className="col-lg col-md-12   "></div>
                          <div className="col-lg fw-bold">Start Date</div>
                          <div className="col-lg col-6 ms-4 fw-bold">Level</div>
                          <div className="col-lg"></div>
                        </div>

                      </div>
                    </div>

                    {records.map((items, index) => (

                      <div key={index} className="">
                        <div className="row p-3 align-items-center other">
                          <div className="col-lg col-md-12 flex-column">
                            <img src={im2} className="w-100" />
                          </div>
                          <div className="col-lg-5 col-md-12  flex-column p-2">
                            <h5 className="fw-bold">HTML Basics</h5>
                            <p>12 lessons</p>
                            <p className='mt-2'>
                              <span className="main-color">Instructor : </span>{" "}
                              Mohammed
                            </p>
                          </div>

                          <div className="col-lg-2 col-md-6  flex-column justify-content-end">
                            Thurasday, June 8th
                          </div>
                          <div className="col-lg col-md-6 flex-column justify-content-end">
                            LEV-1
                          </div>
                          <div className="col-lg   justify-content-end">
                            <button className="text-white w-100 pt-3 pb-3 button"  onClick={()=>navigate('/CourseShowPagenotEnrolled')}>

                              ENROLL
                            </button>
                            <p className="mt-4 d-md-none d-lg-block text-center">
                              Viwe Details
                            </p>
                          </div>

                          <div className="col-lg justify-content-end text-end d-md-block d-lg-none">
                            <p className="mt-4">Viwe Details</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="row mt-3 mb-3">
                      <div className="col text-end">
                        <i
                          className="fa-solid fa-circle-chevron-left main-color fa-xl hover-color icon "
                          onClick={prePage}
                        ></i>

                        {numbers.map((num, index) => (
                          <button

                            className={`btn text-white fw-bold m-2  ${
                              CurrentPage === num ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => changeCurrentPage(num)}
                            style={
                              CurrentPage === num
                                ? { borderColor: "#FED049" }
                                : {}
                            }
                          >
                            {num}
                          </button>
                        ))}
                        <i
                          className="fa-solid fa-circle-chevron-right main-color fa-xl hover-color icon"
                          onClick={nextPage}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>


            </div>


          </div>
        </div>

    </>
  );
}
export default Courses;
