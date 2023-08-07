import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import image from '../../assets/images//seff_logo_black.jpg';
import './Form.css';

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  }
  return (
    <div className='sign-login-form'>
      <div className='container'>
        <div className='row'>
          <div className='form-parent'>
            <div className='form-container position-relative'>
              <div className='form-img position-absolute'>
                <img src={image} />
              </div>
              <div className='form-content'>
                <form>
                  <div className='container  mt-5'>
                    <div className='row mt-1'>
                      <div className='col-12'>
                        <div className='input-group mb-3'>
                          <span className='input-group-text'><FontAwesomeIcon icon={faCircleUser} className='user-icon' /></span>
                          <input type='text' className='form-control text-white' placeholder='User ID' />
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='input-group position-relative mb-3'>
                          <span className='input-group-text'><FontAwesomeIcon icon={faLock} className='lock-icon' /></span>
                          <input type={showPassword ? 'text' : 'password'} className='form-control text-white' placeholder='Password' />
                          <span className='input-group-text' onClick={togglePassword}>
                            {showPassword ? <FontAwesomeIcon icon={faEye} className='eye-icon position-absolute' /> :
                              <FontAwesomeIcon icon={faEyeSlash} className='eye-icon eye-slash position-absolute' />}
                          </span>

                        </div>
                        <div className='forget-password d-flex justify-content-end'>
                          <p><Link className='text-decoration-none text-white' to='/forgetpassword'>Forget your password?</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='submit-btn d-flex justify-content-center mt-3 mb-3'>
                          <button type='submit' className='btn login-btn text-uppercase text-white'>Login</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='login-link mt-3'>
              <p className='text-white text-center account'>Don't have an account yet?<a href='/signup' className='text-decoration-none mx-2'>Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginComponent;

