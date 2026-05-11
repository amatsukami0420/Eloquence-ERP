import { useState } from "react";
import { Link } from "react-router-dom";

function DeleteMember() {
  const [reason, setReason] = useState("");

  const handlePurge = () => {
    console.log("Purge initialized for reason:", reason);
    alert("Protocol executed. Member removed from the system.");
  };

  return (
    <div
      className="container py-5 d-flex justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card border-0 shadow-lg overflow-hidden"
        style={{ maxWidth: "550px" }}
      >
        <div className="bg-danger p-4 text-white text-center">
          <h4 className="fw-bold mb-0 text-uppercase">Revocation Protocol</h4>
        </div>
        <div className="card-body p-4 text-center">
          <h5 className="fw-bold text-dark mb-3">Hamza Nayab (FA25-BSE-042)</h5>
          <textarea
            className="form-control mb-4"
            rows="3"
            placeholder="State administrative reason..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>

          <div className="d-grid gap-2">
            <Link
              to="/admin/members"
              onClick={handlePurge}
              className="btn btn-danger fw-bold py-2 shadow-sm"
            >
              Confirm & Execute Purge
            </Link>
            <Link to="/admin/members" className="btn btn-light border btn-sm">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteMember;
