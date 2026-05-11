import { Link } from "react-router-dom";

function AnalysisSummary() {
  const stats = [
    {
      label: "Avg. Engagement",
      val: "78%",
      icon: "bi-graph-up-arrow",
      color: "text-success",
    },
    {
      label: "Members Flagged",
      val: "03",
      icon: "bi-flag-fill",
      color: "text-danger",
    },
    {
      label: "Top Contributors",
      val: "12",
      icon: "bi-star-fill",
      color: "text-warning",
    },
  ];

  return (
      <div className="container py-5">
    <div className="row g-3 mb-4">
      {stats.map((s, i) => (
        <div className="col-md-4" key={i}>
          <div className="card border-0 shadow-sm p-3">
            <div className="d-flex align-items-center">
              <div className={`p-3 rounded-circle bg-light ${s.color} me-3`}>
                <i className={`bi ${s.icon} fs-4`}></i>
              </div>
              <div>
                <div className="small text-muted fw-bold text-uppercase">
                  {s.label}
                </div>
                <h4 className="fw-bold mb-0">{s.val}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-5">
        <Link to="/admin/contributions" className="btn btn-dark px-4">Back to Dashboard</Link>
    </div>
    </div>
  );
}

export default AnalysisSummary;
