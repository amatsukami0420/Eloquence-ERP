import AdminHero from "../../components/admin/AdminHero";
import AdminSystemStatus from "../../components/admin/AdminSystemStatus";

function AdminLandingPage() {
  return (
    <>
      <AdminHero />
      <div className="row g-4 text-center mt-2">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <i className="bi bi-people-fill text-primary display-4 mb-3"></i>
            <h5 className="fw-bold">Member Management</h5>
            <p className="text-muted small">Add, remove, and manage members efficiently.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <i className="bi bi-calendar-event text-warning display-4 mb-3"></i>
            <h5 className="fw-bold">Event Tracking</h5>
            <p className="text-muted small">Update and monitor attendance easily.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4 h-100">
            <i className="bi bi-cpu text-info display-4 mb-3"></i>
            <h5 className="fw-bold">AI Analytics</h5>
            <p className="text-muted small">Get data-driven insights on performance.</p>
          </div>
        </div>
      </div>
      <AdminSystemStatus />
    </>
  );
}

export default AdminLandingPage;
