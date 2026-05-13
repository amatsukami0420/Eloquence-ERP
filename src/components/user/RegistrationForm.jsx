import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function RegistrationForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function submit(data) {
    console.log("Form Data:", data);
    navigate("/userlogin");
  }

  return (
    <>
      <div className="card border-0 shadow-sm p-4 h-100 border-top border-success border-4">
        <h4 className="fw-bold text-dark mb-2">New Member Registration</h4>
        <p className="text-muted small mb-4">
          Complete the form below to join the society.
        </p>

        <form onSubmit={handleSubmit(submit)}>
          <div className="row g-3 mb-3">
            <div className="col-md-8">
              <label className="form-label small fw-bold">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                {...register("fullName")}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label small fw-bold">Age</label>
              <input
                type="number"
                id="age"
                className="form-control"
                {...register("age")}
                required
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label small fw-bold">Cell Number</label>
              <input
                type="tel"
                id="cell"
                className="form-control"
                {...register("cell")}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label small fw-bold">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                {...register("email")}
                required
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label fw-bold small">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password")}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold small">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                {...register("confirmPassword")}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Registration No.</label>
            <div className="row g-2">
              <div className="col-4">
                <select
                  id="intake"
                  className="form-select font-monospace"
                  {...register("intake")}
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
                  id="dept"
                  className="form-select font-monospace"
                  {...register("dept")}
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
                  id="roll"
                  className="form-control font-monospace"
                  placeholder="Roll"
                  {...register("roll")}
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
                    id={`paymentMethod-${method}`}
                    value={method}
                    {...register("paymentMethod")}
                    required
                  />
                  <label
                    className="form-check-label small fw-semibold text-capitalize"
                    htmlFor={`paymentMethod-${method}`} 
                  >
                    {method}
                  </label>
                </div>
              ))}
            </div>
            <input
              type="text"
              id="transactionId"
              className="form-control form-control-sm border-primary"
              placeholder="Transaction ID (TID)"
              {...register("transactionId")}
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
