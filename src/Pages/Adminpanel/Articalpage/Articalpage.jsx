import React from "react";
// import { NavLink } from "react-router-dom";
import "./Articalpage.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Article from "../../../Components/ArticleList/ArticleList";
// import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import AdminPanelTitle from "../../../Components/AdminPanelTitle/AdminPanelTitle";
import { Link } from "react-router-dom";
// import Pagination from "../../../components/Pagination/Pagination";
// import backgroundImage from '../../../assets/images/secondary_background.jpg';

export default function Articalpage() {
  return (
    <>
    <div className="admin-panel">
    <div className=" bg-image"  >
        <div className="bg-layer" >
          
      <div className="container ">
        <Stack direction="horizontal" gap={2}>
          <div className="">
            <AdminPanelTitle/>
          </div>
          <div className="p-3 ms-auto">
          <button
              className="btn Default-bg text-white   hover-bg-color transition d-lg-block d-none"
              style={{ marginTop: "250px" }}
            >
                          <Link to='/CreateNewsArticlePage'  className="nav-link">

              CREATE NEW ARTICLE
              </Link>

            </button>
          </div>
        </Stack>
        <div className="row pt-5">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col">
            <Article />
          </div>
        </div>
        {/* <div className="col">
            <Pagination/>
          </div> */}
      </div>

      <div className="container ">
        <Stack gap={2} className="col  mx-auto d-block d-lg-none">
          <Button variant="" className="Default-bg text-white  hover-bg-color transition mb-4 w-100">
          <Link to='/CreateNewsArticlePage'  className="nav-link">

            CREATE NEW ARTICLE
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
