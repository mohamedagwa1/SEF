import React, { useState } from "react";
import Sidebarmobile from "../Sidebarmobile/Sidebarmobile";
import "../../StyleForAllComponents/StyleForAllComponents.css";
import { NavDropdown } from "react-bootstrap";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [Search, setSearch] = useState("");
  const [Data, setData] = useState(Array.from({ length: 100 }));
  console.log(Search);
  const [CurrentPage, setCurrentPage] = useState(1);
  const recordsPerPages = 6;
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
      <div className="container text-white">
        <div className="col">
          {/* Header && Seacrch */}
          <div className="d-flex flex-column  justify-content-between  flex-lg-row  mt-5">
            <p className="text-white line-after d-none d-md-block font-s-20">Courses</p>

            <Sidebarmobile />

            <div className="search-container  d-flex flex-md-row d-lg-block d-none ">
              <input
                className="text-white  "
                id="search"
                type="text"
                placeholder="Search in Courses"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <i class="fa-solid fa-magnifying-glass search-icon main-color "></i>
            </div>

            <div className="drop-down-bg p-3 mb-4 rounded  d-lg-none d-block ">
              <NavDropdown
                title={
                  <span className="text-white text-center font-s-20 fw-bold ">
                    Courses
                    <span className="text-end">
                      <i class="fa-solid fa-chevron-down search-icon  "></i>
                    </span>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  to="course1"
                  className="text-white mt-4 "
                >
                  Published Courses
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="course2"
                  className="text-white"
                >
                  Scheduled Courses
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="course3"
                  className="text-white"
                >
                  Save Drafts
                </NavDropdown.Item>
              
              </NavDropdown>
            </div>
          </div>


          {/* Article List */}

          <div className="col text-white w-100 mt-4 ">
            <div className="my-2 d-none d-lg-block ">
              <div className="w-100">
                <div className="row p-3">
                  <div className="col-lg ">Title</div>
                  <div className="col-lg">Status</div>
                  <div className="col-lg">Insructor</div>
                  <div className="col-lg">Level</div>
                  <div className="col-lg"  >
                    Start date
                  </div>
                  <div className="col-lg">PublishedOn</div>
                  <div className="col-lg" />
                </div>
              </div>
            </div>
            {/* .filter((item) => {
              return Search.toLowerCase() === ""
                ? item
                : item.id.toLowerCase().includes(Search);
            }) */}
            {/* Article Items */}
            {records.map((items, index) => (
              <div key={index} className="my-2  p-2  " >
                <div className="w-100">
                  <div className="row Black-div p-3 mb-4">
                    <div className="col-6 d-md-block d-lg-none fw-bold ">Course name </div>
                    <div className="col-lg col-6 text-end d-block d-lg-none">
                      <button className=" rounded-btn btn Default-bg text-white mb-2 hover-bg-color">
                        On Going
                      </button>
                    </div>

                    <div className="col-lg col-md-12 mb-4">Here's the Course</div>

                    <div className="col-lg d-none d-lg-block ">
                      <button className="rounded-btn btn Default-bg text-white mb-2 hover-bg-color">
                      On Going
                      </button>
                    </div>

                    <div className="col-6 d-md-block d-lg-none  mb-1 fw-bold ">
                      instructor
                    </div>
                    <div className="col-6 d-md-block d-lg-none  mb-1 fw-bold ">
                      level
                    </div>
                    <div className="col-lg col-6  mb-4">Mohamed Ali</div>
                    <div className="col-lg col-6  mb-4">1</div>
                    <div className="col-6 d-md-block d-lg-none  mb-1 fw-bold ">
                      Duration 
                    </div>
                    <div className="col-6 d-md-block d-lg-none  mb-1 fw-bold ">
                      Published
                    </div>
                    <div className="col-lg col-6">
                      Monday, june 5th
                    </div>
                    <div className="col-lg col-6 ">
                      Monday, june 5th <br></br> 12:30pm
                    </div>
                    <div className="col-lg col-md-12 text-end">
                      <i className="fa-regular fa-pen-to-square main-color fa-xl m-1 hover-color icon" />
                      <i className="fa-regular fa-trash-can main-color fa-xl m-1 hover-color icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <button className="rounded-btn btn Disabled-bg text-white">
                        Ended
                    </button> */}

            {/* Pagination */}
            <div className="row mt-3 mb-3">
              <div className="col text-end">
                <i
                  className="fa-solid fa-circle-chevron-left main-color fa-xl hover-color icon"
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
                      CurrentPage === num ? { borderColor: "#FED049" } : {}
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

            {/* End of Pagination */}
          </div>
        </div>
      </div>
    </>
  );
}
