import React from 'react'
import { useNavigate } from "react-router-dom";
const Submit = () => {
  const navigate=useNavigate();
  return (
    <div className='Submit'>
      <div className="btns d-flex">
        <input type="button" value="Cancel" />
        <input className='second-btn' type="button" value="Submit" onClick={()=>navigate('/examsResult')}/>
      </div>
    </div>
  )
}

export default Submit
