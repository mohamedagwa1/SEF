import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLock}  from '@fortawesome/free-solid-svg-icons';
import {faCircleUser,faEye,faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import Icon from '@mdi/react';
import { mdiEmailOpenMultipleOutline } from '@mdi/js';
import image from '../../assets/images//seff_logo_black.jpg';
import './Form.css';

const SignupComponent = () => {
  const [showPassword,setShowPassword]=useState(false);
  const [showCPassword,setShowCPassword]=useState(false);
  const togglePassword=()=>{
    setShowPassword(prevState=>!prevState);
  }
  const toggleCPassword=()=>{
    setShowCPassword(prevState=>!prevState)
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
                          <div className='col-lg-6 col-12'>
                            <div className='input-group mb-3'>
                              <span className='input-group-text'><FontAwesomeIcon icon={faCircleUser} className='user-icon'/></span>
                              <input type='text' className='form-control text-white' placeholder='First Name'/>
                            </div>
                          </div>
                          <div className='col-lg-6 col-12'>
                              <div className='input-group mb-3'>
                                <span className='input-group-text'><FontAwesomeIcon icon={faCircleUser} className='user-icon'/></span>
                                <input type='text' className='form-control text-white' placeholder='Last Name'/>
                              </div>
                          </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                              <div className='input-group mb-3'>
                                  <span className='input-group-text'><Icon path={mdiEmailOpenMultipleOutline} size={1} className='email-icon'/></span>
                                  <input type='text' className='form-control text-white' placeholder='Email Address'/>
                              </div>
                            </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-6 col-12'>
                            <div className='input-group position-relative mb-3'>
                              <span className='input-group-text'><FontAwesomeIcon icon={faLock} className='lock-icon'/></span>
                              <input type={showPassword?'text':'password'} className='form-control text-white' placeholder='Password'/>
                              <span className='input-group-text' onClick={togglePassword}>
                                 {showPassword?<FontAwesomeIcon icon={faEye} className='eye-icon position-absolute'/>:
                                 <FontAwesomeIcon icon={faEyeSlash} className='eye-icon eye-slash position-absolute'/>}
                              </span>                  
                            </div>
                          </div>
                          <div className='col-lg-6 col-12'>
                              <div className='input-group position-relative mb-3'>
                                <span className='input-group-text'><FontAwesomeIcon icon={faLock} className='lock-icon'/></span>
                                <input type={showCPassword?'text':'password'} className='form-control text-white' placeholder='Password Confirmation'/>
                                <span className='input-group-text' onClick={toggleCPassword}>
                                 {showCPassword?<FontAwesomeIcon icon={faEye} className='eye-icon position-absolute'/>:
                                 <FontAwesomeIcon icon={faEyeSlash} className='eye-icon eye-slash position-absolute'/>}
                                </span>                                
                              </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-12'>
                            <div className='submit-btn d-flex justify-content-center mt-3 mb-3'>
                                <button type='submit' className='btn signup-btn text-uppercase text-white'>Sign up</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </form>
                </div> 
              </div>
              <div className='login-link mt-3'>
                 <p className='text-white text-center'>Already have an account?<a href='/login' className='text-decoration-none mx-2'>Login</a></p>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}
export default SignupComponent;
