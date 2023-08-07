import React from "react";
import Title from "../../../Components/Title/Title";
import { Button, Nav, Stack } from "react-bootstrap";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Users from "../../../Components/UsersList/UsersList";
import { Link } from "react-router-dom";
import AdminPanelTitle from "../../../Components/AdminPanelTitle/AdminPanelTitle";

export default function Userspage() {
  return (
    <>
    <div className="admin-panel">
        <div className=" bg-image" >
        <div className="bg-layer">
      <div className="container">
        <Stack direction="horizontal" gap={2}>
          <div className="">
          <AdminPanelTitle/>
          </div>
          <div className="p-3 ms-auto">

            <button
              className="btn Default-bg text-white   hover-bg-color transition d-lg-block d-none"
              style={{ marginTop: "250px" }}
            >
                          <Link to='/CerateUpdateUser'  className="nav-link">

              CREATE NEW USERS
              </Link>

            </button>
          </div>
        </Stack>
        <div className="row pt-5">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col">
            <Users />
          </div>
        </div>
      </div>

      <div className="container ">
        <Stack gap={2} className=" mx-auto d-block d-lg-none ">
          <Button variant="" className="Default-bg text-white hover-bg-color transition w-100 mb-4" >
          <Link to='/CerateUpdateUser'  className="nav-link">

            CREATE NEW User
            </Link>
          </Button>

          <Button variant="" className="text-white main-border-color mb-4 hover-bg-color transition w-100">
          <Link to='/UplaodCertifiacte'  className="nav-link">

            Upload Certificates
            </Link>

          </Button>
        </Stack>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
