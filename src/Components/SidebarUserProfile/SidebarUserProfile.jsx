import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SidebarUserProfile.css";
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
    <div className="text-white sidebar-user-profile">
      <div className="row">
        <div className="col">
          <div className="sidebar  d-lg-block">
            <ul className="list-unstyled sidebar-bg py-3">
              {/* Users */}
              <li>
                <NavLink
                  exact
                  to="#"
                  className="d-block sidebar-header p-2 nav-link  font-s-20 fw-bold"
                  style={{ color: location.pathname === '#' ? activeLinkColor : 'white' }}
                  onClick={handleNestedClick}
                >
                  Personal info
                </NavLink>

                <Table>
                  <thead>
                    <tr>
                      <td>Student ID</td>
                      <td>1420572</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Age</td>
                      <td>26yo</td>
                    </tr>
                    <tr>
                      <td>Nationality</td>
                      <td>Sudaness</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>Egypt</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>Cairo</td>
                    </tr>
                  </tbody>
                </Table>
              </li>

              {/* Articles */}
              <li>
                <NavLink
                  to="#"
                  className="d-block sidebar-header p-2 nav-link  font-s-20 fw-bold"
                  style={{ color: location.pathname === '#' ? activeLinkColor : 'white' }}
                  onClick={handleNestedClick}
                >
                  Educatoin
                </NavLink>
                {/* Nested links */}
                <ul
                  className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
                >
                  <li onClick={() => updateToggle('publisgedArticles')}>
                    <h6 className='fw-bold'>University</h6>
                    <NavLink to="#" className="nav-link">
                      International Islamic University
                    </NavLink>
                  </li>
                  <li onClick={() => updateToggle('scheduledArticles')}>
                    <h6 className='fw-bold'>Major</h6>
                    <NavLink to="#" className="nav-link" >
                      Computer Science
                    </NavLink>
                  </li>
                  <li onClick={() => updateToggle('saveDrafts')}>
                    <h6 className="fw-bold">Graduation Year</h6>
                    <NavLink to="#" className="nav-link">
                      2019
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Jobs */}
              <li >
                <NavLink
                  to="#"
                  className="d-block sidebar-header p-3 nav-link font-s-20"
                  style={{ color: location.pathname === '#' ? activeLinkColor : 'white' }}
                  onClick={handleNestedClick}
                >
                  Contact info
                </NavLink>
                {/* Nested links */}
                <ul
                  className="list-unstyled m-3"
                // Add appropriate className for showing or hiding nested links
                >
                  <li onClick={() => updateToggle('publishedJobs')}>
                  <div className="icons">
                  <Icon path={mdiEmailOpenMultipleOutline} size={1} className='phone-icon'/>
                    <h6 className="h6-mail fw-bold">Email</h6>
                    </div>
                    <NavLink  className="nav-link">

                     <span className="content-icon">balqeesaber@gmail.com</span>
                    </NavLink>
                  </li>
                  <li  onClick={() => updateToggle('savedDrafts')}>
                    <div className="icons">
                  <FontAwesomeIcon icon={faPhoneVolume} className='phone-icon'/>
                    <h6 className="h6-mail fw-bold">Mobile Number</h6>
                    </div>
                    <NavLink  className="nav-link">
                    <span className="content-icon">00201064569047</span>
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
