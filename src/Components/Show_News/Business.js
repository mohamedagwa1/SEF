import React from 'react'
import './Business.css';
import image from '../../assets/images/img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Show_News = () => {
    return (
        <div className='business-details position-relative'>
            <div className='overlay'></div>
            <div className='content'>
                <Container className='px-4'>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-between '>
                                <p className='header text-white text-capitalize position-relative'>business</p>
                                <div className='img-clock d-md-none'>
                                    <FontAwesomeIcon icon={faClock} className='clock'/>
                                    <p className='text-white d-inline-block ms-1 clickTime' > 2 h ago  </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between '>
                                <h4 className='text-white text-uppercase headerTwo mb-4'>here's the fourth article</h4>
                                <div className='d-none d-md-flex'>
                                    <FontAwesomeIcon icon={faClock} className='clock'/>
                                    <p className='text-white d-inline-block ms-2  clickTime' > 2 h ago  </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className='business-box mx-auto'>
                            <Col>
                                <div className='image-box text-center mb-5 '>
                                    <img src={image} className='' />
                                </div>
                                <div className='business-info my-5'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries, but
                                        also the leap into electronic typesetting, remaining essentially
                                        unchanged.
                                    </p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries, but
                                        also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries, but
                                        also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with desktop
                                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
                <div className='business-subscribe text-center  '>
                    <Container>
                        <Row>
                            <Col sm={6} className='mx-auto my-4'>
                                <h3 className='text-white text-uppercase sub-title '>subscribe to our newsleletter</h3>
                                <p className='text-white my-3 sub-text '>Be the first to get latest news</p>
                                <div className='d-flex flex-column flex-lg-row mt-4 '>
                                    <Form.Control className='input-sub my-2' size="lg" type="text" ></Form.Control>
                                    <Button className=' btn-subscribe my-2' >subscribe</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Show_News;
