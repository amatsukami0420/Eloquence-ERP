import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const STUDENTS = [
  { id: "FA24-BCS-110", name: "Muhammad Waleed" },
  { id: "FA24-BCS-115", name: "Ahsan Khalid" },
  { id: "FA24-BCS-144", name: "Ali Murtaza" },
  { id: "FA24-BCS-135", name: "Waleed Fiaz" },
];

function CreateAttendance() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function submit(data) {
    console.log("Form Data:", data);
    navigate("/admin/attendance");
  }

  return (
    <>
      <div className="container py-4">
        <div
          className="card shadow-sm p-4 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h4 className="mb-4">Create Attendance</h4>

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label className="form-label fw-bold">Event Title</label>
              <input
                type="text"
                id="title"
                className="form-control"
                {...register("title")}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                {...register("date")}
                required
              />
            </div>

            <h5 className="mb-3">Student List</h5>
            <table className="table table-sm border">
              <thead className="table-light">
                <tr>
                  <th>Reg ID</th>
                  <th>Name</th>
                  <th className="text-center">Present</th>
                </tr>
              </thead>
              <tbody>
                {STUDENTS.map((student) => (
                  <tr key={student.id}>
                    <td className="small font-monospace">{student.id}</td>
                    <td className="small">{student.name}</td>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        id={student.id}
                        className="form-check-input"
                        {...register(student.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary fw-bold">
                Submit Attendance
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAttendance;
