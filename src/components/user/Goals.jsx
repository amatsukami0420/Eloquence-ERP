function Goals() {
  const goals = [
    {
      id: 1,
      achievement: "Empowering Students",
      details:
        "Providing resources to excel in co-curricular initiatives and structural paradigms.",
    },
    {
      id: 2,
      achievement: "Community Growth",
      details:
        "A holistic environment fostering collaboration, transparency, and innovation.",
    },
  ];

  return (
    <>
      <section id="goals" className="bg-light py-5">
        <div className="container my-4">
          <h2 className="text-center mb-5 text-uppercase fw-bold border-bottom pb-3">
            Our Structural Paradigms
          </h2>
          <div className="row g-4 justify-content-center">
            {goals.map((goal) => (
              <div key={goal.id} className="col-md-5">
                <div className="p-4 border rounded bg-white shadow-sm h-100">
                  <h5 className="fw-bold text-primary">{goal.achievement}</h5>
                  <p className="text-muted mb-0">{goal.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Goals;
