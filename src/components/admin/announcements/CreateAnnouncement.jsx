import { useState } from "react";

function CreateAnnouncement() {
  const [data, setData] = useState({ title: "", content: "", type: "General" });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Publishing to Eloquence ERP:", data);
    alert(`Announcement "${data.title}" has been broadcasted!`);
  }

  return (
    <div className="card bg-light border-0 p-3 shadow-sm">
      <h6 className="fw-bold mb-3 text-success">Create Broadcast</h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="form-control form-control-sm mb-2"
          placeholder="Post Title"
          value={data.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          className="form-control form-control-sm mb-2"
          rows="3"
          placeholder="Message content..."
          value={data.content}
          onChange={handleChange}
        ></textarea>
        <select
          name="type"
          className="form-select form-select-sm mb-3"
          value={data.type}
          onChange={handleChange}
        >
          <option value="General">General Announcement</option>
          <option value="Logistics">Event Logistics</option>
        </select>
        <button type="submit" className="btn btn-success btn-sm w-100 fw-bold">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreateAnnouncement;
