import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import { useNavigate} from 'react-router-dom';
import PaginationContainer from '../PaginationForPages/Pagination';
import usePaginationDetails from '../CustomHooks/PaginationDetails';
import './Content.css';


const Content = ({data}) => {
  const navigate=useNavigate();
  const paginationData=usePaginationDetails(4,data);
  return (
    <div className='page-content'>
       <div className='container-xl'>
          {data.length && data.slice(paginationData.pageClick,paginationData.pageClick+paginationData.perPage).map(item=>{
             return(
              <div className='row mb-4 card-details' key={item?.id} onClick={()=>navigate(`/businessDetails/${item.id}`)}>
              <div className='col-lg-3 col-12'>
                 <div className='img'>
                    <img src={item?.img} className='w-100 h-100'/>
                 </div>
              </div>
              <div className='col-lg-9 col-12'>
                 <div className='content position-relative'>
                   <div className='title'>
                     <p className='text-uppercase text-white'>{item?.title}</p>
                   </div>
                   <div className='main-title mt-3'>
                     <h2 className='text-uppercase text-white'>{item?.maintitle}</h2>
                   </div>
                   <div className='clock-icon position-absolute d-flex'>
                     <FontAwesomeIcon icon={faClock} className='clock mx-2'/>
                     <p className='time text-white' >{item?.time}</p>
                   </div>
                   <div className='text d-flex justify-content-between'>
                      <p className='text-white'>{item?.text}</p>
                      <FontAwesomeIcon icon={faChevronRight} className='arrow-right mt-3'/>
                   </div>
                 </div>
              </div>
            </div>
             )
          })}
          <PaginationContainer pageCount={paginationData.pageCount} changePage={paginationData.changePage}/>
       </div>
      
    </div>
  )
}
export default Content;
