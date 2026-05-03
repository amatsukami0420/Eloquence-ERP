function AdminNavigation() {
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
            data-bs-target="#adminNavbarLinks"
            aria-controls="adminNavbarLinks"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="adminNavbarLinks">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 gap-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-people-fill me-1 text-primary"></i>{" "}
                  Members
                </a>
                <ul className="dropdown-menu dropdown-menu-dark shadow border-0">
                  <li>
                    <a className="dropdown-item" href="#member-add">
                      Add
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#member-read">
                      Read
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#member-update">
                      Update
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#member-delete">
                      Delete
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
                    <a className="dropdown-item" href="#announcements-add">
                      Add
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#announcements-read">
                      Read
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#announcements-update">
                      Update
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#announcements-delete">
                      Delete
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
                  Attendance
                </a>
                <ul className="dropdown-menu dropdown-menu-dark shadow border-0">
                  <li>
                    <a className="dropdown-item" href="#attendance-add">
                      Add
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#attendance-read">
                      Read
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#attendance-update">
                      Update
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#attendance-delete">
                      Delete
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-semibold text-white"
                  href="#ai-analysis"
                >
                  <i className="bi bi-cpu-fill me-1 text-info"></i> AI Analysis
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center text-white-50 small mt-3 mt-lg-0 border-start border-secondary ps-lg-3">
              <i className="bi bi-person-circle fs-5 me-2 text-light"></i>
              <div>
                <span className="fw-bold d-block text-light">FA24-BCS-110</span>
                <span className="badge bg-danger">Root Admin</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AdminNavigation;
