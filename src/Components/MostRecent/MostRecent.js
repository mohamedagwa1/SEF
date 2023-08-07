import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import './MostRecent.css';

const MostRecent = ({data,status}) => {
  const firstItem=data[0];
  const restItems=data.slice(1);
  return (
    <div className='most-recent-component position-absolute'>
       <div className='container most-recent-container position-relative p-0'>
         <div className='row p-0'>
            <div className='col-1 p-0 text-white'>
                <h2 className={status?'text-uppercase text-white d-block':'d-none'}>Featured News</h2>
            </div>
            <div className='col-11'>
                <div className='container'>
                  <div className='row'>
                    <div className='parent col-6'>
                       <div className='most-recent-item first position-relative'>
                          <div className={status?'show':'hide'}>
                              <p className='item-title text-uppercase text-white'>{firstItem?.title}</p>
                              <p className='item-main-title text-uppercase text-white' >Here's the first <br/> article</p>
                              <p className='item-text text-white d-md-none d-block'>
                                {firstItem?.text1}
                              </p>
                              <p className='item-text text-white d-md-block d-none' >
                                {firstItem?.text2}
                              </p>
                              <div className='item-icon position-absolute'>
                                  <FontAwesomeIcon icon={faClock} className='icon'/>
                                  <span className='time text-white position-relative'>{firstItem?.time}</span>
                              </div>
                          </div>
                       </div>
                    </div>
                    <div className='parent col-6'>
                        {restItems.length && restItems.map(item=>{
                            return(
                              <div className='most-recent-item position-relative' key={item?.id} >
                              <p className='item-title text-uppercase text-white'>{item?.title}</p>
                              <p className='item-sub-title text-uppercase text-white'>{item?.maintitle}</p>
                              <p className='item-text text-white d-lg-block d-md-none d-block' style={{marginTop:'-10px'}}>
                               {item?.text1}
                              </p>
                              <p className='item-text text-white d-lg-none d-md-block d-none'>
                                {item?.text2}
                              </p>
                              <div className='item-sub-icon position-absolute'>
                                  <FontAwesomeIcon icon={faClock} className='icon'/>
                                  <span className='time text-white position-relative'>3h ago</span>
                              </div>
                            </div>
                            )
                          })}
                    </div>
                  </div>
                </div>
            </div>
         </div>
       </div> 
    </div>
  )
}
export default MostRecent;
