import React from 'react';
import {Container,Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react';
import TopNav from '../TopNav/TopNav';
import logo from '../../assets/images/seff_logo_transparent.png';
import './Header.css';

const Header = ({flag}) => {
  const navigate=useNavigate();
  return (
      <section className='header-component position-absolute top-0 left-0 w-100 mt-5' id='header'>
        {/* <TopNav flag={flag}/> */}
        <Navbar expand="lg">
          <Container fluid='xl' className='header-container p-0'>
            <Navbar.Brand>
              <img className='header-logo' src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ><Hamburger className='nav-toogle-icon' color='#BF9B30'/></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="nav-container d-flex justify-content-between  w-100">
                <Link to='/' className='nav-link text-uppercase text-white  position-relative'>Home</Link>
                <Link to='/createexampage' className='nav-link text-uppercase text-white  position-relative'>Exam</Link>
                <Link to='/CourseShowPagenotEnrolled' className='nav-link text-uppercase text-white  position-relative'>Tech</Link>
                {/* <NavDropdown title=
                  {<span  className='text-uppercase text-white d-flex'>
                    <Link to='/CourseShowPagenotEnrolled' className='nav-link text-uppercase text-white'>Tech</Link>
                    <FontAwesomeIcon icon={faChevronDown} className='dropdown-icon ms-1'/>
                    </span>}
                  id="basic-nav-dropdown">
                  <NavDropdown.Item href="course1" className='text-uppercase text-white'>Laptops</NavDropdown.Item>
                  <NavDropdown.Item href="course2" className='text-uppercase text-white'>
                    Phones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="course3" className='text-uppercase text-white'>Tablets</NavDropdown.Item>
                </NavDropdown> */}

                <Link to='/business' className='nav-link text-uppercase text-white  position-relative'>Business</Link>
                <Link to='/' className='nav-link text-uppercase text-white  position-relative'>Security</Link>
                {/* <Link to='/' className='nav-link text-uppercase text-white  position-relative'>Sports</Link> */}
                {/* <Link to='/' className='nav-link text-uppercase text-white  position-relative'>Medical</Link> */}
                {/* <Link to='/' className='nav-link text-uppercase text-white  position-relative'>Startups</Link> */}
                <Link to='/adminPanel' className='nav-link text-uppercase text-white  position-relative'>Apps</Link>
                <Link to='/coursePage' className='nav-link text-uppercase text-white  position-relative'>Courses</Link>
                {/* <NavDropdown title=
                  {<span  className='text-uppercase text-white d-flex'>
                    <Link to='/coursePage' className='nav-link text-uppercase text-white'>Courses</Link>
                    <FontAwesomeIcon icon={faChevronDown} className='dropdown-icon ms-1'/>
                    </span>}
                  id="basic-nav-dropdown">
                  <NavDropdown.Item href="course1" className='text-uppercase text-white'>Course1</NavDropdown.Item>
                  <NavDropdown.Item href="course2" className='text-uppercase text-white'>
                    Course2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="course3" className='text-uppercase text-white'>Course3</NavDropdown.Item>
                </NavDropdown> */}
                <Link to='/jobsPagenotpanel' className='nav-link text-uppercase text-white  position-relative'>Jobs</Link>
                <Nav.Link><Button variant="warning" className='btn-contact text-uppercase text-white position-relative'
                onClick={()=>navigate('/contact')}
                >Contact Us</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
  )
}
export default Header;
