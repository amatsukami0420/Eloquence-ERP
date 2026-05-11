import { Link } from "react-router-dom";

function ContributionAnalysisPage() {
  return (
    <>
      <main className="container py-5" style={{ minHeight: "85vh" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-info mb-0">
            <i className="bi bi-cpu-fill me-2"></i>Engagement Analysis Engine
          </h3>
          <button
            className="btn btn-sm btn-info text-white fw-bold shadow-sm"
            onClick={() => window.print()}
          >
            Generate Report
          </button>
        </div>

        <div className="row g-4 mt-5 text-center">
            <div className="col-md-4">
                <div className="card shadow-sm p-4 border-0">
                    <i className="bi bi-graph-up-arrow display-4 text-success mb-3"></i>
                    <h5 className="fw-bold text-dark">Analysis Summary</h5>
                    <p className="text-muted small">View the AI-generated high level insights.</p>
                    <Link to="/admin/contributions/summary" className="btn btn-outline-success w-100">View Summary</Link>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card shadow-sm p-4 border-0">
                    <i className="bi bi-bar-chart-steps display-4 text-warning mb-3"></i>
                    <h5 className="fw-bold text-dark">Leaderboard</h5>
                    <p className="text-muted small">See top performing and flagged members.</p>
                    <Link to="/admin/contributions/leaderboard" className="btn btn-outline-warning w-100">View Leaderboard</Link>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card shadow-sm p-4 border-0">
                    <i className="bi bi-robot display-4 text-info mb-3"></i>
                    <h5 className="fw-bold text-dark">AI Logic Reference</h5>
                    <p className="text-muted small">Review the rules engine configuration.</p>
                    <Link to="/admin/contributions/logic" className="btn btn-outline-info w-100">View Reference</Link>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}

export default ContributionAnalysisPage;
