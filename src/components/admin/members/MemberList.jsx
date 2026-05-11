import { Link } from "react-router-dom";

function MemberList() {
  const members = [
    { id: "FA24-BCS-110", name: "Muhammad Waleed", role: "Executive" },
    { id: "FA25-BSE-042", name: "Hamza Nayab", role: "General" },
    { id: "FA24-BCS-115", name: "Ahsan Khalid", role: "Executive" },
    { id: "FA24-BSE-089", name: "Ali Khan", role: "General" },
    { id: "SP24-BCS-012", name: "Sara Ahmed", role: "General" },
    { id: "FA24-BCS-144", name: "Ali Murtaza", role: "Executive" },
    { id: "FA24-BCS-135", name: "Waleed Fiaz", role: "General" },
    { id: "SP24-BIT-041", name: "Fatima Zahra", role: "General" },
    { id: "FA24-BSE-077", name: "Zain Malik", role: "Executive" },
    { id: "SP24-BCS-053", name: "Muneeb Ashraf", role: "General" },
    { id: "FA24-BBA-102", name: "Areeba Khan", role: "General" },
    { id: "FA24-BCS-121", name: "Hamza Tariq", role: "Executive" },
    { id: "FA24-BCS-125", name: "Usman Sheikh", role: "General" },
    { id: "SP24-BSE-067", name: "Usman Sheikh", role: "General" },
    { id: "FA24-BBA-056", name: "Hira Noor", role: "Executive" },
  ];

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle table-hover border shadow-sm">
          <thead className="table-dark small">
            <tr>
              <th>REG ID</th>
              <th>NAME</th>
              <th>ROLE</th>
              <th className="text-end">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.id}>
                <td className="small font-monospace fw-bold text-primary">
                  {m.id}
                </td>
                <td className="fw-semibold">{m.name}</td>
                <td>
                  <span
                    className={`badge ${m.role === "Executive" ? "bg-primary" : "bg-secondary"}`}
                  >
                    {m.role}
                  </span>
                </td>
                <td className="text-end">
                  <Link
                    to="/admin/members/edit"
                    className="btn btn-sm btn-outline-secondary me-1 py-0 px-2"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Link
                    to="/admin/members/delete"
                    className="btn btn-sm btn-outline-danger py-0 px-2"
                  >
                    <i className="bi bi-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MemberList;
