import { useState } from "react";
import { Link } from "react-router-dom";

function AdminLoginForm() {
  const [adminCreds, setAdminCreds] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminCreds((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="card border-0 shadow-sm p-4 h-100 bg-white">
        <h4 className="fw-bold text-dark mb-2">Executive Login</h4>
        <p className="text-muted small mb-4">
          Authorized personnel only. Enter management credentials.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary text-uppercase">
              Admin ID / Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control bg-light"
              value={adminCreds.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold text-secondary text-uppercase">
              Security Key
            </label>
            <input
              type="password"
              name="password"
              className="form-control bg-light"
              value={adminCreds.password}
              onChange={handleChange}
            />
          </div>

          <Link
            to="/admin"
            className="btn btn-dark w-100 fw-bold mb-2 shadow-sm"
          >
            Access Command Center
          </Link>

          <Link
            to="/"
            className="btn btn-link btn-sm w-100 text-muted text-decoration-none"
          >
            ← Return to Public Site
          </Link>
        </form>
      </div>
    </>
  );
}

export default AdminLoginForm;
