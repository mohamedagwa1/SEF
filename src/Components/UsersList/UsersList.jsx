import React, { useState } from "react";
import Sidebarmobile from "../Sidebarmobile/Sidebarmobile";
import "../../StyleForAllComponents/StyleForAllComponents.css";
import { Dropdown, NavDropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default function UsersList() {
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

      <div className="admin-list container text-white">
        <div className="col">
          {/* Header && Seacrch */}
          <div className="d-flex flex-column  justify-content-between  flex-lg-row  mt-5 ">
            <h4 className="text-white line-after d-none d-md-block  font-s-20">
              Users 
            </h4>
            <Sidebarmobile />

            <div className="search-container  d-flex flex-md-row d-lg-block d-none">
              <input
                className="search text-white  "
                
                type="text"
                placeholder="Search in Users"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <i class="fa-solid fa-magnifying-glass search-icon main-color "></i>
              {/* <i className="fa-solid fa-magnifying-glass search-icon main-color fa-l d-none d-md-block" /> */}
            </div>

            <Dropdown className="w-100 d-lg-none down d-block mb-4  ">
              
              <Dropdown.Toggle
                variant="secondary"
                className=" d-flex drop-down-bg  font-s-20 pt-3 pb-3 "
                id="dropdown-basic"

              >
                Users
                <span className="text-end">
                  <i class="fa-solid fa-chevron-down search-icon p-3 "></i>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="text-white font-s-18"  >
                    
                  Admins
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2 " className="text-white font-s-18">
                  Editors
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="text-white font-s-18">
                Instructors
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/StudentUsers"  className="text-white font-s-18">
                Students
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>

          {/* Article List */}

          <div className="col text-white mt-4  ">
            {/* <div className=""> */}
            <div className="w-100 my-2 d-none d-lg-block  d-flex justify-content-between">
              <div className="row p-3">
                <div className="col-lg ">Name</div>
                <div className="col-lg">Status</div>
                <div className="col-lg">Role</div>
                <div className="col-lg">User Id</div>
                <div className="col-lg">Email</div>
                <div className="col-lg" />
                {/* </div> */}
              </div>
            </div>
            {/* .filter((item) => {
              return Search.toLowerCase() === ""
                ? item
                : item.id.toLowerCase().includes(Search);
            }) */}
            {/* Article Items */}
            {records.map((items, index) => (
              <div
                key={index}
                className=" col my-2  w-100  d-flex justify-content-between p-2  "
              >
                <div className="w-100 ">
                  <div className="row Black-div p-3 mb-4 align-items-center">
                    <div className="col-6 d-md-block d-lg-none fw-bold ">
                      Name{" "}
                    </div>
                    <div className="col-lg col-6 text-end d-block d-lg-none">
                      <button className=" rounded-btn btn Default-bg text-white mb-2 hover-bg-color">
                        Active
                      </button>
                    </div>

                    <div className="col-lg col-md-12">
                      Here's the Username
                    </div>
                    <div className="col-lg col-6  d-none d-lg-block">
                      <button className="rounded-btn btn Default-bg text-white mb-2 hover-bg-color">
                        Active
                      </button>
                    </div>
                    <div className="col-6 d-md-block d-lg-none  mb-1 fw-bold ">
                      Role
                    </div>
                    <div className="col-6 d-md-block d-lg-none  mb-1 fw-bold ">
                      User Id
                    </div>
                    <div className="col-lg col-6">Student</div>

                    <div className="col-lg col-6">FE -2303</div>

                    <div className="col-12 d-md-block d-lg-none  mb-1 fw-bold">
                      Email
                    </div>
                    <div className="col-lg ">user@gmail.com</div>
                    <div className="col-lg col-md-12 text-end">
                      <i className="fa-regular fa-pen-to-square main-color fa-xl m-1 hover-color icon" />
                      <i className="fa-regular fa-trash-can main-color fa-xl m-1 hover-color icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <button className="rounded-btn btn Disabled-bg text-white">
                      Inactive
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
                      CurrentPage === num ? { borderColor: "#BF9B30" } : {}
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
