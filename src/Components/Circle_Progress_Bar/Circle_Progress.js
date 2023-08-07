import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import './Circle_Progress.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Circle_Progress() {
    const percentage = 66;

    const data = [
        {
            id: 1,
            courseName: 'Introduction To React Js',
            percentage: 66,
            level: 'LEV.1',
            hours: '29',
        },
        {
            id: 2,
            courseName: 'Introduction To Node Js',
            percentage: 55,
            level: 'LEV.2',
            hours: '25',
        },
        {
            id: 3,
            courseName: 'Introduction To Angular',
            percentage: 40,
            level: 'LEV.5',
            hours: '27',
        },
        {
            id: 4,
            courseName: 'Introduction To Analysis',
            percentage: 77,
            level: 'LEV.7',
            hours: '22',
        },
    ]

    return (
        <section className="Circle_Progress">
            <Container>
                <h4>Here's how you've been doing for the <span>last month</span> </h4>
                <div className="Progress">

                    {data.map((course) => {
                        return (
                            <div className="progress-one" key={course.id}>
                                <div className="circle-first"> <CircularProgressbar className="circle_big" value={course.percentage} />
                                    <div className="progress-div">
                                        <CircularProgressbar className="circle" value={course.percentage} text={`${course.percentage}%`} />
                                    </div>
                                </div>
                                <div className="content-course">
                                    <p className="course_name">{course.courseName}</p>
                                    <p className="Lev-p">{course.level}</p>
                                    <p>{course.hours} / 30 Hours</p>
                                </div>
                            </div>
                        )
                    })}






                </div>

            </Container>

        </section>
    )
}
export default Circle_Progress;
