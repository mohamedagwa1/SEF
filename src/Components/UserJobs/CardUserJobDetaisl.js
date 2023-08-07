import React from 'react';
import { Link } from 'react-router-dom';

export default function CardUserJobDetaisl({ pathApply }) {
  return (
    <div>
      <div className="container_job content_job p-3 mb-4 rounded">
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column flex-md-row Justify-content-between gap-3">
            <div>
              <i className="fa-solid fa-bars content"></i>
              <span className="content_it content">IT</span>
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
        <button
          type="button"
          className="btn btn-outline-warning text-light m-3"
        >
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

          {/* <div>
						<button type="button" className="btn btn-warning text-light">
							VIEW DETAILS
						</button> 
					</div>
                        */}
        </div>

        <form action="#/">
          <div className="row">
            <div className="col-lg-11 col-sm-12 paragraph">
              <h4>About Us</h4>
              <br />
              <p>
                {' '}
                numquam, sit nam aliquid enim saepe quisd quis hic. Illo
                recusandae accusantium eum aliquam voluptates ad praesentium
                ipsum explicabo eveniet, aliquid nisi quaerat! deleniti minus
                distinctio doloribus mollitia doloremque{' '}
              </p>
              <div></div>
            </div>

            <div className="col-lg-11 col-sm-12 paragraph">
              <h4>job description</h4>
              <br />
              <p>
                {' '}
                numquam, sit nam aliquid enim saepe quis . Ullam dolores
                dignissimos, praesentium deleniti ad quis hic. Illo recusandae
                accusantium eum aliquam voluptates ad praesentium ipsum
                explicabo eveniet, aliquid nisi quaerat! deleniti minus
                distinctio doloribus mollitia doloremque{' '}
              </p>
            </div>

            <div className="col-lg-11 col-sm-12 paragraph">
              <h4>job Requriment</h4>
              <br />
              <p>
                {' '}
                numquam, sit nam aliquid enim saepe quis . Ullam dolores
                dignissimos, praesentium deleniti ad quis hic. Illo recusandae
                accusantium eum aliquam voluptates ad praesentium ipsum
                explicabo eveniet, aliquid nisi quaerat! deleniti minus
                distinctio doloribus mollitia doloremque{' '}
              </p>
              <div></div>
            </div>
          </div>
        </form>

        <div className="bttn row mt-5">
          <div className="col-lg-2 col-sm-12 ms-auto">
            <Link
              to={pathApply}
              className="btn text-light"
              style={{ backgroundColor: '#bf9b30' }}
            >
              APPLAY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
