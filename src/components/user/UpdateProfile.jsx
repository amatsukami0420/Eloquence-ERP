import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function UpdateProfile() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function submit(data) {
    console.log("Form Data:", data);
    navigate("/profile");
  }
  // if (saved) {
  //   return (
  //       <div className="container py-5 text-center">
  //           <h4 className="fw-bold text-success mb-3"><i className="bi bi-check-circle-fill me-2"></i>Profile information updated successfully!</h4>
  //           <Link to="/profile" className="btn btn-primary fw-bold">Return to Profile</Link>
  //       </div>
  //   );
  // }
  return (
    <>
      <section className="container my-5 py-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-primary text-white py-3 d-flex justify-content-between align-items-center">
                <h4 className="mb-0 fw-bold">
                  <i className="bi bi-person-lines-fill me-2"></i>Update Profile
                  Information
                </h4>
                <Link
                  to="/profile"
                  className="btn btn-sm btn-light text-primary"
                >
                  Cancel
                </Link>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(submit)}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      {...register("contact")}
                      placeholder="e.g., +92 300 1234567"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      {...register("password")}
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      {...register("confirmPassword")}
                      placeholder="Confirm new password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 fw-bold"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateProfile;
