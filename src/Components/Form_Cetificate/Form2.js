import React from 'react';
import { Container ,Row, Col ,Button ,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Form2.css'
import Sidebar from '../Sidebar/Sidebar';

const Form2 =()=>{
    return(
<section className='certeficate'>
<div  className='pdx'>
  <Container>
<div className='side-bar-header'>
            <p className='header h4'>upload certificate</p>
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
  <h2> certificate details</h2>

</div>

           <Form  className='form-content mt-3'>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridStudentName">
          <Form.Label className='fw-bold'>Student Name</Form.Label>
          <Form.Select defaultValue="Choose..." className='input-form student'>
            <option></option>
            <option></option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formAquiredDate" className='date-total'>
          <Form.Label className='fw-bold'>Date Aquired</Form.Label>
          <Form.Control type="date" className='input-form date'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formAquiredDate">
          <Form.Label className='fw-bold'>upload date</Form.Label>
          <Form.Control type="date" className='input-form date'/>
        </Form.Group>

      </Row>
<Row className="mb-3 ">

        <Form.Group as={Col} controlId="formCourse" className='course-total'>
          <Form.Label className='fw-bold'>Course<span> Title</span></Form.Label>
          <Form.Select defaultValue="Choose..." className='input-form title-course'>
            <option></option>
            <option></option>
          </Form.Select>
        </Form.Group>
        </Row>
        <Col className='uploadecertificate'>
      <p className='upload-p mb-3' >Upload Certificate</p>
      <div className='uploade-content'>
      <FontAwesomeIcon icon={faCloudArrowUp} className='icon-upload'/>
      <h3>Drog & drop files or <a className='upload-browser'>Browser</a></h3>
      <p>Supported formate: JPEG.PNG.GIF.MP4.PDF.PSD.AL.Word.PPT</p>
          </div>
        </Col>

    </Form>
    <div  className='action-form d-flex'>
        <Button className='cancel btn-form'>Cancel</Button>
        <Button className='save btn-form'>upload</Button>
        </div>

      </Col>

    </Row>



        </Container>
        </div>
</section>
    )
}
export default Form2;

