import { Link } from "react-router-dom";

function AttendanceHistory() {
  const history = [
    {
      eventId: "EVT-001",
      name: "Software Architecture Seminar",
      date: "May 10, 2026",
      logs: [
        { id: 1, reg: "FA24-BCS-110", name: "M. Waleed", status: "Present" },
        { id: 2, reg: "FA24-BCS-115", name: "Ahsan Khalid", status: "Absent" },
        { id: 3, reg: "FA24-BCS-118", name: "Ali Raza", status: "Present" },
        { id: 4, reg: "FA24-BCS-121", name: "Hamza Tariq", status: "Present" },
        { id: 5, reg: "FA24-BCS-125", name: "Usman Sheikh", status: "Absent" },
      ],
    },
    {
      eventId: "EVT-002",
      name: "AI & Machine Learning Workshop",
      date: "May 15, 2026",
      logs: [
        { id: 1, reg: "FA24-BCS-110", name: "M. Waleed", status: "Present" },
        { id: 2, reg: "FA24-BCS-115", name: "Ahsan Khalid", status: "Present" },
        { id: 3, reg: "FA24-BCS-118", name: "Ali Raza", status: "Absent" },
        { id: 4, reg: "FA24-BCS-121", name: "Hamza Tariq", status: "Present" },
        { id: 5, reg: "FA24-BCS-125", name: "Usman Sheikh", status: "Present" },
      ],
    },
    {
      eventId: "EVT-003",
      name: "Cybersecurity Awareness Session",
      date: "May 20, 2026",
      logs: [
        { id: 1, reg: "FA24-BCS-110", name: "M. Waleed", status: "Absent" },
        { id: 2, reg: "FA24-BCS-115", name: "Ahsan Khalid", status: "Present" },
        { id: 3, reg: "FA24-BCS-118", name: "Ali Raza", status: "Present" },
        { id: 4, reg: "FA24-BCS-121", name: "Hamza Tariq", status: "Absent" },
        { id: 5, reg: "FA24-BCS-125", name: "Usman Sheikh", status: "Present" },
      ],
    },
    {
      eventId: "EVT-004",
      name: "Cloud Computing Bootcamp",
      date: "May 25, 2026",
      logs: [
        { id: 1, reg: "FA24-BCS-110", name: "M. Waleed", status: "Present" },
        { id: 2, reg: "FA24-BCS-115", name: "Ahsan Khalid", status: "Present" },
        { id: 3, reg: "FA24-BCS-118", name: "Ali Raza", status: "Present" },
        { id: 4, reg: "FA24-BCS-121", name: "Hamza Tariq", status: "Present" },
        { id: 5, reg: "FA24-BCS-125", name: "Usman Sheikh", status: "Absent" },
      ],
    },
  ];

  return (
    <>
      
      <h6 className="fw-bold text-muted mb-3 small text-uppercase">
        Archived Records
      </h6>
      {history.map((session) => (
        <div className="card border-0 shadow-sm mb-4" key={session.eventId}>
          <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
            <div>
              <h6 className="fw-bold mb-0 text-primary">{session.name}</h6>
              <small className="text-muted">{session.date}</small>
            </div>
            <Link
              to="/admin/attendance/delete"
              className="btn btn-sm btn-outline-danger border-0"
            >
              <i className="bi bi-trash"></i>
            </Link>
          </div>
          <div className="card-body p-0">
            <table className="table table-sm table-hover mb-0">
              <thead className="table-light">
                <tr style={{ fontSize: "11px" }}>
                  <th className="ps-3">REGISTRATION ID</th>
                  <th>MEMBER</th>
                  <th>STATUS</th>
                  <th className="text-end pe-3">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {session.logs.map((member) => (
                  <tr key={member.id} className="align-middle">
                    <td className="ps-3 font-monospace small">{member.reg}</td>
                    <td className="small">{member.name}</td>
                    <td>
                      <span
                        className={`badge ${member.status === "Present" ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}
                        style={{ fontSize: "10px" }}
                      >
                        {member.status}
                      </span>
                    </td>
                    <td className="text-end pe-3">
                      <Link
                        to="/admin/attendance/edit"
                        className="btn btn-sm btn-light border py-0 px-2"
                      >
                        <i className="bi bi-pencil small"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      
    </>
  );
}

export default AttendanceHistory;
