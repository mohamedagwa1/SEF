import React from 'react';
import './MenuJob.css';
import { Card, Button, Container, Col, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MenuJob = () => {
  return (
    <>
      <div>

        <div className="menu-job-component1 d-lg-block d-none">
          <br></br>
          {/* Fillter */}
          <div className="m-auto menu-section1 ">
            <div className="fitter-container1 p-3 d-flex justify-content-between align-items-center">
              <div className="filter1 h5 fw-bold">Filter</div>
              <div className="clear-all1">Clear All</div>
            </div>


            <div className="location1">
              <div className="location1 fw-bold">Location</div>
              <div className="location-form1 mt-3">
                <Form.Group controlId="custom-select">
                  <Form.Label>Location</Form.Label>
                  <br />
                  <Form.Select as="select" className="rounded-0 shadow text-white select-sidebar">
                    <option className="d-none " value="">
                      Cairo
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
              <div className="job-type1">
                <Form>
                  <Form.Label className='fw-bold'>Jop Type</Form.Label>
                  {["Full Time", "Part Time", "Remot"].map(
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
            </div>
            <div className="level1">
              <Form>
                <Form.Label className='fw-bold'>Level</Form.Label>
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
            <div className="salary-range1">
              <Form>
                <Form.Label className='fw-bold'>Salary Range</Form.Label>
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
        <Link to="/createcv">
          <Button variant="" className="Default-bg text-white mt-4 w-100  hover-bg-color transition mt-4 d-lg-block d-none">
            Create your cv</Button>
        </Link>
      </div>

    </>
  )
}
export default MenuJob;
