import { Link } from "react-router-dom";

function UserNavigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold text-uppercase" to="/">
            <i className="bi bi-layers-fill text-primary me-2"></i>
            <span className="text-warning">
              ELO<span className="text-light">QUENCE</span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#userNavbarLinks"
            aria-controls="userNavbarLinks"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="userNavbarLinks">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 gap-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill me-1 text-primary"></i> My
                  Profile
                </a>
                <ul className="dropdown-menu dropdown-menu-dark shadow border-0">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      View Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile/update">
                      Update Info
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold text-white"
                  to="/user/announcements"
                >
                  <i className="bi bi-megaphone-fill me-1 text-success"></i>{" "}
                  Feed
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold text-white"
                  to="/user/attendance"
                >
                  <i className="bi bi-calendar-check-fill me-1 text-warning"></i>{" "}
                  My Attendance
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold text-white"
                  to="/user/score"
                >
                  <i className="bi bi-cpu-fill me-1 text-info"></i> My Score
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center text-white-50 small mt-3 mt-lg-0 border-start border-secondary ps-lg-3">
              <i className="bi bi-person-circle fs-5 me-2 text-light"></i>
              <div>
                <span className="fw-bold d-block text-light">FA24-BCS-042</span>
                <span className="badge bg-primary" style={{ fontSize: "10px" }}>
                  General Member
                </span>
              </div>
              <Link to="/userlogin" className="ms-3 text-white-50">
                <i className="bi bi-box-arrow-right fs-5"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserNavigation;
