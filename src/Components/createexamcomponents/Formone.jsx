import React from 'react'
import {FaRegCalendar, FaRegClock, FaStopwatch} from 'react-icons/fa6';

const Formone = () => {
  return (
    <div>
        <div className='page-container '>
            <div className='form'>
            <div className="row item-group">
                <div className="col-12 col-lg-5">
                    <div className='inputitem'>
                        <label className="form-label" >Course Name</label>
                        <select className="item select-item">
                            <option value="Multiple-chice">Multiple choices</option>
                            <option value="Short-Answer" >Short Answer</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="inputitem">
                        <label for="basic-url" className="form-label">level</label>
                        <input type="text" className=" item" />
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="inputitem">
                        <label for="basic-url" className="form-label">Full Mark</label>
                        <input type="text" className=" item" />
                    </div>
                </div>
            </div>
            <div className="row item-group">
                <div className="col-12 col-lg-3">
                    <div className='inputitem'>
                        <label className="form-label">Date</label>
                        <div className=" group" id="datepicker">
                            <span className="icon">
                                <FaRegCalendar className="icon-cal"/>
                            </span>
                            <input type="text" className=" item item-pre-icon"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className='inputitem'>
                        <label className="form-label">Time</label>
                        <div className=" group">
                            <span className="icon" >
                                <FaRegClock className="icon-exam "/>
                            </span>
                            <input type="text" className="item item-pre-icon" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className='inputitem'>
                        <label className="form-label">Duration</label>
                        <div className=" group">
                            <span className="icon">
                                <FaStopwatch className="icon-exam"/>
                            </span>
                            <input type="text" className= "item item-pre-icon" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Formone