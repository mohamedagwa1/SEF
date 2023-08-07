import React from 'react';
import './TopNav_Admin.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


    const TopNav_Admin = () => {


      return (
        <section className='header-top-nav-admin d-lg-flex d-none' >
            <div className='container-xl d-flex justify-content-end p-2 px-xl-2 px-3'>
            <Link className='top-nav-link text-white text-decoration-none text-uppercase ' to='/adminPanel'
              >Admin Panel</Link>
               <Link className='top-nav-link text-white text-decoration-none text-uppercase mx-3' to='/userProfilePage'
              >Profile</Link>
               <Link className='top-nav-link text-white text-decoration-none text-uppercase' to='/login'
              >Logout</Link>
            </div>
        </section>
      )
    }
export default TopNav_Admin;
