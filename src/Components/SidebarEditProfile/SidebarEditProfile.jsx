import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SidebarEditProfile.css";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Icon from '@mdi/react';
import { mdiEmailOpenMultipleOutline } from '@mdi/js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';


export default function SidebarUserProfile() {
  const [showNested, setShowNested] = useState(false);
  const [toggle, setToggle] = useState('');
  function updateToggle(id) {
    setToggle(id)
  }

  const location = useLocation();
  const activeLinkColor = '#BF9B30';

  const handleNestedClick = () => {
    setShowNested(!showNested);
  };

  return (
    <div className="text-white sidebar-edit-profile">
      <div className="row">
        <div className="col">
          <div className="sidebar  d-lg-block">
            <ul className="list-unstyled sidebar-bg p-4">
              {/* Users */}
              <li>
                <div className='sidebar-header'>
                  <NavLink
                    exact
                    to="#"
                    className="d-block p-3 nav-link  font-s-20"
                    style={{ color: location.pathname === '#' ? activeLinkColor : 'white' }}
                    onClick={handleNestedClick}
                    >
                    Personal info
                  </NavLink>
                  </div>

                <Table>
                  <thead>
                    <tr>
                      <td className="h6 fw-bold">Student ID</td>
                      <td>1420572</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="h6 fw-bold">Age</td>
                      <td><input type="text" name="" id="" value="26yo"/></td>
                    </tr>
                    <tr>
                      <td className="h6 fw-bold">Nationality</td>
                      <td><input type="text" name="" id="" value="Sudaness"/></td>
                    </tr>
                    <tr>
                      <td className="h6 fw-bold">Country</td>
                      <td><input type="text" name="" id="" value="Egypt"/></td>
                    </tr>
                    <tr>
                      <td className="h6 fw-bold">City</td>
                      <td><input type="text" name="" id="" value="Cairo"/></td>
                    </tr>
                  </tbody>
                </Table>
              </li>

              {/* Articles */}
              <li>
              <div className='sidebar-header'>
                <NavLink
                  to="#"
                  className="d-block p-3 nav-link  font-s-20"
                  style={{ color: location.pathname === '#' ? activeLinkColor : 'white' }}
                  onClick={handleNestedClick}
                >
                  Educatoin
                </NavLink>
                </div>
                {/* Nested links */}
                <ul
                  className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
                >
                  <li onClick={() => updateToggle('publisgedArticles')}>
                    <h6 className="fw-bold">University</h6>
                    <NavLink to="#" className="nav-link">
                      <input type="text" name="" id="" value=" International Islamic University" />
                    </NavLink>
                  </li>
                  <li onClick={() => updateToggle('scheduledArticles')}>
                    <h6 className="fw-bold">Major</h6>
                    <NavLink to="#" className="nav-link" >
                      <input type="text" name="" id="" value="Computer Science" />

                    </NavLink>
                  </li>
                  <li onClick={() => updateToggle('saveDrafts')}>

                    <h6  className="fw-bold">Graduation Year</h6>
                    <NavLink to="#" className="nav-link">
                      <input type="text" name="" id="" value="2019" />

                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Jobs */}
              <li >
              <div className='sidebar-header'>
                <NavLink
                  to="#"
                  className="d-block p-3 nav-link font-s-20"
                  style={{ color: location.pathname === '#' ? activeLinkColor : 'white' }}
                  onClick={handleNestedClick}
                >
                  Contact info
                </NavLink>
                </div>
                {/* Nested links */}
                <ul
                  className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
                >
                  <li className="position-relative" onClick={() => updateToggle('publishedJobs')}>
                  <div className="icons">
                  <Icon path={mdiEmailOpenMultipleOutline} size={1} className='phone-icon'/>
                  <h6 className="h6-mail m-0 fw-bold">Email</h6>
                    </div>

                    <NavLink to="#" className="nav-link">
                      <input type="text" name="" id="" value="balqeesaber@gmail.com" />

                    </NavLink>
                  </li>
                  <li className="position-relative" onClick={() => updateToggle('savedDrafts')}>
                  <div className="icons">
                  <FontAwesomeIcon icon={faPhoneVolume} className='phone-icon'/>
                    <h6 className="h6-mail m-0 fw-bold">Mobile Number</h6>
                    </div>
                    <NavLink to="#" className="nav-link">
                      <input type="text" name="" id="" value="00201064569047" />

                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
