import React from 'react';
import Examhead from '../../Components/createexamcomponents/Examhead';
import Formone from '../../Components/createexamcomponents/Formone';
import Questionsection from '../../Components/createexamcomponents/Questionsection';
import Submit from '../../Components/createexamcomponents/Submit';
import './CreateExamPage.css';
import TopNav_instructor from '../../Components/TopNav-instructor-portal/TopNav_instructor';

const CreateExamPage = () => {
  return (

    <div className='create-exam-page'>
           <TopNav_instructor/>
        <div className='overlay'>

          <Examhead/>
          <Formone/>
          <Questionsection/>
          <Submit/>
        </div>
    </div>
  )
}

export default CreateExamPage;
