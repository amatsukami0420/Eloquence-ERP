function HeroCarousel() {
  return (
    <>
      <div>
        <div
          id="adminHeroCarousel"
          className="carousel slide mb-5 shadow-sm rounded overflow-hidden"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#adminHeroCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#adminHeroCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#adminHeroCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div
              className="carousel-item active bg-dark text-white p-5 text-center"
              style={{ height: "300px" }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <i className="bi bi-shield-lock-fill display-4 text-success mb-3"></i>
                <h2 className="fw-bold text-uppercase">System Operational</h2>
                <p className="lead text-white-50 mb-0">
                  All Eloquence ERP modules are currently online and functioning
                  nominally.
                </p>
              </div>
            </div>

            <div
              className="carousel-item bg-primary text-white p-5 text-center"
              style={{ height: "300px" }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <i className="bi bi-calendar2-event-fill display-4 text-light mb-3"></i>
                <h2 className="fw-bold text-uppercase">Fall Tech Expo 2026</h2>
                <p className="lead text-white-50 mb-0">
                  Executive budget proposals are due this Friday. Update
                  logistics in the Announcements module.
                </p>
              </div>
            </div>

            <div
              className="carousel-item bg-info text-dark p-5 text-center"
              style={{ height: "300px" }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <i className="bi bi-cpu-fill display-4 text-dark mb-3"></i>
                <h2 className="fw-bold text-uppercase">Retention AI Updated</h2>
                <p className="lead mb-0 text-dark" style={{ opacity: 0.8 }}>
                  The predictive model has been retrained with October's
                  attendance data. Please review at-risk members.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#adminHeroCarousel"
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
            data-bs-target="#adminHeroCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroCarousel;
