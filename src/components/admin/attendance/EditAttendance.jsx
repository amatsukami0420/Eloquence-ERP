import { useState } from "react";
import { Link } from "react-router-dom";

function EditAttendance() {
  const [step, setStep] = useState(0);

  const previousEvents = [
    {
      id: "EVT-001",
      title: "Software Architecture Seminar",
      date: "May 10, 2026",
    },
    {
      id: "EVT-002",
      title: "AI & Machine Learning Workshop",
      date: "May 15, 2026",
    },
    {
      id: "EVT-003",
      title: "Cybersecurity Awareness Session",
      date: "May 20, 2026",
    },
    {
      id: "EVT-004",
      title: "Cloud Computing Bootcamp",
      date: "May 25, 2026",
    },
  ];

  const students = [
    { id: "FA24-BCS-110", name: "Muhammad Waleed" },
    { id: "FA24-BCS-115", name: "Ahsan Khalid" },
    { id: "FA24-BCS-118", name: "Ali Raza" },
    { id: "FA24-BCS-121", name: "Hamza Tariq" },
    { id: "FA24-BCS-125", name: "Usman Sheikh" },
  ];

  const [selectedEvent, setSelectedEvent] = useState(previousEvents[0]);
  const [saved, setSaved] = useState(false);

  const [attendanceMap, setAttendanceMap] = useState({
    "FA24-BCS-110": true,
    "FA24-BCS-115": false,
    "FA24-BCS-118": true,
    "FA24-BCS-121": true,
    "FA24-BCS-125": false,
  });

  const handleSelectEvent = (eventObj) => {
    setSelectedEvent(eventObj);
    setStep(1);
  };

  const toggleAttendance = (regId) => {
    setAttendanceMap((prev) => ({
      ...prev,
      [regId]: !prev[regId],
    }));
  };

  const handleSave = () => {
    console.log("Updating ERP Record:", { ...selectedEvent, attendanceMap });
    setSaved(true);
  };

  if (saved) {
      return (
          <div className="container py-5 text-center">
              <h4 className="fw-bold text-success mb-3"><i className="bi bi-check-circle-fill me-2"></i>Attendance updated for {selectedEvent.title}</h4>
              <Link to="/admin/attendance" className="btn btn-primary fw-bold">Return to Dashboard</Link>
          </div>
      );
  }

  return (
    <>
      <div className="container py-5" style={{ minHeight: "80vh" }}>
        <div
          className="card border-0 shadow-sm mx-auto"
          style={{ maxWidth: "800px" }}
        >
          {step === 0 && (
            <div className="p-4">
              <h5 className="fw-bold mb-4 text-primary text-uppercase">
                Select Event to Modify
              </h5>
              <div className="list-group list-group-flush border rounded">
                {previousEvents.map((event) => (
                  <button
                    key={event.id}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3"
                    onClick={() => handleSelectEvent(event)}
                  >
                    <div>
                      <div className="fw-bold">{event.title}</div>
                      <small className="text-muted font-monospace">
                        {event.id}
                      </small>
                    </div>
                    <span className="badge bg-light text-dark border">
                      {event.date}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link to="/admin/attendance" className="text-muted small">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="p-4">
              <div className="mb-4 d-flex justify-content-between align-items-end border-bottom pb-3">
                <div>
                  <h5 className="fw-bold text-dark mb-1">
                    {selectedEvent.title}
                  </h5>
                  <p className="text-muted small mb-0">
                    Modifying logs for {selectedEvent.date}
                  </p>
                </div>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setStep(0)}
                >
                  Change Event
                </button>
              </div>

              <div className="table-responsive mb-4">
                <table className="table table-hover align-middle border-start border-end">
                  <thead className="table-light small">
                    <tr>
                      <th className="ps-3">REGISTRATION ID</th>
                      <th>NAME</th>
                      <th className="text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="ps-3 font-monospace small">
                          {student.id}
                        </td>
                        <td className="small">{student.name}</td>
                        <td className="text-center">
                          <input
                            type="checkbox"
                            className="form-check-input shadow-none"
                            style={{
                              cursor: "pointer",
                              width: "1.2rem",
                              height: "1.2rem",
                            }}
                            checked={attendanceMap[student.id] || false}
                            onChange={() => toggleAttendance(student.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary fw-bold py-2 shadow-sm"
                  onClick={handleSave}
                >
                  Save Updated Logs
                </button>
                <Link
                  to="/admin/attendance"
                  className="btn btn-link text-muted small text-decoration-none"
                >
                  Cancel Edits
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EditAttendance;
