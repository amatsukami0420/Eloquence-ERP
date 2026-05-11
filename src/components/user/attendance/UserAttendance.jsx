import { useState } from "react";

function UserAttendance() {
  const [logs] = useState([
    { id: 101, session: "Orientation 2026", status: "Present", points: 10 },
    { id: 102, session: "Weekly Standup", status: "Absent", points: 0 },
    { id: 103, session: "Tech Sync", status: "Present", points: 10 },
  ]);

  return (
    <>
      <section className="my-5">
        <h3 className="fw-bold text-uppercase border-bottom pb-2">
          Presence Logs
        </h3>
        <div className="table-responsive mt-3 shadow-sm rounded">
          <table className="table table-bordered table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>Session ID</th>
                <th>Event Name</th>
                <th>Status</th>
                <th>Heuristic Points</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.session}</td>
                  <td>
                    <span
                      className={
                        log.status === "Present"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {log.status}
                    </span>
                  </td>
                  <td>{log.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default UserAttendance;
