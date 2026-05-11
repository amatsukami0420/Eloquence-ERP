import { useState } from "react";

function AdminCarousel() {
  return (
    <div id="adminCarousel" className="carousel slide shadow rounded mt-4" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#adminCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#adminCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#adminCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner rounded" style={{ height: "400px" }}>
        <div className="carousel-item active h-100">
          <img src="/lecturehall.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Lecture Hall" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Organize Events</h5>
            <p>Manage large-scale events and track attendance effectively.</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img src="/neuralnetwork.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Neural Network" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>AI Driven Insights</h5>
            <p>Use Eloquence AI to analyze member contributions.</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img src="/performancemetrics.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Performance Metrics" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Data Analytics</h5>
            <p>Make informed decisions with our powerful dashboard tools.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#adminCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#adminCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default AdminCarousel;
