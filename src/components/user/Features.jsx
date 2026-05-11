import { useState } from "react";

function Features() {
  const [features] = useState([
    {
      id: 1,
      title: "Centralized Communication",
      description:
        "Stay updated with real-time announcements securely pushed to all members.",
    },
    {
      id: 2,
      title: "Automated Tracking",
      description:
        "Efficient attendance and participation logging driven by heuristic weights.",
    },
    {
      id: 3,
      title: "Contribution AI",
      description:
        "Advanced contribution leaderboards evaluating member interactions and performance.",
    },
  ]);

  return (
    <section id="features" className="container my-5 py-4">
      <h2 className="text-center mb-5 text-uppercase fw-bold border-bottom pb-3">
        Core Capabilities
      </h2>
      <div className="row g-4">
        {features.map((feature) => (
          <div key={feature.id} className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h4 className="card-title fw-semibold">{feature.title}</h4>
                <p className="card-text text-muted mt-3">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
