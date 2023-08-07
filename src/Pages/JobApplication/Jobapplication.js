import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TopNav from '../../Components/TopNav/TopNav';
import JobApp from "../../Components/Job Appliction/JobApp";
import TopNav_student from "../../Components/TopNav-student-portal/TopNav_student";

function JobApplication() {
    return (
        <div>
            <TopNav_student />
            <JobApp />


        </div>
    )
}
export default JobApplication;
