import React from 'react';
import { Link } from 'react-router-dom';

export default function CardUserAllJobs({ jobPath }) {
  return (
    <div className="container_job content_job p-3 mb-4 rounded">
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column flex-md-row Justify-content-between gap-3">
          <div>
            <p className="d-flex align-items-center">
              <i className="fa-solid fa-bars content"></i>
              <span className="content_it content">IT</span>
            </p>
          </div>
          <div className="flex-grow-1">
            <h5>Front-end React JS Developer</h5>
            <h6 className="text">Eptikar IT Solution, Obour City</h6>
          </div>
          <div className="d-flex flex-row flex-md-column justify-content-between text-end">
            <h6 className="text">5000EGP-8000EGP Per Month</h6>
            <div>
              <i className="fa-solid fa-location-dot text-warning"></i>
              <h6 className="text d-inline ">&#160; On Site</h6>
            </div>
          </div>
        </div>
      </div>

      <p className="text pt-3 m-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        reiciendis aperiam nemo reprehenderit molestiae doloribus sed, ut
        repellendus? Eligendi nisi vitae quisquam quod itaque quo reiciendis
        debitis perspiciatis iure aliquid.
      </p>
      <button type="button" className="btn btn-outline-warning text-light m-3">
        React JS
      </button>
      <button type="button" className="btn btn-outline-warning text-light">
        Development
      </button>
      <div className="hours m-2 d-flex justify-content-between align-items-center">
        <div>
          <i className="fa-regular fa-clock text-secondary"></i>

          <span className="text">&#160; 2 h ago</span>
        </div>
        <div>
          <Link
            to={jobPath}
            type="button"
            className="btn text-light"
            style={{
              backgroundColor: '#bf9b30',
            }}
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}
