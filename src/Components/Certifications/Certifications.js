import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Certifications.css'

function Certifications() {

    const data = [
        {
            id: 1,
            courseName: 'Introduction To React Js',
            instructor: "Traiq Ali",
            DateAcquired: 'Monday, June 5th',
        },
    
    ]


    return (
        <section className="Certifications">
            <Container>
                <h2>Earned Certificates</h2>


                {data.map((course) => {
                    return (
                        <div className="certification-download">
                            <div className="certification-content">
                                <p className='h4'>{course.courseName}</p>
                                <div className="instructor-date">
                                    <p><strong>Instructor </strong>: {course.instructor}</p>
                                    <p><strong>Date Acquired </strong>: {course.DateAcquired}</p>
                                </div>
                            </div>
                            <Button className="btn-download">Download</Button>
                        </div>
                    )
                })}





            </Container>


        </section>
    )
}
export default Certifications;
