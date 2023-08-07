import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'
const Questionsection = () => {
const questions =useSelector((state)=>state.questions.items);
console.log(questions);
  return (
    <div>
        {
        questions.length >0 ? questions.map((question,i)=> (<Question i={i} question={question}/>))
        :"there is no questions"
        }
    </div>
  )
}

export default Questionsection