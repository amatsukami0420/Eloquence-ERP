import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function AdminLoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function submit(data) {
    console.log("Admin Login Data:", data);
    navigate("/admin");
  }

  return (
    <>
      <div className="card border-0 shadow-sm p-4 h-100 bg-white">
        <h4 className="fw-bold text-dark mb-2">Executive Login</h4>
        <p className="text-muted small mb-4">
          Authorized personnel only. Enter management credentials.
        </p>

        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary text-uppercase">
              Admin ID / Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control bg-light"
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold text-secondary text-uppercase">
              Security Key
            </label>
            <input
              type="password"
              id="password"
              className="form-control bg-light"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100 fw-bold mb-2 shadow-sm"
          >
            Access Command Center
          </button>

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
