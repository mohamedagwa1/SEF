import React from 'react'
import Choosequestion from './Choosequestion';
import Shortanswer from './Shortanswer';
import { useSelector } from 'react-redux';
const Questionitem = ({id}) => {
  const questions =useSelector((state)=>state.questions.items);

    if(questions[id]?.type=="Short-Answer"){
        return(<Shortanswer id={id}/>)
      }else{
        return(<Choosequestion id={id}/>)
      }
}

export default Questionitem