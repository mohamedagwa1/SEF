import React from 'react';
import { Container ,Row, Col ,Button ,Form} from 'react-bootstrap';
import './Form1.css'
import Sidebar from '../Sidebar/Sidebar';
import {FaAngleDown}from "react-icons/fa6";

const Form1 =()=>{
    return(
<section className='create-updtae-user'>

    <div  className='pdx'>
      <Container>
    <div className='side-bar-header'>
                <p className='header h4'>create new user</p>
                <div className='hr-header'></div>
                <p>6th june 2023</p>
              </div>
        <Row>
            <Col xl={3} className='side-bar-content'>

    <div className='Side-bar'>
      <Sidebar/>
    </div>
     </Col>
     <Col xl={9}>

    <div className="form-header d-flex mt-5">
    <h2> add user details</h2>

    <Button className='btn-form'>publish</Button>
    </div>

         <Form  className='form-content mt-3'>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label className='fw-bold'>First Name</Form.Label>
              <Form.Control type="Text" className='input-form first-name'/>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label className='fw-bold'>Last Name</Form.Label>
              <Form.Control type="text" className='input-form first-name'/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridStatus">
              <Form.Label className='fw-bold'>Status</Form.Label>
              <Form.Select defaultValue="Choose..." className='input-form status'>
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail" className='email-addres '>
              <Form.Label className='fw-bold'>Email Address</Form.Label>
              <Form.Control type="email" className='input-form email'/>
            </Form.Group>
            <Form.Group as={Col} controlId="formRole">
              <Form.Label className='fw-bold'>Role</Form.Label>
              <Form.Select defaultValue="Choose..." className='input-form role'>
                <option>Student</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            </Row>


          <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridMobileNumber">
              <Form.Label className='fw-bold'>Mobile Number</Form.Label>
              <Form.Control type="Text" className='input-form mobile'/>

            </Form.Group>

            <Form.Group as={Col} controlId="formGridUserID">
              <Form.Label className='fw-bold'>User ID</Form.Label>
              <Form.Control type="text" className='input-form mobile'/>
            </Form.Group>

          </Row>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control type="password" className='input-form mobile'/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridConfirmPassword">
              <Form.Label className='fw-bold'>Confirme Password</Form.Label>
              <Form.Control type="password" className='input-form mobile'/>
            </Form.Group>
          </Row>
          <div className='action-form d-flex'>
            <button className='cancel'>Cancel</button>
            <button className='save'>Save</button>
            <button className='save_publish'>Publish</button>
            </div>

        </Form>
            </Col>

        </Row>
            </Container>
            </div>

</section>
    )
}
export default Form1;

