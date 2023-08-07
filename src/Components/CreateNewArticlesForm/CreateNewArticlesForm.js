import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import './CreateNewArticlesForm.css';


const CreateNewsArticleForm = () => {
    return (
        <div className='news-article-form'>
            <form>
                <div className="article-category">
                    <div className='article-name mb-3'>
                        <h5>Article Titel</h5>
                        <input className='input-article form-control' type="text" />
                    </div>
                    <div className='Category-name'>
                        <h5>Category</h5>
                        <input className='input-Category form-control' type="text" />
                    </div>
                </div>
                <div className="article-contect">
                    <h5 className='my-3'>Content</h5>
                    <textarea className='Content-txt form-control' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="public">
                    <h5 className='mt-3'>Publishing Date</h5>
                    <input className='my-3 date-input form-control' type="date" />
                </div>
                <div className="drop-up">
                    <h5 className='mb-3'>Upload Cover Photo</h5>
                    <div className="drog-drop">
                        <div className="drog-drop-content">
                        <FontAwesomeIcon icon={faCloudArrowUp} className='icon-cloud'/>
                            <h4 className='my-3'>Drog & drop files or <span>Browse</span></h4>
                            <p className='text-secondary'>Supported formates : JPEG , PNG,GIF ,MP4 ,PDF,PSD,AL,Word,PPT</p>
                        </div>
                    </div>
                </div>
                <div className="cancle-save mt-3 ms-auto">
                    <Button className='text-white text-uppercase me-2 btn-cancle'>Cancel</Button>{' '}
                    <Button className='text-white text-uppercase btn-save'>Save</Button>{' '}
                </div>
            </form>
        </div>
    )
}
export default CreateNewsArticleForm;
