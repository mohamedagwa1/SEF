import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronLeft,faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const PaginationContainer = ({pageCount,changePage}) => {
  return (
    <div className='pagination-container'>
       <ReactPaginate
       
        previousLabel={<FontAwesomeIcon icon={faCircleChevronLeft}/>}
        nextLabel={<FontAwesomeIcon icon={faCircleChevronRight}/>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'prevButtn'}
        nextLinkClassName={'nextButtn'}
        activeClassName={'paginationActive'}
        disabledClassName={'paginationDisabled'}
       />
    </div>
  )
}

export default PaginationContainer
