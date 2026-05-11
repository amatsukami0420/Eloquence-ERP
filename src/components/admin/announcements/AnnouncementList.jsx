import { Link } from "react-router-dom";

function AnnouncementList() {
  const posts = [
    {
      id: 1,
      title: "Upcoming Fall Tech Expo",
      date: "Oct 12, 2026",
      color: "text-success",
      content: "Final budget proposals due by Friday.",
    },
    {
      id: 2,
      title: "Weekly Meeting Moved",
      date: "Oct 10, 2026",
      color: "text-primary",
      content: "Moved to Room 104.",
    },
    {
      id: 3,
      title: "Hackathon Registration Open",
      date: "Oct 15, 2026",
      color: "text-warning",
      content: "Teams can register until October 20th.",
    },
    {
      id: 4,
      title: "New Internship Opportunities",
      date: "Oct 18, 2026",
      color: "text-info",
      content: "Applications are now open for winter internships.",
    },
    {
      id: 5,
      title: "Server Maintenance Notice",
      date: "Oct 20, 2026",
      color: "text-danger",
      content: "Campus servers will be offline from 1 AM to 3 AM.",
    },
    {
      id: 6,
      title: "Design Workshop Session",
      date: "Oct 22, 2026",
      color: "text-secondary",
      content: "UI/UX fundamentals workshop in Lab 3.",
    },
    {
      id: 7,
      title: "Club Recruitment Drive",
      date: "Oct 24, 2026",
      color: "text-success",
      content: "Join various student clubs at the central hall.",
    },
    {
      id: 8,
      title: "Guest Speaker Announcement",
      date: "Oct 26, 2026",
      color: "text-primary",
      content: "Cybersecurity expert speaking at Auditorium B.",
    },
    {
      id: 9,
      title: "Midterm Exam Schedule Released",
      date: "Oct 28, 2026",
      color: "text-warning",
      content: "Check the portal for updated exam timings.",
    },
    {
      id: 10,
      title: "Photography Contest",
      date: "Oct 30, 2026",
      color: "text-info",
      content: "Submit your entries before November 5th.",
    },
  ];

  return (
    <>
      <h5 className="fw-bold mb-3 text-muted small text-uppercase">
        Active Board
      </h5>
      {posts.map((post) => (
        <div className="card border-0 shadow-sm p-3 mb-3" key={post.id}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className={`fw-bold mb-0 ${post.color}`}>{post.title}</h6>
            <small className="text-muted">{post.date}</small>
          </div>
          <p className="small text-secondary mb-3">{post.content}</p>
          <div className="text-end">
            <Link
              to="/admin/announcements/edit"
              className="btn btn-sm btn-outline-secondary me-2"
            >
              Edit
            </Link>
            <Link
              to="/admin/announcements/delete"
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnnouncementList;
