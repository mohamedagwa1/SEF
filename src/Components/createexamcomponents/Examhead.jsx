import React from 'react'
const Examhead = () => {
  return (
    <>
        <div className='exam-head page-container'>
            <div><span>Create Online Exam</span></div> <hr className='online-exam-line'/>
            <div><span>6th June 2023</span></div>
            <div className='exam-info'>
                <div className="left">
                <h2 className='exam-name'>Add Exam Details</h2>
                </div>
                <div className="right ">
                    <button className='head-btn'>publish</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Examhead


