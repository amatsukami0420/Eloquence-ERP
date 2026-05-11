import { useState } from "react";

function UserAnnouncements() {
  const [announcements] = useState([
    {
      id: 1,
      title: "Next General Meeting",
      date: "2026-05-15",
      message: "All members must attend for protocol review.",
    },
    {
      id: 2,
      title: "Contribution Revocation Protocol",
      date: "2026-05-12",
      message: "Scores below threshold will be reviewed.",
    },
    {
      id: 3,
      title: "New Heuristic Weights Approved",
      date: "2026-05-10",
      message: "AI evaluation metrics updated for technical documentation.",
    },
  ]);

  return (
    <>
      <section className="my-5">
        <h3 className="fw-bold text-uppercase border-bottom pb-2">
          Broadcasts
        </h3>
        <ul className="list-group list-group-flush shadow-sm rounded mt-3">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="list-group-item p-4">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 text-primary fw-bold">
                  {announcement.title}
                </h5>
                <small className="text-muted">{announcement.date}</small>
              </div>
              <p className="mb-1 mt-2">{announcement.message}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default UserAnnouncements;
