import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function AddMember() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function submit(data) {
    console.log("Form Data:", data);
    navigate("/admin/members");
  }

  return (
    <>
      <div className="container py-5" style={{ maxWidth: "600px" }}>
        <div className="bg-light p-4 rounded border shadow-sm">
          <h4 className="fw-bold mb-4 border-bottom pb-2">
            <i className="bi bi-person-plus-fill me-2"></i>Admin Registration Override
          </h4>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Full Name"
                {...register("name")}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="student@cuonline.edu.pk"
                {...register("email")}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Assign Temporary Password"
                {...register("password")}
                required
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-4">
                <select
                  id="intake"
                  className="form-select font-monospace"
                  {...register("intake")}
                  required
                >
                  <option value="">Intake</option>
                  <option value="FA24">FA24</option>
                  <option value="SP24">SP24</option>
                </select>
              </div>
              <div className="col-4">
                <select
                  id="dept"
                  className="form-select font-monospace"
                  {...register("dept")}
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
                  id="roll"
                  className="form-control font-monospace"
                  placeholder="Roll"
                  {...register("roll")}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <select
                id="role"
                className="form-select"
                {...register("role")}
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
