import { Link } from "react-router-dom";
import AnnouncementList from "../../components/admin/announcements/AnnouncementList";

function AnnouncementDashboard() {
  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-success mb-0 text-uppercase">
            <i className="bi bi-megaphone-fill me-2"></i>Announcement Board
          </h3>
          <Link to="/admin/announcements/create" className="btn btn-success shadow-sm fw-bold">
            <i className="bi bi-plus-lg me-1"></i> New Broadcast
          </Link>
        </div>
        <div className="row g-5">
          <div className="col-12">
            <AnnouncementList />
          </div>
        </div>
      </div>
    </>
  );
}

export default AnnouncementDashboard;
