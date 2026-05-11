import { useState } from "react";

function UserScore() {
  const [metrics] = useState([
    { id: 1, type: "Base Activity", score: 85, metricWeight: "High" },
    { id: 2, type: "Project Leadership", score: 92, metricWeight: "Critical" },
    { id: 3, type: "Peer Reviews", score: 78, metricWeight: "Moderate" },
  ]);

  return (
    <>
      <section className="my-5">
        <h3 className="fw-bold text-uppercase border-bottom pb-2">
          AI Contribution Analysis
        </h3>
        <div className="row mt-3 g-4">
          <div className="col-12 text-center mb-3">
            <div className="p-5 border rounded bg-white shadow-sm">
              <h4 className="text-muted text-uppercase mb-2">
                Aggregate Heuristic Rating
              </h4>
              <h1 className="display-1 fw-bold text-primary">85.0</h1>
              <p className="text-success mt-2 fw-semibold">
                Status: Revocation Protocol Inactive (Secure)
              </p>
            </div>
          </div>
          {metrics.map((metric) => (
            <div key={metric.id} className="col-md-4">
              <div className="card shadow-sm border-0 border-start border-4 border-info h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">
                    {metric.type}
                  </h5>
                  <h2 className="card-text text-primary mb-0">
                    {metric.score}
                  </h2>
                  <small className="text-muted">
                    Weight: {metric.metricWeight}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default UserScore;
