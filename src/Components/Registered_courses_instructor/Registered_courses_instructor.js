import React from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
import './Registered_courses_instructor.css';
import {FaRegClock,FaRegPenToSquare,FaRegUser} from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";
function Registered_courses_instructor(){
  const navigate=useNavigate();
  const time = new Date(2023, 7, 5, 22, 31);
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const nthNumber = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
const data = [
  {
    id : 1,
    courseName: 'Introduction To React Js',
    noStudent:20,
    level:'LEV.1',
  },
  {
    id : 2,
    courseName: 'Introduction To JS',
    instructor:"Rana Ali",
    noStudent:30,
    level:'LEV.2',
  },

]
    return(
        <section className="Registered_courses">
            <Container>
                <div className="Courses-exam">
                <div className="courses">
                <h2>Ongoing Courses</h2>
               { data.map((course)=>{
                return(
                  <div className="course" key={course.id}>
                  <h2>{course.courseName}</h2>

                  <div className="level-btn">
                    <h2>{course.level}</h2>
                    <div className="icon-instructor">
                    <FaRegUser className="instructor-user"/>
                    <span>{course.noStudent}</span>
                    </div>
                    <Button onClick={()=>navigate('/CourseShowPageEnrolled')}>View Details</Button>
                  </div>
               </div>
                )
               })}
                </div>
                <div className="U-exams ">
                  <div className="d-flex">
                  <h2>Upcoming Exams</h2>
                  <Button className="exam1"  onClick={()=>navigate('/createexampage')}>Create New</Button>
                  </div>

                <div className="exam">
                    <div className="date-exam">
                      <p className="first-p">{time.getDate()}{nthNumber(time.getDate())}</p>
                      <p className="second-p">{month[time.getMonth()]}</p>
                      <p className="day">{weekday[time.getDay()]}</p>
                    </div>
                    <div className="course-exam">
                     <div className="edit-instructor">
                    <h2>Introduction to React js</h2>
                    <FaRegPenToSquare className="edit-icon"/>
                    </div>
                    <p><strong>Instructor</strong> : Traiq Ali</p>
                   <div className="level-icon">

                     <h2>Lev. 1Exam</h2>
                     <div className="exam-time">
                     <FaRegClock className="icon-exam "/>
                     <span>{formatAMPM(time)}</span>
                     </div>
                   </div>
                   </div>
                </div>
                </div>
                </div>





            </Container>


        </section>
    )
}
export default Registered_courses_instructor;
