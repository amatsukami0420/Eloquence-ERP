function Login() {
  return (
    <div className="card border shadow-sm p-4 h-100">
      <h4 className="fw-bold text-dark mb-3">Student Login</h4>
      <p className="text-muted small mb-4">
        Please enter your credentials to access the Eloquence ERP portal.
      </p>

      <form>
        <div className="mb-3">
          <label className="form-label fw-bold">Registration Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="FA24-BCS-110"
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
          />
        </div>

        <button type="button" className="btn btn-primary w-100 fw-bold mb-3">
          Login
        </button>
        <div className="text-center">
          <a href="#" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
