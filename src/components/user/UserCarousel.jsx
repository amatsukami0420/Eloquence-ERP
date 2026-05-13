function UserCarousel() {
  const slides = [
    {
      image: "/seminar2.jpg",
      alt: "Unified Platform",
      title: "Enterprise Visibility",
      description:
        "Gain real-time insights into your engagement, attendance, and society standing through our unified portal.",
    },
    {
      image: "/groupwork1.jpg",
      alt: "Collaboration",
      title: "Seamless Collaboration",
      description:
        "Bridge the gap between teams with centralized resource management, integrated calendars, and communication tools.",
    },
    {
      image: "/magnifyingGlass.jpg",
      alt: "Analytics",
      title: "Predictive Performance",
      description:
        "Leverage AI-driven heuristics that automatically track your progress and provide actionable career insights.",
    },
  ];

  return (
    <>
      <div
        id="userCarousel"
        className="carousel slide shadow-lg rounded"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#userCarousel"
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
          data-bs-target="#userCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#userCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default UserCarousel;
