import React from 'react'
import { setShortanswer } from '../../redux/reducers/questionsReducer';
import { useDispatch, useSelector } from 'react-redux';

const Shortanswer = ({id}) => {
  const questions =useSelector((state)=>state.questions.items);
  const dispatch = useDispatch();
  return (
    <>
        <div className="mt-4 ">
            <label for="basic-ul" className="form-label">Answer</label>
                <div>
                    <textarea onChange={(e)=>{dispatch(setShortanswer({id:id,shortanswer:e.target.value}));}} 
                    value={questions[id].shortanswer}
                    className="forminput item area-item" id="basic-ul"  />
                </div>
        </div>
    </>
  )
}

export default Shortanswer