import React from 'react'
import photo from "../../assets/images/main_background.jpg"
const Questions = () => {
  return (
    <div className='Questions'>
        <div className='question'>
          <p>Question 1</p>
          <h2 className='question-header'>Chose the right option out the following :</h2>
          <div className="choose">
            <p className='choose-item'>A : </p>
            <p className='choose-item'>B : </p>
            <p className='choose-item'>C : </p>
          </div>
          <div className='marks'><p>2 Marks</p></div>
        </div>
        <div className='question'>
          <p>Question 1</p>
          <h2 className='question-header '>Chose the right option out the following :</h2>
          <div className="img ">
            <img src={photo} alt="photo" />
          </div>
          <div className="choose ">
            <p className='choose-item'>A : </p>
            <p className='choose-item'>B : </p>
            <p className='choose-item'>C : </p>
          </div>
          <div className='marks '><p>2 Marks</p></div>
        </div>
    </div>
  )
}

export default Questions
