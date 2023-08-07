import React from "react";

export default function AdminPanelTitle(){
  return (
    <>
      {/* flex-column */}
      <div className="admin-panel-title row ">
        <div className="col-lg-12 m-3">
          <p className="text-white line-after mb-2 h5" style={{ marginTop: '150px' }}>Admin Panel</p>
          <div className="d-flex justify-content-between  flex-lg-row ">
            <p className="text-white mb-2 mb-lg-0">6th June 2023</p>
            {/* <button className="btn Default-bg text-white btn-ctreate d-none d-md-block">CREATE NEW ARTICLE</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
