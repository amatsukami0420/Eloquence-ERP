import { useState } from "react";

function UserCarousel() {
  return (
    <div id="userCarousel" className="carousel slide shadow rounded" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#userCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#userCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#userCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner rounded" style={{ height: "400px" }}>
        <div className="carousel-item active h-100">
          <img src="/seminar.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Seminar" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Engaging Seminars</h5>
            <p>Attend our world-class seminars to boost your skills.</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img src="/groupwork.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Group Work" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Collaborative Projects</h5>
            <p>Team up with peers and conquer ambitious goals.</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img src="/campus1.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover" }} alt="Campus Life" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Vibrant Campus Life</h5>
            <p>Experience the energy of Eloquence.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#userCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#userCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default UserCarousel;
