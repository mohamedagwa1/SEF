import React from 'react'
import Examhead from '../../Components/pagecomponents/Examhead'
import Questions from '../../Components/pagecomponents/Questions'

import Submit from '../../Components/pagecomponents/Submit'
import "./Page_online_exam.css"
import TopNav_student from '../../Components/TopNav-student-portal/TopNav_student'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
const Page = () => {
  return (
    <div className='online-exam-page'>
        <TopNav_student/>
      <div className='page'>
          <div className="overlay">
              <div className='exam-content'>
              <Examhead/>
              <Questions/>
              <Submit/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Page
