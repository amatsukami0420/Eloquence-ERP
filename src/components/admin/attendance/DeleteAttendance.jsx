import { useState } from "react";
import { Link } from "react-router-dom";

function DeleteAttendance() {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    console.log("Purging Attendance Record from Eloquence ERP...");
    setDeleted(true);
  };

  if (deleted) {
      return (
          <div className="container py-5 text-center">
              <h4 className="fw-bold text-success mb-3"><i className="bi bi-check-circle-fill me-2"></i>Record deleted successfully.</h4>
              <Link to="/admin/attendance" className="btn btn-primary fw-bold">Return to Dashboard</Link>
          </div>
      );
  }

  return (
    <>
      <div className="container py-5 text-center">
        <div
          className="card border-0 shadow-sm p-5 mx-auto"
          style={{ maxWidth: "450px" }}
        >
          <div className="text-danger mb-3">
            <i className="bi bi-trash3-fill display-5"></i>
          </div>
          <h4 className="fw-bold">Delete Record?</h4>
          <p className="text-muted small">
            This will permanently remove the event and all nested logs from the
            ERP.
          </p>

          <button
            className="btn btn-danger w-100 fw-bold mb-2"
            onClick={handleDelete}
          >
            Delete Permanently
          </button>

          <Link
            to="/admin/attendance"
            className="btn btn-light w-100 border text-decoration-none"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
}

export default DeleteAttendance;
