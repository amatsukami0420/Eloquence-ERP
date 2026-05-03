function ContributionAnalysis() {
  return (
    <>
      <div className="card border-0 shadow-sm p-4 border-start border-info border-4">
        <h4 className="fw-bold text-info mb-4">
          <i className="bi bi-cpu-fill me-2"></i>AI Contribution & Retention
          Engine
        </h4>
        <p className="text-muted small mb-4">
          The AI evaluates members based on attendance, task completion, and
          engagement metrics to recommend retention or termination.
        </p>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light small text-muted">
              <tr>
                <th>MEMBER</th>
                <th>CONTRIBUTION SCORE</th>
                <th>AI ANALYSIS</th>
                <th className="text-end">RECOMMENDATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-semibold">Muhammad Waleed (FA24)</td>
                <td className="w-25">
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <small className="text-success fw-bold">95 / 100</small>
                </td>
                <td className="small text-muted">
                  High engagement. 100% attendance. Completed all assigned
                  executive tasks early.
                </td>
                <td className="text-end">
                  <span className="badge bg-success px-3 py-2">
                    RETAIN / PROMOTE
                  </span>
                </td>
              </tr>
              <tr>
                <td className="fw-semibold">Ali Khan (FA25)</td>
                <td className="w-25">
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <small className="text-danger fw-bold">25 / 100</small>
                </td>
                <td className="small text-muted">
                  Missed last 3 events. Zero tasks completed this month.
                  Negative engagement trend.
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-danger fw-bold shadow-sm">
                    TERMINATE MEMBER
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ContributionAnalysis;
