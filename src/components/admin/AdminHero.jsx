import AdminCarousel from "./AdminCarousel";

function AdminHero() {
  return (
    <div className="bg-white p-5 rounded shadow-sm text-center mb-4">
      <h2 className="fw-bold text-uppercase text-primary mb-3">Society Command Center</h2>
      <p className="text-muted lead">
        Control and monitor all aspects of your society operations from
        one centralized dashboard. Manage members, post announcements, track
        attendance, and analyze contributions with ease.
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <AdminCarousel />
        </div>
      </div>
    </div>
  );
}

export default AdminHero;
