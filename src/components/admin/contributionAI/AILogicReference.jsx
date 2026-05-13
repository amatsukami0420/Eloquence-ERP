import { Link } from "react-router-dom";

function AILogicReference() {
  const weights = [
    { label: "Attendance", weight: 50, color: "bg-primary" },
    { label: "Task Execution", weight: 30, color: "bg-info" },
    { label: "Social Engagement", weight: 20, color: "bg-warning" },
  ];

  return (
    <>
      <div className="container py-5 text-center">
        <div
          className="card mx-auto border-0 shadow-sm p-4 bg-dark text-white h-100"
          style={{ maxWidth: "450px" }}
        >
          <h6 className="fw-bold text-info mb-3 small text-uppercase">
            Heuristic Weights
          </h6>
          <p className="small text-muted mb-4" style={{ fontSize: "12px" }}>
            The Contribution Score is a weighted average calculated after every
            system log event.
          </p>
          {weights.map((w, i) => (
            <div className="mb-4" key={i}>
              <div className="d-flex justify-content-between small mb-1">
                <span>{w.label}</span>
                <span className="fw-bold">{w.weight}%</span>
              </div>
              <div className="progress bg-secondary" style={{ height: "3px" }}>
                <div
                  className={`progress-bar ${w.color}`}
                  style={{ width: `${w.weight}%` }}
                ></div>
              </div>
            </div>
          ))}
          <div className="mt-auto pt-3 border-top border-secondary small italic text-info mb-4">
            <i className="bi bi-shield-check me-1"></i> Eloquence AI v1.0.4
          </div>
          <Link
            to="/admin/contributions"
            className="btn btn-outline-info w-100"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}

export default AILogicReference;
