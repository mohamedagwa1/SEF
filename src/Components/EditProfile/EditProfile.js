import React from 'react';
import Button from 'react-bootstrap/Button';
import { dataInProgess } from './ProfileDataInProgess';
import { previousData } from './ProfileDataPrevious';
import './EditProfile.css';
import SidebarEditProfile from './../SidebarEditProfile/SidebarEditProfile';
import {FaRegPenToSquare} from 'react-icons/fa6';

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <div className='overlay'>
        <div className="container">
          <div className="content-user">
            <p>Edit Profile</p>
            <div className="line my-2"></div>
            <p>6th June 2023</p>
            <div className="image-name mt-3">
              <div className="image-admin"></div>
              <div className="info-admin">
                <h2>Balqees Hamdi Sabir</h2>
                <p>Computer Science, <br/> internatoinal islamic universty</p>
                <FaRegPenToSquare className="edit-icon"/>
               
              </div>
              <div className="edit-profile">
                <Button className='text-white text-uppercase btn-edit'>Save Changes</Button>{' '}
                </div>
            </div>
            <div className="content mt-4 row">
              <div className="side-bar col-12 col-lg-3">
                <SidebarEditProfile/>
              </div>

              <div className="admin-information col-12 col-lg-9">
                <div className="about">
                  <h4>About</h4>
                  {/* <p>


                  </p> */}
                  <textarea className='Content-txt' name="" id="" value="In labore quaerat ipsa ab veritatis dolor earum accusantium soluta consequuntur voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
                </div>
                <h4 className='mt-3 nb-3 titel'>In Progress</h4>
                {dataInProgess.length && dataInProgess.map(item => {
                  return (
                    <div className="course mt-5 py-3" key={item.id}>
                      <div className="course-info">
                        <h4>{item.courseName}</h4>
                        <p><span className='instructuor'><strong>Instructuor : </strong></span>{item.instructorName}</p>
                      </div>
                      <h5 className='course-level fw-bold'>LEV.1</h5>
                    </div>
                  )
                })}
                <h4 className='mt-5 nb-3 titel'>Pervoius</h4>
                {previousData.length && previousData.map(item => {
                  return (
                    <div className="course mt-5" key={item.id}>
                      <div className="course-info">
                        <h4>{item.courseName}</h4>
                        <p><span className='instructuor'><strong>Instructuor : </strong></span>{item.instructorName}</p>
                      </div>
                      <h5 className='course-level fw-bold'>LEV.1</h5>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default UserProfile;

