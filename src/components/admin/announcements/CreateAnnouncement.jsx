import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CreateAnnouncement() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function submit(data) {
    console.log("Announcement Data:", data);
    navigate("/admin/announcements");
  }
  return (
    <>
      <div className="card bg-light border-0 p-3 shadow-sm">
        <h6 className="fw-bold mb-3 text-success">Create Broadcast</h6>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            id="title"
            className="form-control form-control-sm mb-2"
            placeholder="Post Title"
            {...register("title")}
          />
          <textarea
            id="content"
            className="form-control form-control-sm mb-2"
            rows="3"
            placeholder="Message content..."
            {...register("content")}
          ></textarea>
          <select
            id="type"
            className="form-select form-select-sm mb-3"
            {...register("type")}
          >
            <option value="General">General Announcement</option>
            <option value="Logistics">Event Logistics</option>
          </select>
          <button
            type="submit"
            className="btn btn-success btn-sm w-100 fw-bold"
          >
            Publish Post
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateAnnouncement;
