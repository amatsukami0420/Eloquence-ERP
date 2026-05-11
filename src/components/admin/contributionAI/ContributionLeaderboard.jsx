import { Link } from "react-router-dom";

function ContributionLeaderboard() {
  const data = [
    {
      id: "FA24-110",
      name: "M. Waleed",
      score: 95,
      tag: "Retain",
      trend: "Stable",
    },
    {
      id: "FA25-042",
      name: "Ali Khan",
      score: 25,
      tag: "Terminate",
      trend: "Declining",
    },
    {
      id: "SP24-115",
      name: "Ahsan Khalid",
      score: 88,
      tag: "Retain",
      trend: "Improving",
    },
    {
      id: "FA24-144",
      name: "Ali Murtaza",
      score: 74,
      tag: "Review",
      trend: "Stable",
    },
    {
      id: "SP24-031",
      name: "Hamza Tariq",
      score: 42,
      tag: "Probation",
      trend: "Declining",
    },
    {
      id: "FA24-121",
      name: "Usman Sheikh",
      score: 91,
      tag: "Retain",
      trend: "Improving",
    },
    {
      id: "SP24-053",
      name: "Muneeb Ashraf",
      score: 63,
      tag: "Review",
      trend: "Stable",
    },
    {
      id: "FA24-099",
      name: "Fatima Zahra",
      score: 37,
      tag: "Probation",
      trend: "Declining",
    },
    {
      id: "SP24-067",
      name: "Zain Malik",
      score: 81,
      tag: "Retain",
      trend: "Stable",
    },
    {
      id: "FA24-102",
      name: "Areeba Khan",
      score: 54,
      tag: "Review",
      trend: "Improving",
    },
    {
      id: "SP24-056",
      name: "Hira Noor",
      score: 19,
      tag: "Terminate",
      trend: "Declining",
    },
    {
      id: "FA24-135",
      name: "Waleed Fiaz",
      score: 77,
      tag: "Retain",
      trend: "Improving",
    },
  ];
  return (
      <div className="container py-5">
    <div className="card mx-auto border-0 shadow-sm p-4" style={{ maxWidth: "900px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
          <h6 className="fw-bold text-dark mb-0 text-uppercase small">
            Member Ranking & AI Advice
          </h6>
          <Link to="/admin/contributions" className="btn btn-sm btn-outline-secondary">Back to Dashboard</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light small">
            <tr>
              <th>Member</th>
              <th>Score</th>
              <th>AI Recommendation</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m) => (
              <tr key={m.id}>
                <td>
                  <div className="fw-bold small">{m.name}</div>
                  <div
                    className="text-muted font-monospace"
                    style={{ fontSize: "11px" }}
                  >
                    {m.id}
                  </div>
                </td>
                <td>
                  <div
                    className="progress"
                    style={{ height: "6px", width: "100px" }}
                  >
                    <div
                      className={`progress-bar ${m.score < 30 ? "bg-danger" : "bg-success"}`}
                      style={{ width: `${m.score}%` }}
                    ></div>
                  </div>
                  <small className="fw-bold">{m.score}/100</small>
                </td>
                <td className="small italic text-muted">
                  {m.score < 30
                    ? "Critical churn risk. Recommend immediate revocation."
                    : "High heuristic value. Potential for leadership promotion."}
                </td>
                <td className="text-end">
                  {m.score < 30 ? (
                    <Link
                      to="/admin/members/delete"
                      className="btn btn-sm btn-danger fw-bold shadow-sm"
                    >
                      Terminate
                    </Link>
                  ) : (
                    <span className="badge bg-success-subtle text-success border border-success">
                      Top Tier
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ContributionLeaderboard;
