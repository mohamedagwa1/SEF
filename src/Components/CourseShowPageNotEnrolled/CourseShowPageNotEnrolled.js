import React, { useState } from "react";
import './CourseShowPageNotEnrolled.css';
import Accordion from "./Accordion/Accordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuildingColumns, faFileLines, faUser,faMessage} from '@fortawesome/free-solid-svg-icons';
import {faBusinessTime} from '@fortawesome/free-solid-svg-icons';
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

const CourseShowPageNotEnrolled = () => {
    const [isEnrolled, setIsEnrolled] = useState(false)
    
    return(
        <div className=" bg-image"  >
        <div className="bg-layer" >
        <div className="container CourseShowPageNotEnrolled"> 
         <h5 className="course- text-white line-after mb-3">Tech</h5>
            <h2 className="course text-white">Python ourse</h2>
            <p className="instrusctor color-yellow mb-3"><strong>Instructor:</strong><span className="text-white ms-2">Mohamednour</span></p>
          <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-7 mb-5">
                        <img src="https://placehold.co/1000x500"/>
                        <h3 className="mb-3 mt-5 intro text-white">Introduction</h3>
                        <p className="text-white" style={{letterSpacing: "1.5px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="details">
                            <div className="row">
                                <div className="col-5 item">
                                    <p>
                                        <FontAwesomeIcon className="icon" icon={faFileLines}/>
                                    </p>
                                    <div className="d-flex flex-column text-white">
                                        <p >lessons</p>
                                        <span className="text-white">12</span>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-5 item">
                                    <p>
                                        <FontAwesomeIcon className="icon" icon={faBuildingColumns}/>
                                    
                                    </p>
                                    <div className="d-flex flex-column text-white">
                                        <p>Layout</p>
                                        <span className="text-white">Progress</span>
                                    </div>
                                </div>
                                  
                            </div>
                        </div>

                        <div className="lesson text-white">
                            <p><FontAwesomeIcon className="icon" icon={faUser}/><strong>Student: <span className="value"> 20</span></strong></p>
                            <p><FontAwesomeIcon className="icon" icon={faMessage}/><strong>Language: <span className="value"> arabic</span></strong></p>
                            <p><FontAwesomeIcon className="icon" icon={faBusinessTime} /><strong>Duration: <span className="value"> 13 hours</span></strong></p>
                        <p><FontAwesomeIcon className="icon" icon={faCalendarCheck} /><strong>Startdate: <span className="value"> Wednesday, 7june</span></strong></p>
                            {
                                isEnrolled ? (
                                    <button className="enrolls-btn enrolled " onClick={()=> setIsEnrolled(false)} >Enrolled</button>
                                ) : (
                                    <button className="enrolls-btn" onClick={()=> setIsEnrolled(true)}>Enroll</button>
                                )
                            }
                        </div>
                           
                    </div>
                </div>
            </div>
            <div className="col-md-7 order-3 order-md-1 text-white">
               
               <h3  className="mt-3 mb-5 text-white">Lessons</h3>

                <Accordion questions={questions} />
            </div>
            <div className="col-md-1 order-2"></div>
            <div className="col-md-4 order-1 order-md-3">
            <div className="paragroup">
                <div className="par1 mb-5">
                    <h3 className="title">Assement</h3>
                    <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry, 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </p>
                </div>
                <div className="par2 mb-5">
                    <h3 className="title">Requirements</h3>
                    <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry,
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </p>
                </div>
                <div className="par3">
                    <h3 className="title">Materials</h3>
                    <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry,
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




export default CourseShowPageNotEnrolled;
