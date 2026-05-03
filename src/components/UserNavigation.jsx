function UserNavigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
        <div className="container-fluid px-4">
          <a className="navbar-brand fw-bold text-uppercase" href="#">
            <i className="bi bi-layers-fill text-primary me-2"></i>
            <span className="text-warning">
              ELO<span className="text-light">QUENCE</span>
            </span>
          </a>

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
                    <a className="dropdown-item" href="#">
                      View Details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Update Info
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Change Password
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-megaphone-fill me-1 text-success"></i>{" "}
                  Announcements
                </a>
                <ul className="dropdown-menu dropdown-menu-dark shadow border-0">
                  <li>
                    <a className="dropdown-item" href="#">
                      View Feed
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      React / Comment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Saved Posts
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-calendar-check-fill me-1 text-warning"></i>{" "}
                  My Attendance
                </a>
                <ul className="dropdown-menu dropdown-menu-dark shadow border-0">
                  <li>
                    <a className="dropdown-item" href="#">
                      View History
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submit Excuse
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold text-white" href="#">
                  <i className="bi bi-cpu-fill me-1 text-info"></i> My Score
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center text-white-50 small mt-3 mt-lg-0 border-start border-secondary ps-lg-3">
              <i className="bi bi-person-circle fs-5 me-2 text-light"></i>
              <div>
                <span className="fw-bold d-block text-light">FA24-BCS-042</span>
                <span className="badge bg-primary">General Member</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserNavigation;
