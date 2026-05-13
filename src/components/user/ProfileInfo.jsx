import { useState } from "react";
import { Link } from "react-router-dom";

function ProfileInfo() {
  const [profile] = useState({
    name: "Muhammad Waleed",
    rollNo: "FA24-BCS-110",
    role: "General Member",
    email: "waleed@cuonline.edu.pk",
    phone: "+92 300 1234567",
  });

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-dark text-white py-3">
              <h4 className="mb-0 fw-bold">
                <i className="bi bi-person-badge-fill me-2"></i>Profile
                Information
              </h4>
            </div>
            <div className="card-body p-4 text-center">
              <img
                src="/student1.jpg"
                alt="Student Profile"
                className="rounded-circle shadow mb-3 border border-3 border-primary"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3 className="fw-bold mb-1">{profile.name}</h3>
              <p className="text-muted font-monospace mb-3">{profile.rollNo}</p>

              <div className="row mt-4 text-start justify-content-center">
                <div className="col-md-8">
                  <ul className="list-group list-group-flush border rounded shadow-sm mb-4">
                    <li className="list-group-item">
                      <strong>Society Role:</strong> {profile.role}
                    </li>
                    <li className="list-group-item">
                      <strong>Email:</strong> {profile.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Contact:</strong> {profile.phone}
                    </li>
                  </ul>
                  <div className="d-grid">
                    <Link
                      to="/profile/update"
                      className="btn btn-primary fw-bold"
                    >
                      <i className="bi bi-pencil-square me-2"></i>Update Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
