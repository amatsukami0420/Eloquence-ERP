import { useState } from "react";
import { Link } from "react-router-dom";

function AddMember() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "General Member",
    intake: "",
    dept: "",
    roll: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForceAdd = (e) => {
    e.preventDefault();
    console.log("Admin Registration Override:", formData);
    alert(
      `Member Registered: ${formData.intake}-${formData.dept}-${formData.roll}`
    );
  };

  return (
    <>
      <div className="container py-5" style={{ maxWidth: "600px" }}>
        <div className="bg-light p-4 rounded border shadow-sm">
          <h4 className="fw-bold mb-4 border-bottom pb-2">
            <i className="bi bi-person-plus-fill me-2"></i>Admin Registration Override
          </h4>
          <form onSubmit={handleForceAdd}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="student@cuonline.edu.pk"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Assign Temporary Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-4">
                <select
                  name="intake"
                  className="form-select font-monospace"
                  value={formData.intake}
                  onChange={handleChange}
                  required
                >
                  <option value="">Intake</option>
                  <option value="FA24">FA24</option>
                  <option value="SP24">SP24</option>
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
                </select>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="roll"
                  className="form-control font-monospace"
                  placeholder="Roll"
                  value={formData.roll}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <select
                name="role"
                className="form-select"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="General Member">Role: General Member</option>
                <option value="Executive Board">Role: Executive Board</option>
              </select>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary fw-bold shadow-sm"
              >
                Force Add Member
              </button>
              <Link to="/admin/members" className="btn btn-outline-secondary">
                Cancel / Return
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddMember;
