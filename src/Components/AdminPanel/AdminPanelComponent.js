import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { AdminPanelData } from './AdminPanelData/AdminPanelData';
import PaginationContainer from '../PaginationForPages/Pagination';
import usePaginationDetails from '../CustomHooks/PaginationDetails';
import './AdminPanel.css';
import TopNav_Admin from '../TopNav_admin/TopNav_Admin';

const AdminPanelComponent=()=> {
  const paginationData=usePaginationDetails(5,AdminPanelData);
  return (
    <>
        

      <section className='admin_Panel position-relative pt-4'>

       <div className="overlay"> </div>
         <div className="container adminpanel-container">
             <h2 className='h4 pt-4'>Admin Panel</h2>
             <div className="line"></div>
             <p className='mt-2 mb-5'>6th june 2023</p>
             <div className="row">
                <div className="col-md-3 sidebar-part">
                  {<Sidebar/>}
                </div>
                <div className="col-md-9  data-part">
                    <div className="col-md-12">
                       <div className="title title_line py-4 ">
                          <h2 className='h4'>Applications for 'Job' at 'company name'</h2>
                          {/* <div className="title_line"></div> */}
                        </div>
                        <div className="container">
                           <div className="row">
                              <div className="row1 col-12 py-4 row">
                                  <div className="col-3">Applicant</div>
                                  <div className="col-2">Experience</div>
                                  <div className="col-2">Email</div>
                                  <div className="col-3">Mobile Number</div>
                                  <div className='col-2'></div>
                              </div>
                            </div>
                             {AdminPanelData.length && AdminPanelData.
                             slice(paginationData.pageClick,paginationData.pageClick+paginationData.perPage).map(item=>{
                                return(
                                  <div className='row row2 py-4 mb-4 align-items-center gap-2' key={item.id}>
                                      <div className="col-xl-3 col-12 text-nowrap mb-xl-0 mb-3">
                                        <div className="d-none title">Applicant</div>
                                        <div>{item.name}</div>
                                      </div>
                                      <div className='col-xl-4 col-12 row experience mb-xl-0 mb-3'>
                                        <div className='col-xl-6 col-lg-2 col-3'>
                                          <div className="d-none title">Experience</div>
                                          <div>{item.experience}</div>
                                        </div>
                                        <div className='col-xl-6 col-lg-2 col-3 mb-xl-0 mb-2'>
                                          <div className="d-none title">Email</div>
                                          <div>{item.email}</div>
                                        </div>
                                      </div>
                                      <div className="col-xl-3 col-12 mb-xl-0 mb-3">
                                        <div>
                                          <div className="d-none title">Mobile Number</div>
                                          <div className='ms-xl-3 ms-0'>{item.mobile}</div>
                                        </div>
                                      </div>
                                      <div className='col-xl-2 col-12 mb-xl-0 mb-3'>
                                          <button type="button" class="btn btn-secondary text-nowrap  " >DOWNLOAD CV</button>
                                      </div>
                                 </div>
                                )
                             })}
                          </div>
                    </div>
                </div>
             </div>
             <PaginationContainer pageCount={paginationData.pageCount} changePage={paginationData.changePage}/>
          </div>
      </section>
    </>
  )
}
export default AdminPanelComponent;
