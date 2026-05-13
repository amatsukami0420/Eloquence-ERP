import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const STUDENTS = [
  { id: "FA24-BCS-110", name: "Muhammad Waleed" },
  { id: "FA24-BCS-115", name: "Ahsan Khalid" },
  { id: "FA24-BCS-118", name: "Ali Raza" },
  { id: "FA24-BCS-121", name: "Hamza Tariq" },
  { id: "FA24-BCS-125", name: "Usman Sheikh" },
];

function EditAttendance() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      "FA24-BCS-110": true,
      "FA24-BCS-115": false,
      "FA24-BCS-118": true,
      "FA24-BCS-121": true,
      "FA24-BCS-125": false,
    },
  });
  const navigate = useNavigate();
  
  function submit(data) {
    console.log("Updated Data:", data);
    navigate("/admin/attendance");
  }

  return (
    <>
      <div className="container py-4">
        <form
          onSubmit={handleSubmit(submit)}
          className="border p-4 rounded shadow-sm"
        >
          <h5 className="mb-4">Edit Attendance</h5>

          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Reg ID</th>
                <th>Name</th>
                <th className="text-center">Present</th>
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      id={`present-${s.id}`}
                      className="form-check-input"
                      {...register(s.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button type="submit" className="btn btn-primary w-100">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default EditAttendance;
