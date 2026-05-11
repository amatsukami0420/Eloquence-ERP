import { Link } from "react-router-dom";

function DeleteAnnouncement() {
  const handleDelete = () => {
    alert("Post removed permanently.");
  };

  return (
    <>
      <div className="container py-5">
        <div
          className="alert alert-danger shadow-sm border-0 p-4 mx-auto text-center"
          style={{ maxWidth: "500px" }}
        >
          <i className="bi bi-exclamation-triangle-fill display-4 d-block mb-3"></i>
          <h5 className="fw-bold">Confirm Deletion</h5>
          <p className="small mb-4">
            This action will permanently remove the post from the member feed.
          </p>
          <Link
            to="/admin/announcements"
            onClick={handleDelete}
            className="btn btn-danger px-5 fw-bold mb-2"
          >
            Delete Permanently
          </Link>
          <Link to="/admin/announcements" className="d-block text-muted small mt-2">
            Cancel and Go Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default DeleteAnnouncement;
