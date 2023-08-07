import React from "react";
import Welcome_Instructor from "../../Components/Welcome_Instructor/Welcome_Instructor";
import TopNav from '../../Components/TopNav-instructor-portal/TopNav_instructor';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Upcoming_courses from '../../Components/Upcoming_courses/Upcoming_courses'
import Registered_courses_instructor from "../../Components/Registered_courses_instructor/Registered_courses_instructor";


function Instructor_Portal(){
 return(
    <div>
        <TopNav/>
        <Welcome_Instructor/>
        <Registered_courses_instructor/>
        <Upcoming_courses/>


    </div>
 )
}
export default Instructor_Portal;
