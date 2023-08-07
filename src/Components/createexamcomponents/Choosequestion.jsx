import React from 'react'
import { FaPlus, FaTrashCan } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { addOption, delOption, setOption } from '../../redux/reducers/questionsReducer';

const Choosequestion = ({ id }) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.items);
  return (
    <>
      {/* <div className="row choose-group">
            <div className="col-12 col-lg-8">
              <div>
                  <div className="inputitem">
                      <label for="basic-url" className="form-label">Option</label>
                      <input type="text" className=" item mt-3" />
                  </div>
              </div>
            </div>
            <div className="col-4" id='answer-icons'>
              <FaTrashCan className='icon '/>
            </div>
        </div> */}
      {questions[id].options.map((option, i) => (
        <div className="row choose-group">
          <div className="col-12 col-lg-8">
            <div>
              <div className="inputitem">
                <label for="basic-url" className="form-label">Option</label>
                <input type="text" value={option}
                  onChange={(e) => { dispatch(setOption({ id: id, i: i, option: e.target.value })); }}
                  className=" item mt-3" />
              </div>
            </div>
          </div>
          <div className="col-4" id='answer-icons'>
            <FaTrashCan onClick={(e) => { dispatch(delOption({ id: id, i: i })); }}
              className='icon' />
            {questions[id].options.length == (i + 1) && <FaPlus onClick={(e) => { dispatch(addOption({ id: id })); }}
              className='icon plus' />}
          </div>
        </div>
      ))}
    </>
  )
}

export default Choosequestion