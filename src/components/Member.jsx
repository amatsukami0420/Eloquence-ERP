function Member() {
  return (
    <>
      <div className="card border-0 shadow-sm p-4">
        <h4 className="fw-bold text-primary mb-4">
          <i className="bi bi-people-fill me-2"></i>Member Directory &
          Management
        </h4>

        <div className="card border-0 shadow-sm mb-5 border-start border-warning border-4">
          <div className="card-header bg-white border-0 pt-4 pb-0">
            <h5 className="fw-bold text-dark mb-0">
              <i className="bi bi-hourglass-split text-warning me-2"></i>
              Pending Membership Requests
            </h5>
            <p className="text-muted small mt-1">
              Verify payment TIDs and Student IDs before approving access.
            </p>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle table-hover border">
                <thead className="table-light small text-muted text-uppercase">
                  <tr>
                    <th>Applicant</th>
                    <th>Details</th>
                    <th>Reg Number</th>
                    <th>Payment TID</th>
                    <th className="text-end">Verification Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="fw-bold d-block">Ali Khan</span>
                      <span className="small text-muted">
                        ali@cuonline.edu.pk
                      </span>
                    </td>
                    <td className="small">
                      Age: 21
                      <br />
                      <span className="text-muted">0300-1234567</span>
                    </td>
                    <td className="font-monospace small">FA24-BSE-089</td>
                    <td>
                      <span className="badge bg-light text-dark border font-monospace">
                        <i className="bi bi-wallet2 text-primary me-1"></i>{" "}
                        JZ-99827364
                      </span>
                    </td>
                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-info me-1"
                        title="View Uploaded ID"
                      >
                        <i className="bi bi-person-vcard"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-success me-1 fw-bold"
                        title="Approve"
                      >
                        <i className="bi bi-check-lg"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger fw-bold"
                        title="Reject"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="fw-bold d-block">Sara Ahmed</span>
                      <span className="small text-muted">
                        sara@cuonline.edu.pk
                      </span>
                    </td>
                    <td className="small">
                      Age: 19
                      <br />
                      <span className="text-muted">0333-7654321</span>
                    </td>
                    <td className="font-monospace small">SP24-BCS-012</td>
                    <td>
                      <span className="badge bg-light text-dark border font-monospace">
                        <i className="bi bi-wallet2 text-success me-1"></i>{" "}
                        EP-44512099
                      </span>
                    </td>
                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-info me-1"
                        title="View Uploaded ID"
                      >
                        <i className="bi bi-person-vcard"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-success me-1 fw-bold"
                        title="Approve"
                      >
                        <i className="bi bi-check-lg"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger fw-bold"
                        title="Reject"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="fw-bold d-block">Usman Tariq</span>
                      <span className="small text-muted">
                        usman@cuonline.edu.pk
                      </span>
                    </td>
                    <td className="small">
                      Age: 20
                      <br />
                      <span className="text-muted">0311-9988776</span>
                    </td>
                    <td className="font-monospace small">FA23-BEE-055</td>
                    <td>
                      <span className="badge bg-light text-dark border font-monospace">
                        <i className="bi bi-bank text-secondary me-1"></i>{" "}
                        BK-77112233
                      </span>
                    </td>
                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-info me-1"
                        title="View Uploaded ID"
                      >
                        <i className="bi bi-person-vcard"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-success me-1 fw-bold"
                        title="Approve"
                      >
                        <i className="bi bi-check-lg"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger fw-bold"
                        title="Reject"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="fw-bold d-block">Fatima Noor</span>
                      <span className="small text-muted">
                        fatima@cuonline.edu.pk
                      </span>
                    </td>
                    <td className="small">
                      Age: 22
                      <br />
                      <span className="text-muted">0345-5544332</span>
                    </td>
                    <td className="font-monospace small">SP24-BSE-102</td>
                    <td>
                      <span className="badge bg-light text-dark border font-monospace">
                        <i className="bi bi-wallet2 text-primary me-1"></i>{" "}
                        JZ-88442211
                      </span>
                    </td>
                    <td className="text-end">
                      <button
                        className="btn btn-sm btn-outline-info me-1"
                        title="View Uploaded ID"
                      >
                        <i className="bi bi-person-vcard"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-success me-1 fw-bold"
                        title="Approve"
                      >
                        <i className="bi bi-check-lg"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger fw-bold"
                        title="Reject"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="bg-light p-3 rounded border" id="member-add">
              <h6 className="fw-bold mb-3">Admin Registration Override</h6>
              <form>
                <div className="row g-2 mb-2">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      placeholder="Age"
                    />
                  </div>
                </div>

                <input
                  type="tel"
                  className="form-control form-control-sm mb-2"
                  placeholder="03XX-XXXXXXX"
                />
                <input
                  type="email"
                  className="form-control form-control-sm mb-2"
                  placeholder="student@cuonline.edu.pk"
                />

                <div className="row g-1 mb-2">
                  <div className="col-4">
                    <select className="form-select form-select-sm text-center font-monospace">
                      <option value="">Intake</option>
                      <option value="FA24">FA24</option>
                      <option value="SP24">SP24</option>
                      <option value="FA23">FA23</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <select className="form-select form-select-sm text-center font-monospace">
                      <option value="">Dept</option>
                      <option value="BCS">BCS</option>
                      <option value="BSE">BSE</option>
                      <option value="BEE">BEE</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <select className="form-select form-select-sm text-center font-monospace">
                      <option value="">Roll</option>
                      <option value="110">110</option>
                      <option value="042">042</option>
                    </select>
                  </div>
                </div>
                <select className="form-select form-select-sm mb-3">
                  <option>Role: General Member</option>
                  <option>Role: Executive Board</option>
                </select>

                <button
                  type="button"
                  className="btn btn-primary btn-sm w-100 fw-bold"
                >
                  Force Add Member
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-8" id="member-read">
            <div className="table-responsive">
              <table className="table align-middle table-hover border">
                <thead className="table-dark small">
                  <tr>
                    <th>REG ID</th>
                    <th>NAME</th>
                    <th>ROLE</th>
                    <th className="text-end">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="small font-monospace">FA24-BCS-110</td>
                    <td className="fw-semibold">Muhammad Waleed</td>
                    <td>
                      <span className="badge bg-primary">Executive</span>
                    </td>
                    <td className="text-end">
                      <a
                        className="btn btn-sm btn-outline-secondary me-1"
                        href="#member-update"
                        title="Update"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                      <a
                        className="btn btn-sm btn-outline-danger"
                        href="#member-delete"
                        title="Delete"
                      >
                        <i className="bi bi-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="small font-monospace">FA25-BSE-042</td>
                    <td className="fw-semibold">Hamza Nayab</td>
                    <td>
                      <span className="badge bg-secondary">General</span>
                    </td>
                    <td className="text-end">
                      <a
                        className="btn btn-sm btn-outline-secondary me-1"
                        href="#member-update"
                        title="Update"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                      <a
                        className="btn btn-sm btn-outline-danger"
                        href="#member-delete"
                        title="Delete"
                      >
                        <i className="bi bi-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="bg-light p-3 rounded border mt-4"
              id="member-update"
            >
              <h6 className="fw-bold mb-3 text-secondary">
                Update Member Profile
              </h6>
              <form>
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  defaultValue="Muhammad Waleed"
                />
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  defaultValue="FA24-BCS-110"
                  readOnly
                />
                <select className="form-select form-select-sm mb-3">
                  <option>Role: Executive Board</option>
                  <option>Role: General Member</option>
                </select>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm w-100 fw-bold"
                >
                  Save Updated Member
                </button>
              </form>
            </div>

            <div
              className="bg-light p-3 rounded border mt-3"
              id="member-delete"
            >
              <h6 className="fw-bold mb-2 text-danger">Delete Member</h6>
              <p className="small text-muted mb-3">
                You are about to delete member{" "}
                <span className="fw-semibold">Hamza Nayab</span> with Reg ID{" "}
                <span className="fw-semibold">FA25-BSE-042</span>.
              </p>
              <button
                type="button"
                className="btn btn-danger btn-sm w-100 fw-bold"
              >
                Confirm Delete Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
