import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function UpdateMember() {
  const { register, handleSubmit } = useForm();
  function submit(data) {
    console.log("Form Data:", data);
  }

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

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label className="small fw-bold text-muted text-uppercase">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                {...register("name")}
                required
              />
            </div>

            <div className="mb-3">
              <label className="small fw-bold text-muted text-uppercase">
                Registration ID
              </label>
              <input
                type="text"
                id="regId"
                value="110"
                className="form-control bg-light font-monospace"
                {...register("regId")}
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="small fw-bold text-muted text-uppercase">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                {...register("email")}
                required
              />
            </div>

            <div className="mb-4">
              <label className="small fw-bold text-muted text-uppercase">
                Society Role
              </label>
              <select id="role" className="form-select" {...register("role")}>
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
