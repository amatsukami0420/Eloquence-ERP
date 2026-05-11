import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    cell: "",
    email: "",
    password: "",
    confirmPassword: "",
    intake: "",
    dept: "",
    roll: "",
    paymentMethod: "jazzcash",
    tid: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Error: Passwords do not match.");
      return;
    }

    console.log("Eloquence ERP - New Enrollment Data:", formData);
    alert(
      "Registration Request Submitted! Please wait for Admin verification.",
    );
    navigate("/login");
  };

  return (
    <>
      <div className="card border-0 shadow-sm p-4 h-100 border-top border-success border-4">
        <h4 className="fw-bold text-dark mb-2">New Member Registration</h4>
        <p className="text-muted small mb-4">
          Complete the form below to join the society.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Identity Section */}
          <div className="row g-3 mb-3">
            <div className="col-md-8">
              <label className="form-label small fw-bold">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-bold">Age</label>
              <input
                type="number"
                name="age"
                className="form-control"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label small fw-bold">Cell Number</label>
              <input
                type="tel"
                name="cell"
                className="form-control"
                value={formData.cell}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label small fw-bold">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label fw-bold small">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold small">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Registration No.</label>
            <div className="row g-2">
              <div className="col-4">
                <select
                  name="intake"
                  className="form-select font-monospace"
                  value={formData.intake}
                  onChange={handleChange}
                  required
                >
                  <option value="">Intake</option>
                  <option value="SP22">SP22</option>
                  <option value="FA22">FA22</option>

                  <option value="SP23">SP23</option>
                  <option value="FA23">FA23</option>

                  <option value="SP24">SP24</option>
                  <option value="FA24">FA24</option>

                  <option value="SP25">SP25</option>
                  <option value="FA25">FA25</option>

                  <option value="SP26">SP26</option>
                </select>
              </div>
              <div className="col-4">
                <select
                  name="dept"
                  className="form-select font-monospace"
                  value={formData.dept}
                  onChange={handleChange}
                  required
                >
                  <option value="">Dept</option>
                  <option value="BCS">BCS</option>
                  <option value="BSE">BSE</option>
                  <option value="BBA">BBA</option>
                  <option value="PHM">PHM</option>
                  <option value="BCE">BCE</option>
                </select>
              </div>
              <div className="col-4">
                <input
                  name="roll"
                  className="form-control font-monospace"
                  placeholder="Roll"
                  value={formData.roll}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-light p-3 rounded border mb-4">
            <h6 className="fw-bold mb-3 text-primary">
              <i className="bi bi-wallet2 me-2"></i>Fee: Rs. 1,000
            </h6>
            <div className="mb-3">
              {["jazzcash", "easypaisa", "bank"].map((method) => (
                <div className="form-check form-check-inline" key={method}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={handleChange}
                  />
                  <label className="form-check-label small fw-semibold text-capitalize">
                    {method}
                  </label>
                </div>
              ))}
            </div>
            <input
              type="text"
              name="tid"
              className="form-control form-control-sm border-primary"
              placeholder="Transaction ID (TID)"
              value={formData.tid}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 fw-bold py-2 shadow-sm"
          >
            <i className="bi bi-check-circle-fill me-2"></i> Submit Registration
          </button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
