import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TopNav from '../../Components/TopNav/TopNav';
import JobShowPage from "../../Components/JobShowPage/JobShowPage";
import TopNav_student from "../../Components/TopNav-student-portal/TopNav_student";

function JobShow() {
    return (
        <div>
            {/* <TopNav/>
            <Header/> */}
            <TopNav_student />
            <JobShowPage />
            {/* <Footer/> */}

        </div>
    )
}
export default JobShow;
