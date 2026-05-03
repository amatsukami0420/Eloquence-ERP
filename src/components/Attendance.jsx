function AttendanceTracker() {
  return (
    <>
      <div className="card border-0 shadow-sm p-4">
        <h4 className="fw-bold text-warning mb-4">
          <i className="bi bi-calendar-check-fill me-2"></i>Attendance &
          Engagement Logs
        </h4>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="bg-light p-3 rounded border" id="attendance-add">
              <h6 className="fw-bold mb-3">Log Attendance</h6>
              <form>
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  placeholder="Search Reg ID..."
                />
                <select className="form-select form-select-sm mb-2">
                  <option>Event: Weekly Meeting (Oct 14)</option>
                  <option>Event: Tech Workshop (Oct 10)</option>
                </select>
                <select className="form-select form-select-sm mb-3 border-warning">
                  <option>Status: Present</option>
                  <option>Status: Absent (Unexcused)</option>
                </select>
                <button
                  type="button"
                  className="btn btn-warning btn-sm w-100 fw-bold text-dark"
                >
                  Submit Log
                </button>
              </form>
            </div>
          </div>

          {/* READ, DELETE: Log Table */}
          <div className="col-lg-8" id="attendance-read">
            <div className="table-responsive">
              <table className="table align-middle table-hover border">
                <thead className="table-light small">
                  <tr>
                    <th>DATE</th>
                    <th>MEMBER ID</th>
                    <th>EVENT</th>
                    <th>STATUS</th>
                    <th className="text-end">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="small text-muted">Oct 14</td>
                    <td className="small font-monospace fw-bold">
                      FA24-BCS-110
                    </td>
                    <td className="small">Weekly Meeting</td>
                    <td>
                      <span className="badge bg-success">Present</span>
                    </td>
                    <td className="text-end">
                      <a
                        className="btn btn-sm btn-outline-secondary py-0 px-2 me-1"
                        href="#attendance-update"
                        title="Update"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                      <a
                        className="btn btn-sm btn-outline-danger py-0 px-2"
                        href="#attendance-delete"
                        title="Delete"
                      >
                        <i className="bi bi-x-lg"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="small text-muted">Oct 14</td>
                    <td className="small font-monospace fw-bold">
                      FA25-BSE-042
                    </td>
                    <td className="small">Weekly Meeting</td>
                    <td>
                      <span className="badge bg-danger">Absent</span>
                    </td>
                    <td className="text-end">
                      <a
                        className="btn btn-sm btn-outline-secondary py-0 px-2 me-1"
                        href="#attendance-update"
                        title="Update"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                      <a
                        className="btn btn-sm btn-outline-danger py-0 px-2"
                        href="#attendance-delete"
                        title="Delete"
                      >
                        <i className="bi bi-x-lg"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="bg-light p-3 rounded border mt-4"
              id="attendance-update"
            >
              <h6 className="fw-bold mb-3 text-secondary">
                Update Attendance Log
              </h6>
              <form>
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  defaultValue="FA24-BCS-110"
                />
                <select className="form-select form-select-sm mb-2">
                  <option>Event: Weekly Meeting (Oct 14)</option>
                  <option>Event: Tech Workshop (Oct 10)</option>
                </select>
                <select className="form-select form-select-sm mb-3 border-warning">
                  <option>Status: Present</option>
                  <option>Status: Absent (Unexcused)</option>
                </select>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm w-100 fw-bold"
                >
                  Save Updated Log
                </button>
              </form>
            </div>

            <div
              className="bg-light p-3 rounded border mt-3"
              id="attendance-delete"
            >
              <h6 className="fw-bold mb-2 text-danger">
                Delete Attendance Log
              </h6>
              <p className="small text-muted mb-3">
                You are about to remove log of{" "}
                <span className="fw-semibold">FA25-BSE-042</span> for{" "}
                <span className="fw-semibold">Weekly Meeting</span>.
              </p>
              <button
                type="button"
                className="btn btn-danger btn-sm w-100 fw-bold"
              >
                Confirm Delete Log
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendanceTracker;
