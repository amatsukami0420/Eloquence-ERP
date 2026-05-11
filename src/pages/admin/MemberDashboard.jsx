import { Link } from "react-router-dom";
import MemberList from "../../components/admin/members/MemberList";

function MemberDashboard() {
  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold text-primary mb-0">
            <i className="bi bi-people-fill me-2"></i>Member Directory & Management
          </h4>
          <div className="d-flex gap-2">
            <Link to="/admin/members/pending" className="btn btn-warning shadow-sm fw-bold">
              <i className="bi bi-hourglass-split me-1"></i> Pending Requests
            </Link>
            <Link to="/admin/members/add" className="btn btn-primary shadow-sm fw-bold">
              <i className="bi bi-person-plus-fill me-1"></i> Force Add Member
            </Link>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-12">
            <MemberList />
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberDashboard;
