import React from 'react'
import Questionitem from './Questionitem'
import { setQuestion,setMark, setType } from '../../redux/reducers/questionsReducer'
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, deleteQuestion,setId } from '../../redux/reducers/questionsReducer'
import{FaCloudArrowUp, FaPlus, FaTrashCan}from 'react-icons/fa6';
const Question = ({question,i}) => {
const dispatch = useDispatch();
dispatch(setId({id:`${i}`}));
const id = question.id;
const questions =useSelector((state)=>state.questions.items);
  return (
    <div key={question.id}>
        <div className='page-container '>
        <div className="row">
                <div className="col-12 col-lg-10 question">
                    <div className='form frame'>
                        <div className="row item-group">
                            <div className="col-12 col-lg-9">
                                    <div className="inputitem mt-4">
                                        <label for="basic-url" className="question-number form-label">{"Question "+(i+1)}</label>
                                        <FaTrashCan onClick={()=>{
                                                if(i>0){
                                                    dispatch(deleteQuestion({id:question.id}));
                                                    setTimeout( function(){window.scrollBy(0, -600);}, 300);}
                                                }}
                                        className='icon mobile-icon edit-btn'/>  
                                        <input onChange={(e)=>{dispatch(setQuestion({id:`${id}`,question:e.target.value}));}} 
                                            value={questions[i].question}
                                            type="text" 
                                            className=" item" />
                                    </div>
                            </div>
                            <div className="col-12 col-lg-3 ">
                                <div className="inputitem mt-4 ">
                                    <label for="basic-url" className="form-label">Mark</label>
                                        <input onChange={(e)=>{dispatch(setMark({id:`${id}`,mark:e.target.value}));}} 
                                                value={questions[i].mark}
                                                type="text" 
                                                className="item" />
                                </div>
                            </div>
                        </div>
                        <div className="row item-group">
                            <div className="col-12 col-lg-6">
                                    <div className='inputitem mt-4'>
                                        <label className="form-label" >Question Type</label>
                                        <select onChange={(e)=>{dispatch(setType({id:`${id}`,type:e.target.value}));}} 
                                        value={questions[i].type}
                                        className="item select-item">
                                            <option value="Multiple-chice">Multiple choices</option>
                                            <option value="Short-Answer" >Short Answer</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className='inputitem mt-4'>
                                    <label className="form-label">Image Upload</label>
                                    <div className=" group" >
                                        <span className="icon aftericon">
                                        <FaCloudArrowUp/>
                                        </span>
                                        <input type="text" className=" item item-after-icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Questionitem id={i}/>
                    </div>
                </div>
                <div className="col-12 col-lg-2">
                    <div className='edit'>
                        {(i+1)==questions.length?
                        <div className='add-icon edit-btn' onClick={(e)=>{
                            dispatch(addQuestion({id:`${i+1}`}));
                            setTimeout( function(){window.scrollBy(0, 600);}, 300);
                        }}>
                            <span>Add Question</span> 
                            <FaPlus className='icon plus'/>
                        </div>
                        :<div className='delete-icon edit-btn' onClick={()=>{
                            dispatch(deleteQuestion({id:question.id}));
                            if(i>0){
                            setTimeout( function(){window.scrollBy(0, -600);}, 300);}
                        }}>
                            <FaTrashCan className='icon'/>          
                        </div>
                        }
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Question