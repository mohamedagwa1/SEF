import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SidebarFiltersLeft({ showCreateCv }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container_job rounded p-4 d-none d-lg-block">
        <div className="d-flex justify-content-between jobs_container p-3 m-2 rounded align-items-center">
          <h5>Filters</h5>
          <h6 className="text-warning">Clear All</h6>
        </div>
        <div className="location pt-3 px-4">
          <h6>Location</h6>
          <div className="job_loc d-flex Justify-content-between">
            <select
              className="form-select text-light p-2"
              aria-label="Default select example"
              // onChange={(e)=>console.log(e)}
            >
              <option className="text-light">Cairo</option>
              <option value="1" className="text-light">
                Giza
              </option>
              <option value="2" className="text-light">
                Banha
              </option>
              <option value="3" className="text-light">
                Tohk
              </option>
            </select>
          </div>
          <div className="job_details">
            <div>
              <h6 className="job_types pt-3">Job Type</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">Full Time</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  checked
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">Part Time</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">Remote</label>
              </div>
            </div>
            <div>
              <h6 className="job_types pt-3">Level</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">Entry Level</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  checked
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">Intermediate</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">Expert</label>
              </div>
            </div>
            <div>
              <h6 className="job_types pt-3">Salary Range</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">Under 4000 EGP</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  checked
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">
                  Between 40000 & 10000 EGP
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  onChange={(e) => console.log(e)}
                />
                <label className="form-check-label">More Than 10000 EGP</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-grid pt-4">
        {showCreateCv && (
          <Link
            to={`/createcv/main-information`}
            type="button"
            className="btn btn-block p-2 text-light"
            style={{ backgroundColor: '#bf9b30' }}
            onClick={() => navigate('/createcv/main-information')}
          >
            CREATE YOUR CV
          </Link>
        )}
      </div>
    </>
  );
}

export default SidebarFiltersLeft;
