import React from "react";
import { Button, Container, Row,Col, ProgressBar } from "react-bootstrap";
import {FaRegCircleCheck} from 'react-icons/fa6';
import './Welcome.css';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";





function Welcome(){
   const now = 97;
   const dateString = format(
      new Date(),
      "do LLLL yyyy"
    );
    const navigate=useNavigate();

    return(
        <section className="Welcome_Student">
          <div className="overlay-welcome">
            <Container className="Date_portal">
                   <Col >
                    <p className="h5">Student Portal </p>
                    <div className="hr-welcome"></div>
                    <p>{dateString}</p>
                    </Col>

            </Container>
           <Container className="welcome-content my-3">
                    <h3>Welcome Back <strong>BALQEES SABIR</strong></h3>
                   <Button onClick={()=>navigate('/userProfilePage')}>View Profile</Button>
           </Container>

           <Container>
              <div className="dashboard-student">

                 <div className="content">
                    <span className="content-numbers">1</span>
                    <h2>Upcoming<span> Exams</span> </h2>
                 </div>
                 <div className="content md" >
                    <span className="content-numbers">4</span>
                    <h2>Registered<span> Courses</span> </h2>

                 </div>
                 <div className="content" >
                   <span className="content-numbers">2</span>
                    <h2>Completed<span> Courses</span> </h2>
                 </div>
             </div>
           </Container>

           <Container className="progress-welcome-container">
              <div className="progress-welcome">

                 <div className="content" >
                    <p>Level : 1</p>
                 </div>
                 <div className="content percentage" >
                    <p>{`${now}%`}</p>
                 </div>

             </div>
             <ProgressBar min={0} now={now}/>
           </Container>


           <Container>
              <div className="Exam-today">

                 <div className="Exam-today-content not-exist">
                    <FaRegCircleCheck className='Exam-today-icon'/>
                    <span> All Clear,you don't have any exams today.</span>
                 </div>

                 <div className="Exam-today-content exist">
                   <span >The exam topic </span>
                   <Button onClick={()=>navigate('/onlineexam')} >Go</Button>
                 </div>



             </div>
           </Container>






           </div>

        </section>
    )
}
export default Welcome;
