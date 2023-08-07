    import React from "react";
    import { Nav } from "react-bootstrap";
    import { NavLink, useLocation } from 'react-router-dom';

    export default function Sidebarmobile() {
        const location = useLocation();

    return (
        <>
       <div className=" d-block d-lg-none mb-4 font-s-18 fw-bold  "  >
 
        
      <Nav defaultActiveKey="/home" as="ul"className="d-flex flex-nowrap d-flex justify-content-between " >
        
          <Nav.Item as="li">
          <NavLink exact to="/" className="nav-link "   style={{ color: location.pathname === '/' ? '#BF9B30' : 'white' }}>
            Users
          </NavLink>
        </Nav.Item>
        
        
           <Nav.Item as="li">
          <NavLink to="/articles" className="nav-link  " style={{ color: location.pathname === '/articles' ? '#BF9B30' : 'white' }}>
            Articles
          </NavLink>
        </Nav.Item>
       
       
        <Nav.Item as="li">
          <NavLink to="/jobs" className="nav-link " style={{ color: location.pathname === '/jobs' ? '#BF9B30' : 'white' }}>
            Jobs
          </NavLink>
        </Nav.Item>
        <Nav.Item as="li">
          <NavLink to="/courses" className="nav-link  " style={{ color: location.pathname === '/courses' ? '#BF9B30' : 'white' }}>
            Courses
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
        </>
    );
    }
