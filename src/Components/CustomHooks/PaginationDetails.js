import { useState } from "react";

const usePaginationDetails = (itemsNumPerPage,data) => {
    const [pageNumber,setPageNumber]=useState(0);
    const perPage=itemsNumPerPage;
    const pageClick=perPage * pageNumber;
    const pageCount=Math.ceil(data.length/perPage);
    const changePage=({selected})=>{
        setPageNumber(selected);
    }
    return {perPage,pageClick,pageCount,changePage}
 
}
export default usePaginationDetails;
