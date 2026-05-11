import UserCarousel from "./UserCarousel";

function Hero() {
  return (
    <section id="hero" className="bg-dark text-white text-center py-5">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Welcome to Eloquence</h1>
        <p className="lead mb-4">
          The premier robust Society Management ERP prioritizing clean
          architecture and operational scalability.
        </p>
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <UserCarousel />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
