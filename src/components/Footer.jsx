import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-white border-top py-5 mt-auto">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-4 text-center text-md-start">
              <h6 className="fw-bold text-uppercase text-dark mb-1">
                <i className="bi bi-layers-fill text-primary me-2"></i>Eloquence
              </h6>
              <p className="text-muted small mb-0">
                Engineered by{" "}
                <span className="text-dark fw-semibold">Muhammad Waleed</span>
              </p>
              <p
                className="text-muted font-monospace"
                style={{ fontSize: "10px" }}
              >
                FA24-BCS-110 | COMSATS University
              </p>
            </div>

            <div className="col-md-4 text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mx-2">
                  <Link
                    to="/"
                    className="text-decoration-none text-muted small"
                  >
                    Home
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link
                    to="/user/announcements"
                    className="text-decoration-none text-muted small"
                  >
                    News
                  </Link>
                </li>
                <li className="list-inline-item mx-2">
                  <Link
                    to="/adminlogin"
                    className="text-decoration-none text-muted small"
                  >
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <div className="text-success small mb-1 fw-bold">
                <i className="bi bi-shield-check-fill me-1"></i> System Secure
              </div>
              <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>
                &copy; 2026 Eloquence ERP. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
