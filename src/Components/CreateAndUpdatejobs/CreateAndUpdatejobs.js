import { FaCloudArrowUp } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FiUploadCloud } from "react-icons/fi";
import "./CreateAndUpdatejobs.css";
import Sidebar from "../Sidebar/Sidebar";
import TopNav_Admin from "../TopNav_admin/TopNav_Admin";
export default function CreateAndUpdatejobs() {
  return (

    <div className="create-job">
      <TopNav_Admin/>
      <div className=" bg-image">
        <div className="bg-layer">
          <div className="container Admin">
            <div className="row  ">
              <div className="col-lg-12 m-3 ">
                <p
                  className="text-white line-after mb-2"
                  style={{ marginTop: "150px" }}
                >
                  Create New Job
                </p>
                <div className="d-flex justify-content-between  flex-lg-row ">
                  <p className="text-white mb-2 mb-lg-0">6th June 2023</p>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <Sidebar />
              </div>
              <div className="col-lg-9 d-flex flex-column ">
                <div className="section-header mt-4 mb-4">
                  <h5 className="title_add">Add Job details</h5>
                  <button>Publish</button>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <label className="mb-2">Company Name</label>
                    <input
                      type="text"
                      className="form-control grey-color"
                    ></input>
                    <br />
                    <div className="row">
                      <div className="col-lg-6">
                        <label>Field</label>
                        <Form.Select
                          aria-label="Default select example"
                          className="form-control grey-color  "
                        >
                          <option></option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </div>
                      <div className="col-lg-6">
                        <label>Location</label>
                        <Form.Select
                          aria-label="Default select example"
                          className="form-control grey-color "
                        >
                          <option> </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="col">
                      <h4 className="company-logo">Company Logo</h4>

                      <div className="upload-file">
                        <FaCloudArrowUp className="upload-icon" />
                        <p className="drag-title">
                          Drag & Drop files or <span>Browse</span>
                        </p>
                        <p className="drag-text">
                          Lorem ipsum dolor sit amet consectetur{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <label>About Company</label>
                <textarea className="textarea_about_company form-control grey-color mb-4  " />

                <div className="row">
                  <div className="col-md-6">
                    <label>Position</label>
                    <br></br>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      className="form-control grey-color mb-4 "
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Job Type</label>
                    <br />
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      className="form-control grey-color mb-4 "
                    />
                  </div>
                  <div
                    className="col-md-3 d-flex align-items-center gap-2 radio-box"
                    style={{ padding: "30px 0" }}
                  >
                    <div className="d-flex align-items-center gap-2 ">
                      <input type="radio" name="place" id="remote" />
                      <label htmlFor="remote">Remote</label>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                      <input type="radio" name="place" id="onSite" />
                      <label htmlFor="onSite">On site</label>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <label>Salary Range</label>
                    <br></br>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      className="form-control grey-color mb-4"
                    />
                  </div>
                  <div className="col-1 text-white mb-2">
                  <br></br>
                    <h5>To</h5>
                  </div>
                  <div className="col-md-2">
                    <label>Salary</label>
                    <br></br>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      className="form-control grey-color mb-4 "
                    />
                  </div>
                  <div className="col-md-4">
                    <label>Currency</label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control grey-color "
                    >
                      <option> </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <br />
                  </div>
                  <div className="col-12">
                    <label>Job Requrenents</label>
                    <textarea className="textarea_about_company form-control grey-color mb-4" />
                  </div>
                </div>
                <div className="col-12">
                  <label>About Company</label>
                  <textarea className="textarea_about_company form-control grey-color mb-4" />
                </div>
                <p className="text-white mb-2">Skills</p>

                <div className="react-btn col-md-12 w-100 gray-color text-white mb-4">
                  <button className="btn  text-white"> Ract js</button>
                </div>
              </div>

              <div className="buttons d-flex justify-content-end mb-4">
                <button className=" m-2 cancel">Cancel</button>

                <button className=" m-2 save">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
