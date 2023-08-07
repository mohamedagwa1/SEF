import { Link } from 'react-router-dom';

function HeaderTopLogIn() {
  return (
    <nav className="navbar  navbar-expand-sm navbar-globle-color">
      <div className="container ">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon nav-globle5-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link to={`/login`} className="nav-link ">
                LOGIN
              </Link>
            </li>
            <li className="nav-item nav-globle5 mx-3">
              <Link to={`/adminalluser`} className="nav-link ">
                ADMINAL PANEL
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={`/userprofile`} className="nav-link ">
                PROFILE
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={`/upcomingexam`} className="nav-link ">
                Exams
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={`/studentportal`} className="nav-link ">
                Student Portal
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={`/instructorportal`} className="nav-link ">
                Instructor Portal
              </Link>
            </li>
            <li className="nav-item nav-globle5  ms-3">
              <button className="nav-link text-light">LOGOUT</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderTopLogIn;
