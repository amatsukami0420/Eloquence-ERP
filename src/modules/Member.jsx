function Member() {
  return (
    <>
      <div className="card border-0 shadow-sm p-4">
        <h4 className="fw-bold text-primary mb-4">
          <i className="bi bi-people-fill me-2"></i>Member Directory &
          Management
        </h4>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="bg-light p-3 rounded border" id="member-add">
              <h6 className="fw-bold mb-3">Register Member</h6>
              <form>
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  placeholder="Reg ID (e.g. FA24-BCS-110)"
                />
                <select className="form-select form-select-sm mb-3">
                  <option>Role: General Member</option>
                  <option>Role: Executive Board</option>
                </select>
                <button
                  type="button"
                  className="btn btn-primary btn-sm w-100 fw-bold"
                >
                  Add Member
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
                    <td className="fw-semibold">Ali Khan</td>
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
                <span className="fw-semibold">Ali Khan</span> with Reg ID{" "}
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
