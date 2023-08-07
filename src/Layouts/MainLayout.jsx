import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../src/Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function MainLayout() {
  return (
    <>
    {/* <Background/> */}
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}
