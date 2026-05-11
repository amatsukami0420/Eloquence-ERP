import { useState } from "react";
import { Link } from "react-router-dom";

function CreateAttendance() {
  const [step, setStep] = useState(0);

  const [event, setEvent] = useState({
    id: "EVT-101",
    title: "",
    date: "2026-05-11",
    type: "Seminar",
  });

  const [attendance, setAttendance] = useState({});
  const [saved, setSaved] = useState(false);

  const students = [
    { id: "FA24-BCS-110", name: "Muhammad Waleed" },
    { id: "FA24-BCS-115", name: "Ahsan Khalid" },
    { id: "FA24-BCS-144", name: "Ali Murtaza" },
    { id: "FA24-BCS-135", name: "Waleed Fiaz" },
  ];

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const toggleAttendance = (regId) => {
    setAttendance((prev) => ({
      ...prev,
      [regId]: !prev[regId],
    }));
  };

  const handleFinalSubmit = () => {
    console.log("ERP Record Created:", { ...event, attendance });
    setSaved(true);
  };

  if (saved) {
      return (
          <div className="container py-5 text-center">
              <h4 className="fw-bold text-success mb-3"><i className="bi bi-check-circle-fill me-2"></i>Record Saved Successfully</h4>
              <Link to="/admin/attendance" className="btn btn-primary fw-bold">Return to Dashboard</Link>
          </div>
      );
  }

  return (
    <>
      <div className="container py-5">
        <div
          className="card border-0 shadow-sm mx-auto"
          style={{ maxWidth: "700px" }}
        >
          {step === 0 && (
            <div className="p-4">
              <h5 className="fw-bold text-warning mb-4">
                Step 1: Event Context
              </h5>
              <div className="mb-3">
                <label className="small fw-bold">Event ID (Auto)</label>
                <input
                  type="text"
                  className="form-control bg-light font-monospace"
                  value={event.id}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="small fw-bold">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={event.title}
                  onChange={handleEventChange}
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <label className="small fw-bold">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={event.date}
                    onChange={handleEventChange}
                  />
                </div>
                <div className="col-6">
                  <label className="small fw-bold">Type</label>
                  <select
                    name="type"
                    className="form-select"
                    value={event.type}
                    onChange={handleEventChange}
                  >
                    <option value="Seminar">Seminar</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Workshop">Workshop</option>
                  </select>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button
                    className="btn btn-warning fw-bold"
                    onClick={() => event.title && setStep(1)}
                >
                    Proceed to Marking
                </button>
                <Link to="/admin/attendance" className="btn btn-link text-muted small text-decoration-none">
                    Cancel
                </Link>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="p-4">
              <h5 className="fw-bold text-success mb-4">
                Step 2: Mark Students
              </h5>
              <table className="table table-hover align-middle border mb-4">
                <thead className="table-light small">
                  <tr>
                    <th className="ps-3">REGISTRATION ID</th>
                    <th>STUDENT NAME</th>
                    <th className="text-center">PRESENT</th>
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
                          className="form-check-input"
                          checked={attendance[student.id] || false}
                          onChange={() => toggleAttendance(student.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success fw-bold"
                  onClick={handleFinalSubmit}
                >
                  Submit Record
                </button>
                <button
                  className="btn btn-link text-muted small text-decoration-none"
                  onClick={() => setStep(0)}
                >
                  Back to Details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateAttendance;
