function AdminSystemStatus() {
  const systems = [
    {
      icon: "bi bi-hdd-network",
      iconColor: "text-primary",
      title: "Database",
      status: "Operational",
      statusClass: "bg-success-subtle text-success border border-success",
    },
    {
      icon: "bi bi-cpu",
      iconColor: "text-info",
      title: "AI Heuristics",
      status: "Operational",
      statusClass: "bg-success-subtle text-success border border-success",
    },
    {
      icon: "bi bi-router",
      iconColor: "text-warning",
      title: "Gateway",
      status: "Operational",
      statusClass: "bg-success-subtle text-success border border-success",
    },
    {
      icon: "bi bi-shield-lock",
      iconColor: "text-danger",
      title: "Security",
      status: "Protected",
      statusClass: "bg-success-subtle text-success border border-success",
    },
  ];

  return (
    <>
      <div className="card border-0 shadow-sm mt-5">
        <div className="card-header bg-dark text-white py-3">
          <h6 className="fw-bold mb-0 text-uppercase tracking-wider">
            <i className="bi bi-shield-check me-2 text-success"></i>
            System Architecture Status
          </h6>
        </div>

        <div className="card-body p-4">
          <div className="row g-4">
            {systems.map((system, index) => (
              <div className="col-md-3" key={index}>
                <div className="border rounded p-3 text-center h-100 bg-light">
                  <i
                    className={`${system.icon} display-5 ${system.iconColor} mb-2`}
                  ></i>

                  <h6 className="fw-bold">{system.title}</h6>

                  <span className={`badge ${system.statusClass}`}>
                    {system.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSystemStatus;
