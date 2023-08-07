import React from 'react';
import './CreateNewArticles.css';
import Button from 'react-bootstrap/Button';
import CreateNewsArticleForm from '../CreateNewArticlesForm/CreateNewArticlesForm';
import SidebarCreateNewArticles from '../SidebarCreateNewArticles/SidebarCreateNewArticles';

const CreateNewArticles = () => {
    return (
        <div className='create-news-articles'>
            <div className='overlay'>
                <div className="container">
                    <p>Create New Article</p>
                    <div className="line line-1 my-2"></div>
                    <p>6th June 2023</p>
                    <div className="content mt-4 row ">
                        <div className="side-bar col-12 col-lg-3">
                            <SidebarCreateNewArticles/>
                        </div>
                        <div className="admin-information col-12 col-lg-3">
                            <div className="add-article-and-btn-publish">
                                <div>
                                    <h4 className='add-article-details'n>Add Article Details </h4>
                                    <div className="line line-2"></div>
                                </div>
                                <div className="edit-profile">
                                    <Button className='text-white text-uppercase btn-edit'>Publish</Button>{' '}
                                </div>
                            </div>
                            <div className="form-content">
                            <CreateNewsArticleForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateNewArticles;
