import { useState } from "react";
import { Link } from "react-router-dom";

function UserLoginForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="card border-0 shadow-sm p-4 h-100">
        <h4 className="fw-bold text-dark mb-2">Student Login</h4>
        <p className="text-muted small mb-4">
          Access the student portal with your credentials.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label small fw-bold">University Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="student@cuonline.edu.pk"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="********"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>

          <Link to="/" className="btn btn-primary w-100 fw-bold mb-3 shadow-sm">
            Login as Student
          </Link>

          <div className="text-center">
            <Link
              to="/register"
              className="small text-muted text-decoration-none"
            >
              New applicant?
              <span className="text-primary fw-bold">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserLoginForm;
