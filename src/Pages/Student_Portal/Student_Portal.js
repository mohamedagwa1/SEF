import React from "react";
import Welcome from "../../Components/Welcome/Welcome";
import TopNav_student from '../../Components/TopNav-student-portal/TopNav_student';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Registered_courses from "../../Components/Registered-courses/Registered_courses";
import Certifications from "../../Components/Certifications/Certifications";
import Circle_Progress from "../../Components/Circle_Progress_Bar/Circle_Progress";

function Student_Portal() {
    return (
        <div className="std-portal">
            <TopNav_student />
            <Welcome />
            <Registered_courses />
            <Circle_Progress />
            <Certifications />


        </div>
    )
}
export default Student_Portal;
