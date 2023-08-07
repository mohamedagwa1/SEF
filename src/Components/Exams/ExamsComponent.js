import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faClock } from '@fortawesome/free-solid-svg-icons';
import { ExamsData } from './ExamsData/ExamsData';
import PaginationContainer from '../PaginationForPages/Pagination';
import usePaginationDetails from '../CustomHooks/PaginationDetails';
import './Exams.css';
import { useNavigate } from "react-router-dom";
import TopNav_student from '../TopNav-student-portal/TopNav_student';

const ExamsComponent=()=> {
    const navigate=useNavigate();
    const paginationData=usePaginationDetails(4,ExamsData);
    return (
        <>

            <section className='exams-component text-light pt-5 position-relative  '>

                <div className="overlay  "></div>
                <div className="container p p-4">
                    <h2 className='title'>Exams</h2>
                    {/* <div className="line"></div> */}
                    <p className='mt-2 mb-5'>6th june 2023</p>
                    <div className="upcumming-exam pt-3 mb-5">
                        <h2 className='pt-2 pb-2 h5 fw-bold'>Upcomming Exams</h2>
                        <div className='upcomming-det'>
                            <div className="row  p-md-1 p-2 align-items-center">
                                <div className="col-lg-3 col-12">
                                    <div className='d-flex align-items-center'>
                                        <FontAwesomeIcon icon={faCalendarPlus} className='icon me-2 ' />
                                        <span>Wednesday,june 7th</span>
                                    </div>
                                    <div className='mt-2 d-flex align-items-center'>
                                        <FontAwesomeIcon icon={faClock} className='icon me-2 ' />
                                        <span>12:30 PM</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-2">
                                    <span className='mt-2 h5 fw-bold'>Introduction To Data Analysis</span>
                                    <p className='mt-2 '><span className='instructor_span '>Instructor:</span>Mohamed Omar</p>
                                </div>
                                <div className='col-lg-2 col-12 d-flex justify-content-between  '>
                                    <div className=" lev p-2">
                                        <h2 className='h4 fw-bold'>LEV.1</h2>
                                    </div>
                                    <div className=" na p-2">
                                        <h2 className='h6'>NA</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12 p-2">
                                    <button className='btn btn-secondary ' onClick={()=>navigate('/onlineexam')}>JOIN EXAM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="prev-exam mt-4">
                        <h2 className='pb-2 h5 fw-bold'>Previous Exams</h2>
                    {ExamsData.length && ExamsData.slice(paginationData.pageClick,paginationData.pageClick+paginationData.perPage).map((exam)=>{
                        return (
                        <div key={exam.id} className='upcomming-det my-3'>
                            <div className="row p-md-0 p-2 align-items-center">
                                <div className="col-lg-3 col-12">
                                    <div className='d-flex align-items-center'>
                                        <FontAwesomeIcon icon={faCalendarPlus} className='icon me-2' />
                                        <span>{exam.date}</span>
                                    </div>
                                    <div className='mt-2 col-12 d-flex align-items-center'>
                                        <FontAwesomeIcon icon={faClock} className='icon me-2' />
                                        <span>{exam.time}</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <span className='mb-1 h5 fw-bold'>{exam.courseName}</span>
                                    <p className='mt-1 fw-light'><span className='instructor_span '>Instructor:</span>{exam.instructor}</p>
                                </div>
                                <div className='col-lg-2 d-flex justify-content-between  '>
                                    <div className=" lev p-2">
                                        <h2 className='h4 fw-bold'>{exam.level}</h2>
                                    </div>
                                    <div className=" na p-2">
                                        <h2 className='h6'>{exam.degree}</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <button className='btn btn-secondary d-none finish-btn'>FINISHED</button>
                                </div>
                            </div>
                        </div>
                    )
                    })}

                </div>
                <PaginationContainer pageCount={paginationData.pageCount} changePage={paginationData.changePage}
                paginatateClass='paginateForAdminPanel'
                />
                </div>
          </section>
          </>
    )
}
export default ExamsComponent;
