import React from 'react';
import { IoFilter } from 'react-icons/io5';

function HeaderTitle() {
  return (
    <section className="container">
      <div className="row pt-3">
        <div className="col-12 col-lg-6">
          <h3 className="jobs">Looking for a job ?</h3>
          <p className="class p_jobs">
            Here you can find your best match between 1000s of <br />
            updated and available positions.
          </p>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <form className="d-none d-lg-flex pt-3 btn-group rounded position-relative">
            <span
              className="search_icons"
              style={{
                color: '#bf9b30',
              }}
            >
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              className="form rounded-start-2 ps-5 py-2 fs-5"
              type="text"
              placeholder="Search for a job"
              onChange={(e) => console.log(e)}
            />
            <button
              className="btn text-light"
              type="button"
              style={{
                backgroundColor: '#bf9b30',
              }}
            >
              SEARCH
            </button>
          </form>

          <form className="d-block d-lg-none pt-3 position-relative">
            <div>
              <span className="search_icons text-warning">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
              <input
                className="form rounded ps-5 py-2 fs-5 w-100 mb-3"
                type="text"
                placeholder="Search for a job"
                onChange={(e) => console.log(e)}
              />
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-warning text-light flex-grow-1 py-2 fs-5 "
                type="button"
              >
                SEARCH
              </button>
              <button className="btn btn-dark text-light " type="button">
                <IoFilter size={25} />
              </button>
            </div>
          </form>

          {/* <div className="input-group input-group-lg">
						<input
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-lg"
						/>
						<button
							className="btn input-group-text btn-warning text-light"
							id="inputGroup-sizing-lg"
						>
							SEARCH
						</button> 
					</div>*/}
        </div>
      </div>
    </section>
  );
}

export default HeaderTitle;
