import React from "react";
// import ButtonTop from "../../components/ButtonTop/ButtonTop";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
//style
import "./exsamResults.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faStopwatch20,
} from "@fortawesome/free-solid-svg-icons";
// import BackgroundLayer from "../BackgroundLayer/BackgroundLayer";
const primaryColor = "#BF9B30";

const userInfo = {
  date: "6 jun 2023",
  courseName: "Introduction to React js",
  level: "lev.1",
  degree: "20Marks",
  Instractor: "Tariq Ali",
  time: "12:50 PM",
  duration: "1Hour",
  NumberOfQuestionsAnswered: "20",
  NumberOfQuestionsAnsweredCorrectly: "10",
  NumberOfWrongAnswers: "10",
  TimeTaken: "50 : 00",
};

const ExsamResults = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <BackgroundLayer /> */}
      <section className="exams-result-component ">
        <Container className="pt-5">
          <Row className="justify-content-md-center mt-4">
            <Col className="mb-3">
              <span style={{ disply: "none" }} className="mt-0 h5">
                online Exsam Result
              </span>
              <p className="line mb-1"></p>
              <span>
                <small>{userInfo.date}</small>
              </span>
            </Col>
          </Row>
          <Row className="g-2">
            <Col xs={12} md={6}>
              <h2>Introduction to React js</h2>
              <span>
                <small>
                  {userInfo.level},{userInfo.degree}
                </small>
              </span>
              <p>
                <span className="gold-color ">
                  <strong>Instractor</strong>
                </span>{" "}
                <span> : </span>
                <small>{userInfo.Instractor}</small>
              </p>
            </Col>
            <Col xs={12} md={6}>
              <div className="date-section">
                <Row className="justify-content-between mb-2">
                  <Col className="d-flex align-items-center g-1">
                    <span className="gold-color mx-1">
                      <FontAwesomeIcon icon={faCalendarDays} />
                    </span>{" "}
                    Date
                  </Col>
                  <Col className="d-flex align-items-center g-1">
                    <span className="gold-color mx-1">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    Time
                  </Col>
                  <Col className="d-flex align-items-center g-1">
                    {" "}
                    <span className="gold-color mx-1">
                      <FontAwesomeIcon icon={faStopwatch20} />
                    </span>
                    Duration
                  </Col>
                </Row>
                <Row className="justify-content-between">
                  <Col className="mx-4">{userInfo.date}</Col>
                  <Col>{userInfo.time}</Col>
                  <Col className="mx-3">{userInfo.duration}</Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="time-Exsam" md={12}>
              <div className="time-Exsam  d-flex justify-content-end  mb-4">
                {/* 60&#58;00 */}
                {userInfo.TimeTaken}
              </div>
            </Col>
            <Col className="long-line" md={12}></Col>
          </Row>
        </Container>
        {/* Section show answer and the final score and score details  */}
        <Container className="score-details-section ">
          <Row className="exsam-results align-items-center mb-4">
            <Col xs={12} md={5} className="mx-1">
              <div className="cricle">
                <svg viewBox="0 0 200 200">
                  {/* 1st */}
                  <circle
                    r="80"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    stroke="#ccc"
                  />
                  {/* /*secnd cyrcle */}
                  <circle
                    r="80"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="300 60"
                    stroke="#BF9B30"
                  />
                  {/* //3ed cyrcle */}
                  <circle
                    r="60"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    stroke="#ccc"
                  />
                  <circle
                    r="60"
                    cx="100"
                    cy="100"
                    fill="none"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray="220 60"
                    stroke="#BF9B30"
                  />
                  {/* //text */}
                  <text
                    x="100"
                    y="110"
                    fontFamily="Open Sans"
                    fontSize="20"
                    textAnchor="middle"
                    fill="#fff"
                  >
                    {userInfo.NumberOfQuestionsAnsweredCorrectly}/20
                  </text>
                </svg>
              </div>
            </Col>
            <Col xs={12} md={5} className="mx-1">
              <div className="my-4 text-center">
                <Button
                  variant={primaryColor}
                  size="lg"
                  className="btn view-answers  "
                >
                  <p className="text-uppercase ms-auto">View Answer</p>
                </Button>
              </div>
            </Col>
          </Row>
          {/* score details  */}
          <Row className="score-details  d-flex justify-content-between d-grid gap-1">
            <Col className='d-flex gap-3 flex-column'>
              <Row className='align-items-center'>
                <Col className="final-row col-8">
                  <p className="score-results fs-4">
                    Number of questions answered&#58;
                  </p>
                </Col>
                <Col  className="final-row col-4">
                  <p className="final-scor fs-4">
                    {userInfo.NumberOfQuestionsAnswered} Question
                  </p>
                </Col>
              </Row>
              <Row className='align-items-center'>
                <Col  className="final-row col-8">
                  <p className="score-results fs-4">
                    Number of questions answered correctly &#58;
                  </p>
                </Col>
                <Col  className="final-row col-4">
                  <p className="final-scor fs-4">
                    {userInfo.NumberOfQuestionsAnsweredCorrectly} Question
                  </p>
                </Col>
              </Row>
              <Row className='align-items-center'>
                <Col  className="final-row col-8 ">
                  <p className="score-results fs-4">
                    Number of wrong answers &#58;
                  </p>
                </Col>
                <Col  className="final-row col-4">
                  <p className="final-scor fs-4">
                    {userInfo.NumberOfWrongAnswers} Answer
                  </p>
                </Col>{" "}
              </Row>
              <Row className='align-items-center '>
                <Col className="final-row col-8">
                  <p className="score-results  fs-4">Time Taken&#58;</p>
                </Col>
                <Col className="final-row col-4">
                  <p className="final-scor fs-4 text-center">
                    {userInfo.TimeTaken}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <ButtonTop /> */}
      {/* <Footer /> */}
    </>
  );
};

export default ExsamResults;
