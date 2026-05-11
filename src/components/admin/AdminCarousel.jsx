function AdminCarousel() {
  const slides = [
    {
      image: "/lecturehall.jpg",
      alt: "Lecture Hall",
      title: "Global Event Operations",
      description:
        "Orchestrate large-scale operations with integrated tracking, ensuring every KPI is captured in real-time.",
    },
    {
      image: "/neuralnetwork.jpg",
      alt: "Neural Network",
      title: "Advanced Machine Learning",
      description:
        "Our AI engine automatically scores members, predicts churn risk, and suggests promotions based on historical metrics.",
    },
    {
      image: "/performancemetrics.jpg",
      alt: "Performance Metrics",
      title: "Comprehensive ERP Dashboard",
      description:
        "Make data-backed personnel decisions with robust reporting tools tailored for operational leadership.",
    },
  ];

  return (
    <div
      id="adminCarousel"
      className="carousel slide shadow-lg rounded mt-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#adminCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner rounded" style={{ height: "450px" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.image}
              className="d-block w-100 h-100"
              style={{ objectFit: "cover" }}
              alt={slide.alt}
            />

            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
              <h4 className="fw-bold text-uppercase tracking-wider">
                {slide.title}
              </h4>

              <p className="mb-0">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#adminCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#adminCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>

        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default AdminCarousel;
