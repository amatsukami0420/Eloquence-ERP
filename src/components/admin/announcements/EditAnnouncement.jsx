import { useState } from "react";
import { Link } from "react-router-dom";

function EditAnnouncement() {
  const [data, setData] = useState({
    title: "Existing Post",
    content: "Existing content...",
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert("Changes saved to announcement: " + data.title);
  };

  return (
    <>
      <div className="container py-5">
        <div
          className="card border-0 shadow-sm p-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <h5 className="fw-bold text-dark mb-4">Edit Announcement</h5>
          <form onSubmit={handleSave}>
            <input
              type="text"
              className="form-control mb-3"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              required
            />
            <textarea
              className="form-control mb-3"
              rows="4"
              value={data.content}
              onChange={(e) => setData({ ...data, content: e.target.value })}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-100 mb-2">Save Changes</button>
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
