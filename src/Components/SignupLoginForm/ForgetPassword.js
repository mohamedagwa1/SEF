import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock}  from '@fortawesome/free-solid-svg-icons';
import {faCircleUser,faEye,faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import image from '../../assets/images//seff_logo_black.jpg';
import './Form.css';

const ForgetPassword = () => {
  const [showOldPassword,setShowOldPassword]=useState(false);
  const [showNewPassword,setShowNewPassword]=useState(false);


  const toggleOldPassword=()=>{
    setShowOldPassword(prevState=>!prevState);
   }
   const toggleNewPassword=()=>{
    setShowNewPassword(prevState=>!prevState);
   }
  return (
    <div className='sign-login-form'>
       <div className='container'>
         <div className='row'>
            <div className='form-parent'>
              <div className='form-container position-relative'>
                <div className='form-img position-absolute'>
                  <img src={image}/>
                </div>
                <div className='form-content'>
                  <form>
                      <div className='container  mt-5'>
                        <div className='row mt-1'>
                          <div className='col-12'>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><FontAwesomeIcon icon={faLock} className='lock-icon'/></span>
                                <input type={showOldPassword?'text':'password'} className='form-control text-white' placeholder='Old Password'/>
                                <span className='input-group-text' onClick={toggleOldPassword}>
                                    {showOldPassword?<FontAwesomeIcon icon={faEye} className='eye-icon position-absolute'/>:
                                    <FontAwesomeIcon icon={faEyeSlash} className='eye-icon eye-slash position-absolute'/>}
                                </span>
                            </div>
                          </div>
                          <div className='col-12'>
                            <div className='input-group position-relative mb-3'>
                              <span className='input-group-text'><FontAwesomeIcon icon={faLock} className='lock-icon'/></span>
                              <input type={showNewPassword?'text':'password'} className='form-control text-white' placeholder='New Password'/>
                              <span className='input-group-text' onClick={toggleNewPassword}>
                                {showNewPassword?<FontAwesomeIcon icon={faEye} className='eye-icon position-absolute'/>:
                                <FontAwesomeIcon icon={faEyeSlash} className='eye-icon eye-slash position-absolute'/>}
                              </span>
                                                          
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-12'>
                            <div className='submit-btn d-flex justify-content-center mt-3 mb-3'>
                                <button type='submit' className='btn login-btn text-uppercase text-white'>Reset Password</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </form>
                </div> 
              </div>
              
            </div>
         </div>
      </div>
    </div>
  )
}
export default ForgetPassword;
