import React from "react";

//fontawesome

//bootstrap
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

import "./MenuCheckBoxs.css";
const MenuCheckBoxs = () => {
  return (
    <>
      {" "}
      <div className="menu-job-box1 my-3">
        <Container>
        {/* Fillter */}
        <div className="m-auto menu-section1 ">
          <div className="fitter-container1 px-3 d-flex justify-content-between align-items-center">
            <div className="filter1 h5 fw-bolder">Filters</div>
            <div className="clear-all1">Clear All</div>
          </div>
          {/* location */}
          <div className="location1">
            <div className="location-form1 mt-3">
              <Form.Group controlId="custom-select">
                <Form.Label className="mx-2 fw-bold h6">Location</Form.Label>
                <br />
                <Form.Select as="select" className="rounded-0 shadow">
                  <option className="d-none " value="">
                    location
                  </option>
                  {["1", "2", "3", "4", "5"].map((option) => (
                    <option key={option} className="options-location">
                      Option {option}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
          </div>
          {/* ********Check Box Section  */}
          <div className="mt-5 icons1">
            <div className="job-type1 mt-4">
              <Form>
                <Form.Label className='fw-bold h6'>Jop Type</Form.Label>
                {["Full Time", "Part Time", "Remot"].map((type, index) => (
                  <div key={`default-${index}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id={`default-${type}`}
                      label={type}
                    />
                  </div>
                ))}
              </Form>
            </div>

            <div className="level1 mt-4">
              <Form>
                <Form.Label className='fw-bold h6'>Level</Form.Label>
                {["Entery Level", "Intermediate", "Expert"].map(
                  (type, index) => (
                    <div key={`default-${index}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        id={`default-${type}`}
                        label={type}
                      />
                    </div>
                  )
                )}
              </Form>
            </div>
            <div className="salary-range1 mt-4">
              <Form >
                <Form.Label className='fw-bold h6'>Salary Range</Form.Label>
                {[
                  "under 4000 EGP",
                  "Between 4000 & 10000",
                  "More Than 1000EGP",
                ].map((type, index) => (
                  <div key={`default-${index}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type="checkbox"
                      id={`default-${type}`}
                      label={type}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </>
  );
};

export default MenuCheckBoxs;
