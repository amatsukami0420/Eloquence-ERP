import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function UserLoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function submit(data) {
    console.log("Form Data:", data);
    navigate("/");
  }
  return (
    <>
      <div className="card border-0 shadow-sm p-4 h-100">
        <h4 className="fw-bold text-dark mb-2">Student Login</h4>
        <p className="text-muted small mb-4">
          Access the student portal with your credentials.
        </p>

        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-3">
            <label className="form-label small fw-bold">University Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="student@cuonline.edu.pk"
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="********"
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold mb-3 shadow-sm"
          >
            Login as Student
          </button>

          <div className="text-center">
            <Link
              to="/register"
              className="small text-muted text-decoration-none"
            >
              New applicant?{" "}
              <span className="text-primary fw-bold">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserLoginForm;
