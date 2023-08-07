import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import TopNav from '../../Components/TopNav/TopNav';
import ExsamResults from "../../Components/ExsamResults/ExsamResults";
import TopNav_student from "../../Components/TopNav-student-portal/TopNav_student";

function JobShow() {
    return (
        <div>
            {/* <TopNav/>
            <Header/> */}
            <TopNav_student />
            <ExsamResults />
            {/* <Footer/> */}

        </div>
    )
}
