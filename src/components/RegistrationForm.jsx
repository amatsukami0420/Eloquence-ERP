function RegistrationForm() {
  return (
    <div className="card border-0 shadow-sm p-4 h-100 border-top border-success border-4">
      <h4 className="fw-bold text-dark mb-2">New Member Registration</h4>
      <p className="text-muted small mb-4">
        Complete the form below to officially join the society.
      </p>

      <form>
        <div className="row g-3 mb-3">
          <div className="col-md-8">
            <label className="form-label small fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Muhammad Waleed"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-bold">Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 20"
            />
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label className="form-label small fw-bold">Cell Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="03XX-XXXXXXX"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label small fw-bold">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="student@cuonline.edu.pk"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label small fw-bold">
            Registration Number
          </label>
          <div className="row g-2">
            <div className="col-4">
              <select className="form-select text-center font-monospace">
                <option value="">Intake</option>
                <option value="FA24">FA24</option>
                <option value="SP24">SP24</option>
                <option value="FA23">FA23</option>
              </select>
            </div>
            <div className="col-4">
              <select className="form-select text-center font-monospace">
                <option value="">Dept</option>
                <option value="BCS">BCS</option>
                <option value="BSE">BSE</option>
                <option value="BEE">BEE</option>
                {/* Add more department options here */}
              </select>
            </div>
            <div className="col-4">
              <select className="form-select text-center font-monospace">
                <option value="">Roll No</option>
                <option value="110">110</option>
                <option value="042">042</option>
                <option value="001">001</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="formFile" className="form-label small fw-bold">
            Upload Your Picture
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            accept="image/*"
          />
          <div className="form-text small">
            Please upload a clear picture of yourself for ID card (JPG or PNG).
          </div>
        </div>
        <div className="bg-light p-3 rounded border mb-4">
          <h6 className="fw-bold mb-2 text-primary">
            <i className="bi bi-wallet2 me-2"></i>Registration Fee: Rs. 1,000
          </h6>
          <p className="small text-muted mb-3">
            Please select your payment method and enter the transaction ID for
            verification.
          </p>

          <div className="mb-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="jazzCash"
                value="jazzcash"
              />
              <label
                className="form-check-label small fw-semibold"
                htmlFor="jazzCash"
              >
                JazzCash
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="easyPaisa"
                value="easypaisa"
              />
              <label
                className="form-check-label small fw-semibold"
                htmlFor="easyPaisa"
              >
                EasyPaisa
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="bankTransfer"
                value="bank"
              />
              <label
                className="form-check-label small fw-semibold"
                htmlFor="bankTransfer"
              >
                Bank Transfer
              </label>
            </div>
          </div>

          <div>
            <input
              type="text"
              className="form-control form-control-sm border-primary"
              placeholder="Enter Transaction ID (TID)"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="button" className="btn btn-success w-100 fw-bold py-2">
          <i className="bi bi-check-circle-fill me-2"></i> Complete Registration
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
