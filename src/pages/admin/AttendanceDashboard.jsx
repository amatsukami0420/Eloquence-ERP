import { Link } from "react-router-dom";
import AttendanceHistory from "../../components/admin/attendance/AttendanceHistory";

function AttendanceDashboard() {
  return (
    <>
      <div className="container py-5" style={{ minHeight: "80vh" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-dark mb-0 text-uppercase">
            <i className="bi bi-person-check-fill me-2 text-warning"></i>
            Attendance Control
          </h3>
          <Link to="/admin/attendance/create" className="btn btn-warning shadow-sm fw-bold">
            <i className="bi bi-calendar-plus-fill me-1"></i> New Session
          </Link>
        </div>
        <div className="row g-5">
          <div className="col-12">
            <AttendanceHistory />
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendanceDashboard;
