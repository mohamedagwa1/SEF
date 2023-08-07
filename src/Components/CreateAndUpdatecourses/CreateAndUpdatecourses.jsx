import { FaCloudArrowUp } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FiUploadCloud } from "react-icons/fi";
import Sidebar from "../Sidebar/Sidebar";
import { FaCirclePlus } from 'react-icons/fa6';
import TopNav_Admin from "../TopNav_admin/TopNav_Admin";


import "./CreateAndUpdatecourses.css";
export default function CreateAndUpdatecourses() {
  return (

    <>
    <TopNav_Admin/>

      <div className="create-course text-white">
        <div className=" bg-image">
          <div className="bg-layer">
            <div className="container Admin">
              <div className="row  ">
                <div className="col-lg-12 m-3 ">
                  <p
                    className="text-white line-after mb-2"
                    style={{ marginTop: "150px" }}
                  >
                    create New Course
                  </p>
                  <div className="d-flex justify-content-between  flex-lg-row ">
                    <p className="text-white mb-2 mb-lg-0">6th June 2023</p>
                  </div>
                </div>

                <div className="col-lg-3 mb-4">
                  <Sidebar />
                </div>
                <div className="col-lg-9 d-flex flex-column ">
                  <div className="section-header mt-4 mb-4" >
                    <h5 className="title_add mt-4">Add Course details</h5>
                    <button>Publish</button>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className='fw-bold'>Course Name </label>
                      <Form.Select
                        aria-label="Default select example"
                        className="form-control grey-color  "
                      >
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                      {/* <i className="drop-icon fas fa-angle-down"></i> */}
                    </div>
                    <div className="col-lg-2">
                      <label className='fw-bold'>Level </label>
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
                    <div className="col-lg-4">
                      <label className='fw-bold'>Number of Lessons</label>
                      <input
                        type="text"
                        style={{ width: "100%" }}
                        className="form-control grey-color mb-4"
                      />
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-3">
                      <label className='fw-bold'>Language</label>
                      <br></br>
                      <input
                        type="text"
                        style={{ width: "100%" }}
                        className="form-control grey-color mb-4"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className='fw-bold'>Start Date</label>
                      <br></br>
                      <input
                        type="text"
                        style={{ width: "100%" }}
                        className="form-control grey-color mb-4 "
                      />
                    </div>
                    <div className="col-md-3">
                      <label className='fw-bold'>Duration</label>
                      <br></br>
                      <input
                        type="text"
                        style={{ width: "100%" }}
                        className="form-control grey-color mb-4 "
                      />
                    </div>
                    <div className="col-md-3">
                      <label className='fw-bold'>Certificate</label>
                      <br></br>
                      <input
                        type="text"
                        style={{ width: "100%" }}
                        className="form-control grey-color mb-4 "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className='fw-bold'>Course Introduction</label>
                    <textarea className="textarea_about_company form-control grey-color mb-4" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className='fw-bold'>Course Assessment</label>
                      <textarea className="textarea_about_company form-control grey-color mb-4" />
                    </div>
                    <div className="col-lg-6">
                      <label className='fw-bold'>Course Requrirements</label>
                      <textarea className="textarea_about_company form-control grey-color mb-4" />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className='fw-bold'>Course Materials</label>
                    <textarea className="textarea_about_company form-control grey-color mb-4" />
                  </div>
                  <div className="col-lg-3">
                    <label className='fw-bold'>Publishing Date</label>
                    <br></br>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      className="form-control grey-color mb-4 "
                    />
                  </div>

                  <div className=" col-md-12 w-100 gray-color text-white mb-4">
                    <div className="col-12">
                      <div className="col">
                        <h4 className="company-logo mb-4">
                          Uploaded Cover Photo
                        </h4>

                        <div className="upload-file">
                          <FaCloudArrowUp className="upload-icon" />
                          <p className="drag-title">
                            Drag & Drop files or <span>Browse</span>
                          </p>
                          <p className="drag-text text-secondary">
                            Lorem ipsum dolor sit amet consecteturLorem ipsum
                            dolor sit amet consecteturLorem ipsum dolor sit amet
                            consecteturLorem ipsum dolor sit amet consectetur{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className='mb-3 h4'>lessons</p>
                      <div className="add-lesson">
                        <div className="d-flex justify-content-between">
                          <h4>Lesson 1 </h4>
                          <i className="fa-regular fa-trash-can main-color  m-1 hover-color icon" />
                        </div>



                        <label htmlFor="" className='fw-bold'>Title</label>
                        <div className="col-md-12">
                          {/* <br></br> */}
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            className="form-control grey-color mb-4"
                          />
                        </div>
                        <div className="col-md-12">
                          <br></br>
                          <div className="col-12">
                            <label htmlFor="" className='fw-bold'>Description</label>
                            <textarea className="textarea_about_company form-control grey-color mb-4" />
                          </div>
                        </div>
                        <label htmlFor="" className='fw-bold'>Lecture URL</label>
                        <div className="col-md-12">
                          {/* <br></br> */}
                          <input
                            type="text"
                            style={{ width: "100%" }}
                            className="form-control grey-color mb-4"
                          />
                        </div>
                      </div>


                    </div>
                    <div className="col-md-4 p-4 mt-lg-5 mb-4">
                      <p>Add Lesson <span className="main-color p-2 "><FaCirclePlus /></span> </p>
                    </div>
                  </div>
                </div>


                <div className="buttons d-flex justify-content-end mt-4">
                  <button className=" m-2 cancel">Cancel</button>

                  <button className=" m-2 save">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
