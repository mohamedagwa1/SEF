import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendarWeek ,faClock} from '@fortawesome/free-solid-svg-icons';

const Examhead = () => {
  return (
    <>
        <div className='exam-head'>
            <div><span>Online Exam</span></div> <hr className='online-exam-line'/>
            <div><span>6th June 2023</span></div>
            <div className='exam-info'>
                <div className="left">
                <h2 className='exam-name'>Introduction to React JS</h2>
                <div><span>Lev.1,20 Marks</span></div>
                <div><span className='instructor '>Instructor : </span><span >  Tariq Ali</span></div>
                </div>
                <div className="right ">
                    <div className='first'>
                        <div className='right-icon'><FontAwesomeIcon icon = {faCalendarWeek}  /></div>
                        <div>
                            <p>Date</p>
                            <p>Monday,June 5th</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='right-icon'><FontAwesomeIcon icon = {faCalendarWeek}  /></div>
                        <div>
                            <p>Time</p>
                            <p>12:30 PM</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='right-icon'><FontAwesomeIcon icon = {faCalendarWeek}  /></div>
                        <div>
                            <p>Duration</p>
                            <p>1 Hour</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bar">
                <p className='progress-timer'>55:00</p>
                <div class="progress" id='progress'>
                    <div class="progress-bar" id='progress-bar' style={{width: 95 +'%'}} ></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Examhead


