import React from "react";
import './CourseShowPageEnrolled.css';
import Accordion from "./Accordion/Accordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faFileLines, faUser, faMessage,faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';




const questions = [
    {
        id: 1,
        title: "introduction to python",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s"
    },
    {
        id: 2,
        title: "functions",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
    },
    {
        id: 3,
        title: "arrays",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
]

const CourseShowPageEnrolled = () => {
    return (

<div className=" bg-image"  >
     <div className="bg-layer " >
        <div className="container CourseShowPageEnrolled  ">
            <div className="row">
            <h1 className="course-name mt-5 text-white">Tech</h1>
            <h2 className="course mt-3 text-white">Python ourse</h2>
            <p className="instrusctor">Instructor:<span>Mohamednour</span></p>
                <div className="col-md-7">
                    <img src="https://placehold.co/1000x350" />
                    <h3 className=" text-white">Introduction</h3>
                    <p className="para-course">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s</p>
                    <h3 className=" text-white">Lessons</h3>

                    <Accordion questions={questions} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="details">
                        <div className="row d-flex">
                            <div className="col-6 item">
                                <p><FontAwesomeIcon className="icon" icon={faFileLines} /></p>
                                <div className="d-flex flex-column">
                                    <p>lessons</p>
                                    <span>12</span>
                                </div>
                            </div>
                            {/* <div className="col-2"></div> */}
                            <div className="col-5 item">
                                <p><FontAwesomeIcon className="icon" icon={faBuildingColumns} /></p>
                                <div className="d-flex flex-column">
                                    <p>Layout</p>
                                    <span>Progress</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lesson">
                        <p><FontAwesomeIcon className="icon" icon={faUser} /><span>Student: <span className="value">20</span></span></p>
                        <p><FontAwesomeIcon className="icon" icon={faMessage} /><span>Language: <span className="value">arabic</span></span></p>
                        <p><FontAwesomeIcon className="icon" icon={faBusinessTime} /><span>Duration: <span className="value">13 hours</span></span></p>
                        <p><FontAwesomeIcon className="icon" icon={faCalendarCheck} /><span>Startdate: <span className="value">Wednesday, 7june</span></span></p>
                        <button className="enrolls">Enroll</button>
                    </div>
                    <div className="paragroup">
                        <div className="par1">
                            <h3 className="title">Assement</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </p>
                        </div>
                        <div className="par2">
                            <h3 className="title">Requirements</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </p>
                        </div>
                        <div className="par3">
                            <h3 className="title">Materials</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </div>
    )
}

// save




export default CourseShowPageEnrolled;
