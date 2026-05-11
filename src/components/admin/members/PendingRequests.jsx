import { useState } from "react";
import { Link } from "react-router-dom";

function PendingRequests() {
  const applicants = [
    {
      id: "FA24-BSE-089",
      name: "Ali Khan",
      email: "ali@cuonline.edu.pk",
      tid: "JZ-99827364",
      wallet: "bi-wallet2 text-primary",
    },
    {
      id: "SP24-BCS-012",
      name: "Sara Ahmed",
      email: "sara@cuonline.edu.pk",
      tid: "EP-44512099",
      wallet: "bi-wallet2 text-success",
    },
    {
      id: "FA24-BCS-110",
      name: "Muhammad Waleed",
      email: "waleed@cuonline.edu.pk",
      tid: "TR-88217364",
      wallet: "bi-wallet2 text-warning",
    },
    {
      id: "FA24-BSE-144",
      name: "Hamza Tariq",
      email: "hamza@cuonline.edu.pk",
      tid: "ZX-67289123",
      wallet: "bi-wallet2 text-danger",
    },
    {
      id: "SP24-BCS-031",
      name: "Ahsan Khalid",
      email: "ahsan@cuonline.edu.pk",
      tid: "LM-56372811",
      wallet: "bi-wallet2 text-info",
    },
    {
      id: "FA24-BBA-056",
      name: "Hira Noor",
      email: "hira@cuonline.edu.pk",
      tid: "NB-99127355",
      wallet: "bi-wallet2 text-success",
    },
    {
      id: "SP24-BSE-067",
      name: "Usman Sheikh",
      email: "usman@cuonline.edu.pk",
      tid: "QP-88219974",
      wallet: "bi-wallet2 text-primary",
    },
    {
      id: "FA24-BCS-099",
      name: "Ali Raza",
      email: "aliraza@cuonline.edu.pk",
      tid: "VC-77126482",
      wallet: "bi-wallet2 text-secondary",
    },
    {
      id: "SP24-BIT-041",
      name: "Fatima Zahra",
      email: "fatima@cuonline.edu.pk",
      tid: "RT-11239871",
      wallet: "bi-wallet2 text-warning",
    },
    {
      id: "FA24-BSE-077",
      name: "Zain Malik",
      email: "zain@cuonline.edu.pk",
      tid: "YU-44881234",
      wallet: "bi-wallet2 text-danger",
    },
    {
      id: "SP24-BCS-053",
      name: "Muneeb Ashraf",
      email: "muneeb@cuonline.edu.pk",
      tid: "IK-78342190",
      wallet: "bi-wallet2 text-info",
    },
    {
      id: "FA24-BBA-102",
      name: "Areeba Khan",
      email: "areeba@cuonline.edu.pk",
      tid: "PL-55432188",
      wallet: "bi-wallet2 text-success",
    },
  ];

  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <Link to="/admin/members" className="btn btn-outline-secondary btn-sm fw-bold">
                <i className="bi bi-arrow-left me-1"></i> Back to Directory
            </Link>
        </div>
        <div className="card border-0 shadow-sm border-start border-warning border-4 mb-5">
          <div className="card-header bg-white border-0 pt-4 pb-0">
            <h5 className="fw-bold text-dark mb-0">
              <i className="bi bi-hourglass-split text-warning me-2"></i>Pending
              Membership Requests
            </h5>
            <p className="text-muted small mt-1">
              Verify payment TIDs and Student IDs before approving access.
            </p>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle table-hover border">
                <thead className="table-light small text-muted text-uppercase">
                  <tr>
                    <th>Applicant</th>
                    <th>Reg Number</th>
                    <th>Payment TID</th>
                    <th className="text-end">Verification</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((app) => (
                    <tr key={app.id}>
                      <td>
                        <span className="fw-bold d-block">{app.name}</span>
                        <span className="small text-muted">{app.email}</span>
                      </td>
                      <td className="font-monospace small">{app.id}</td>
                      <td>
                        <span className="badge bg-light text-dark border font-monospace">
                          <i className={`${app.wallet} me-1`}></i> {app.tid}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          className="btn btn-sm btn-success me-1 fw-bold"
                          onClick={() => alert(`Approved ${app.id}`)}
                        >
                          <i className="bi bi-check-lg"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-danger fw-bold"
                          onClick={() => alert(`Rejected ${app.id}`)}
                        >
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingRequests;
