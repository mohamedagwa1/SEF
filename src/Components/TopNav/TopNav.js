import React from 'react';
import Swal from 'sweetalert2';
import './TopNav.css';

const Fail=()=>{
    Swal.fire({
    html:
      `<div class='swal-style'>
        <span class='text-white'>Please login to view this page</span>
        <a href='/login'>Login</a>
      </div>`,
    showCloseButton: true,
    closeButtonColor:'#BF9B30',
    showOkButton: false,
    showConfirmButton:false,
    customClass:'swal-wide'

  })
}
const TopNav = ({flag}) => {
  const checkUserLogin=()=>{
    if(!flag){
      Fail();
    }
  }
  return (
    <section className='header-top-nav d-lg-flex d-none' >
        <div className='container-xl d-flex justify-content-end p-2 px-xl-2 px-3'>
          <a className='top-nav-link text-white text-decoration-none text-uppercase' href='#'
          onClick={checkUserLogin}
          >login</a>
        </div>
    </section>
  )
}
export default TopNav;
