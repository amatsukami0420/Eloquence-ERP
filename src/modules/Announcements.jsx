function Announcement() {
  return (
    <>
      <div className="card border-0 shadow-sm p-4">
        <h4 className="fw-bold text-success mb-4">
          <i className="bi bi-megaphone-fill me-2"></i>Event & Announcement
          Board
        </h4>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="bg-light p-3 rounded border" id="announcements-add">
              <h6 className="fw-bold mb-3">Create Broadcast</h6>
              <form>
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  placeholder="Post Title"
                />
                <textarea
                  className="form-control form-control-sm mb-2"
                  rows="3"
                  placeholder="Message content..."
                ></textarea>
                <select className="form-select form-select-sm mb-3">
                  <option>Type: General Announcement</option>
                  <option>Type: Event Logistics</option>
                </select>
                <button
                  type="button"
                  className="btn btn-success btn-sm w-100 fw-bold"
                >
                  Publish Post
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-8" id="announcements-read">
            <div className="border rounded p-3 mb-2 bg-white shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0 text-success">
                  Upcoming Fall Tech Expo
                </h6>
                <small className="text-muted">Posted: Oct 12, 2026</small>
              </div>
              <p className="small text-muted mb-2">
                All executives must submit their final budget proposals by
                Friday. Venue is confirmed.
              </p>
              <div className="text-end">
                <a
                  className="btn btn-sm btn-outline-secondary me-1 py-0"
                  href="#announcements-update"
                >
                  <i className="bi bi-pencil-square small"></i> Edit
                </a>
                <a
                  className="btn btn-sm btn-outline-danger py-0"
                  href="#announcements-delete"
                >
                  <i className="bi bi-trash small"></i> Delete
                </a>
              </div>
            </div>

            <div className="border rounded p-3 bg-white shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0 text-primary">
                  Weekly Meeting Moved
                </h6>
                <small className="text-muted">Posted: Oct 10, 2026</small>
              </div>
              <p className="small text-muted mb-2">
                This week's meeting is moved to Room 104 due to scheduling
                conflicts.
              </p>
              <div className="text-end">
                <a
                  className="btn btn-sm btn-outline-secondary me-1 py-0"
                  href="#announcements-update"
                >
                  <i className="bi bi-pencil-square small"></i> Edit
                </a>
                <a
                  className="btn btn-sm btn-outline-danger py-0"
                  href="#announcements-delete"
                >
                  <i className="bi bi-trash small"></i> Delete
                </a>
              </div>
            </div>

            <div
              className="bg-light p-3 rounded border mt-4"
              id="announcements-update"
            >
              <h6 className="fw-bold mb-3 text-secondary">
                Update Announcement
              </h6>
              <form>
                <input
                  type="text"
                  className="form-control form-control-sm mb-2"
                  defaultValue="Upcoming Fall Tech Expo"
                />
                <textarea
                  className="form-control form-control-sm mb-2"
                  rows="3"
                  defaultValue="All executives must submit their final budget proposals by Friday. Venue is confirmed."
                ></textarea>
                <select className="form-select form-select-sm mb-3">
                  <option>Type: Event Logistics</option>
                  <option>Type: General Announcement</option>
                </select>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm w-100 fw-bold"
                >
                  Save Updated Post
                </button>
              </form>
            </div>

            <div
              className="bg-light p-3 rounded border mt-3"
              id="announcements-delete"
            >
              <h6 className="fw-bold mb-2 text-danger">Delete Announcement</h6>
              <p className="small text-muted mb-3">
                You are about to remove:{" "}
                <span className="fw-semibold">Weekly Meeting Moved</span>
              </p>
              <button
                type="button"
                className="btn btn-danger btn-sm w-100 fw-bold"
              >
                Confirm Delete Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcement;
