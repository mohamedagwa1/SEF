import React from "react";
// import './jobs.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import JobCard from "../../Components/JobCard/JobCard";
import JobScreen from "../../Components/JobScreen/JobScreen";
import MenuJob from "../../Components/MenuJob/MenuJob";
import { Card, Button, Container, Col, Row, Form, Stack } from "react-bootstrap";
import TopNav_student from "../../Components/TopNav-student-portal/TopNav_student";
import { Link } from "react-router-dom";

const JobsPage= ()=> {
  return (
    <>
      <TopNav_student />

      <div className=" bg-image">
        <div className="bg-layer">
          {/* <Header /> */}
          <div style={{ height: "100px" }}></div>
          <JobScreen />
          <div></div>
          <div className="container d-flex justify-content-center">
            <MenuJob />
            <Container>
              <Row>
                <Col md={12} xs={12}>
                  <JobCard />
                </Col>
              </Row>
            </Container>
          </div>
             <div className="container ">
        <Stack  gap={2} className="col  d-block d-lg-none p-3 mt-4">
              <Link to="/app">
                <Button variant="" className="Default-bg text-white hover-bg-color transition mb-4 w-100">
                  Create your cv
                </Button>
              </Link>
        </Stack>
      </div>
        </div>


      </div>
    </>
  );
}
export default JobsPage;
