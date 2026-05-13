import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function EditAnnouncement() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "Existing Post",
      content: "Existing content...",
    },
  });
  const navigate = useNavigate();

  function submit(data) {
    console.log("Updated Announcement:", data);
    navigate("/admin/announcements");
  }

  return (
    <>
      <div className="container py-5">
        <div
          className="card border-0 shadow-sm p-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <h5 className="fw-bold text-dark mb-4">Edit Announcement</h5>

          <form onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              id="title"
              className="form-control mb-3"
              {...register("title", { required: true })}
            />

            <textarea
              id="content"
              className="form-control mb-3"
              rows="4"
              {...register("content", { required: true })}
            ></textarea>

            <button type="submit" className="btn btn-primary w-100 mb-2">
              Save Changes
            </button>

            <Link
              to="/admin/announcements"
              className="btn btn-link w-100 text-muted small text-decoration-none"
            >
              Cancel / Return
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditAnnouncement;
