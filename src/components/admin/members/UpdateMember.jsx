import { useState } from "react";
import { Link } from "react-router-dom";

function UpdateMember() {
  const [formData, setFormData] = useState({
    name: "Muhammad Waleed",
    regId: "FA24-BCS-110",
    role: "Lead",
    email: "waleed@cuonline.edu.pk",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving Member Update to Eloquence ERP:", formData);
    alert(`Profile for ${formData.regId} has been updated.`);
  };

  return (
    <>
      <div className="container py-5">
        <div
          className="card border-0 shadow-sm p-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <h5 className="fw-bold text-primary mb-4 text-uppercase border-bottom pb-2">
            <i className="bi bi-pencil-square me-2"></i>Edit Member Profile
          </h5>

          <form onSubmit={handleSave}>
            <div className="mb-3">
              <label className="small fw-bold text-muted text-uppercase">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="small fw-bold text-muted text-uppercase">
                Registration ID
              </label>
              <input
                type="text"
                className="form-control bg-light font-monospace"
                value={formData.regId}
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="small fw-bold text-muted text-uppercase">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="small fw-bold text-muted text-uppercase">
                Society Role
              </label>
              <select
                name="role"
                className="form-select"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="Lead">Lead</option>
                <option value="Executive">Executive Board</option>
                <option value="General Member">General Member</option>
              </select>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary fw-bold py-2 shadow-sm"
              >
                Save Changes
              </button>
              <Link
                to="/admin/members"
                className="btn btn-light border text-muted small text-decoration-none"
              >
                Return to Directory
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateMember;
